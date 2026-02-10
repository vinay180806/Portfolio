import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.findAll({
            order: [['order', 'ASC'], ['createdAt', 'DESC']]
        });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching projects', error: error.message });
    }
});

// Get single project
router.get('/:id', async (req, res) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching project', error: error.message });
    }
});

// Create project (for admin use)
router.post('/', async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (error) {
        res.status(400).json({ message: 'Error creating project', error: error.message });
    }
});

// Update project (for admin use)
router.put('/:id', async (req, res) => {
    try {
        const [updated] = await Project.update(req.body, {
            where: { id: req.params.id }
        });
        if (!updated) {
            return res.status(404).json({ message: 'Project not found' });
        }
        const project = await Project.findByPk(req.params.id);
        res.json(project);
    } catch (error) {
        res.status(400).json({ message: 'Error updating project', error: error.message });
    }
});

// Delete project (for admin use)
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Project.destroy({
            where: { id: req.params.id }
        });
        if (!deleted) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting project', error: error.message });
    }
});

export default router;
