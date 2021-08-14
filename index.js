const express = require('express');
const massive = require('massive');
const { getMovies } = require('./movieController');

const app = express();

app.use(express.json());

massive({
    connectionString: 'postgres://ecmdqxtlkkdvbx:7a47c696b5d4a080135131653a1a541cf6e2d0f4416adabdc6eb92f98daa9eb2@ec2-34-233-114-40.compute-1.amazonaws.com:5432/dc8fpsadvnobjh',
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
})

app.get('/api/movies', getMovies)

const PORT = 5050;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
