const express = require('express');
const connectDB = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorHandler = require('./src/middlewares/errorHandler');
const newsRoutes = require('./src/routes/newsRoutes');
const clientRoutes = require('./src/routes/clientRoutes')
const adminRoutes = require('./src/routes/adminRoutes');

const app = express();

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.use('/news', newsRoutes);
app.use('/clients', clientRoutes);
app.use('/identifyurself', adminRoutes);

app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
