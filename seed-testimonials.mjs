import postgres from 'postgres';

const DATABASE_URL = 'postgresql://neondb_owner:npg_YjwrSqedfP68@ep-falling-snow-ayp85gsl-pooler.c-5.us-east-2.aws.neon.tech/neondb?sslmode=require';

const sql = postgres(DATABASE_URL, { ssl: 'require' });

const testimonials = [
  ['Rahul Kumar Sahoo', 'Web Development with PHP & MySQL', 5, 'Joining Protech was the best decision of my life. Sir explains everything from scratch and I went from knowing nothing about coding to building my own website within 3 months. The practical projects really helped me understand how real websites work. I now feel confident applying for web developer jobs.', 1],
  ['Priya Nayak', 'Website Designing with HTML & CSS', 5, 'I had no background in computers but the teachers here are very patient and supportive. They never made me feel behind. The institute has a good environment and the batch timings were flexible for me. I designed my first full website and showed it to my family — they were so proud! Highly recommend Protech.', 2],
  ['Amit Behera', 'Programming with C and C++', 5, 'The way they teach C and C++ here is very different from college — much more hands-on. Sir gives coding exercises every day and checks them personally. My logic-building skills improved a lot. I cleared the programming round in my campus placement because of the practice I did at Protech. Thank you so much!', 3],
  ['Sunita Patra', 'Python Programming', 5, 'I wanted to learn Python for data work and Protech delivered beyond my expectations. The course covers everything from basics to file handling and even a small project at the end. Sir is always available even after class for doubts. Really happy with my experience here.', 4],
  ['Deepak Mohanty', 'AI & Machine Learning Fundamentals', 5, 'I was skeptical about learning AI in a local institute but Protech surprised me completely. The content is up to date and the instructor explains complex topics like neural networks in a simple way using real examples. I built a small ML project which I am now adding to my resume. Great experience overall.', 5],
  ['Soumya Ranjan Das', 'Web Development with PHP & MySQL', 4, 'Good institute with qualified faculty. I completed the web development course and learned a lot of practical skills. The MySQL database part was very useful for my job. One suggestion would be to extend the course duration a bit more, but overall I am satisfied with what I learned here at Protech Computer Education.', 6],
  ['Ankita Mishra', 'Website Designing with HTML & CSS', 5, 'Protech gave me a completely new direction. I was a housewife and wanted to earn online. After completing the web designing course, I started freelancing and now I design websites for local businesses. The certificate from Protech also helped me get clients. I am so grateful to the sir and the whole team here.', 7],
  ['Bijay Kumar Jena', 'Java Programming', 5, 'Java was always scary for me but Protech made it simple. The step-by-step approach from basics to OOP concepts was excellent. I joined after my 12th and now I feel ready for engineering college placement exams. The mock coding sessions were the most helpful part. Best institute in Bolgarh area without any doubt.', 8],
];

async function seed() {
  console.log('Inserting testimonials...');
  for (const [name, course, rating, text, order] of testimonials) {
    const q = 'INSERT INTO testimonials (student_name, course, rating, testimonial, display_order, active) VALUES (, , , , , true)';
    await sql.unsafe(q, [name, course, rating, text, order]);
    console.log('Added:', name);
  }
  console.log('Done!');
  await sql.end();
}

seed().catch(e => { console.error(e); process.exit(1); });
