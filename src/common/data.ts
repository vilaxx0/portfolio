export type Item = { title: string; description: string };
export interface Project {
  title?: string;
  gitLink?: string;
  coverPhoto?: string;
  projectPhotos?: string[];
}

export const projects: Project[] = [
  {
    title: "Chess Maps",
    gitLink: "https://github.com/vilaxx0/chess-maps",
    coverPhoto: "../assets/projects/chess-maps.png",
    projectPhotos: [
      "../assets/projects/chess-maps-1.jpg",
      "../assets/projects/chess-maps-2.jpg",
      "../assets/projects/chess-maps-3.jpg",
      "../assets/projects/chess-maps-4.jpg",
    ],
  },
  {
    title: "Chess Maps",
    gitLink: "https://github.com/vilaxx0/chess-maps",
    coverPhoto: "../assets/projects/chess-maps.png",
    projectPhotos: [
      "../assets/projects/chess-maps-1.jpg",
      "../assets/projects/chess-maps-2.jpg",
      "../assets/projects/chess-maps-3.jpg",
      "../assets/projects/chess-maps-4.jpg",
    ],
  },
  {
    title: "Chess Maps",
    gitLink: "https://github.com/vilaxx0/chess-maps",
    coverPhoto: "../assets/projects/chess-maps.png",
    projectPhotos: [
      "../assets/projects/chess-maps-1.jpg",
      "../assets/projects/chess-maps-2.jpg",
      "../assets/projects/chess-maps-3.jpg",
      "../assets/projects/chess-maps-4.jpg",
    ],
  },
  // {
  //   title: "Vilo Chats",
  //   gitLink: "https://github.com/vilaxx0/vilo-chats",
  //   coverPhoto: "../assets/projects/vilo-chats.png",
  //   projectPhotos: [
  //     "../assets/projects/vilo-chats-1.png",
  //     "../assets/projects/vilo-chats-2.png",
  //     "../assets/projects/vilo-chats-3.png",
  //     "../assets/projects/vilo-chats-4.png",
  //   ],
  // },
  // {
  //   title: "Family Pay",
  //   gitLink: "https://github.com/vilaxx0/familypay",
  //   coverPhoto: "../assets/projects/family-pay.png",
  //   projectPhotos: [
  //     "../assets/projects/family-pay-1.png",
  //     "../assets/projects/family-pay-2.png",
  //     "../assets/projects/family-pay-3.png",
  //     "../assets/projects/family-pay-4.png",
  //   ],
  // },
];

export const educationItems: Item[] = [
  {
    title: "Bachelor of Science, Software Engineering",
    description: "Fontys University of Applied Sciences",
  },
  {
    title: "High School Diploma",
    description: "K. Donelaičio Gymnasium",
  },
];
export const jobsItems: Item[] = [
  {
    title: "Frontend Engineer via ALTEN",
    description: "Pie Medical Imaging",
  },
  {
    title: "Technical Software Consultant",
    description: "ALTEN Nederland",
  },
  {
    title: "Software Engineer (Internship)",
    description: "Signify N.V.",
  },
  {
    title: "Mobile Developer (Internship)",
    description: "Connectural B.V.",
  },
];

export const skillsBackend = [
  {
    language: "C#",
    level: "Advanced",
  },
  {
    language: "Python",
    level: "Proficient",
  },
  {
    language: ".NET Core",
    level: "Proficient",
  },
  {
    language: "Express.js",
    level: "Proficient",
  },
  {
    language: "Django",
    level: "Intermediate",
  },
  {
    language: "Firebase",
    level: "Intermediate",
  },
  {
    language: "MongoDB",
    level: "Intermediate",
  },
  {
    language: "Laravel",
    level: "Familiar",
  },
  {
    language: "MySQL",
    level: "Familiar",
  },
];

export const skillsFrontend = [
  {
    language: "TypeScript/Javascript",
    level: "Advanced",
  },
  {
    language: "React",
    level: "Advanced",
  },
  {
    language: "HTML",
    level: "Advanced",
  },
  {
    language: "CSS",
    level: "Proficient",
  },
  {
    language: "Angular",
    level: "Intermediate",
  },
];

export const skillsMobile = [
  {
    language: "Dart",
    level: "Intermediate",
  },
  {
    language: "Flutter",
    level: "Intermediate",
  },
  {
    language: "React Native",
    level: "Intermediate",
  },
  {
    language: "Kotlin",
    level: "Intermediate",
  },
  {
    language: "Android SDK",
    level: "Intermediate",
  },
];

export const otherSkills = [
  {
    language: "Git",
    level: "Proficient",
  },
  {
    language: "OOP",
    level: "Proficient",
  },
  {
    language: "SQL & PL/SQL",
    level: "Intermediate",
  },
  {
    language: "Docker",
    level: "Intermediate",
  },
  {
    language: "C/C++",
    level: "Intermediate",
  },
  {
    language: "Linux",
    level: "Intermediate",
  },
];

// export const skillsDevops = [
//   {
//     language: "Docker",
//     level: "Proficient",
//   },
//   {
//     language: "Kubernetes",
//     level: "Intermediate",
//   },
//   {
//     language: "AWS",
//     level: "Intermediate",
//   },
//   {
//     language: "GCP",
//     level: "Intermediate",
//   },
//   {
//     language: "Azure",
//     level: "Intermediate",
//   },
//   {
//     language: "Jenkins",
//     level: "Intermediate",
//   },
//   {
//     language: "Git",
//     level: "Intermediate",
//   },
// ];
