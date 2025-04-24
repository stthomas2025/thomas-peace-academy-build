import React from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Why St. Thomas Secondary English School is the Best in Nepalgunj",
    content: `
      In the heart of Nepalgunj, a city buzzing with life, culture, and opportunity, stands an educational institution that has steadily built a legacy of excellence—St. Thomas Secondary English School. More than just a place of learning, it has become a cornerstone of holistic development, academic distinction, and community trust.

      ### A Legacy of Educational Excellence
      Established with a vision to provide world-class education while nurturing values and character, St. Thomas has grown into a leading school known for its disciplined structure, dynamic curriculum, and innovative teaching practices. Over the years, it has created a nurturing space for children of all age groups—from playful pre-schoolers to ambitious high school graduates preparing for their future.

      ### English-Medium, Value-Based Learning
      At St. Thomas, English is not merely a subject but the medium of instruction. This provides students with a strong command of the global language, enabling them to communicate effectively and confidently, both within Nepal and on international platforms.

      ### Modern Curriculum with a Global Outlook
      While rooted in the national curriculum, St. Thomas integrates global best practices in education. From digital learning tools to interactive sessions, field trips, and real-world projects, students are constantly encouraged to explore, question, and innovate.

      ### Individual Attention and Inclusive Growth
      One of the key strengths of St. Thomas is its student-centered approach. With well-balanced teacher-student ratios and a focus on personalized mentorship, every child is given the space and support to grow at their own pace.

      ### Infrastructure That Inspires Learning
      Spread across a spacious campus, the school boasts state-of-the-art facilities including modern science labs, computer labs, multimedia rooms, and well-stocked libraries. Classrooms are well-lit and equipped with smart boards and interactive teaching tools.

      ### A Beacon of Stability in a Changing World
      In today’s fast-changing world, stability is a luxury. For over a decade, St. Thomas has been that reliable pillar in Nepalgunj—constantly evolving yet remaining true to its core mission.

      ### A Community That Cares
      What truly makes St. Thomas exceptional is its people. The school has cultivated a caring, close-knit community where teachers know their students, alumni return to mentor juniors, and parents are actively involved.

      ### Proven Track Record
      St. Thomas graduates are now doctors, engineers, entrepreneurs, hospitality professionals, and IT experts, contributing not just to Nepal but also working globally.

      ### Trusted by Generations
      Parents trust St. Thomas not just because of its academic rigor but because of its integrity and transparency. Regular parent-teacher meetings, digital progress reports, and open communication channels ensure that families feel involved.

      ### Final Thoughts
      As Nepalgunj continues to grow, so does the need for institutions that can lead the way in shaping future citizens. St. Thomas isn’t just keeping up—it’s leading with dedication to excellence, strong moral foundation, and a future-ready outlook.
    `,
    date: "2025-04-24",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 2,
    title: "From Pre-School to +2: The Complete Academic Journey at St. Thomas",
    content: `
      At St. Thomas Secondary English School in Nepalgunj, education is not just about reaching academic milestones—it’s about shaping lives from the earliest years to the threshold of adulthood. With a comprehensive academic structure spanning pre-school to +2, the school provides a consistent, nurturing, and progressive learning environment.

      ### The Foundation: Pre-School
      The educational journey begins with a vibrant pre-school program, where children as young as three are welcomed into a safe and joyful environment. This stage emphasizes learning through play, creativity, and social interaction.

      #### Key Features:
      - Montessori-inspired teaching
      - Safe and colorful classrooms
      - Focus on communication skills
      - Emotional and social development

      ### Primary Level: Grades 1–5
      The primary years focus on developing essential academic skills while nurturing a love for learning. Core subjects are introduced in a structured yet engaging manner.

      ### Lower Secondary: Grades 6–8
      As students move into lower secondary, the curriculum becomes more structured and subject-focused, building the foundation for national examinations.

      ### Secondary Level: Grades 9–10
      This phase prepares students for the Secondary Education Examination (SEE) with intensive support and experienced faculty.

      ### Higher Secondary Level (+2): Grades 11–12
      Students choose from Science, Management, Computer Science, or Hotel Management streams, all aligned with Nepal’s National Examination Board (NEB).

      ### Continuity That Builds Confidence
      The smooth transition between academic levels ensures familiarity, continuous tracking, and reduced stress during transitions.

      ### Beyond the Books
      Students engage in sports, music, art, drama, and community service, helping them discover talents and develop compassion.

      ### Final Thoughts
      Whether it’s a kindergartner’s curiosity or a +2 graduate’s ambition, St. Thomas ensures every stage of a student’s development is nurtured with expert guidance and care.
    `,
    date: "2025-04-23",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 3,
    title: "Shaping Tomorrow’s Scientists: The +2 Science Program",
    content: `
      The world is evolving faster than ever—thanks to breakthroughs in science and technology. St. Thomas Secondary English School offers a robust +2 Science program designed for curious minds passionate about discovery.

      ### A Future-Focused Curriculum
      Core subjects include Physics, Chemistry, Biology, Mathematics, and English, enriched with practical learning experiences.

      ### Experienced Faculty
      Highly qualified teachers mentor students through complex topics and practical sessions, ensuring academic depth.

      ### State-of-the-Art Science Labs
      Well-equipped labs for Physics, Chemistry, and Biology allow hands-on experiments, fostering scientific thinking.

      ### Competitive Exam Preparation
      Special classes, mock tests, and guest lectures prepare students for MBBS, Engineering, and other technical degrees.

      ### Career Counseling
      Academic counselors guide students toward careers in medicine, data science, or environmental research.

      ### Extracurricular Opportunities
      Science exhibitions, robotics clubs, and research projects build leadership and presentation skills.

      ### Alumni Success
      Graduates are now doctors, engineers, and researchers, reflecting the program’s strength.

      ### Final Thoughts
      With expert faculty, hands-on labs, and personalized mentorship, the +2 Science program at St. Thomas is the ideal place for aspiring innovators.
    `,
    date: "2025-04-22",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 4,
    title: "Empowering Tomorrow’s Leaders: The +2 Management Program",
    content: `
      In the age of entrepreneurship and global finance, St. Thomas’s +2 Management stream prepares students for business and leadership roles.

      ### Why Choose Management?
      The program equips students with knowledge and skills for startups, corporate careers, or advanced degrees.

      #### Core Subjects:
      - Business Studies
      - Accountancy
      - Economics
      - English

      ### Learning Beyond Books
      Project-based learning includes business simulations, market surveys, and financial literacy programs.

      ### Expert Faculty
      Qualified professionals with business experience provide practical insights and mentorship.

      ### Digital Tools
      Students use spreadsheets, business software, and learn e-commerce basics.

      ### Career Readiness
      Career counseling, CV workshops, and entrance exam prep ensure university and job readiness.

      ### Business Clubs
      Management clubs and entrepreneurship contests foster leadership and teamwork.

      ### Alumni Success
      Graduates are now Chartered Accountants, business administrators, and startup founders.

      ### Final Thoughts
      The +2 Management stream offers academic rigor, practical training, and leadership development for future business leaders.
    `,
    date: "2025-04-21",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 5,
    title: "Building the Digital Future: +2 Computer Science",
    content: `
      Technology is the present, and St. Thomas’s +2 Computer Science program empowers students to become tech innovators.

      ### Program Structure
      Modules cover programming, database systems, web technologies, and ICT applications.

      ### Hands-On Coding
      Students learn programming logic, software development, and build mini-projects from day one.

      ### Modern Computer Lab
      High-performance computers, stable internet, and simulation tools support innovation.

      ### Expert Faculty
      IT professionals provide clear guidance and project support.

      ### Innovation Clubs
      Coding, robotics, and cybersecurity clubs inspire creativity and competition.

      ### Career Support
      Guidance for IT programs, freelancing, and internships prepares students for tech careers.

      ### Alumni Achievements
      Graduates work in IT firms, launch startups, and pursue advanced degrees.

      ### Final Thoughts
      The +2 Computer Science program offers top-tier instruction and hands-on coding for a powerful tech future.
    `,
    date: "2025-04-20",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 6,
    title:
      "Crafting Hospitality Professionals: The +2 Hotel Management Program",
    content: `
      As tourism grows, St. Thomas’s +2 Hotel Management program prepares students for rewarding hospitality careers.

      ### A Gateway to Hospitality
      The curriculum blends theory, practical skills, and soft-skill development.

      #### Core Subjects:
      - Hotel Management
      - Accountancy
      - English
      - Business Studies

      ### Practical Learning
      Training includes food service, culinary basics, housekeeping, and front desk operations.

      ### Professional Faculty
      Industry experts and guest mentors provide real-world insights.

      ### Modern Facilities
      Training restaurant, culinary lab, and mock front office simulate hotel environments.

      ### Soft Skills
      Communication, grooming, and problem-solving are emphasized.

      ### Internships
      Hotel visits and internships offer real-world exposure.

      ### Career Pathways
      Graduates pursue BHM or work in hotels, airlines, and tourism.

      ### Final Thoughts
      The +2 Hotel Management program transforms students into confident, global hospitality professionals.
    `,
    date: "2025-04-19",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 7,
    title: "The Heart of Excellence – Meet the Faculty of St. Thomas",
    content: `
      Behind every successful student at St. Thomas is a dedicated faculty inspiring and mentoring them.

      ### Experienced Educators
      Highly qualified teachers with advanced degrees teach specialized subjects.

      ### Passion for Teaching
      Faculty go beyond teaching, offering extra sessions and mentorship.

      ### Modern Methods
      Interactive learning, technology integration, and project-based teaching are standard.

      ### Character Building
      Teachers mentor students in ethics, time management, and leadership.

      ### Parental Communication
      Regular updates and open-door policies build trust.

      ### Exam Support
      Faculty provide coaching, revisions, and strategies for board exams.

      ### Faculty Growth
      Training programs and recognition ensure continuous improvement.

      ### Final Thoughts
      The remarkable faculty at St. Thomas are the pillars of the school’s excellence.
    `,
    date: "2025-04-18",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 8,
    title: "Learning in Harmony – The Peaceful and Supportive Environment",
    content: `
      At St. Thomas, the learning environment promotes academic excellence and emotional well-being.

      ### Calm Campus
      A serene campus with green gardens and quiet study areas fosters focus.

      ### Respectful Discipline
      Discipline is rooted in mutual respect, with zero tolerance for bullying.

      ### Culture of Care
      A family-like atmosphere encourages kindness and support among students.

      ### Mental Wellness
      Counseling, mindfulness, and teacher support ensure emotional health.

      ### Growth Mindset
      Constructive feedback and risk-taking promote resilience.

      ### Parental Involvement
      Regular updates and meetings create a unified support system.

      ### Safety
      Secure gates, drills, and hygiene measures ensure peace of mind.

      ### Final Thoughts
      St. Thomas offers a peaceful sanctuary for young minds to grow with confidence.
    `,
    date: "2025-04-17",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 9,
    title: "Student Success Stories – Where Dreams Take Flight",
    content: `
      At St. Thomas, success is reflected in the growth and achievements of its students.

      ### National Exam Excellence
      Students excel in SEE and NEB exams, ranking among top performers.

      ### Scholarship Winners
      Graduates earn scholarships to study in Nepal and abroad.

      ### Science Innovators
      Projects like water filtration models win national recognition.

      ### Business Leaders
      Management students launch startups and pursue BBAs globally.

      ### Creative Achievements
      Dance, art, and public speaking talents shine in competitions.

      ### Hospitality Careers
      Hotel Management graduates work in luxury hotels and cruise lines.

      ### Tech Innovators
      Computer Science students win hackathons and work as developers.

      ### Final Thoughts
      St. Thomas students’ achievements prove the school builds futures, one dream at a time.
    `,
    date: "2025-04-16",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 10,
    title: "What Parents Say – Heartfelt Testimonials from Families",
    content: `
      Parents’ voices reflect the trust and satisfaction they have in St. Thomas.

      ### A Second Home
      “The teachers are caring, and my daughter feels at home.” – Mrs. Reema Adhikari

      ### Real Growth
      “My son became confident and independent.” – Mr. Ramchandra Poudel

      ### Safe Environment
      “We never worry about our son’s safety.” – Mrs. Pramila Yadav

      ### True Mentors
      “Teachers guided my daughter to a scholarship.” – Mr. Dinesh Khadka

      ### Transparent Communication
      “The school keeps us informed.” – Mrs. Anju Thapa

      ### Future Preparation
      “My son is ready for software engineering.” – Mr. Rajendra Shah

      ### Support for Working Parents
      “The school eases our responsibilities.” – Mrs. Sandhya Tamang

      ### Final Thoughts
      Parents’ joy and trust prove St. Thomas is the right choice for families.
    `,
    date: "2025-04-15",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 11,
    title: "Pre-School to Plus Two: A Seamless Academic Journey",
    content: `
      Education is a journey, and St. Thomas offers a seamless path from pre-school to +2.

      ### Pre-School
      Play-based learning builds foundational skills and curiosity.

      ### Primary School
      Structured curriculum blends academics with creativity.

      ### Lower Secondary
      Deeper subject focus and critical thinking prepare for exams.

      ### Secondary
      Intensive SEE preparation ensures academic success.

      ### Plus Two
      Specialized streams prepare students for university and careers.

      ### Continuum Benefits
      Consistency, strong bonds, and smooth transitions reduce stress.

      ### Lifelong Connection
      Alumni return to mentor and stay connected.

      ### Final Thoughts
      St. Thomas’s complete academic path ensures growth and transformation.
    `,
    date: "2025-04-14",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
  {
    id: 12,
    title: "Why St. Thomas is the Best School in Nepalgunj: A Complete Summary",
    content: `
      St. Thomas Secondary English School stands as the premier educational institution in Nepalgunj, blending academic excellence with holistic development.

      ### Academic Excellence
      From pre-school to +2, St. Thomas offers a robust curriculum and exam success.

      ### Specialized Streams
      Science, Management, Computer Science, and Hotel Management prepare students for diverse careers.

      ### Exceptional Faculty
      Dedicated teachers mentor students with expertise and care.

      ### Modern Facilities
      Science labs, computer labs, and hospitality training facilities enhance learning.

      ### Supportive Environment
      A peaceful campus fosters emotional and academic growth.

      ### Student Achievements
      Top exam results, scholarships, and global careers highlight success.

      ### Parental Trust
      Transparent communication and care earn families’ trust.

      ### Final Thoughts
      St. Thomas leads Nepalgunj’s education with vision, integrity, and a commitment to shaping futures.
    `,
    date: "2025-04-13",
    author: "St. Thomas Editorial Team",
    image: "/lovable-uploads/ee7faf30-f2e5-4db9-8793-45de8d71982c.png",
  },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-school-dark mb-4">
            Post Not Found
          </h1>
          <Button variant="outline" asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />

      <article className="pt-32 pb-20 bg-gradient-to-b from-school-primary/10 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Button variant="outline" className="mb-8" asChild>
              <Link to="/blog">← Back to Blog</Link>
            </Button>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-school-dark mb-4">
              {post.title}
            </h1>

            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">By {post.author}</span>
              <span>{post.date}</span>
            </div>
          </div>

          <div className="relative h-[400px] mb-8 rounded-xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="whitespace-pre-line text-gray-700 leading-relaxed">
              {post.content}
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
