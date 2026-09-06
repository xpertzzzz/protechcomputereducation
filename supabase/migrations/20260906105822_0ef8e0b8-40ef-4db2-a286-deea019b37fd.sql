
CREATE TYPE public.app_role AS ENUM ('admin');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  role public.app_role NOT NULL DEFAULT 'admin',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role);
$$;

CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT public.has_role(auth.uid(), 'admin');
$$;

CREATE POLICY "own roles readable" ON public.user_roles FOR SELECT TO authenticated USING (user_id = auth.uid() OR public.is_admin());
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- bootstrap: first signed-in user may claim admin when no admin exists
CREATE OR REPLACE FUNCTION public.claim_admin()
RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE uid uuid := auth.uid();
BEGIN
  IF uid IS NULL THEN RETURN false; END IF;
  IF EXISTS (SELECT 1 FROM public.user_roles WHERE role = 'admin') THEN RETURN false; END IF;
  INSERT INTO public.user_roles (user_id, role) VALUES (uid, 'admin') ON CONFLICT DO NOTHING;
  RETURN true;
END; $$;
GRANT EXECUTE ON FUNCTION public.claim_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

-- COURSES
CREATE TABLE public.courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  category text NOT NULL,
  level text NOT NULL DEFAULT 'Beginner',
  duration text,
  short_description text,
  full_description text,
  syllabus text[] NOT NULL DEFAULT '{}',
  technologies text[] NOT NULL DEFAULT '{}',
  projects text[] NOT NULL DEFAULT '{}',
  prerequisites text[] NOT NULL DEFAULT '{}',
  audience text,
  image_url text,
  featured boolean NOT NULL DEFAULT false,
  is_active boolean NOT NULL DEFAULT true,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX courses_category_idx ON public.courses (category);
CREATE INDEX courses_active_idx ON public.courses (is_active);
GRANT SELECT ON public.courses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.courses TO authenticated;
GRANT ALL ON public.courses TO service_role;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads active courses" ON public.courses FOR SELECT TO anon, authenticated USING (is_active OR public.is_admin());
CREATE POLICY "admins manage courses" ON public.courses FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER courses_updated BEFORE UPDATE ON public.courses FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- STUDENTS
CREATE TABLE public.students (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_code text UNIQUE,
  full_name text NOT NULL,
  mobile text NOT NULL,
  email text,
  date_of_birth date,
  gender text,
  address text,
  admission_date date NOT NULL DEFAULT current_date,
  notes text,
  status text NOT NULL DEFAULT 'Active',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX students_status_idx ON public.students (status);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.students TO authenticated;
GRANT ALL ON public.students TO service_role;
ALTER TABLE public.students ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage students" ON public.students FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER students_updated BEFORE UPDATE ON public.students FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- STUDENT COURSES
CREATE TABLE public.student_courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  course_id uuid NOT NULL REFERENCES public.courses(id) ON DELETE RESTRICT,
  enrolled_on date NOT NULL DEFAULT current_date,
  status text NOT NULL DEFAULT 'Active',
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (student_id, course_id)
);
CREATE INDEX student_courses_student_idx ON public.student_courses (student_id);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.student_courses TO authenticated;
GRANT ALL ON public.student_courses TO service_role;
ALTER TABLE public.student_courses ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage student_courses" ON public.student_courses FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());

-- PAYMENTS
CREATE TABLE public.payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id uuid NOT NULL REFERENCES public.students(id) ON DELETE CASCADE,
  course_id uuid REFERENCES public.courses(id) ON DELETE SET NULL,
  amount numeric(12,2) NOT NULL CHECK (amount >= 0),
  payment_date date NOT NULL DEFAULT current_date,
  method text NOT NULL DEFAULT 'Cash',
  transaction_id text,
  status text NOT NULL DEFAULT 'Paid',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX payments_student_idx ON public.payments (student_id);
CREATE INDEX payments_date_idx ON public.payments (payment_date);
GRANT SELECT, INSERT, UPDATE, DELETE ON public.payments TO authenticated;
GRANT ALL ON public.payments TO service_role;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "admins manage payments" ON public.payments FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER payments_updated BEFORE UPDATE ON public.payments FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- ENQUIRIES
CREATE TABLE public.enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 120),
  mobile text NOT NULL CHECK (char_length(mobile) BETWEEN 6 AND 20),
  email text CHECK (email IS NULL OR char_length(email) <= 200),
  date_of_birth date,
  course_id uuid REFERENCES public.courses(id) ON DELETE SET NULL,
  course_name text,
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  status text NOT NULL DEFAULT 'New',
  internal_notes text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX enquiries_status_idx ON public.enquiries (status);
CREATE INDEX enquiries_created_idx ON public.enquiries (created_at DESC);
GRANT INSERT ON public.enquiries TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.enquiries TO authenticated;
GRANT ALL ON public.enquiries TO service_role;
ALTER TABLE public.enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "anyone can submit enquiry" ON public.enquiries FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "admins read enquiries" ON public.enquiries FOR SELECT TO authenticated USING (public.is_admin());
CREATE POLICY "admins update enquiries" ON public.enquiries FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "admins delete enquiries" ON public.enquiries FOR DELETE TO authenticated USING (public.is_admin());
CREATE TRIGGER enquiries_updated BEFORE UPDATE ON public.enquiries FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- GALLERY
CREATE TABLE public.gallery_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  description text,
  category text NOT NULL DEFAULT 'Campus',
  image_url text NOT NULL,
  storage_path text,
  taken_on date,
  display_order integer NOT NULL DEFAULT 0,
  featured boolean NOT NULL DEFAULT false,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery_items TO authenticated;
GRANT ALL ON public.gallery_items TO service_role;
ALTER TABLE public.gallery_items ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads published gallery" ON public.gallery_items FOR SELECT TO anon, authenticated USING (is_published OR public.is_admin());
CREATE POLICY "admins manage gallery" ON public.gallery_items FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER gallery_updated BEFORE UPDATE ON public.gallery_items FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- TESTIMONIALS
CREATE TABLE public.testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  course_name text,
  photo_url text,
  rating integer NOT NULL DEFAULT 5 CHECK (rating BETWEEN 1 AND 5),
  content text NOT NULL,
  given_on date NOT NULL DEFAULT current_date,
  display_order integer NOT NULL DEFAULT 0,
  is_published boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.testimonials TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.testimonials TO authenticated;
GRANT ALL ON public.testimonials TO service_role;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads published testimonials" ON public.testimonials FOR SELECT TO anon, authenticated USING (is_published OR public.is_admin());
CREATE POLICY "admins manage testimonials" ON public.testimonials FOR ALL TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE TRIGGER testimonials_updated BEFORE UPDATE ON public.testimonials FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- SETTINGS (single row)
CREATE TABLE public.settings (
  id integer PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  institute_name text NOT NULL DEFAULT 'PROTECH COMPUTER EDUCATION',
  tagline text NOT NULL DEFAULT 'Bringing programming and web technologies for you',
  phone_primary text NOT NULL DEFAULT '7008414704',
  phone_secondary text DEFAULT '7787840997',
  whatsapp_number text NOT NULL DEFAULT '917008414704',
  email text,
  address_line text NOT NULL DEFAULT 'Bolgarh Bus Stand',
  city text NOT NULL DEFAULT 'Khordha',
  state text NOT NULL DEFAULT 'Odisha',
  pincode text NOT NULL DEFAULT '752065',
  facebook_url text,
  instagram_url text,
  youtube_url text,
  linkedin_url text,
  logo_url text,
  favicon_url text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.settings TO anon;
GRANT SELECT, INSERT, UPDATE ON public.settings TO authenticated;
GRANT ALL ON public.settings TO service_role;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads settings" ON public.settings FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "admins update settings" ON public.settings FOR UPDATE TO authenticated USING (public.is_admin()) WITH CHECK (public.is_admin());
CREATE POLICY "admins insert settings" ON public.settings FOR INSERT TO authenticated WITH CHECK (public.is_admin());
CREATE TRIGGER settings_updated BEFORE UPDATE ON public.settings FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.settings (id) VALUES (1);

INSERT INTO public.courses (name, slug, category, level, duration, short_description, full_description, syllabus, technologies, projects, prerequisites, audience, featured, display_order) VALUES
('HTML', 'html', 'Website Designing', 'Beginner', '4 weeks', 'The structural foundation of every page on the web.', 'Learn how web documents are structured, how browsers interpret markup, and how to write clean, semantic, accessible HTML that forms the base of every website you will build later.', ARRAY['Document structure and the DOM','Text, lists and links','Images and media embedding','Tables and data markup','Forms and input types','Semantic and accessible markup','Validation and best practices'], ARRAY['HTML5','Semantic markup','Accessibility'], ARRAY['Personal profile page','Multi-page static website'], ARRAY['Basic computer operation'], 'Absolute beginners starting their journey in web technologies.', true, 1),
('DHTML', 'dhtml', 'Website Designing', 'Beginner', '3 weeks', 'Making static pages respond, move and change.', 'DHTML combines HTML, CSS and scripting to create pages that react to the user. You will work with the document object model, events and dynamic styling.', ARRAY['DOM fundamentals','Event handling','Dynamic styling','Layers and positioning','Simple animation techniques'], ARRAY['HTML','CSS','JavaScript','DOM'], ARRAY['Interactive image slider','Dynamic navigation menu'], ARRAY['HTML basics'], 'Learners who have completed HTML and want interactivity.', false, 2),
('CSS', 'css', 'Website Designing', 'Beginner', '5 weeks', 'Layout, typography and visual craft for the web.', 'From the box model to modern layout systems, this course covers how professional interfaces are composed, spaced and made responsive across devices.', ARRAY['Selectors and specificity','Box model and spacing','Typography on the web','Flexbox layout','CSS Grid layout','Responsive design and media queries','Transitions and transforms'], ARRAY['CSS3','Flexbox','Grid','Responsive design'], ARRAY['Responsive landing page','Component style library'], ARRAY['HTML basics'], 'Anyone who wants their pages to look professional.', true, 3),
('Dreamweaver', 'dreamweaver', 'Website Designing', 'Beginner', '3 weeks', 'Visual site authoring and management.', 'Work inside a professional site-authoring environment: manage assets, templates and site structure while keeping full control of the underlying code.', ARRAY['Workspace and site setup','Design and code views','Templates and library items','Asset and link management','Publishing a site'], ARRAY['Adobe Dreamweaver','HTML','CSS'], ARRAY['Template-driven multi-page site'], ARRAY['HTML and CSS basics'], 'Designers who prefer a visual authoring workflow.', false, 4),
('PHP', 'php', 'Website Development', 'Intermediate', '8 weeks', 'Server-side programming for dynamic websites.', 'Build the server half of a web application: handle requests, process forms, work with sessions, and connect to a database to produce dynamic, data-driven pages.', ARRAY['PHP syntax and data types','Control structures and functions','Arrays and string handling','Forms, GET and POST','Sessions and cookies','File handling and uploads','Database connectivity','Building a small CRUD application'], ARRAY['PHP','Apache','MySQL'], ARRAY['Student record system','Blog with admin panel'], ARRAY['HTML','Basic programming logic'], 'Learners moving from front-end into full web development.', true, 5),
('MySQL', 'mysql', 'Website Development', 'Intermediate', '5 weeks', 'Relational databases and structured query language.', 'Design normalised schemas, write efficient queries and understand how applications store and retrieve data reliably.', ARRAY['Relational model and normalisation','Creating tables and constraints','SELECT, filtering and sorting','Joins and subqueries','Aggregate functions and grouping','Indexes and query performance','Backup and restore'], ARRAY['MySQL','SQL'], ARRAY['Library database','Reporting queries for a sales schema'], ARRAY['Basic computer operation'], 'Anyone building applications that store data.', true, 6),
('JavaScript', 'javascript', 'Website Development', 'Intermediate', '8 weeks', 'The programming language of the browser.', 'Learn the language that powers interactive web experiences, from core syntax through the DOM, asynchronous programming and modern ES features.', ARRAY['Values, types and operators','Functions and scope','Objects and arrays','DOM manipulation','Events and forms','Asynchronous JavaScript and fetch','ES6+ features and modules','Debugging in the browser'], ARRAY['JavaScript','ES6+','DOM','Fetch API'], ARRAY['Interactive quiz application','Weather dashboard consuming an API'], ARRAY['HTML','CSS'], 'Front-end learners ready to write real programs.', true, 7),
('Programming with C', 'programming-with-c', 'Programming Excellence', 'Beginner', '8 weeks', 'Where disciplined programming begins.', 'C teaches you how a computer actually works: memory, pointers, and precise control over execution. It is the foundation for every language that follows.', ARRAY['Structure of a C program','Data types and operators','Control flow and loops','Functions and recursion','Arrays and strings','Pointers and memory','Structures and unions','File input and output'], ARRAY['C','GCC'], ARRAY['Matrix operations library','Command-line record manager'], ARRAY['Basic computer operation'], 'Students building strong programming fundamentals.', true, 8),
('OOPs with C++', 'oops-with-cpp', 'Programming Excellence', 'Intermediate', '8 weeks', 'Object-oriented thinking and design.', 'Move from procedural code to designing systems with classes, inheritance and polymorphism, and understand the principles behind modern software architecture.', ARRAY['Classes and objects','Constructors and destructors','Inheritance and access control','Polymorphism and virtual functions','Operator overloading','Templates and generic programming','Exception handling','Standard Template Library'], ARRAY['C++','STL'], ARRAY['Banking system','Inventory management application'], ARRAY['Programming with C'], 'Programmers ready for object-oriented design.', true, 9),
('Core and Advanced Java', 'core-and-advanced-java', 'Programming Excellence', 'Advanced', '12 weeks', 'Enterprise-grade programming with Java.', 'A complete path from Java language fundamentals to database connectivity and web components, the way it is used in professional software teams.', ARRAY['Java language fundamentals','Classes, interfaces and packages','Collections framework','Exception handling','File and stream input/output','Multithreading','JDBC and database access','Servlets and JSP basics'], ARRAY['Java','JDBC','Servlets','JSP'], ARRAY['Student management application','Database-backed web module'], ARRAY['OOPs with C++ or equivalent'], 'Learners aiming at enterprise application development.', true, 10),
('Programming with Python', 'programming-with-python', 'Programming Excellence', 'Beginner', '8 weeks', 'A practical, readable language for everything.', 'Python is used from automation to data science. Learn the language properly, then apply it to files, data and real automation problems.', ARRAY['Syntax, types and control flow','Functions and modules','Data structures: list, dict, set, tuple','File handling','Object-oriented Python','Error handling','Working with libraries','Automation scripting'], ARRAY['Python 3','pip','Standard library'], ARRAY['File organiser automation','Data cleaning script'], ARRAY['Basic computer operation'], 'Beginners and anyone heading toward data or AI work.', true, 11),
('Programming with R', 'programming-with-r', 'Programming Excellence', 'Intermediate', '6 weeks', 'Statistical computing and data visualisation.', 'R is built for analysis. Work with vectors and data frames, run statistical procedures and produce clear, publication-quality charts.', ARRAY['R environment and syntax','Vectors, matrices and data frames','Data import and cleaning','Descriptive statistics','Statistical tests','Data visualisation','Reporting results'], ARRAY['R','ggplot2','dplyr'], ARRAY['Exploratory data analysis report','Statistical visualisation set'], ARRAY['Basic mathematics'], 'Learners focused on analytics and statistics.', false, 12),
('AI Concepts', 'ai-concepts', 'AI & Emerging Technology', 'Beginner', '4 weeks', 'How intelligent systems actually work.', 'A grounded introduction to artificial intelligence: what these systems are, how they learn, where they are used, and the limits and responsibilities involved.', ARRAY['History and scope of AI','Search and problem solving','Knowledge representation','Introduction to learning systems','Applications across industries','Ethics and responsible use'], ARRAY['Python','Jupyter'], ARRAY['Rule-based decision assistant'], ARRAY['Basic programming logic'], 'Anyone wanting a genuine understanding of AI.', true, 13),
('Machine Learning — Basic', 'machine-learning-basic', 'AI & Emerging Technology', 'Intermediate', '8 weeks', 'Teaching systems to learn from data.', 'Work through the core machine learning workflow: preparing data, training models, evaluating results and understanding why a model behaves the way it does.', ARRAY['Supervised and unsupervised learning','Data preparation and features','Regression models','Classification models','Clustering','Model evaluation metrics','Overfitting and validation'], ARRAY['Python','scikit-learn','pandas','NumPy'], ARRAY['Price prediction model','Customer segmentation study'], ARRAY['Programming with Python'], 'Programmers moving into applied machine learning.', true, 14),
('Data Science', 'data-science', 'AI & Emerging Technology', 'Intermediate', '10 weeks', 'From raw data to defensible conclusions.', 'The full analytical pipeline: collecting, cleaning, exploring and visualising data, then communicating findings that hold up to scrutiny.', ARRAY['Data collection and sources','Cleaning and transformation','Exploratory data analysis','Statistics for data science','Visualisation and storytelling','Working with databases','End-to-end case study'], ARRAY['Python','pandas','NumPy','Matplotlib','SQL'], ARRAY['End-to-end analysis project','Interactive data report'], ARRAY['Programming with Python','Basic statistics'], 'Learners targeting analyst and data roles.', true, 15),
('NLP', 'nlp', 'AI & Emerging Technology', 'Advanced', '6 weeks', 'Working with human language as data.', 'Natural Language Processing covers how text is represented, processed and modelled so software can classify, summarise and understand language.', ARRAY['Text preprocessing and tokenisation','Vectorisation and embeddings','Text classification','Sentiment analysis','Named entity recognition','Introduction to language models'], ARRAY['Python','NLTK','spaCy','scikit-learn'], ARRAY['Sentiment classifier','Document keyword extractor'], ARRAY['Machine Learning — Basic'], 'Learners specialising in language technology.', false, 16),
('AI Projects & Tools', 'ai-projects-and-tools', 'AI & Emerging Technology', 'Intermediate', '6 weeks', 'Building and shipping practical AI work.', 'A project-driven course focused on assembling real applications with current AI tooling, including prompt design, APIs and deployment considerations.', ARRAY['The modern AI tooling landscape','Working with model APIs','Prompt design and evaluation','Building an AI-assisted application','Data handling and privacy','Deployment and cost awareness'], ARRAY['Python','Model APIs','Notebooks'], ARRAY['AI-assisted study tool','Document question-answering prototype'], ARRAY['AI Concepts'], 'Learners who want a portfolio of AI projects.', true, 17);
