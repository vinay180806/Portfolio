import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Github, Linkedin, Instagram, Youtube } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Error sending message:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-24 bg-surface/30">
            <div className="container-padding max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
                    <p className="text-secondary max-w-xl mx-auto text-lg">
                        Have a project in mind or want to discuss the latest in tech? I'm always open to new opportunities and conversations.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-4">Contact Details</h3>
                            <div className="space-y-4">
                                <a
                                    href="mailto:venkatavinaykilli@gmail.com"
                                    className="flex items-center gap-3 text-secondary hover:text-primary transition-colors group"
                                >
                                    <div className="p-2 bg-background border border-border rounded-lg group-hover:border-primary/50 transition-colors">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm">venkatavinaykilli@gmail.com</span>
                                </a>
                                <div className="flex items-center gap-3 text-secondary group">
                                    <div className="p-2 bg-background border border-border rounded-lg">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm">Remote / India</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-lg font-bold text-primary mb-4">Socials</h3>
                            <div className="flex gap-4">
                                <a href="https://github.com/vinay180806" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.linkedin.com/in/venkata-vinay-killi" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/vinay_verse.18" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="https://www.youtube.com/@VinayVerse18" target="_blank" rel="noopener noreferrer" className="p-2 bg-background border border-border rounded-lg text-secondary hover:text-primary hover:border-primary/50 transition-colors">
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-secondary">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder:text-secondary/30"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-secondary">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder:text-secondary/30"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-secondary">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-primary placeholder:text-secondary/30 resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                disabled={status === 'sending'}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-primary text-background font-bold rounded-lg hover:bg-white/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : status === 'success' ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Message Sent!</span>
                                    </>
                                ) : status === 'error' ? (
                                    <>
                                        <AlertCircle className="w-4 h-4" />
                                        <span>Error Sending</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
