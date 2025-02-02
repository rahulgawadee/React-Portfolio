import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post('/', async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

export default router;