import { motion } from 'framer-motion';
import { Code, Database, Globe, Layers } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-surface/30">
            <div className="container-padding max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-start">

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-display font-bold mb-8">
                            About Me
                        </h2>

                        <div className="space-y-6 text-lg text-secondary leading-relaxed">
                            <p>
                                I'm a <strong className="text-primary font-medium">Full Stack Developer</strong> specializing in building exceptional digital experiences.
                                Currently, I'm focused on accessible, human-centered products at <strong className="text-primary font-medium">The Arambh</strong>.
                            </p>
                            <p>
                                My journey in tech is driven by a desire to solve complex problems with elegant solutions.
                                Whether I'm architecting a backend system or refining a user interface, I prioritize
                                performance, scalability, and code quality.
                            </p>
                            <p>
                                When I'm not coding, I'm creating technical content to help others navigate the
                                ever-evolving landscape of web development.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-12">
                            <div className="p-4 rounded-xl bg-background border border-border">
                                <h4 className="text-3xl font-bold text-primary mb-1">3</h4>
                                <p className="text-sm text-secondary font-mono">Projects Completed</p>
                            </div>
                            <div className="p-4 rounded-xl bg-background border border-border">
                                <h4 className="text-3xl font-bold text-primary mb-1">1+</h4>
                                <p className="text-sm text-secondary font-mono">Years Experience</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-8">
                                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                                    <Globe className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold mb-2">Web Development</h3>
                                    <p className="text-sm text-secondary">Responsive, performant websites built with modern frameworks.</p>
                                </div>
                                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                                    <Database className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold mb-2">Backend Systems</h3>
                                    <p className="text-sm text-secondary">Scalable APIs and database architectures.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                                    <Code className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold mb-2">Clean Code</h3>
                                    <p className="text-sm text-secondary">Maintainable, testable, and efficient codebases.</p>
                                </div>
                                <div className="p-6 bg-background rounded-2xl border border-border hover:border-primary/30 transition-colors">
                                    <Layers className="w-8 h-8 text-primary mb-4" />
                                    <h3 className="font-bold mb-2">UI/UX Design</h3>
                                    <p className="text-sm text-secondary">Intuitive interfaces with seamless interactions.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
