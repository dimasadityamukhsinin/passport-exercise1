const Movies = require('../Models/Movies');

module.exports = {
    getAllData : async (req, res) => {
        try {
            const movies = await Movies.find()
            if(movies){
                res.status(200).json({
                    message: 'Success to get All data',
                    movies
                })
            } else {
                res.status(400).json({
                    message: 'Failed to get all data'
                })
            }
        }
        catch(error){
            res.status(500).json({
                message: 'Internal Server Error'
            })
        }
      
        
    },
    detail : (req,res) => {
        const {id} = req.params;
        Movies.findOne({
            '_id': id
        })
        .then(result => {
            res.status(200).send({
                message: "Get data user",
                status: 200,
                result
            })
        })
        .catch(error => {
            console.log(error);
            res.status(500).send({
                message: "Internal server error",
                status: 500,
            })
        })
    },
    addOne: async (req, res) => {
        try {
            const {title, year, genre, description,url_trailer} = req.body
        const newMovies = await Movies.create({
            title,
            year,
            genre,
            description,
            url_trailer
        })
        if(newMovies) {
            res.send({
                message: 'success',
                newMovies,
            })
        } else {
            res.send({
                message: 'error',
            })
        }
    } catch (error) {
        console.log(error)
    }
        
    },
    update : (req, res) => {
        const {id} = req.params;
        Movies.findOneAndUpdate(
            { _id : id}, 
                req.body
            , (error, result) => {
                if(error){
                    res.send({
                        message: "error"
                    })
                }
                else {
                    res.send({
                        message: "success",
                    })
                }
            }
        )
    },
    deleteMovies : (req, res) => {
        const {id} = req.params;
        Movies.deleteOne(
            {
                _id : id
            },
            (error, result) => {
                if(error){
                    res.send({
                        message: "error"
                    })
                }
                else {
                    res.send({
                        message: "success",
                        result
                    })
                }
            }
        )
    }
}
