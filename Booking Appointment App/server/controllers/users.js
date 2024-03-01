const User = require('../models/user');

// exports.getAddProduct = (req, res, next) => {
//     res.render('admin/edit-product', {
//         pageTitle: 'Add Product',
//         path: '/admin/add-product',
//         formsCSS: true,
//         productCSS: true,
//         activeAddProduct: true,
//         editing: false
//     });
// };

// exports.postAddUser = (req, res, next) => {
//     const username = req.body.username;
//     const email = req.body.email;
//     const phone = req.body.phone;
//     req.user.createUser({
//         username: username,
//         email: email,
//         phone:phone
        

//     }).then((result) => {
//         console.log("Created Product")
//         // res.redirect('/admin/products')
//     }).catch((err) => {
//         console.log(err)
//     })

// };


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


// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findByPk(prodId).then((product) => {
//         return product.destroy();

//     }).then((result) => {
//         console.log("Deleted")
//         res.redirect('/admin/products')

//     }).catch((err) => {
//         console.log(err)

//     })


// };