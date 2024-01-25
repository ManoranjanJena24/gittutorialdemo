let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

function handleFormSubmit(event) {
    event.preventDefault();
    const expense = {
        amount: event.target.amount.value,
        description: event.target.description.value,
        category: event.target.category.value,
    };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    event.target.reset();
    renderExpenses();
}

function renderExpenses() {
    const expensesList = document.getElementById('expensesList');
    expensesList.innerHTML = '';

    expenses.forEach((expense, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
      ${expense.amount} - ${expense.description} - ${expense.category}
      <button type="button" class="btn btn-danger btn-sm float-right ml-2" onclick="deleteExpense(${index})">Delete</button>
      <button type="button" class="btn btn-warning btn-sm float-right" onclick="editExpense(${index})">Edit</button>
    `;
        expensesList.appendChild(li);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}

function editExpense(index) {
    const expense = expenses[index];
    document.getElementById('amount').value = expense.amount;
    document.getElementById('description').value = expense.description;
    document.getElementById('category').value = expense.category;
    expenses.splice(index, 1);
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
}

document.addEventListener('DOMContentLoaded', renderExpenses);
