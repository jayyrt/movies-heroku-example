require('dotevn').config()
const express = require('express');
const massive = require('massive');
const { getMovies, addMovies } = require('./movieController');

const app = express();

app.use(express.json());

massive({
    connectionString: process.env.CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    }
})
.then((dbInstance) => {
    app.set('db', dbInstance);
    console.log('Database connection established successfully');
})
.catch((e) => {
    console.log('DB connection problem: ', e)
});

app.get('/api/movies', getMovies);
app.post('/api/movies', addMovies);

const PORT = process.env.SERVER_PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
