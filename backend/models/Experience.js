import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Experience = sequelize.define('Experience', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },
    startDate: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'start_date'
    },
    endDate: {
        type: DataTypes.STRING,
        allowNull: true,
        field: 'end_date'
    },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    responsibilities: {
        type: DataTypes.JSON,
        allowNull: true,
        defaultValue: []
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'experiences',
    timestamps: true,
    underscored: true
});

export default Experience;
