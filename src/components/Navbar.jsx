import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
    { names: "Home", href: "#hero" },
    { names: "About", href: "#about" },
    { names: "Skills", href: "#skills" },
    { names: "Projects", href: "#projects" },
]

export const Navbar = () => {
    const [isScrolled, setScrolled] = useState(false);
    const [isMenu, setMenu] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.screenY > 10)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (<nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
        <div className="container flex items-center justify-between px-20 py-2">
            <a className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground"> Nisha Jeganathan </span> Portfolio
                </span>
            </a>

            <div className="hidden md:flex space-x-8 ">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.names}</a>
                ))}
            </div>

            {/* mobile view */}
            <button onClick={() => setMenu((prev) => !prev)}
                className="md:hidden p-2 text-foreground z-50"> {isMenu ? <X size={24} /> : <Menu size={24} />}</button>
            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")}>
                <a className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Nisha Jeganathan </span> Portfolio
                    </span>
                </a>

                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            onClick={() => setMenu(false)}
                        >
                            {item.names}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </nav>)
}