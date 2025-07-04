import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils"
export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Contact
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                    {/* Left column */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Contact Details</h3>

                        {/* Email */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a
                                    href="mailto:jeganathannisha1@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                >
                                    jeganathannisha1@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Phone</h4>
                                <p className="text-muted-foreground">9444517990</p>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Location</h4>
                                <p className="text-muted-foreground">Chennai, TN, India</p>
                            </div>
                        </div>
                    </div>

                    {/* Right column: Contact Form */}
                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="Nisha Jeganathan"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    placeholder="jeganathannisha1@gmail.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hey there..."
                                />
                            </div>
                            <button
                                type="submit"
                                className={cn("cosmic-button w-full flex items-center jsutify-center gap-2",)}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
