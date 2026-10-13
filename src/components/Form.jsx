import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //gemini 3.8 flash generated Regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const maxChars = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'description' && value.length > maxChars) return;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'El correo electrónico es obligatorio.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Ingrese un formato de correo válido.';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es obligatoria.';
    } else if (formData.description.length > maxChars) {
      newErrors.description = `Máximo ${maxChars} caracteres permitidos.`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Payload ready for dispatch (API, EmailJS, form endpoint)
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', description: '' });
  };

  return (
    <div className="card bg-dark text-white p-4 border-secondary shadow-sm">
      {submitted && (
        <Alert
          variant="success"
          dismissible
          onClose={() => setSubmitted(false)}
          className="py-2"
        >
          Mensaje enviado correctamente.
        </Alert>
      )}

      <Form onSubmit={handleSubmit} noValidate>
        {/* Optional Name */}
        <Form.Group className="mb-3" controlId="contactName">
          <Form.Label>Nombre (opcional)</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            className="bg-secondary text-white border-dark"
          />
        </Form.Group>

        {/* Required Validated Email */}
        <Form.Group className="mb-3" controlId="contactEmail">
          <Form.Label>Correo electrónico *</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="nombre@ejemplo.com"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            className="bg-secondary text-white border-dark"
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        {/* Description with Character Counter */}
        <Form.Group className="mb-3" controlId="contactDescription">
          <div className="d-flex justify-content-between align-items-center">
            <Form.Label>Mensaje *</Form.Label>
            <small
              className={
                formData.description.length >= maxChars
                  ? 'text-danger'
                  : 'text-muted'
              }
            >
              {formData.description.length} / {maxChars}
            </small>
          </div>
          <Form.Control
            as="textarea"
            rows={4}
            name="description"
            placeholder="Describe tu consulta..."
            value={formData.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
            className="bg-secondary text-white border-dark"
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Enviar mensaje
        </Button>
      </Form>
    </div>
  );
}