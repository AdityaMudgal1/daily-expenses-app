const Expense = require('../models/Expense');
const User = require('../models/User');
const { generateBalanceSheet } = require('../utils/generateBalanceSheet');

exports.createExpense = async (req, res) => {
    const { description, amount, paidBy, splitMethod, participants } = req.body;
    try {
        const newExpense = new Expense({ description, amount, paidBy, splitMethod, participants });
        await newExpense.save();
        res.status(200).json({ message: 'Expense added successfully', expense: newExpense });
    } catch (error) {
        res.status(400).json({ message: 'Error adding expense', error });
    }
};

exports.getUserExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find({ "participants.user": req.params.userId });
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching user expenses', error });
    }
};

exports.getAllExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(400).json({ message: 'Error fetching all expenses', error });
    }
};

exports.downloadBalanceSheet = async (req, res) => {
    try {
        const balanceSheet = await generateBalanceSheet();
        res.setHeader('Content-Disposition', 'attachment; filename=balance_sheet.txt');
        res.send(balanceSheet);
    } catch (error) {
        res.status(400).json({ message: 'Error generating balance sheet', error });
    }
};
