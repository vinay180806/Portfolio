import dotenv from 'dotenv';
dotenv.config();

console.log('Testing imports...');

try {
    console.log('1. Importing sequelize config...');
    const { sequelize } = await import('./config/db.js');
    console.log('✅ DB config imported');

    console.log('2. Importing models...');
    const Project = (await import('./models/Project.js')).default;
    console.log('✅ Project model imported');

    const Experience = (await import('./models/Experience.js')).default;
    console.log('✅ Experience model imported');

    const Skill = (await import('./models/Skill.js')).default;
    console.log('✅ Skill model imported');

    const Contact = (await import('./models/Contact.js')).default;
    console.log('✅ Contact model imported');

    console.log('3. Testing database connection...');
    await sequelize.authenticate();
    console.log('✅ Database connected');

    console.log('\n✅ All imports successful!');
    process.exit(0);
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error);
    process.exit(1);
}
