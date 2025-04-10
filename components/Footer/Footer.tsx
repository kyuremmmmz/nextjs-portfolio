import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-[#1e2530] text-white py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">CDBJ</h3>
                        <p className="text-gray-300 max-w-xs">
                            Bringing your digital ideas to life with creative solutions and technical expertise.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-white hover:text-[#00c2c2] transition-colors">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#00c2c2] transition-colors">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#00c2c2] transition-colors">
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="text-white hover:text-[#00c2c2] transition-colors">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Quick Links</h3>
                        <nav className="flex flex-col space-y-2">
                            <Link href="#home" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                Home
                            </Link>
                            <Link href="#about" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                About
                            </Link>
                            <Link href="#skills" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                Skills
                            </Link>
                            <Link href="#projects" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                Projects
                            </Link>
                            <Link href="#testimonials" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                Testimonials
                            </Link>
                            <Link href="#contact" className="text-gray-300 hover:text-[#00c2c2] transition-colors">
                                Contact
                            </Link>
                        </nav>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">Get In Touch</h3>
                        <p className="text-gray-300">
                            Have a project in mind? Let&apos;s discuss how I can help bring your vision to reality.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex h-10 items-center justify-center rounded-md bg-[#00c2c2] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#00c2c2]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#00c2c2]"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} CDBJ. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
