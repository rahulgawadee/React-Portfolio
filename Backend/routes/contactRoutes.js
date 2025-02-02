import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const newMessage = new Contact(req.body);
  await newMessage.save();
  res.json({ message: 'Message received' });
});

export default router;