const express = require('express');
const {
  addExpense,
  getUserExpenses,
  getOverallExpenses,
  downloadBalanceSheet
} = require('../controllers/expenseController');
const router = express.Router();

router.post('/', addExpense);
router.get('/user/:userId', getUserExpenses);
router.get('/', getOverallExpenses);
router.get('/download', downloadBalanceSheet);

module.exports = router;
