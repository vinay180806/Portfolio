import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowUpRight } from 'lucide-react';
import axios from 'axios';

const Experience = () => {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExperiences = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/experience`);
                const data = Array.isArray(response.data) ? response.data : [];
                setExperiences(data);
            } catch (error) {
                console.error('Error fetching experiences:', error);
                setExperiences([]);
            } finally {
                setLoading(false);
            }
        };

        fetchExperiences();
    }, []);

    if (loading) return null;

    return (
        <section id="experience" className="py-24 bg-background relative overflow-hidden">
            <div className="container-padding max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Experience</h2>
                    <div className="h-1 w-20 bg-primary/20 rounded-full" />
                </motion.div>

                <div className="relative border-l border-border ml-3 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id || index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Node */}
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-surface border border-primary/50 ring-4 ring-background" />

                            <div className="group relative bg-surface/30 hover:bg-surface/50 border border-transparent hover:border-border transition-colors rounded-xl p-6 md:p-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                                            {exp.role}
                                            {index === 0 && (
                                                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                                                    Current
                                                </span>
                                            )}
                                        </h3>
                                        <div className="flex items-center gap-2 text-primary">
                                            <span className="font-medium">{exp.company}</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-secondary font-mono">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            <span>{exp.duration || `${exp.startDate} - ${exp.endDate || 'Present'}`}</span>
                                        </div>
                                        {exp.location && (
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5" />
                                                <span>{exp.location}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <p className="text-secondary leading-relaxed mb-6 max-w-3xl">
                                    {exp.description}
                                </p>

                                {exp.responsibilities && exp.responsibilities.length > 0 && (
                                    <ul className="space-y-2">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-secondary/80 text-sm leading-relaxed">
                                                <ArrowUpRight className="w-4 h-4 text-primary/40 mt-0.5 flex-shrink-0" />
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
