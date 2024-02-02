const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/simple_blog';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
