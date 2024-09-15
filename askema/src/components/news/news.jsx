import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './news.css';


function News() {
    const [newsItems, setNewsItems] = useState([]);
    const [ imageUrl, setImageUrl] = useState(null)
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://admin.askemaengineering.com/news`);
                function arrayBufferToBase64(buffer) {
                    let binary = '';
                    let bytes = new Uint8Array(buffer);
                    let len = bytes.byteLength;
                    for (let i = 0; i < len; i++) {
                        binary += String.fromCharCode(bytes[i]);
                    }
                    return window.btoa(binary);
                }
                
                const processedData = await Promise.all(response.data.map(async (news) => {
                    const base64Image = arrayBufferToBase64(news.image.data.data);
                    const imageUrl = `data:image/jpeg;base64,${base64Image}`;
                    return { ...news, imageUrl };
                }));
                // Resolve promises
                console.log(response.headers.get('Content-Type'));
                console.log('here', response.data[0].image.data.data, imageUrl)
                const resolvedData = await Promise.all(processedData);
                setNewsItems(resolvedData);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchData();
    }, []);

    console.log(newsItems)

    return (
        <section id="news">
            <h2>Our new stories</h2>
            <div className="news_container">
                {newsItems.map((news) => (
                    console.log('Image URL:', news.imageUrl),
                    console.log('Image Data:', news.image),
                    <div className="news-item" key={news._id}>
                        <img src={news.imageUrl} alt="News Image" />
                        <a href={news.link}>{news.title}</a>
                        <p>{news.description}</p>
                        <p>{news.date}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default News;
