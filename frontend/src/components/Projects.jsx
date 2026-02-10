import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/projects`);
                const data = Array.isArray(response.data) ? response.data : [];
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setProjects([]);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) return null;

    return (
        <section id="projects" className="py-24 bg-surface/30">
            <div className="container-padding max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Selected Work</h2>
                    <p className="text-secondary max-w-2xl text-lg">
                        A collection of projects exploring performance, accessibility, and modern web technologies.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id || index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group bg-surface border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Image Placeholder or Actual Image */}
                            <div className="aspect-video bg-background relative overflow-hidden">
                                {project.image ? (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-surface/50">
                                        <span className="text-secondary text-sm font-mono">No Preview Available</span>
                                    </div>
                                )}

                                {/* Overlay Links */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-surface rounded-full text-primary hover:bg-primary hover:text-background transition-colors"
                                            title="View Source"
                                        >
                                            <Github className="w-5 h-5" />
                                        </motion.a>
                                    )}
                                    {project.liveLink && (
                                        <motion.a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-3 bg-surface rounded-full text-primary hover:bg-primary hover:text-background transition-colors"
                                            title="Visit Site"
                                        >
                                            <ExternalLink className="w-5 h-5" />
                                        </motion.a>
                                    )}
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-primary group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-secondary hover:text-primary transition-colors"
                                        >
                                            <ArrowUpRight className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>

                                <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies?.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs font-mono px-2 py-1 bg-background border border-border rounded text-secondary/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
