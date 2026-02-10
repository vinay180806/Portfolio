import express from 'express';
import Skill from '../models/Skill.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
    try {
        const skills = await Skill.findAll({
            order: [['order', 'ASC'], ['createdAt', 'DESC']]
        });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills', error: error.message });
    }
});

// Get skills by category (MUST come before /:id route)
router.get('/category/:category', async (req, res) => {
    try {
        const skills = await Skill.findAll({
            where: { category: req.params.category },
            order: [['order', 'ASC']]
        });
        res.json(skills);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skills by category', error: error.message });
    }
});

// Get single skill
router.get('/:id', async (req, res) => {
    try {
        // Check if id is numeric
        if (isNaN(req.params.id)) {
            return res.status(400).json({ message: 'Invalid skill ID' });
        }
        const skill = await Skill.findByPk(req.params.id);
        if (!skill) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json(skill);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching skill', error: error.message });
    }
});

// Create skill (for admin use)
router.post('/', async (req, res) => {
    try {
        const skill = await Skill.create(req.body);
        res.status(201).json(skill);
    } catch (error) {
        res.status(400).json({ message: 'Error creating skill', error: error.message });
    }
});

// Update skill (for admin use)
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Skill.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        const skill = await Skill.findByPk(req.params.id);
        res.json(skill);
    } catch (error) {
        res.status(400).json({ message: 'Error updating skill', error: error.message });
    }
});

// Delete skill (for admin use)
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Skill.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Skill not found' });
        }
        res.json({ message: 'Skill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting skill', error: error.message });
    }
});

export default router;
