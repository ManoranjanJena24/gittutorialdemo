const path = require('path');

const express = require('express');

const expenseController = require('../controllers/expenses'); //change

const router = express.Router();

// /users => GET
router.get('/expenses', expenseController.getExpenses);

router.post('/add-expense', expenseController.postAddExpense);

router.delete('/delete-expense/:id', expenseController.postDeleteExpense);




module.exports = router;
