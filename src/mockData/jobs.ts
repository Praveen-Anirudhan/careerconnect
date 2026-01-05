export interface Job {
  title: string;
  company: string;
  type: string;
  description: string;
  location: string;
  salary: string;
  posted: string;
  skills: string[];
}

const jobs = [
  {
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    type: 'Full-time',
    description:
      "We're looking for an experienced Frontend Developer to join our dynamic team and build amazing user...",
    location: 'San Francisco, CA',
    salary: '$120k - $160k',
    posted: '2 days ago',
    skills: ['React', 'TypeScript', 'CSS', 'JavaScript'],
  },
  {
    title: 'Product Designer',
    company: 'DesignHub',
    type: 'Full-time',
    description:
      'Join our design team to create beautiful and intuitive products that users love.',
    location: 'Remote',
    salary: '$90k - $130k',
    posted: '1 week ago',
    skills: ['UI/UX', 'Figma', 'Design Systems', 'User Research'],
  },
  {
    title: 'Backend Engineer',
    company: 'DataFlow Systems',
    type: 'Full-time',
    description:
      'Build scalable backend systems that power our next-generation data platform.',
    location: 'New York, NY',
    salary: '$130k - $180k',
    posted: '3 days ago',
    skills: ['Node.js', 'Python', 'AWS', 'Microservices'],
  },
];

export default jobs;
