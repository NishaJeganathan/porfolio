import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/starBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "@/components/AboutMe"
import { Skills } from "../components/Skills"
import { Projects } from "../components/Projects"
import { ContactSection } from "../components/Contact"
export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-forground overflow-x-hidden">
            {/*Theme doggle*/}
            <ThemeToggle />

            {/*Bckground effects*/}
            <StarBackground />
            {/*Navbar*/}

            <Navbar />
            {/* Main Content */}

            <main>
                <HeroSection />
                <AboutMe />
                <Skills />
                <Projects />
                <ContactSection />
            </main>

            {/*Foter */}
        </div>
    )
}