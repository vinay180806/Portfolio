import { motion } from 'framer-motion';
import { FileText, Download, Eye } from 'lucide-react';

const Resume = () => {
    // Replace with your actual resume URL
    const resumeUrl = '/resume.pdf';

    const handleView = () => {
        window.open(resumeUrl, '_blank');
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Venkata_Vinay_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="py-24 bg-background border-t border-border">
            <div className="container-padding max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block p-4 rounded-full bg-surface border border-border mb-8">
                        <FileText className="w-12 h-12 text-primary" />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Resume</h2>
                    <p className="text-secondary max-w-xl mx-auto text-lg mb-12">
                        Want a deeper dive into my experience? Download my resume for a comprehensive look at my skills and background.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            onClick={handleView}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-primary text-background font-bold rounded-lg hover:bg-white/90 transition-colors"
                        >
                            <Eye className="w-5 h-5" />
                            <span>View Resume</span>
                        </motion.button>

                        <motion.button
                            onClick={handleDownload}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center justify-center gap-2 px-8 py-3 bg-surface border border-border text-primary font-medium rounded-lg hover:bg-border transition-colors"
                        >
                            <Download className="w-5 h-5" />
                            <span>Download PDF</span>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
