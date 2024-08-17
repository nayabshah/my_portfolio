import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  tailwindcss,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //     imageUrl: motion,
  //     name: "Motion",
  //     type: "Animation",
  // },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  // {
  //     imageUrl: sass,
  //     name: "Sass",
  //     type: "Frontend",
  // },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Smart24x7 Response Service Pvt. Ltd.",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "May 2022 - Jan 2024",
    points: [
      "Developed Microservices using NodeJS and ExpressJS.",
      "Developed authentication system with 2-factor-authentication , OTP generation, QR-Code generation and updating features.",
      "Built internal tool using NodeJS and Pupeteer.js to automate invoice generation which enables analytics team to increase reporting speed by 24%.",
      "Collaborate closely with senior developers to meticulously design, develop, and deploy scalable Node.js, express.js applications.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/nayabshah",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/ariba-rehman-40a77b280/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-blue",
    name: "Feedback App",
    description:
      "Developed a feature-rich feedback app in React, enabling users to add, delete, and update feedback with ratings.",
    link: "https://heuristic-ardinghelli-0cdc45.netlify.app",
  },
  {
    iconUrl: react,
    theme: "btn-back-green",
    name: "File Manager",
    description:
      "The File Manager built with React features a modern interface and drag-and-drop functionality, allowing users to easily manage files and folders. Users can organize, and preview files by dragging and dropping them into designated areas. The application supports folder creation, renaming, moving, and deleting files with intuitive drag-and-drop operations.",
    link: "https://react-arborist-file-manager.vercel.app/",
  },
  {
    iconUrl: react,
    theme: "btn-back-red",
    name: "Todo List",
    description:
      "A React DnD To-Do List App offers an interactive way to manage tasks using drag-and-drop functionality. Users can create, edit, and reorder tasks by dragging them within the list. Built with React and React DnD, the app provides a clean and intuitive interface for organizing to-do items efficiently. The drag-and-drop feature allows for easy task prioritization and organization, enhancing the overall user experience.",
    link: "https://reactdnd-kappa.vercel.app/",
  },
];
