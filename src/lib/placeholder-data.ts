export type Job = {
  id: string;
  title: string;
  companyName: string;
  companyLogoUrl: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship';
  description: string;
  requirements: string[];
  responsibilities: string[];
  status: 'pending' | 'approved' | 'rejected';
};

export type User = {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'recruiter' | 'admin';
  status: 'pending' | 'approved';
};

export type Application = {
  id: string;
  jobId: string;
  studentId: string;
  status: 'applied' | 'in-review' | 'interviewing' | 'offered' | 'rejected';
  appliedDate: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Junior Software Engineer',
    companyName: 'TechCorp',
    companyLogoUrl: 'https://picsum.photos/seed/techcorp/200/200',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Join our dynamic team to build next-generation web applications. This is a great opportunity for a recent graduate to grow their skills in a fast-paced environment.',
    requirements: ['B.S. in Computer Science or related field', 'Proficiency in JavaScript (React, Node.js)', 'Understanding of RESTful APIs', 'Strong problem-solving skills'],
    responsibilities: ['Develop and maintain web applications', 'Collaborate with cross-functional teams', 'Write clean, testable code', 'Participate in code reviews'],
    status: 'approved',
  },
  {
    id: '2',
    title: 'Marketing Intern',
    companyName: 'Innovate Inc.',
    companyLogoUrl: 'https://picsum.photos/seed/innovateinc/200/200',
    location: 'New York, NY',
    type: 'Internship',
    description: 'Looking for a creative marketing intern to help with our digital campaigns. You will learn about SEO, content marketing, and social media strategy.',
    requirements: ['Currently pursuing a degree in Marketing or Communications', 'Strong written and verbal communication skills', 'Familiarity with social media platforms', 'Eagerness to learn'],
    responsibilities: ['Assist in creating marketing content', 'Manage social media schedules', 'Track and report on campaign performance', 'Conduct market research'],
    status: 'approved',
  },
  {
    id: '3',
    title: 'Data Analyst (Entry-Level)',
    companyName: 'DataNex',
    companyLogoUrl: 'https://picsum.photos/seed/datanex/200/200',
    location: 'Austin, TX',
    type: 'Full-time',
    description: 'We are seeking a detail-oriented Data Analyst to help us make sense of our data. You will work with large datasets to provide actionable insights.',
    requirements: ['Degree in Statistics, Math, or a related field', 'Experience with SQL and Python/R', 'Knowledge of data visualization tools (e.g., Tableau)', 'Excellent analytical skills'],
    responsibilities: ['Clean and analyze large datasets', 'Create dashboards and reports', 'Identify trends and patterns', 'Present findings to stakeholders'],
    status: 'approved',
  },
    {
    id: '4',
    title: 'Product Designer',
    companyName: 'TechCorp',
    companyLogoUrl: 'https://picsum.photos/seed/techcorp/200/200',
    location: 'Remote',
    type: 'Full-time',
    description: 'Seeking a talented Product Designer to create intuitive and beautiful user experiences for our flagship product.',
    requirements: ['Portfolio of design projects', 'Proficiency in Figma, Sketch, or Adobe XD', 'Understanding of user-centered design principles', 'Excellent visual design skills'],
    responsibilities: ['Design user flows and wireframes', 'Create high-fidelity mockups and prototypes', 'Collaborate with PMs and engineers', 'Conduct user research and testing'],
    status: 'pending',
  },
];

export const featuredJobs = jobs.filter(j => j.status === 'approved').slice(0, 3);

export const users: User[] = [
    { id: '1', name: 'Admin User', email: 'admin@gradlink.com', role: 'admin', status: 'approved' },
    { id: '2', name: 'Student User', email: 'student@gradlink.com', role: 'student', status: 'approved' },
    { id: '3', name: 'Recruiter User', email: 'recruiter@gradlink.com', role: 'recruiter', status: 'approved' },
    { id: '4', name: 'Pending Recruiter', email: 'pending@company.com', role: 'recruiter', status: 'pending' },
];

export const applications: Application[] = [
    { id: '1', jobId: '1', studentId: '2', status: 'in-review', appliedDate: '2024-07-15' },
    { id: '2', jobId: '2', studentId: '2', status: 'applied', appliedDate: '2024-07-18' },
];
