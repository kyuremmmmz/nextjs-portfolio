import { ProjectType } from "./ProjectTypes";
import Eduportal from "@/public/EduPortal.png";
import Gis from "@/public/GIS.png";
export const ProjectsKo: ProjectType[] = [
    {
        title: "Teach Tech",
        description: "A platform for teachers and students to connect, share resources, and enhance the learning experience in specific block.",
        image: Eduportal,
        link: "",
        github: "",
        technologies: ["Python", "Tkinter", "MySQL", "MySQL Workbench"],
        year: "2023",
        category: "Desktop Application"
    },
    {
        title: "Travel Go V1", 
        description: "A travel planning application that helps users find and book travel accommodations, activities, and itineraries.",
        image: Eduportal,
        link: "",
        github: "",
        technologies: ["PHP", "MYSQL", "XAMPP", "HTML & CSS", "JavaScript", "Bootstrap", "jQuery", "Ajax",  "Serper API", "Google Maps API"],
        year: "2024",
        category: "Web Application"
    },
    {
        title: "Travel Go Mobile V2",
        description: "An improved version of the Travel Go application, optimized for mobile devices with enhanced user experience.",
        image: Eduportal,
        link: "",
        github: "",
        technologies: ["Flutter", "Dart", "Supabase", "Google Maps API", "React JS", "Express JS", "MongoDB", "Node JS"],
        year: "2024",
        category: "Mobile Application"
    },
    {
        title: "Traditions Wellness Spa",
        description: "A wellness spa website that provides information about services, pricing, and booking options.",
        image: Eduportal,
        link: "",
        github: "",
        technologies: ["HTML & CSS", "JavaScript", "Tailwind CSS", "PHP", "MYSQL", "XAMPP", "Kotlin", "Android Studio"],
        year: "2024",
        category: ""
    },
    {
        title: "Edu Portal",
        description: "An educational portal for students to access resources, assignments, and communicate with teachers.",
        image: Eduportal,
        link: "",
        github: "",
        technologies: ["JAVA", "MYSQL", "JDBC"],
        year: "2024",
        category: "Desktop Application"
    },
    {
        title: "Game Information Management System",
        description: "A system to manage game information, including player profiles, game statistics, and leaderboards.",
        image: Gis,
        link: "",
        github: "",
        technologies: ["Laravel", "PHP", "MYSQL", "HTML & CSS", "JavaScript", "Bootstrap"],
        year: "2024",
        category: ""
    },
    {
        title: "Dog Collar",
        description: "A smart dog collar application that tracks the dog's location and health metrics like bpm and heat rate using ESP 32 c3.",
        technologies: ["ESP 32 C3", "Firebase", "Arduino IDE", "Flutter & Dart"],
        image: Gis,
        link: "",
        github: "",
        year: "",
        category: ""
    },
];