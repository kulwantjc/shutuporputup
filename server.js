const express = require('express');
const next = require('next');
const cors = require('cors');

const dev = process.env.Node_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
    .prepare()
    .then(() => {
        const server = express();

        server.get('*', (req, res) => {
            return handle(req, res);
        });
        server.listen(3100, err => {
            if (err) throw err;
            console.log('> Ready on http://localhost: 3100');
        });
    })

    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
