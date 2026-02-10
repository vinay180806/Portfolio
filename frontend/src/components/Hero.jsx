import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Instagram, Youtube } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container-padding max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border mb-6">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-secondary text-xs uppercase tracking-wider font-medium">Available for work</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6 text-primary">
                        Building digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                            experiences.
                        </span>
                    </h1>

                    <p className="text-secondary text-lg md:text-xl max-w-lg leading-relaxed mb-8">
                        I'm Vinay, a Full Stack Developer and Tech Content Creator.
                        I build accessible, pixel-perfect, and performant web applications.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <motion.b
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-primary text-background px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                        >
                            View Projects
                        </motion.b>
                        <motion.b
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 rounded-lg font-medium border border-border hover:bg-surface transition-colors text-primary"
                        >
                            Contact Me
                        </motion.b>
                    </div>

                    <div className="flex items-center gap-6 mt-12">
                        <a href="https://github.com/vinay180806" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/in/venkata-vinay-killi" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="mailto:venkatavinaykilli@gmail.com" className="text-secondary hover:text-primary transition-colors">
                            <Mail className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/vinay_verse.18" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.youtube.com/@VinayVerse18" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>

                </motion.div>

                {/* Visual Element (Code Block or Abstract Shape) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="relative hidden lg:block"
                >
                    <div className="bg-surface border border-border rounded-xl p-6 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Fake Code Editor */}
                        <div className="flex items-center gap-2 mb-4 border-b border-border/50 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>

                        <div className="font-mono text-sm space-y-2 text-secondary">
                            <div className="flex">
                                <span className="text-blue-400 mr-2">const</span>
                                <span className="text-yellow-200">developer</span>
                                <span className="text-secondary mx-2">=</span>
                                <span className="text-secondary">{`{`}</span>
                            </div>
                            <div className="pl-6">
                                <span className="text-purple-300">name:</span>
                                <span className="text-green-300 ml-2">'Vinay Killi',</span>
                            </div>
                            <div className="pl-6">
                                <span className="text-purple-300">role:</span>
                                <span className="text-green-300 ml-2">'Full Stack Developer',</span>
                            </div>
                            <div className="pl-6 transition-colors hover:text-primary cursor-default">
                                <span className="text-purple-300">stack:</span>
                                <span className="text-secondary ml-2">[</span>
                                <span className="text-green-300">'React', 'Next.js', 'Node.js'</span>
                                <span className="text-secondary">],</span>
                            </div>
                            <div className="pl-6">
                                <span className="text-purple-300">location:</span>
                                <span className="text-green-300 ml-2">'Remote',</span>
                            </div>
                            <div className="pl-6">
                                <span className="text-purple-300">status:</span>
                                <span className="text-green-300 ml-2">'Building awesome things'</span>
                            </div>
                            <div>
                                <span className="text-secondary">{`};`}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.a
                href="#about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-secondary hover:text-primary transition-colors cursor-pointer"
            >
                <ArrowDown className="w-5 h-5" />
            </motion.a>
        </section>
    );
};

export default Hero;
