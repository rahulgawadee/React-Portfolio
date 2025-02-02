import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  technologies: [String],
  link: String,
  image: String,
});

export default mongoose.model('Project', ProjectSchema);