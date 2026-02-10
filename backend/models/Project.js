import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Project = sequelize.define('Project', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    techStack: {
        type: DataTypes.JSON, // Store array as JSON
        allowNull: false,
        defaultValue: []
    },
    githubLink: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'github_link'
    },
    liveLink: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'live_link'
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'projects',
    timestamps: true,
    underscored: true // Use snake_case for auto-generated fields
});

export default Project;
