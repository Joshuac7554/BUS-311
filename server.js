const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

let expenses = [];

app.get('/api/expenses', (req, res) => {
    res.json(expenses);
});

app.post('/api/expenses', (req, res) => {
    const { name, amount } = req.body;
    if (name && amount) {
        const newExpense = { name, amount };
        expenses.push(newExpense);
        res.status(201).json(newExpense);
    } else {
        res.status(400).send('Invalid expense data');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
