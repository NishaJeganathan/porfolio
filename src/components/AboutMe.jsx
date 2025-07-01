import { Briefcase, AppWindow, Code } from "lucide-react"

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold"> Turning Ideas Into Impactful Code
                        </h3>
                        <p className="text-muted-foreground">
                            I'm a curious developer on a mission to build clean,
                            modern, and meaningful digital experiences. I enjoy
                            turning concepts into fully functional applications
                            and constantly expanding my skillset—from solving DSA
                            problems to exploring design and development tools.                        </p>
                        <p className="text-muted-forground">
                            I enjoy sharing what I learn and helping others grow.
                            Whether it’s discussing ideas, explaining concepts,
                            or just
                            brainstorming together, I love connecting with people.
                        </p>

                        <div className="flex felx-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> Resume
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web developemnt</h4>
                                    <p className="text-muted-foreground">
                                        Bridging backend mastery with frontend finesse—constantly
                                        learning, creating, and pushing boundaries.
                                    </p>

                                </div>

                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <AppWindow className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">App developemnt</h4>
                                    <p className="text-muted-foreground">
                                        Exploring Kotlin, Flutter, and everything
                                        in between to craft better, smarter software.
                                    </p>

                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Other Interests</h4>
                                    <p className="text-muted-foreground">
                                        Enjoy designing website flows and strengthening
                                        problem-solving skills through data structures and algorithms.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}