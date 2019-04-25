const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', (req, res) => {
    res.set('X-XSS-Protection', '0'); // disable chrome xss auditor
    res.send(`
        <form action="/hello" method="get">
            <div>
                <label for="name">what your name:</label>
                <input type="text" id="name" name="name">
            </div>
            <input type="submit" value="Submit">
        </form>
    `)
});

app.get('/hello', (req, res) => {
    res.set('X-XSS-Protection', '0'); // disable chrome xss auditor
    res.send(`
        <html>
        <body>
            hello ${req.query.name} 
        </body>
        </html>
    `)
});

app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
});