import dotenv from 'dotenv';
import { sequelize } from './config/db.js';
import Project from './models/Project.js';
import Experience from './models/Experience.js';
import Skill from './models/Skill.js';

dotenv.config();

const seedData = async () => {
    try {
        // Test database connection
        await sequelize.authenticate();
        console.log('✅ Database connected successfully');

        // Sync all models (this will create tables if they don't exist)
        await sequelize.sync({ force: true }); // WARNING: This will drop existing tables
        console.log('✅ Database synced');

        // Seed Projects
        const projects = [
            {
                title: 'HerSafe – Women\'s Safety App',
                description: 'Developed a real-time crime hotspot detection system with an auto SOS trigger and video evidence storage on blockchain for secure, tamper-proof data. Integrated IPFS for decentralized storage, while building the user interface with React Native to provide intuitive, real-time safety alerts.',
                techStack: ['React Native', 'Blockchain', 'Gemini API', 'MongoDB', 'Random Forest', 'IPFS', 'Solidity', 'Remix IDE', 'Truffle Ganache'],
                githubLink: 'https://github.com/rahul-9429/HerSafe-Apk',
                liveLink: 'https://hersafe.vercel.app/',
                featured: true,
                order: 1,
            },
            {
                title: 'AI Blog',
                description: 'Developed a blog platform with AI-driven summarization for faster reading and content creation. Integrated Google Gemini API for intelligent content suggestions and blog summaries. Designed REST APIs with Next.js and used MongoDB for scalable blog and comment storage.',
                techStack: ['Next.js', 'MongoDB', 'Gemini API', 'REST APIs', 'Tailwind CSS'],
                githubLink: 'https://github.com/rahul-9429/Ai-Enabled-Blog',
                liveLink: 'https://ai-blog-two-cyan.vercel.app/',
                featured: true,
                order: 2,
            },
        ];

        await Project.bulkCreate(projects);
        console.log('✅ Projects seeded successfully');

        // Seed Experience
        const experiences = [
            {
                company: 'The Arambh',
                role: 'Full Stack Developer',
                location: 'Remote',
                startDate: 'Jan 2025',
                endDate: 'Present',
                duration: 'Jan 2025 – Present',
                description: 'Designed and developed responsive web applications using modern technologies and best practices.',
                responsibilities: [
                    'Designed and developed a responsive static website using Next.js and Tailwind CSS for a client\'s personal brand',
                    'Implemented clean UI components with mobile-first design principles to ensure seamless experience across devices',
                ],
                order: 1,
            },
            {
                company: 'Competitive Hacks',
                role: 'Freelance Backend Developer',
                location: 'Remote',
                startDate: 'July 2025',
                endDate: 'August 2025',
                duration: 'July 2025 – August 2025',
                description: 'Developed production-ready backend architecture for a full-stack quiz platform with focus on security and scalability.',
                responsibilities: [
                    'Designed and developed a production-ready backend architecture for a full-stack quiz platform with modular APIs',
                    'Implemented secure authentication workflows using Next.js API routes, including token management and protected endpoints',
                    'Integrated MongoDB Atlas with structured schemas to manage quizzes, user activity, and payment transactions effectively',
                ],
                order: 2,
            },
        ];

        await Experience.bulkCreate(experiences);
        console.log('✅ Experiences seeded successfully');

        // Seed Skills
        const skills = [
            // Languages
            { name: 'JavaScript', category: 'Frontend', proficiency: 85, order: 1 },
            { name: 'Python', category: 'Backend', proficiency: 80, order: 2 },
            { name: 'Java', category: 'Backend', proficiency: 75, order: 3 },
            { name: 'C', category: 'Backend', proficiency: 70, order: 4 },
            { name: 'SQL', category: 'Database', proficiency: 65, order: 5 },
            { name: 'HTML', category: 'Frontend', proficiency: 90, order: 6 },
            { name: 'CSS', category: 'Frontend', proficiency: 85, order: 7 },

            // Frameworks & Libraries
            { name: 'React', category: 'Frontend', proficiency: 85, order: 8 },
            { name: 'React Native', category: 'Frontend', proficiency: 80, order: 9 },
            { name: 'Next.js', category: 'Frontend', proficiency: 85, order: 10 },
            { name: 'Node.js', category: 'Backend', proficiency: 80, order: 11 },
            { name: 'Tailwind CSS', category: 'Frontend', proficiency: 90, order: 12 },
            { name: 'Axios', category: 'Frontend', proficiency: 85, order: 13 },

            // Databases
            { name: 'MongoDB', category: 'Database', proficiency: 85, order: 14 },
            { name: 'PostgreSQL', category: 'Database', proficiency: 75, order: 15 },

            // Tools
            { name: 'Git & GitHub', category: 'Tools', proficiency: 85, order: 16 },
            { name: 'VS Code', category: 'Tools', proficiency: 90, order: 17 },
            { name: 'Postman', category: 'Tools', proficiency: 80, order: 18 },
            { name: 'Excel', category: 'Tools', proficiency: 75, order: 19 },

            // Blockchain & AI
            { name: 'Blockchain', category: 'Other', proficiency: 70, order: 20 },
            { name: 'Solidity', category: 'Other', proficiency: 65, order: 21 },
            { name: 'Gemini API', category: 'Other', proficiency: 80, order: 22 },
            { name: 'IPFS', category: 'Other', proficiency: 70, order: 23 },

            // Concepts
            { name: 'REST APIs', category: 'Backend', proficiency: 85, order: 24 },
            { name: 'DSA', category: 'Other', proficiency: 75, order: 25 },
            { name: 'OOP', category: 'Other', proficiency: 80, order: 26 },
            { name: 'DBMS', category: 'Database', proficiency: 75, order: 27 },
        ];

        await Skill.bulkCreate(skills);
        console.log('✅ Skills seeded successfully');

        console.log('\n🎉 All data seeded successfully!');
        console.log(`📊 Seeded: ${projects.length} projects, ${experiences.length} experiences, ${skills.length} skills`);
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding data:', error);
        process.exit(1);
    }
};

seedData();
