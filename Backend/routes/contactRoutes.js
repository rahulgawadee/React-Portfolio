const express = require("express");
const Contact = require("../models/Contact");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// Email Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Route to handle contact form submission
router.post("/", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Save to database
    const newMessage = new Contact({ name, email, subject, message });
    await newMessage.save();

    // Send Email
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Message received and email sent!" });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to process message." });
  }
});

module.exports = router;
