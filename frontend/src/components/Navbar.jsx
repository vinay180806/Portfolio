import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container-padding max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo Area */}
                <a href="#home" className="group flex items-center gap-2">
                    <div className="bg-surface border border-border p-2 rounded-lg group-hover:border-primary/50 transition-colors">
                        <Terminal className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-display font-bold text-lg leading-none tracking-wide text-primary">VINAY KILLI</span>
                        <span className="font-mono text-[10px] text-secondary tracking-wider">FULL STACK DEV</span>
                    </div>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex items-center gap-1 bg-surface/50 border border-border rounded-full px-2 py-1 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${activeSection === link.href.substring(1)
                                    ? 'text-background'
                                    : 'text-secondary hover:text-primary'
                                    }`}
                                onClick={() => setActiveSection(link.href.substring(1))}
                            >
                                {activeSection === link.href.substring(1) && (
                                    <motion.div
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-primary rounded-full"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 bg-primary text-background px-5 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors"
                    >
                        <span>Let's Talk</span>
                        <ArrowRight className="w-4 h-4" />
                    </motion.a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primary p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="container-padding py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-secondary hover:text-primary transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="mt-4 flex items-center justify-center gap-2 bg-primary text-background px-5 py-3 rounded-lg font-medium w-full"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span>Let's Talk</span>
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
