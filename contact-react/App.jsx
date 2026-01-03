// React Project: Contact Page
// UI library: React Bootstrap
// Only Contact page is implemented

import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setError("All fields are required");
      setSuccess(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Invalid email");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container className="py-5">
      <h1 className="text-center mb-2">Contact Us</h1>
      <p className="text-center text-muted mb-4">
        This page is built using React and React Bootstrap
      </p>

      {success && <Alert variant="success">Message sent successfully!</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>

        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
}

export default App;
