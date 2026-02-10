import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Validate DATABASE_URL exists
if (!process.env.DATABASE_URL) {
    console.error('❌ ERROR: DATABASE_URL is not defined in .env file');
    process.exit(1);
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Set to console.log to see SQL queries
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // For Neon and other cloud providers
        }
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ PostgreSQL Connected');

        // Sync all models with database
        await sequelize.sync({ alter: true }); // Use { force: true } to drop tables
        console.log('✅ Database synced');
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

export { sequelize, connectDB };
export default connectDB;
