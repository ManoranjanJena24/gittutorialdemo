let users = [];


function handleFormSubmit(event) {
    event.preventDefault();
    const user = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };
    // users.push(user);
    addUser24(user);
   
    // localStorage.setItem('users', JSON.stringify(users));
    event.target.reset();
    // renderUsers();
}



function renderUsers() {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    users.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `Username: ${ user.username }, Email: ${ user.email }, Phone: ${ user.phone }`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            users.splice(index, 1);
            // localStorage.setItem('users', JSON.stringify(users));
            addUser24(users);
            // renderUsers();
        });
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            users.splice(index, 1);
            addUser24(users);
            // localStorage.setItem('users', JSON.stringify(users));
            // renderUsers();
        });
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
    });
}

function addUser24(user) {
    
    // axios.post('https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0', {
    //     User: users,
        

    // })
    //     .then(res => console.log(res))
    //     .catch(err => console.log(err))
    axios.post('https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0/userAppointmentDetails',user)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}





document.addEventListener('DOMContentLoaded', renderUsers);



