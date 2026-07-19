export const portfolioData = {
  personal: {
    name: "Thithira Dilmith",
    fullName: "Thithira Dilmith Bandara",
    role: "Full-Stack & Mobile App Developer",
    github: "thithiradx",
    githubUrl: "https://github.com/thithiradx",
    email: "thithiradx@gmail.com",
    linkedin: "https://www.linkedin.com/in/thithira-dilmith-bandara",
    bio: "ICT undergraduate from Ingiriya, Sri Lanka, learning full-stack and mobile development by actually building things — mostly with the MERN stack and React Native. I like figuring out how the frontend and backend actually talk to each other, and I'm currently looking for an internship where I can keep learning from developers who've been doing this longer than me.",
    avatarUrl: "/images/profile.png",
  },

  roles: [
    "Full-Stack Developer",
    "Mobile App Developer",
    "ICT Undergraduate",
    "MERN Stack Developer",
  ],

  stats: [
    { number: 3, suffix: "", label: "Full-Stack Projects Built" },
    { number: 15, suffix: "+", label: "Tools & Technologies" },
    { number: 2027, suffix: "", label: "Expected Graduation" },
  ],

  skills: [
    {
      category: "Mobile Development",
      icon: "📱",
      items: [
        { name: "React Native", level: 78 },
        { name: "Expo", level: 75 },
        { name: "REST API Integration", level: 80 },
        { name: "Responsive UI", level: 82 },
      ],
    },
    {
      category: "Frontend Development",
      icon: "🎨",
      items: [
        { name: "React", level: 82 },
        { name: "JavaScript", level: 85 },
        { name: "HTML / CSS", level: 85 },
        { name: "Bootstrap", level: 78 },
      ],
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      items: [
        { name: "Node.js", level: 78 },
        { name: "Express.js", level: 78 },
        { name: "API Development", level: 80 },
        { name: "Authentication (JWT)", level: 75 },
      ],
    },
    {
      category: "Databases & Tools",
      icon: "🗄️",
      items: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 72 },
        { name: "Git / GitHub", level: 85 },
        { name: "Postman / Figma", level: 75 },
      ],
    },
  ],

  skillTags: [
    "React Native", "Expo", "React", "JavaScript", "TypeScript", "HTML",
    "CSS", "Bootstrap", "Node.js", "Express.js", "MongoDB", "MySQL",
    "REST APIs", "JWT Auth", "Git", "GitHub", "Postman", "VS Code", "Figma"
  ],

  projects: [
    {
      title: "Herbal Healing – E-Commerce Web Application",
      description:
        "A full-stack e-commerce platform for herbal products, split into a separate frontend and backend. Users can browse products, check out product details, and move through the shopping flow on a responsive interface, while the backend exposes REST APIs for product management and data handling.",
      image: "/images/project-herbalhealing.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/thithiradx/herbal-healing-frontend",
      live: "#",
      features: [
        "Separate frontend/backend architecture with a clean REST API layer",
        "Product browsing, detail pages, and shopping workflow",
        "Modular, scalable code structure built with maintainability in mind"
      ]
    },
    {
      title: "Project Management System",
      description:
        "A full-stack tool for organizing tasks and tracking project workflows. The frontend is built for managing projects and tasks day-to-day, connected to a backend REST API that handles the data operations behind it.",
      image: "/images/project-taskmanager.png",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
      github: "https://github.com/thithiradx/project-manager-frontend",
      live: "#",
      features: [
        "Structured task management with a responsive frontend",
        "Reliable frontend–backend communication through REST APIs",
        "Architecture built to realistically scale with a growing project"
      ]
    },
    {
      title: "Smart Expense Tracker",
      description:
        "A full-stack mobile expense tracker built with React Native (Expo) and Node.js, with budget tracking, savings goals, and real-time spending breakdowns. It reads bank SMS notifications to log transactions automatically on Android, and supports multiple currencies with a bilingual English/Sinhala UI.",
      image: "/images/project-expensetracker.png",
      tags: ["React Native (Expo)", "Node.js", "Express.js", "MongoDB", "JWT Auth"],
      github: "https://github.com/thithiradx/smart-expense-tracker",
      live: "#",
      features: [
        "Automatic transaction capture via Android bank SMS integration",
        "Multi-currency support and a bilingual English/Sinhala interface",
        "Node.js/Express/MongoDB backend with JWT auth, deployed on Render with uptime monitoring"
      ]
    }
  ],

  experience: [
    {
      role: "Full-Stack & Mobile Developer",
      company: "Independent Projects",
      date: "2026 - Present",
      description: [
        "Building full-stack web and mobile apps end to end with React, React Native, and Node.js",
        "Designing REST APIs and connecting them to MongoDB/MySQL databases",
        "Working through real deployment concerns — auth, environment configs, and uptime monitoring on Render"
      ],
    },
    {
      role: "ICT Undergraduate",
      company: "University of Vavuniya",
      date: "2022 - 2027 (Expected)",
      description: [
        "Studying for a BICT (Hons), building a foundation in software engineering, databases, and web development",
        "Applying coursework to self-directed full-stack projects outside of class"
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Information and Communication Technology (Hons)",
      school: "University of Vavuniya",
      year: "Expected Graduation: 2027",
      icon: "🎓",
      details:
        "Coursework spanning software engineering, databases, and web/mobile development, alongside independent full-stack projects to put it into practice.",
    },
    {
      degree: "G.C.E. Advanced Level - Engineering Technology",
      school: "Taxila Central College, Horana",
      year: "2019 - 2021",
      icon: "📚",
      details:
        "Studied the Engineering Technology stream, building the technical and analytical foundation that led into ICT at university.",
    },
  ],
};
