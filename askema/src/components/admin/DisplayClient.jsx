import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const TestimonialsList = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get(`https://admin.askemaengineering.com/clients`);
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://admin.askemaengineering.com/clients/${id}`);
      setTestimonials(testimonials.filter(testimonial => testimonial.id !== id));
      alert('Testimonial deleted successfully!');
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('Error deleting testimonial. Please try again.');
    }
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <h1>Client Testimonials</h1>
      <NavLink to="/admin/addtestimonail">Add Testimonial</NavLink>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <h3>{testimonial.name}</h3>
            <p>{testimonial.testimonial}</p>
            <img src={testimonial.image} alt={testimonial.name} style={{ width: '100px', height: '100px' }} />
            <button onClick={() => handleDelete(testimonial.id)}>Delete</button>
            <NavLink to={`/admin/addtestimonial/${testimonial.id}`}>Edit</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsList;
