import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/skills`);
                const data = Array.isArray(response.data) ? response.data : [];
                setSkills(data);
            } catch (error) {
                console.error('Error fetching skills:', error);
                setSkills([]);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    // Group skills by category if possible, or just display them cleanly
    const categories = {
        "Frontend": skills.filter(s => ['React', 'Next.js', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'TypeScript'].some(k => s.name?.includes(k))),
        "Backend": skills.filter(s => ['Node', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Java', 'SQL'].some(k => s.name?.includes(k))),
        "Tools & Others": skills.filter(s => !['React', 'Next.js', 'Tailwind', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Node', 'Express', 'MongoDB', 'PostgreSQL', 'Python', 'Java', 'SQL'].some(k => s.name?.includes(k)))
    };

    if (loading) return null;

    return (
        <section id="skills" className="py-24 bg-background">
            <div className="container-padding max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Technical Arsenal</h2>
                    <p className="text-secondary max-w-2xl text-lg">
                        The tools and technologies I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {Object.entries(categories).map(([category, categorySkills], catIndex) => (
                        categorySkills.length > 0 && (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            >
                                <h3 className="text-xl font-bold text-primary mb-6 border-l-2 border-primary pl-3">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {categorySkills.map((skill, index) => (
                                        <motion.div
                                            key={skill.id || index}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-surface border border-border rounded-lg hover:border-primary/40 transition-colors"
                                        >
                                            <span className="text-secondary font-medium">{skill.name}</span>
                                            {/* Optional: Minimal proficiency indicator */}
                                            {/* <div className="h-1 w-full bg-border mt-2 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-primary/50" 
                                                    style={{ width: `${skill.proficiency}%` }}
                                                />
                                            </div> */}
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )
                    ))}

                    {/* Fallback if categorization fails or for "All Skills" view */}
                    {Object.values(categories).every(arr => arr.length === 0) && (
                        <div className="col-span-2 flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.id || index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 bg-surface border border-border rounded-lg hover:border-primary/40 transition-colors"
                                >
                                    <span className="text-secondary font-medium">{skill.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Skills;
