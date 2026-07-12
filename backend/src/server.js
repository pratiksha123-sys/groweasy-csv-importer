require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
// Increase JSON payload limit
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Main global routing baseline
app.use('/api', routes);

const PORT = 5001; // Change from 5000 to 5001
app.listen(PORT, () => {
    console.log(`🚀 Processing Engine live on port ${PORT}`);
});