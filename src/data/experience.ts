const PAST_ROLES: {
  company: string
  role: string
  description: string
  startDate: string
  endDate: string
  accomplishments: string[]
}[] = [
  {
    company: 'ResourceKraft & Full Stack Energy',
    role: 'Software Engineer',
    description:
      'Developed and deployed energy management solutions, leading development of a geothermal system monitoring application, leveraging MQTT and IoT devices for real-time complex data tracking via dashboard.',
    startDate: 'April 2024',
    endDate: 'Now',
    accomplishments: [
      'Led development of a geothermal system monitoring application, leveraging MQTT and IoT devices for real-time complex data tracking',
      'Optimized EV smart charging algorithms, reducing energy waste by 15%',
      'Integrated cross-platform energy solutions for global clients, improving hardware efficiency',
      'Led key development initiatives in energy monitoring, enhancing real-time data accuracy by 20%',
    ],
  },
  {
    company: 'BioRender',
    role: 'Software Engineer',
    description:
      'Built and maintained internal tools, automated key business processes with microservices, and managed essential tooling to improve team efficiency and product scalability.',
    startDate: 'January 2021',
    endDate: 'June 2024',
    accomplishments: [
      'Developed 40+ internal tools and features, streamlining operations across multiple teams',
      'Automated core business processes, reducing manual workload by 30%',
      'Implemented microservices using GCP and RESTful APIs, enhancing system scalability',
    ],
  },
  {
    company: 'Freelance',
    role: 'Software Engineer',
    description:
      'Contributed to open-source projects and provided pro-bono software development for small businesses, focusing on accessibility and technical support.',
    startDate: 'January 2021',
    endDate: 'Now',
    accomplishments: [
      'Supported 10+ small businesses by building cost-effective digital solutions',
      'Contributed to multiple open-source projects, improving accessibility and usability',
      'Developed and maintained various web applications, enhancing online presence for clients',
    ],
  },
]

export default PAST_ROLES
