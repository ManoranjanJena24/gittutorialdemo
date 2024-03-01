const User = require('../models/user');

exports.postAddUser = (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const phone = req.body.phone.toString();

    console.log("Inside Add User")
    User.create({
        username: username,
        email: email,
        phone: phone
    })
        .then(result => {
            console.log("Created Product");
            res.json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        });
};



exports.getUsers = (req, res, next) => {
    console.log("inside GET users")
    User.findAll().then((users) => {
    console.log("fetched Users")
    res.json(users)
})
};


exports.postDeleteUser = (req, res, next) => {
    console.log("inside Delete")
    const userId = req.params.id
    User.findByPk(userId).then((user) => {
        return user.destroy();
    }).then((result) => {
        console.log("deleted")
        res.send('Deleted')
    }).catch((err) => {
        console.log(err)
    })



};