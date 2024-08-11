import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './NewsList.css'; // Import CSS

const NewsList = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewsItems = async () => {
      try {
        const response = await axios.get('http://localhost:3000/news');
        const arrayBufferToBase64 = (buffer) => {
          let binary = '';
          const bytes = new Uint8Array(buffer);
          const len = bytes.byteLength;
          for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
          }
          return window.btoa(binary);
        };
        const processedData = await Promise.all(response.data.map(async (news) => {
          const base64Image = arrayBufferToBase64(news.image.data.data);
          const imageUrl = `data:image/jpeg;base64,${base64Image}`;
          return { ...news, imageUrl };
        }));
        setNewsItems(processedData);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/news/${id}`);
      setNewsItems(newsItems.filter(item => item.id !== id));
      alert('News deleted successfully!');
    } catch (error) {
      console.error('Failed to delete news item:', error);
      alert('Error deleting news. Please try again.');
    }
  };

  if (loading) {
    return <div className='loading'>Loading...</div>;
  }

  return (
    <div className="news-list">
      <h1>News List</h1>
      <NavLink to="/admin/news">Add News</NavLink>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Time</th>
            <th>Link</th>
            <th>Company</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {newsItems.map(item => (
            console.log('Image URL:', item._id),
            <tr key={item.id}>
              <td><img src={item.imageUrl} width={200} alt="News Image" /></td>
              <td>{item.title}</td>
              <td>{item.description}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.link}</td>
              <td>{item.company}</td>
              <td>
                <button onClick={() => handleDelete(item._id)}>Delete</button>
                <NavLink to={`/admin/newsedit/${item._id}`} className="edit-link">
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsList;
