import express from 'express';
import { body, validationResult } from 'express-validator';
import Contact from '../models/Contact.js';
import { sendContactNotification } from '../config/email.js';

const router = express.Router();

// Submit contact form
router.post(
    '/',
    [
        body('name').trim().notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Valid email is required'),
        body('message').trim().notEmpty().withMessage('Message is required'),
    ],
    async (req, res) => {
        try {
            // Validate request
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const { name, email, message } = req.body;

            // Save to database
            const contact = await Contact.create({
                name,
                email,
                message,
                status: 'new'
            });

            // Send email notification (don't wait for it)
            sendContactNotification({ name, email, message }).catch(err =>
                console.error('Email send error:', err)
            );

            res.status(201).json({
                message: 'Thank you for your message! I will get back to you soon.',
                contact: {
                    id: contact.id,
                    name: contact.name,
                    email: contact.email
                }
            });
        } catch (error) {
            console.error('Contact form error:', error);
            res.status(500).json({ message: 'Error submitting contact form', error: error.message });
        }
    }
);

// Get all contacts (admin only)
router.get('/', async (req, res) => {
    try {
        const contacts = await Contact.findAll({
            order: [['createdAt', 'DESC']]
        });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching contacts', error: error.message });
    }
});

// Update contact status (admin only)
router.patch('/:id/status', async (req, res) => {
    try {
        const { status } = req.body;
        const [updated] = await Contact.update(
            { status },
            { where: { id: req.params.id } }
        );

        if (!updated) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        const contact = await Contact.findByPk(req.params.id);
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: 'Error updating contact status', error: error.message });
    }
});

export default router;
