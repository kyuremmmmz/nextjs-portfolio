import { StaticImageData } from "next/image"

export type ProjectType = {
    title: string
    description: string
    image: string | StaticImageData
    link: string
    github: string
    technologies: string[]
    year: string
    category: string
}