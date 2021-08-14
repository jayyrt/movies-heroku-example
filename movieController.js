const getMovies = (req, res) => {
    //get our DB instance
    const db = req.app.get('db');
    //get our SQL query to fetch movies
    db.get_movies()
    .then((movies) => {
        res.status(200).send(movies);
    })
    .catch((e) => console.log(e))
    //respond with movies from DB
};

const addMovies = (req, res) => {
    //get our DB instance
    const db = req.app.get('db');
    //get user input from request
    const {
        title,
        runTime,
        inTheaters,
    } = req.body;
    //run SQL to add a movie
    db.add_movies(title, runTime, inTheaters)
    //.then => send back 200
}

module.exports ={
    getMovies,
    addMovies
}
