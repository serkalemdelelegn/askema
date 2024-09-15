import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const history = useHistory();
  

  const formContainerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px'
  };

  const h2Style = {
    marginBottom: '20px'
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const buttonHoverStyle = {
    backgroundColor: '#45a049'
  };

  const errorMessageStyle = {
    color: 'red'
  };

  const successMessageStyle = {
    color: 'green'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await axios.post(`https://admin.askemaengineering.com/identifyurself/checkCredentials`, formData);
      if (response.data.success) {
        setSuccess(response.data.message);
        history.push('/admin/news');
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Error signing in:', error);
      setError('An error occurred while signing in. Please try again later.');
    }
  };

  return (
    <div style={formContainerStyle}>
      <h2 style={h2Style}>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>Sign In</button>
      </form>
      {error && <div style={errorMessageStyle}>{error}</div>}
      {success && <div style={successMessageStyle}>{success}</div>}
    </div>
  );
};

export default SignIn;
