import express from 'express';
import Experience from '../models/Experience.js';

const router = express.Router();

// Get all experiences
router.get('/', async (req, res) => {
    try {
        const experiences = await Experience.findAll({
            order: [['order', 'ASC'], ['createdAt', 'DESC']]
        });
        res.json(experiences);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching experiences', error: error.message });
    }
});

// Get single experience
router.get('/:id', async (req, res) => {
    try {
        const experience = await Experience.findByPk(req.params.id);
        if (!experience) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.json(experience);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching experience', error: error.message });
    }
});

// Create experience (for admin use)
router.post('/', async (req, res) => {
    try {
        const experience = await Experience.create(req.body);
        res.status(201).json(experience);
    } catch (error) {
        res.status(400).json({ message: 'Error creating experience', error: error.message });
    }
});

// Update experience (for admin use)
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Experience.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        const experience = await Experience.findByPk(req.params.id);
        res.json(experience);
    } catch (error) {
        res.status(400).json({ message: 'Error updating experience', error: error.message });
    }
});

// Delete experience (for admin use)
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Experience.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Experience not found' });
        }
        res.json({ message: 'Experience deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting experience', error: error.message });
    }
});

export default router;
