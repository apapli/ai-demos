const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON in the request body
app.use(bodyParser.json());

// POST endpoint
app.post('/api/data', (req, res) => {
    // Dummy JSON array for the response
    const jsonArray = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
    ];

    // Sending the JSON array as the response
    res.json(jsonArray);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
