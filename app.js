const express = require('express');
const app = express();

app.get('/image', (req, res) => {
    console.log("rq came");
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
