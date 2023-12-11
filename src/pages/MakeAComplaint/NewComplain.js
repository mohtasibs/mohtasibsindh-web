import React, { useState } from 'react';
import nodemailer from 'nodemailer';

const NewComplain = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a Nodemailer transporter with your SMTP settings
    const transporter = nodemailer.createTransport({
      host: 'gmail',
      port: 587,
      secure: false, // Set to true if using SSL
      auth: {
        user: 'mtariq255255@gmail.com',
        pass: 'Heart@34',
      },
    });

    // Send mail with defined transport object
    await transporter.sendMail({
      from: 'mtariq255255@gmail.com',
      to: 'mtariq255255@gmail.com',
      subject: 'New Contact Form Submission',
      text: `
        Name: ${formData.name}
        Email: ${formData.email}
        Message: ${formData.message}
      `,
    });

    alert('Email sent successfully!');
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" onChange={handleChange}></textarea>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewComplain;
