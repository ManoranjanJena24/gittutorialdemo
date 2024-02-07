var url = "https://crudcrud.com/api/467383d9da044a4b93a3b7e3c2c4f632/addTableData"

let expense1 = JSON.parse(localStorage.getItem('expenses')) || [];
let expense2 = JSON.parse(localStorage.getItem('expenses')) || [];
let expense3 = JSON.parse(localStorage.getItem('expenses')) || [];

function handleFormSubmit(event) {
    event.preventDefault();
    const expense = {
        amount: event.target.amount.value,
        dish: event.target.dish.value,
        table: event.target.table.value,
    };
    axios.post(url, expense).then(res => {
        // console.log(res.data)
        getTableData();
        // renderExpenses();
    })
        .catch(err => console.log(err))
}

function getTableData() {
    axios.get(url).then((data) => {
        // console.log(data.data)
        renderExpenses(data.data)
    })

}

function renderExpenses(tables) {
    const expensesList1 = document.getElementById('expensesList1');
    const expensesList2 = document.getElementById('expensesList2');
    const expensesList3 = document.getElementById('expensesList3');

    expensesList1.innerHTML = '';
    expensesList2.innerHTML = '';
    expensesList3.innerHTML = '';

    tables.forEach(expense => {
        const id = expense._id
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `${expense.amount} - ${expense.dish} - ${expense.table}
        <button type="button" class="btn btn-danger btn-sm float-right" onclick="deleteExpense('${expense.table}', '${id}')">Delete</button>

       
        `;

        if (expense.table === 'table1') {
            expensesList1.appendChild(li);
        } else if (expense.table === 'table2') {
            expensesList2.appendChild(li);
        } else if (expense.table === 'table3') {
            expensesList3.appendChild(li);
        }
    });
}



function deleteExpense(table, id) {
    console.log(id)
    const deleteUrl = `${url}/${id}`;

    axios.delete(deleteUrl)
        .then(response => {
            console.log('Expense deleted successfully:', response.data);
            getTableData(); // Refresh the expenses list after deletion
        })
        .catch(error => {
            console.error('Error deleting expense:', error);
        });
}




document.addEventListener('DOMContentLoaded', getTableData);