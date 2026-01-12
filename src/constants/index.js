import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `
I’m a passionate Software Developer focused on building modern, responsive, and user-friendly web applications.

I specialize in front-end development using ReactJS and React Native, and I’m currently expanding my skills in Java backend development with Spring Boot. I enjoy turning ideas into scalable digital experiences and continuously improving my craft through real-world projects.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Software Developer with a strong foundation in front-end development and hands-on experience building responsive, user-friendly web applications. I enjoy turning ideas into clean, functional interfaces using modern technologies.

I have worked with ReactJS, React Native, JavaScript, HTML, CSS, and Tailwind CSS, and I am currently expanding my skills in Java backend development using Spring Boot. I enjoy learning new technologies and applying them to real-world projects to improve performance and user experience.

I have developed multiple projects, including web applications and landing pages, and I continuously focus on writing clean, maintainable code. I am actively seeking opportunities where I can contribute, learn, and grow as a developer while building impactful software solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Frontend Developer",
    company: "Airry Rides.",
    description: `Contributed to Airry Rides, a rental platform offering features such as shop location search, navigation, and scheduling.
Developed the frontend using React Native to ensure cross-platform compatibility for mobile users.
Integrated a MongoDB backend with APIs for seamless communication, hosted on AWS for enhanced performance and scalability.
Focused on user convenience by providing real-time updates and implementing robust security measures.
Engaged in web development using React, Tailwind CSS, and Vercel to create responsive and visually appealing interfaces.`,
    technologies: [
      "React Native",
      "React.js",
      "vercel",
      "mongoDB",
      "AWS",
      "Tailwind CSS",
    ],
  },
  {
    year: "2022 - 2023",
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    description: `Developed three web applications: Music-E app, Quiz app, and Calculator.
Implemented user interfaces for each application to enhance user engagement and functionality.
Integrated a language translator feature into the applications to support multilingual users.`,
    technologies: ["HTML", "CSS", "ReactJS"],
  },
];

export const PROJECTS = [
  {
    title: "Flood Risk Assessment Aystem",
    image: project1,
    description:
      "Flood Risk Assessment System is a web-based application that analyzes environmental and geographical data to identify flood-prone areas. It helps users assess flood risks, visualize potential impact zones, and support early decision-making for disaster management and prevention.",
    technologies: ["Next.js", "FastAPI", "Python", "Google Gemini API"]

  },
  {
    title: "expense-tracker-app",
    image: project2,
    description:
      "A comprehensive mobile application built with React Native and Expo for tracking personal expenses and managing multiple wallets.",
    technologies: [
  "React Native (Expo)",
  "Firebase Authentication",
  "Cloud Firestore",
  "React Navigation",
  "React Native Reanimated",
  "React Native Element Dropdown",
  "React Native Gifted Charts",
  "Phosphor Icons"
],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "Portfolio Website is a modern, responsive personal portfolio built to showcase projects, skills, and experience. It features a clean UI, smooth animations, and optimized performance to create an engaging user experience while highlighting professional work and technical expertise",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Guest House Landing Page",
    image: project4,
    description:
      "This project is a simple and responsive guest house landing page designed to showcase accommodation details in a clean and attractive way. It focuses on a user-friendly layout, smooth visuals, and a modern interface to create a welcoming experience for visitors and improve guest engagement.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
];

export const CONTACT = {
  address:
    "Kharadi, Pune, Maharashtra, India",
  phoneNo: "+91 772 581 2910 ",
  email: "mohit2002pc@gmail.com",
};
