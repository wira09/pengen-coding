import Image from "next/image";

// Array of tool objects with name and icon properties
export const toolsSections = [
  // Kode Editor
  {
    name: "Visual Studio Code",
    iconURL: "/tools/vscode.png",
    description: "Code Editor",
    kelasURL: "/",
  },
  // Bahasa Pemrograman
  {
    name: "PHP",
    iconURL: "/tools/PHP.png",
    description: "Language",
    kelasURL: "/",
  },
  {
    name: "JavaScript",
    iconURL: "/tools/js.png",
    description: "Language",
    kelasURL: "/",
  },
  {
    name: "Go",
    iconURL: "/tools/go.png",
    description: "Language",
    kelasURL: "/",
  },
  {
    name: "Node JS",
    iconURL: "/tools/nodejs.png",
    description: "Language",
    kelasURL: "/",
  },
  // Framework
  {
    name: "Bootstrap",
    iconURL: "/tools/bootstrap.png",
    description: "Framework",
    kelasURL: "/",
  },
  {
    name: "Tailwind CSS",
    iconURL: "/tools/tailwind.png",
    description: "Framework",
    kelasURL: "/",
  },
  {
    name: "React",
    iconURL: "/tools/reactjs.png",
    description: "Framework",
    kelasURL: "/",
  },
  {
    name: "Express JS",
    iconURL: "/tools/express.png",
    description: "Framework",
    kelasURL: "/",
  },
  {
    name: "Laravel",
    iconURL: "/tools/laravel.png",
    description: "Framework",
    kelasURL: "/",
  },
  // Database
  {
    name: "MySQL",
    iconURL: "/tools/Mysql.png",
    description: "Database",
    kelasURL: "/",
  },
  {
    name: "MongoDB",
    iconURL: "/tools/mongoDB.png",
    description: "Database",
    kelasURL: "/",
  },
  {
    name: "Sqlite",
    iconURL: "/tools/Sqlite.png",
    description: "Database",
    kelasURL: "/",
  },
  // Design
  {
    name: "Figma",
    iconURL: "/tools/figma.png",
    description: "Design App",
    kelasURL: "/",
  },
  {
    name: "Canva",
    iconURL: "/tools/canva.png",
    description: "Design App",
    kelasURL: "/",
  },
  // Tools
  {
    name: "Github",
    iconURL: "/tools/github.png",
    description: "Tools",
    kelasURL: "/",
  },
  {
    name: "Git",
    iconURL: "/tools/Git.png",
    description: "Tools",
    kelasURL: "/",
  },
  {
    name: "Gitlab",
    iconURL: "/tools/gitlab.png",
    description: "Tools",
    kelasURL: "/",
  },
];

const ToolsPlaceholder = () => {
  return <div>tools</div>;
};

export default ToolsPlaceholder;
