const { v4: uuidv4 } = require('uuid');
const News = require('../models/newsModel');

const getNews = async (req, res) => {
  const { newsId } = req.params;
  try {
    if (newsId) {
      const news = await News.findById(newsId);
      if (news) {
        res.json(news);
      } else {
        res.status(404).json({ message: 'News not found' });
      }
    } else {
      const news = await News.find();
      res.json(news);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const createNews = async (req, res) => {
  const { title, description, date, link, time, company } = req.body;
  const image = {
    name: req.file.originalname,
    data: req.file.buffer,
    contentType: req.file.mimetype
  };
  try {
    const newNews = new News({
      title,
      description,
      date,
      link,
      image,
      time,
      company
    });
    await newNews.save();
    res.status(200).json(newNews);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const updateNews = async (req, res) => {
  const { newsId } = req.params;
  const { title, description, date, link, time, company } = req.body;
  try {
    const updatedNews = await News.findByIdAndUpdate(
      newsId,
      { title, description, date, link, time, company },
      { new: true }
    );
    if (updatedNews) {
      res.json(updatedNews);
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

const deleteNews = async (req, res) => {
  const { newsId } = req.params;
  try {
    const deletedNews = await News.findByIdAndDelete(newsId);
    if (deletedNews) {
      res.json({ message: 'News deleted successfully' });
    } else {
      res.status(404).json({ message: 'News not found' });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = { getNews, createNews, updateNews, deleteNews };
