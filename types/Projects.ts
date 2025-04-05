import { ProjectType } from "./ProjectTypes";
import Eduportal from "@/public/EduPortal.png";
import Gis from "@/public/GIS.png";
import Dog from "@/public/Collar.png";
import TSWS from "@/public/TSWS.jpg";
import TravelGo from "@/public/TravelGO.png"
import Github from "@/public/Git.jpg"
import ComingSoon from "@/public/ComingSoon.jpg";
import {
    faPython,
    faJs,
    faPhp,
    faHtml5,
    faCss3Alt,
    faBootstrap,
    faReact,
    faNodeJs,
    faAndroid,
    faFlutter,
} from "@fortawesome/free-brands-svg-icons";
import { faMicrochip, faDatabase } from "@fortawesome/free-solid-svg-icons";

export const ProjectsKo: ProjectType[] = [
    {
        title: "Teach Tech",
        description:
            "A platform for teachers and students to connect, share resources, and enhance the learning experience in specific block.",
        image: Github,
        link: "",
        github: "https://github.com/kyuremmmmz/BSIT1-11-1stSem-project-Teach-Tech-Recording-System-Portal-",
        technologies: [
            { name: "Python", icon: faPython },
            { name: "Tkinter", icon: faPython },
            { name: "MySQL", icon: faDatabase },
            { name: "MySQL Workbench", icon: faDatabase },
        ],
        year: "2023",
        category: "Desktop Application",
    },
    {
        title: "Travel Go V1",
        description:
            "A travel planning application that helps users find and book travel accommodations, activities, and itineraries.",
        image: Eduportal,
        link: "",
        github: "https://github.com/kyuremmmmz/Travel-Go",
        technologies: [
            { name: "PHP", icon: faPhp },
            { name: "MySQL", icon: faDatabase },
            { name: "HTML & CSS", icon: faHtml5 },
            { name: "JavaScript", icon: faJs },
            { name: "Bootstrap", icon: faBootstrap },
            { name: "Serper API", icon: faDatabase },
            { name: "Google Maps API", icon: faDatabase },
        ],
        year: "2024",
        category: "Web Application",
    },
    {
        title: "Travel Go Mobile V2",
        description:
            "An improved version of the Travel Go application, optimized for mobile devices with enhanced user experience.",
        image: TravelGo,
        link: "",
        github: "https://github.com/kyuremmmmz/travel-go-mobile-version",
        technologies: [
            { name: "Flutter", icon: faFlutter },
            { name: "Dart", icon: faJs },
            { name: "Supabase", icon: faDatabase },
            { name: "Google Maps API", icon: faDatabase },
            { name: "React JS", icon: faReact },
            { name: "Express JS", icon: faNodeJs },
            { name: "MongoDB", icon: faDatabase },
            { name: "Node JS", icon: faNodeJs },
        ],
        year: "2024",
        category: "Mobile Application",
    },
    {
        title: "Traditions Wellness Spa",
        description:
            "A wellness spa website that provides information about services, pricing, and booking options.",
        image: TSWS,
        link: "",
        github: "https://github.com/kyuremmmmz/traditions_wellness_spa_project",
        technologies: [
            { name: "HTML & CSS", icon: faHtml5 },
            { name: "JavaScript", icon: faJs },
            { name: "Tailwind CSS", icon: faCss3Alt },
            { name: "PHP", icon: faPhp },
            { name: "MySQL", icon: faDatabase },
            { name: "XAMPP", icon: faDatabase },
            { name: "Kotlin", icon: faAndroid },
            { name: "Android Studio", icon: faAndroid },
        ],
        year: "2024",
        category: "",
    },
    {
        title: "Edu Portal",
        description:
            "An educational portal for students to access resources, assignments, and communicate with teachers. Unfortunately the github repository still in private",
        image: Eduportal,
        link: "",
        github: "https://guthib.com/?fbclid=IwY2xjawHcmPlleHRuA2FlbQIxMAABHdcndKfOfHlo5eLvPHK7tsk8K2u5OcCav9OD7KH-Ij6eqOOfq8g-1n5sSw_aem_5HT411-q8mDKHr4vLT_p3w",
        technologies: [
            { name: "JAVA", icon: faJs },
            { name: "MySQL", icon: faDatabase },
            { name: "JDBC", icon: faDatabase },
        ],
        year: "2024",
        category: "Desktop Application",
    },
    {
        title: "Game Information Management System",
        description:
            "A system to manage game information, including player profiles, game statistics, and leaderboards.",
        image: Gis,
        link: "",
        github: "https://github.com/kyuremmmmz/GIS",
        technologies: [
            { name: "Laravel", icon: faPhp },
            { name: "PHP", icon: faPhp },
            { name: "MySQL", icon: faDatabase },
            { name: "HTML & CSS", icon: faHtml5 },
            { name: "JavaScript", icon: faJs },
            { name: "Bootstrap", icon: faBootstrap },
        ],
        year: "2024",
        category: "",
    },
    {
        title: "Dog Collar",
        description:
            "A smart dog collar application that tracks the dog's location and health metrics like bpm and heat rate using ESP 32 c3.",
        image: Dog,
        link: "",
        github: "https://github.com/hoophop/smart-collar",
        technologies: [
            { name: "ESP 32 C3", icon: faMicrochip },
            { name: "Firebase", icon: faDatabase },
            { name: "Arduino IDE", icon: faMicrochip },
            { name: "Flutter & Dart", icon: faFlutter },
        ],
        year: "",
        category: "",
    },
    {
        title: "Coming Soon",
        description:
            "There will be more projects coming here soon...",
        image: ComingSoon,
        link: "",
        github: "https://guthib.com/?fbclid=IwY2xjawHcmPlleHRuA2FlbQIxMAABHdcndKfOfHlo5eLvPHK7tsk8K2u5OcCav9OD7KH-Ij6eqOOfq8g-1n5sSw_aem_5HT411-q8mDKHr4vLT_p3w",
        technologies: [
        ],
        year: "",
        category: "",
    },
];