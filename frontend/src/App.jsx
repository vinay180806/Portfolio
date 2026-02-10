import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import { Terminal } from 'lucide-react';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate minimal loading
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence mode="wait">
            {loading ? (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-background"
                >
                    <div className="flex flex-col items-center gap-4">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="bg-surface border border-border p-4 rounded-xl"
                        >
                            <Terminal className="w-8 h-8 text-primary" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-1"
                        >
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-primary rounded-full animate-bounce"></span>
                        </motion.div>
                    </div>
                </motion.div>
            ) : (
                <div className="relative min-h-screen bg-background text-primary selection:bg-primary/20 selection:text-primary">
                    <Navbar />

                    <main>
                        <Hero />
                        <About />
                        <Experience />
                        <Projects />
                        <Skills />
                        <Contact />
                        <Resume />
                    </main>

                    <footer className="py-8 bg-surface border-t border-border mt-12">
                        <div className="container-padding max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-background border border-border p-1.5 rounded-lg">
                                    <Terminal className="w-4 h-4 text-primary" />
                                </div>
                                <span className="font-display font-bold text-primary">VINAY KILLI</span>
                            </div>
                            <p className="text-secondary text-sm">
                                &copy; {new Date().getFullYear()} Vinay Killi. All Rights Reserved.
                            </p>
                        </div>
                    </footer>
                </div>
            )}
        </AnimatePresence>
    );
}

export default App;
