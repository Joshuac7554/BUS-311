const expenseForm = document.getElementById('expense-form');
const expenseNameInput = document.getElementById('expense-name');
const expenseAmountInput = document.getElementById('expense-amount');
const expenseList = document.getElementById('expense-list');

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = expenseNameInput.value;
    const amount = parseFloat(expenseAmountInput.value);

    if (name && amount) {
        addExpense(name, amount);
        expenseNameInput.value = '';
        expenseAmountInput.value = '';
    }
});

function addExpense(name, amount) {
    const li = document.createElement('li');
    li.className = 'expense-item';
    li.innerHTML = `
        <span>${name}</span>
        <span>$${amount.toFixed(2)}</span>
    `;
    expenseList.appendChild(li);
}
