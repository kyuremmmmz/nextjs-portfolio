import { StaticImageData } from "next/image";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Technology = {
    name: string;
    icon: IconProp;
};

export type ProjectType = {
    title: string;
    description: string;
    image: StaticImageData;
    link: string;
    github: string;
    technologies: Technology[];
    year: string;
    category: string;
};