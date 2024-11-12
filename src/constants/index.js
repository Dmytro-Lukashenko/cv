import project1 from "../assets/projects/interview_buddy.jpg";
import project2 from "../assets/projects/smart_city.png";

export const HERO_CONTENT =
  "dedicated to creating stunning user interfaces with Vue.js framework and React.js library. I specialize in building robust web applications while effectively managing backend services and databases.";

export const ABOUT_TEXT = {
  firstParagraph:
    "With over three years of experience in development, I am a certified Vue.js developer specializing in building responsive web applications using both the VueJS framework and React.js library. Skilled in tackling complex challenges, I bring proficiency in advanced technologies, database management, and RESTful API development using Node.js and Express.js.",
  secondParagraph:
    "My active contributions to open-source projects like AntDesign, MSAL, VueSchool, and PrimeVue reflect my dedication to collaborative software development. Additionally, I have hands-on experience leveraging my expertise in dynamic team environments on commercial projects.",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/-lukashenko-dmytro/",
  github: "https://github.com/Dmytro-Lukashenko",
  telegram: "https://t.me/Dmytro_Lukashenko",
};

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Levi9",
    description: `Developed and maintained web applications using Vue.js, React.js, and Expess.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Vue.js", "React.js", "Express.js", "MongoDB"],
  },
  {
    year: "2021 - 2023",
    role: "Frontend Trainee",
    company: "Levi9",
    description: `Developing efficient, fast, and adaptive layouts for user interfaces, ensuring optimal performance and responsiveness.
Introducing ideas and solutions, optimizing and improving existing applications to meet modern web standards and user expectations.
`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Vue.js",
      "AntDesign",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Feedback App",
    image: project1,
    description:
      "Effective feedback collection tool that provides a way to capture the result of the interview and visualize it in all-in-one report.",
    technologies: ["HTML", "SCSS", "Typescript", "Vue.js", "AntDesign", "React.js", "MUI", "Express.js", "MongoDB"],
  },
  {
    title: "Smart City App",
    image: project2,
    description:
      "The WebUI admin panel for the service workers provides functionality for check and adjustment of the road control devices.",
    technologies: ["HTML", "CSS", "Vue.js 3", "PrimeVue"],
  },
];

export const CONTACT = {
  address: "Kyiv, Ukraine",
  phoneNo: "+38 066 622-39-91",
  email: "d.a.lukashenko@gmail.com",
};
