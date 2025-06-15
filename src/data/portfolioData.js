export const personalInfo = {
  name: "Mohamed El Gorrim",
  firstName: "Mohamed",
  lastName: "El Gorrim",
  title: "Software & Intelligent Systems Engineering Student",
  email: "elgorrim.mohamed@etu.uae.ac.ma",
  location: "Tanger, Morocco",
  phone: "+212 644246223",
  linkedin: "https://www.linkedin.com/in/mohamed-el-gorrim-8052822a0/",
  github: "https://github.com/MedGm",
  portfolio: "https://mohamed-el-gorrim-portfolio.vercel.app/",
  about: "I'm a first-year Software and Intelligent Systems Engineering student at Abdelmalek Essaâdi University, with a passion for building smart, efficient solutions. I focus on full-stack development, embedded systems, and AI-based applications. I'm actively looking for summer internship opportunities where I can contribute, learn, and grow as an engineer.",
  languages: [
    { name: "Arabic", level: "Native" },
    { name: "French", level: "Fluent" },
    { name: "English", level: "Professional" }
  ],
  profileImage: "/me.png",
  roles: [
    'Software Engineering Student',
    2000,
    'Full Stack Developer',
    2000,
    'Game Development Enthusiast',
    2000,
    'AI & ML Explorer',
    2000,
    'Hackathon Award Winner',
    2000,
  ],
  codeSnippets: [
    { text: "const developer = new Developer('Mohamed');", color: "#61dafb", direction: 1 },
    { text: "while(true) { learn(); code(); repeat(); }", color: "#38bdf8", direction: -1 },
    { text: "if(coffee.isEmpty()) { refill(); }", color: "#818cf8", direction: 1 },
    { text: "git commit -m 'Always coding'", color: "#a78bfa", direction: -1 }
    ]
};

export const education = {
  degree: "Engineering Degree in Software & Intelligent Systems",
  institution: "Abdelmalek Essaâdi University",
  location: "Tétouan, Morocco",
  period: "2022 - 2027",
  expectedGraduation: "2027",
  status: "Currently Enrolled"
};

export const skills = {
  categories: [
    {
      name: "Web & Database",
      skills: ["HTML/CSS", "MySQL", "PostgreSQL", "MongoDB", "REST APIs"],
      color: "from-blue-500 to-cyan-400",
      icon: "web"
    },
    {
      name: "Frameworks and Libraries",
      skills: ["React", "Angular", "Symfony", "Laravel", "Express.js"],
      color: "from-purple-500 to-pink-500",
      icon: "frameworks"
    },
    {
      name: "Languages & Dev Tools",
      skills: ["C/C++", "Java", "Python", "JavaScript", "PHP", "Arduino", "Bash"],
      color: "from-green-500 to-emerald-400",
      icon: "languages"
    },
    {
      name: "Engineering & Systems",
      skills: ["UML", "Design Patterns", "Linux (Ubuntu)", "Embedded Systems", "Git/GitHub"],
      color: "from-orange-500 to-red-500",
      icon: "systems"
    }
  ]
};

export const projects = [
   {
    id: "eeg-detection",
    title: "EEG Seizure Detection System",
    description: "A real-time epileptic seizure detection system using EEG signals that processes data via MQTT, applies machine learning for prediction, and displays results through an interactive web interface.",
    techStack: ["Python", "Flask", "Node-RED", "MQTT", "TensorFlow", "Socket.IO"],
    link: "https://github.com/MedGm/EEG-Seizure-Detection",
    image: "/eeg.png",
    features: [
      "Real-time EEG data processing via MQTT",
      "Machine learning-based seizure prediction",
      "Interactive web dashboard for visualization",
      "Adjustable detection sensitivity parameters",
      "Simulation tools for testing and validation"
    ],
    category: "Extracurricular",
    year: "2025",
    status: "Completed"
  },
  {
    id: "gamehaven",
    title: "GameHaven",
    description: "A feature-rich video game marketplace built with Symfony and React. Implements user authentication, game listings, reviews, and a sophisticated search system.",
    techStack: ["React", "Symfony", "PostgreSQL", "Postman"],
    link: "https://github.com/MedGm/GameHaven",
    image: "/gamehaven.png",
    features: [
      "User authentication and profiles",
      "Game searching and filtering",
      "Review and rating system",
      "Responsive design"
    ],
    category: "Academic",
    year: "2025",
    status: "Completed"
  },
  {
    id: "tarl-game",
    title: "TARL-Based Number Game",
    description: "An interactive number comparison game using the Teaching at the Right Level (TARL) methodology, with adaptive logic and progression mechanics.",
    techStack: ["Unity 6", "C#", "UI/UX Design"],
    link: "https://github.com/MedGm/TARL-Game/",
    image: "/tarl-game.png",
    features: [
      "Educational gameplay mechanics",
      "Adaptive difficulty progression",
      "Interactive UI for learning",
      "TARL methodology implementation"
    ],
    category: "Academic",
    year: "2025",
    status: "Completed"
  },
  { 
    id: "department-management",
    title: "Conception et Gestion du Département Génie Informatique",
    description: "A comprehensive department management system for computer engineering faculty, facilitating administrative workflows and student management.",
    techStack: ["React", "Dexie.js"],
    link: "https://github.com/DustWinter/Hone",
    image: "/department.png",
    features: [
      "Faculty member management",
      "Student enrollment tracking",
      "Course scheduling",
      "Administrative dashboard",
      "Academic performance analytics"
    ],
    category: "Academic",
    year: "2025",
    status: "Completed"
  }
];

export const achievements = [
  {
    id: "ai-workshop",
    title: "AI Workshop Presenter",
    description: "Presented a technical workshop on applications of deep learning in epilepsy detection and monitoring during Science Week, sharing knowledge with peers and industry professionals.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7319432087801847808/",
    image: "/a2.png",
    color: "from-purple-500 to-pink-500",
    tags: ["Deep Learning", "Healthcare", "Presentation"],
    date: "2025",
    type: "Workshop"
  },
  {
    id: "hackathon-3rd",
    title: "3rd Place in Hackathon",
    description: "Successfully competed and secured 3rd place in a competitive hackathon, showcasing innovative problem-solving skills and technical expertise.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7319817359597133828/",
    image: "/a1.png",
    color: "from-blue-500 to-cyan-400",
    tags: ["Competition", "Innovation", "Team Work"],
    date: "2025",
    type: "Competition"
  },
  {
    id: "oracle-badge",
    title: "Oracle Learning Explorer Badge",
    description: "Earned the Oracle Learning Explorer certification, demonstrating proficiency in Oracle technologies and commitment to professional development.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7271614517975867392/",
    image: "/a3.png",
    color: "from-orange-500 to-red-500",
    tags: ["Certification", "Database", "Professional Development"],
    date: "2024",
    type: "Certification"
  }
];

export const activities = [
  {
    id: "chess",
    title: "Chess Enthusiast",
    description: "Active member of the online chess community, continuously learning and improving strategic thinking skills.",
    icon: "chess",
    category: "Personal Interest"
  },
  {
    id: "legends-club",
    title: "Legends Club Member",
    description: "Co-hosted IT Day during Science Week, presenting the real-time epilepsy detection system and leading a workshop on AI in medical applications.",
    icon: "community",
    category: "Professional"
  }
];

export const qualityTraits = [
  { 
    id: "problem-solver",
    title: "Problem Solver", 
    description: "Analytical mindset with strong debugging skills",
    icon: "problemSolver"
  },
  { 
    id: "fast-learner",
    title: "Fast Learner", 
    description: "Quick to adapt to new technologies and frameworks",
    icon: "fastLearner"
  },
  { 
    id: "team-leader",
    title: "Team Leader", 
    description: "Managing communications and administrative responsibilities",
    icon: "teamLeader"
  },
  { 
    id: "creative-thinker",
    title: "Creative Thinker", 
    description: "Innovative approach to technical challenges",
    icon: "creativeThinker"
  }
];

export const contactInfo = [
  {
    id: "email",
    title: "Email",
    value: "elgorrim.mohamed@etu.uae.ac.ma",
    icon: "email",
    link: "mailto:elgorrim.mohamed@etu.uae.ac.ma",
    primary: true
  },
  {
    id: "phone", 
    title: "Phone",
    value: "+212 644246223",
    icon: "phone",
    link: "tel:+212644246223",
    primary: true
  },
  {
    id: "location",
    title: "Location",
    value: "Tanger, Morocco",
    icon: "location",
    link: "https://maps.google.com/?q=Tanger,Morocco",
    primary: false
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: "Mohamed El Gorrim",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/mohamed-el-gorrim-8052822a0/",
    primary: true
  }
];

// Navigation configuration
export const navigationItems = [
  { id: 'home', title: 'Home', icon: 'home' },
  { id: 'about', title: 'About', icon: 'about' },
  { id: 'projects', title: 'Projects', icon: 'projects' },
  { id: 'skills', title: 'Skills', icon: 'skills' },
  { id: 'achievements', title: 'Achievements', icon: 'achievements' },
  { id: 'contact', title: 'Contact', icon: 'contact' }
];

// SEO and metadata
export const siteMetadata = {
  title: "Mohamed El Gorrim - Software Engineering Portfolio",
  description: "Aspiring Software and Intelligent Systems Engineer specializing in full-stack development, AI applications, and embedded systems. Currently seeking internship opportunities.",
  keywords: "Software Engineer, Full Stack Developer, React, Python, AI, Machine Learning, Portfolio, Morocco, Internship, Student",
  author: "Mohamed El Gorrim",
  siteUrl: "https://mohamed-el-gorrim-portfolio.vercel.app/",
  image: "/me.png",
  twitterHandle: "@mohamedElGorrim"
};

// Social media links
export const socialLinks = [
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/MedGm",
    icon: "github",
    color: "#333"
  },
  {
    id: "linkedin",
    name: "LinkedIn", 
    url: "https://www.linkedin.com/in/mohamed-el-gorrim-8052822a0/",
    icon: "linkedin",
    color: "#0077B5"
  }
];

// Professional highlights for About section
export const professionalHighlights = [
  "First Year Engineering Student in Software and Intelligent Systems",
  "Experience with Full-Stack Development (MERN & MEAN Stack)", 
  "Game Development with Unity",
  "TypeScript and Angular Application Development",
  "Strong foundation in Data Structures and Algorithms"
];

// Call-to-action buttons configuration
export const ctaButtons = [
  {
    id: "github",
    text: "GitHub",
    href: "https://github.com/MedGm",
    icon: "github",
    variant: "secondary",
    external: true
  },
  {
    id: "contact",
    text: "Contact Me", 
    href: "#contact",
    icon: "contact",
    variant: "primary",
    external: false
  }
];
