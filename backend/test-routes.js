console.log('Testing route imports...');

try {
    console.log('1. Importing projectRoutes...');
    const projectRoutes = (await import('./routes/projectRoutes.js')).default;
    console.log('✅ projectRoutes imported:', typeof projectRoutes);

    console.log('2. Importing experienceRoutes...');
    const experienceRoutes = (await import('./routes/experienceRoutes.js')).default;
    console.log('✅ experienceRoutes imported:', typeof experienceRoutes);

    console.log('3. Importing skillRoutes...');
    const skillRoutes = (await import('./routes/skillRoutes.js')).default;
    console.log('✅ skillRoutes imported:', typeof skillRoutes);

    console.log('4. Importing contactRoutes...');
    const contactRoutes = (await import('./routes/contactRoutes.js')).default;
    console.log('✅ contactRoutes imported:', typeof contactRoutes);

    console.log('\n✅ All routes imported successfully!');
    process.exit(0);
} catch (error) {
    console.error('❌ Error:', error.message);
    console.error(error.stack);
    process.exit(1);
}
