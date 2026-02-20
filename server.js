require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// View Engine
app.set("view engine", "ejs");

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const pageRoutes = require('./routes/pageRoutes');
app.use('/', pageRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});