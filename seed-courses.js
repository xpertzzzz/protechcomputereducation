import postgres from 'postgres';

const sql = postgres('postgresql://neondb_owner:npg_YjwrSqedfP68@ep-falling-snow-ayp85gsl-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require', { ssl: 'require' });

const coursesData = [
  // Website Designing
  {
    name: 'Website Designing Basics to Advance',
    slug: 'website-designing',
    category: 'Website Designing',
    level: 'Beginner',
    shortDescription: 'Learn to design beautiful, responsive websites from scratch using HTML, CSS, and modern tools.',
    description: 'This comprehensive course takes you through the fundamentals of web design. You will learn how to structure pages with HTML, style them with CSS, and build responsive layouts that work on any device. Perfect for beginners wanting to start a career in web design.',
    duration: '3 Months',
    syllabus: '1. Introduction to Web Design\n2. HTML5 & Semantic Elements\n3. CSS3 & Styling\n4. DHTML & Animations\n5. Dreamweaver\n6. Responsive Design Principles\n7. Final Project',
    technologies: 'HTML, DHTML, CSS, Dreamweaver',
    projects: 'Personal Portfolio, Business Landing Page',
    prerequisites: 'Basic computer knowledge',
    featured: true,
    displayOrder: 1,
  },

  // Website Development
  {
    name: 'Full Stack Website Development',
    slug: 'website-development',
    category: 'Website Development',
    level: 'Intermediate',
    shortDescription: 'Master backend web development using PHP, MySQL, and JavaScript to build dynamic applications.',
    description: 'Take your web skills to the next level by learning backend development. This course focuses on building dynamic, database-driven websites using PHP and MySQL. You will also learn JavaScript to add interactivity to your frontend designs.',
    duration: '4 Months',
    syllabus: '1. JavaScript Basics & DOM Manipulation\n2. Introduction to PHP\n3. PHP Forms & Validation\n4. MySQL Database Design\n5. Connecting PHP & MySQL\n6. Authentication & Security\n7. Full Stack E-commerce Project',
    technologies: 'PHP, MySQL, JavaScript',
    projects: 'E-commerce Store, Student Management System',
    prerequisites: 'Basic HTML/CSS knowledge',
    featured: true,
    displayOrder: 2,
  },

  // Programming Excellence
  {
    name: 'Programming with C & C++',
    slug: 'programming-c-cpp',
    category: 'Programming Excellence',
    level: 'Beginner',
    shortDescription: 'Build a strong foundation in programming logic and Object-Oriented Programming (OOP) concepts.',
    description: 'The best starting point for software engineering. Learn the fundamental concepts of programming using C, followed by deep dive into Object-Oriented Programming (OOPS) with C++.',
    duration: '2 Months',
    syllabus: '1. Programming Basics & Logic\n2. C Programming Fundamentals\n3. Functions, Pointers & Arrays in C\n4. Introduction to OOP\n5. C++ Classes & Objects\n6. Inheritance & Polymorphism\n7. File Handling in C++',
    technologies: 'C, C++',
    projects: 'Library Management System (Console based)',
    prerequisites: 'None',
    featured: false,
    displayOrder: 3,
  },
  {
    name: 'Core and Advanced Java',
    slug: 'java-programming',
    category: 'Programming Excellence',
    level: 'Advanced',
    shortDescription: 'Master Java programming from core fundamentals to advanced enterprise concepts.',
    description: 'A comprehensive Java programming course designed to take you from basics to advanced application development. Highly recommended for students preparing for campus placements and software engineering roles.',
    duration: '3 Months',
    syllabus: '1. Core Java Basics\n2. Object Oriented Programming in Java\n3. Exception Handling & Collections\n4. Multithreading\n5. JDBC (Database Connectivity)\n6. Advanced Java Concepts\n7. Java Project',
    technologies: 'Java, JDBC',
    projects: 'Banking Application Simulator',
    prerequisites: 'Basic programming knowledge',
    featured: true,
    displayOrder: 4,
  },
  {
    name: 'Programming with Python',
    slug: 'python-programming',
    category: 'Programming Excellence',
    level: 'Beginner to Intermediate',
    shortDescription: 'Learn Python, the most popular and versatile programming language in the industry today.',
    description: 'Python is known for its simplicity and power. In this course, you will learn Python from the ground up, covering data structures, functions, modules, and file handling. It serves as the perfect stepping stone into Data Science and AI.',
    duration: '2 Months',
    syllabus: '1. Python Syntax & Basics\n2. Data Types & Structures\n3. Functions & Modules\n4. File Handling & Exceptions\n5. OOP in Python\n6. Libraries Overview (NumPy, Pandas)\n7. Final Project',
    technologies: 'Python',
    projects: 'Data Automation Script, Weather App CLI',
    prerequisites: 'None',
    featured: false,
    displayOrder: 5,
  },
  {
    name: 'Programming with R',
    slug: 'r-programming',
    category: 'Programming Excellence',
    level: 'Intermediate',
    shortDescription: 'Specialized programming for statistical computing and graphics.',
    description: 'Learn R programming to analyze data and create statistical software. This course is ideal for students looking to enter the fields of data analysis, statistics, and academic research.',
    duration: '1.5 Months',
    syllabus: '1. Introduction to R\n2. R Data Types & Structures\n3. Data Manipulation\n4. Data Visualization\n5. Statistical Analysis in R',
    technologies: 'R',
    projects: 'Dataset Analysis & Visualization Report',
    prerequisites: 'Basic math and statistics understanding',
    featured: false,
    displayOrder: 6,
  },

  // AI & Emerging Technology
  {
    name: 'AI Concept & Machine Learning (Basic)',
    slug: 'ai-machine-learning',
    category: 'AI & Emerging Technology',
    level: 'Advanced',
    shortDescription: 'Step into the future with artificial intelligence and basic machine learning algorithms.',
    description: 'The future is here! This course introduces you to the core concepts of Artificial Intelligence and practical Machine Learning. You will learn how machines learn from data, make predictions, and how to implement basic models.',
    duration: '3 Months',
    syllabus: '1. Introduction to AI\n2. Supervised vs Unsupervised Learning\n3. Regression & Classification\n4. Decision Trees & Neural Networks overview\n5. Model Evaluation\n6. Implementing ML in Python',
    technologies: 'Python, Scikit-Learn, Machine Learning',
    projects: 'House Price Predictor, Spam Classifier',
    prerequisites: 'Python Programming',
    featured: true,
    displayOrder: 7,
  },
  {
    name: 'Data Science & NLP',
    slug: 'data-science-nlp',
    category: 'AI & Emerging Technology',
    level: 'Advanced',
    shortDescription: 'Extract insights from data and teach computers to understand human language.',
    description: 'Dive deep into Data Science and Natural Language Processing (NLP). Learn how to clean, process, and visualize large datasets, and build models that can analyze text data like reviews and social media posts.',
    duration: '2.5 Months',
    syllabus: '1. Data Science Workflow\n2. Pandas & Data Cleaning\n3. Data Visualization (Matplotlib/Seaborn)\n4. Intro to NLP\n5. Text Processing & Tokenization\n6. Sentiment Analysis\n7. AI Projects & Tools',
    technologies: 'Python, Pandas, NLTK, NLP',
    projects: 'Sentiment Analysis Bot, Sales Data Dashboard',
    prerequisites: 'Python Programming',
    featured: false,
    displayOrder: 8,
  }
];

async function seed() {
  console.log('Inserting courses...');
  for (const c of coursesData) {
    // Upsert logic just in case
    await sql`
      INSERT INTO courses (
        name, slug, category, level, short_description, description, 
        duration, syllabus, technologies, projects, prerequisites, 
        featured, display_order, active
      ) 
      VALUES (
        ${c.name}, ${c.slug}, ${c.category}, ${c.level}, ${c.shortDescription}, ${c.description}, 
        ${c.duration}, ${c.syllabus}, ${c.technologies}, ${c.projects}, ${c.prerequisites}, 
        ${c.featured}, ${c.displayOrder}, true
      )
      ON CONFLICT (slug) DO UPDATE SET
        name = ${c.name},
        category = ${c.category},
        description = ${c.description},
        technologies = ${c.technologies}
    `;
    console.log('Added:', c.name);
  }
  console.log('All courses seeded successfully!');
  await sql.end();
}

seed().catch(e => { console.error(e.message); process.exit(1); });
