/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Paras Arvind Tayade",
  title: "Hi, I'm Paras",
  subTitle: emoji(
    "Backend-focused Electrical Engineering student at IIT Kharagpur (2026) who loves crafting AI-first products, resilient APIs, and automation that delights users."
  ),
  resumeLink: "/Paras-Arvind-Tayade-Resume.pdf", // presence of a link renders the download button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "parastayade04@gmail.com",
  linkedin: "https://www.linkedin.com/in/paras-tayade-40813a250/",
  github: "https://github.com/NastyK21",
 
  // Provide your own handles when ready (github, linkedin, twitter, etc.)
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I build",
  subTitle: "Full-stack/AI engineer crafting reliable systems and beautiful interfaces",
  skills: [
    emoji(
      "⚡ Architect cloud-ready backends with Node.js, Fastify, PostgreSQL, MongoDB, and durable messaging"
    ),
    emoji(
      "⚡ Design AI-first features — Groq-powered MCQ generation, semantic search with pgvector, and voice/chat agents"
    ),
    emoji(
      "⚡ Ship polished React + Tailwind dashboards with real-time collab, analytics, and secure auth"
    )
  ],

  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Express.js",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Fastify",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Prisma",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-memory"
    },
    {
      skillName: "Git & GitHub",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Indian Institute of Technology Kharagpur",
      logo: require("./assets/images/iitkgp.jpg"),
      subHeader: "B.Tech. (Hons.) in Electrical Engineering",
      duration: "Nov 2022 - May 2026",
      desc: "CGPA: 7.57 / 10",
      descBullets: [
        "Programming & Data Structures, Operating Systems, Web Development Bootcamp",
        "Embedded/Control/Power Systems labs with hands-on hardware build cycles"
      ]
    },
    {
      schoolName: "Brijlal Biyani Science College, Amravati",
      logo: require("./assets/images/bbsc.jpg"),
      subHeader: "Class XII • Maharashtra State Board",
      duration: "2020 - 2022",
      desc: "Score: 86.83%",
      descBullets: [
        "Led robotics & coding study groups to help peers ramp up on fundamentals"
      ]
    },
    {
      schoolName: "Titans' Public School, Amravati",
      logo: require("./assets/images/tps.jpg"),
      subHeader: "Class X • CBSE",
      duration: "2018 - 2020",
      desc: "Score: 88%",
      descBullets: [
        
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Backend & API Engineering",
      progressPercentage: "85%"
    },
    {
      Stack: "AI, Automation & Data",
      progressPercentage: "75%"
    },
    {
      Stack: "Frontend & Product Craft",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Backend Developer Intern",
      company: "Chief Outsourcing",
      companylogo: require("./assets/images/chiefOutsourcingLogo.svg"),
      date: "May 2025 – Jul 2025",
      desc:
        "Built production-grade backend capabilities for an expert-client marketplace and automation suite.",
      descBullets: [
        "Implemented Google/LinkedIn OAuth and JWT-based role access for experts & clients",
        "Deployed Groq + n8n powered automation agent to route and resolve inbound queries",
        "Integrated Twilio notifications plus optimized REST APIs and MongoDB data flows for scale"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Highlighted Builds",
  subtitle:
    "AI-backed platforms, scalable web apps, and problem-solving experiments I loved shipping",
  projects: [
    {
      image: require("./assets/images/jsFramework.svg"),
      projectName: "MCQ Generator",
      projectDesc:
        "Fastify + React platform that ingests documents, runs pgvector semantic search, and uses Groq APIs to craft RAG-backed quizzes with analytics.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NastyK21/MCQ-Generator"
        }
      ]
    },
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "Real Estate Web Application",
      projectDesc:
        "Responsive MERN experience with advanced property filters, secure auth via Zustand, and real-time Socket.IO chat between buyers and owners.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NastyK21/Riyal_Estate"
        }
      ]
    },
    {
      image: require("./assets/images/sarkari.jpg"),
      projectName: "SarkariGPT",
      projectDesc:
        "Code for Bharat Season 2 chatbot delivering bilingual voice/text guidance on 500+ Indian government schemes with Groq + Whisper.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/NastyK21/SarkariGPT"
        }
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Highlights 🏆"),
  subtitle:
    "Hackathons, competitions, and leadership experiences that fuel my love for building.",

  achievementsCards: [
    {
      title: "Code For Bharat Season 2 • SarkariGPT",
      subtitle:
        "Built a bilingual Groq + Whisper chatbot that maps 500+ government schemes to citizen needs with verified data pipelines.",
      image: require("./assets/images/cfb.webp"),
      imageAlt: "SarkariGPT logo",
      footerLink: []
    },
    {
      title: "Capital One Launchpad Hackathon",
      subtitle:
        "Developed Agricultural AI Advisor with TensorFlow CNN microservice, Redis caching, Dockerized OCR stack, and Twilio alerts.",
      image: require("./assets/images/capone.png"),
      imageAlt: "Hackathon logo",
      footerLink: []
    },
    {
      title: "Leadership & Service",
      subtitle:
        "Vice-Captain, Illumination Team • NSS volunteer • Sponsorship & blog contributor at Kharagpur Blockchain Society.",
      image: require("./assets/images/skill.svg"),
      imageAlt: "Leadership illustration",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Long-form write-ups coming soon.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji("Speaking engagements are in the works."),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Podcast appearances coming soon.",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Need help with an AI product, backend architecture, or just want to jam on an idea? I'm all ears.",
  number: "",
  email_address: "parastayade04@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // Open for new opportunities, internships, and collaborations

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
