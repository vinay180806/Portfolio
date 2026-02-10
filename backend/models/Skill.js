import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Skill = sequelize.define('Skill', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    category: {
        type: DataTypes.ENUM('Frontend', 'Backend', 'Database', 'DevOps', 'Tools', 'Other'),
        allowNull: false
    },
    proficiency: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 100
        }
    },
    order: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'skills',
    timestamps: true,
    underscored: true
});

export default Skill;
