import React, { useState, useEffect } from 'react';
import axios from 'axios'; // You may need to install axios for making HTTP requests
import './NewsEdit.css';
import { NavLink} from 'react-router-dom';
import { useParams } from 'react-router-dom';

const NewsEdit = () => {
  const { id } = useParams(); // Get the ID from URL
  // const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    link: '',
    image: null,
    time: '',
    company: ''
  });

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`https://admin.askemaengineering.com/news/${id}`);
          setFormData({ ...response.data });
        } catch (error) {
          console.error('Error fetching news item:', error);
        }
      };

      fetchData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You may need to serialize the image data before sending it to the server
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('date', formData.date);
    formDataToSend.append('link', formData.link);
    formDataToSend.append('image', formData.image);
    formDataToSend.append('time', formData.time);
    formDataToSend.append('company', formData.company);

    try {
      if (id) {
        await axios.put(`https://admin.askemaengineering.com/news/${id}`, formData);
      } else {
        // console.log(formData.image, 'hey what do u think')
        await axios.post(`https://admin.askemaengineering.com/news`, formData);
      }
      alert('News updated successfully!');
      // navigate('/news');
    } catch (error) {
      console.error('Error submitting news:', error);
      alert('Error submitting news. Please try again later.');
    }
  };

  return (
    <div style={{ maxWidth: '650px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
        <NavLink to="/admin/addtestimonail" >
            Add Testimonail
        </NavLink>
        <br />
        <NavLink to="/admin/newsdisplay" >
            Display News
        </NavLink>
        <br />
        <NavLink to="/admin/clientdisplay" >
            Display Client
        </NavLink>
      
    
    <form onSubmit={handleSubmit} className='form-container'>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Description:
        <textarea name="description" value={formData.description} onChange={handleChange} />
      </label>
      <label>
        Date:
        <input type="date" name="date" value={formData.date} onChange={handleChange} />
      </label>
      <label>
        Time:
        <input type="time" name="time" value={formData.time} onChange={handleChange} />
      </label>
      <label>
        Link:
        <input type="text" name="link" value={formData.link} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default NewsEdit;
