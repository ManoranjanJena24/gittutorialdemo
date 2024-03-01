const path = require('path');
var cors=require('cors')

const express = require('express');
const bodyParser = require('body-parser');

// const errorController = require('./controllers/error');
const sequelize = require('./util/database')

const User = require('./models/user')


const app = express();
app.use(cors())

app.set('view engine', 'ejs');
app.set('views', 'views');

// const adminRoutes = require('./routes/admin');
// const shopRoutes = require('./routes/shop');
const userRoutes=require('./routes/users')

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    User.findByPk(1).then((user) => {
        req.user = user
        next();
    }).catch((err) => {
        console.log(err)
    })

})



app.use(userRoutes)


sequelize.sync({
    // force: true  //these should not be done in production becoz we donot want to overwrite the table everytime we run

})
    .then((result) => {

        return User.findByPk(1)
    }).then((user) => {
        if (!user) {
            return User.create({
                username: 'Manoranjan',
                email: 'xyz@gmail.com',
                phone: 1222222112

            })

        }
        return Promise.resolve(user);
    }).then((user) => {
        // console.log(user)
        app.listen(3000); 

    }).catch((err) => {
        console.log(err)
    })



// sequelize.sync({
//     // force: true  //these should not be done in production becoz we donot want to overwrite the table everytime we run

// })
//     .then((result) => {
//         app.listen(3000);
//     }).catch((err) => {
//         console.log(err)
//     })



