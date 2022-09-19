const express = require('express');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/userDB');
const userSchema = new mongoose.Schema({
    email: String,
    password: String
});

const cigarSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    description: String,
    img: String
});

cigarSchema.plugin(mongoosePaginate);

const User = new mongoose.model('User', userSchema);
const Bolivar = new mongoose.model('Bolivar', cigarSchema);
const Cohiba = new mongoose.model('Cohiba', cigarSchema);


// app.get('/bolivar', function(req, res) {
//     Bolivar.paginate({},((err, result) => {
//         if(err) {
//             console.log(err);
//         } else if(result) {
//             res.send(result);
//         }
//     }))
// })
app.get('/bolivar', function(req, res) {
    Bolivar.paginate({}, {page: req.query.page, limit: 3})
        .then(response => res.send(response))
        .catch(err => console.log(err))
});

//
// app.get('/cohiba', function(req, res) {
//     Cohiba.find({},((err, result) => {
//         if(err) {
//             console.log(err);
//         } else if(result) {
//             res.send(result);
//         }
//     }))
// })
app.get('/cohiba', function(req, res) {
    Cohiba.paginate({}, {page: req.query.page, limit: 3})
        .then(response => res.send(response))
        .catch(err => console.log(err))
});



app.post('/register', function(req, res) {
    User.findOne({email: req.body.email}, function(err, foundUser) {
        if(foundUser) {
            res.send({message: 'Such user already exists, please login'});
        } else {
            bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
                const newUser = new User({
                    email: req.body.email,
                    password: hash
                });
                newUser.save(function(err) {
                    if(err) {
                        console.log(err);
                    } else {
                        res.send({message: 'You have registered successfully, please log in!'});
                    }
                });
            });
        }
    });
});


app.post('/login', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({email: email}, function(err, foundUser) {
        if(err) {
            res.send({message: err});
        } else {
            if(foundUser) {
                bcrypt.compare(password, foundUser.password, function(err, result) {
                    if(result === true) {
                        res.send({foundUser: foundUser, loginStatus: true});
                    } else {
                        res.send({message: 'Wrong email or password, please try again'});
                    }
                });
            } else {
                res.send({message:'No such user exists'});
            }
        }
    });
});



app.listen(PORT, function() {
    console.log('Server is running');
})
