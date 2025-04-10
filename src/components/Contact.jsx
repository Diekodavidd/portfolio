import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactWrapper = styled.section`
  color: #F5F5F5;
  padding: 6rem 2rem;
  position: relative;
  text-align: center;
`;

const GlassBox = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 3rem 2rem;
  backdrop-filter: blur(15px);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.15);
`;

const Title = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
`;

const Subtext = styled.p`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.07);
  border: none;
  border-radius: 10px;
  color: ${({ theme }) => theme.accent};
  font-size: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid #D4AF37;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem;
  background: rgba(255, 255, 255, 0.07);
  border: none;
  border-radius: 10px;
  resize: none;
  color: ${({ theme }) => theme.accent};
  height: 150px;

  &::placeholder {
    color: ${({ theme }) => theme.accent};
  }

  &:focus {
    outline: none;
    border: 1px solid #D4AF37;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background: #D4AF37;
  color: #0B0C2A;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #F5F5F5;
    color: #0B0C2A;
    box-shadow: 0 0 15px #D4AF37;
  }
`;

const Socials = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`;

const IconLink = styled.a`
  font-size: 1.5rem;
  color: #F5F5F5;
  transition: all 0.3s ease;

  &:hover {
    color: #D4AF37;
    transform: scale(1.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Change status message to "Sending..."
    setStatusMessage('Sending...');

    // Replace with your EmailJS service and template IDs
    emailjs.sendForm(
      'diekodavid',  // Replace with your service ID
      'template_b7lg6no', // Replace with your template ID
      e.target,           // The form element
      'j9vqokwSPVGjzrejr'      // Replace with your user ID
    )
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setStatusMessage('Error: Could not send message.');
        console.error(error);
      });
  };

  return (
    <ContactWrapper id="contact">
      <GlassBox
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Title>Let’s Make Magic Together</Title>
        <Subtext>I’m always open to talking about bold ideas, new projects or how we can build something magical.</Subtext>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <Button type="submit">Send Message</Button>
        </Form>

        <motion.p
          className="text-xl text-[#F5F5F5] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {statusMessage}
        </motion.p>

        <Socials>
          <IconLink href="https://github.com/Diekodavidd" target="_blank" rel="noreferrer"><FaGithub /></IconLink>
          <IconLink href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin /></IconLink>
          <IconLink href="mailto:yourmail@example.com"><FaEnvelope /></IconLink>
        </Socials>
        <motion.p
          className="text-xl text-[#F5F5F5] mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Got a project, idea, or just want to vibe? I’m one click away.
        </motion.p>
      </GlassBox>
    </ContactWrapper>
  );
};

export default Contact;
