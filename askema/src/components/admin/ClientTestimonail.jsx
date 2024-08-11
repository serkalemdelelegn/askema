import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const AddClientTestimonial = () => {
  const { id } = useParams();
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    testimonial: '',
    image: null
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/clients/${id}`);
          setFormData({
            name: response.data.name,
            testimonial: response.data.testimonial,
            image: response.data.image
          });
        } catch (error) {
          console.error('Error fetching testimonial:', error);
        }
      };
      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('testimonial', formData.testimonial);
    formDataToSend.append('image', formData.image);

    try {
      let response;
      if (id) {
        response = await axios.put(`http://localhost:3000/clients/${id}`, formDataToSend);
      } else {
        response = await axios.post('http://localhost:3000/clients', formDataToSend);
      }

      if (response.data.success) {
        setSuccess(response.data.message);
        // navigate('/admin/testimonials'); // Redirect to the list view
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setError('An error occurred while submitting the testimonial. Please try again later.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <NavLink to="/admin/news" >
          Add News
      </NavLink>
      <h2>Add Testimonail Client</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label>Testimonial:</label>
          <textarea name="testimonial" value={formData.testimonial} onChange={handleChange} style={{ width: '100%', padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }}></textarea>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} style={{ marginBottom: '15px' }} />
        </div>
        <button type="submit" style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Add Client</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {success && <div style={{ color: 'green' }}>{success}</div>}
    </div>
  );
};

export default AddClientTestimonial;
