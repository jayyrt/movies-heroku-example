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
}

module.exports ={
    getMovies,
}
