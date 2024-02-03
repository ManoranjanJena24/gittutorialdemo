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
    getUserData();
    // localStorage.setItem('users', JSON.stringify(users));
    event.target.reset();
   
}



function renderUsers(user24) {
    const ul = document.querySelector('ul');
    ul.innerHTML = '';
    user24.forEach((user, index) => {
        const li = document.createElement('li');
        li.textContent = `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            user24.splice(index, 1);
            // localStorage.setItem('users', JSON.stringify(users));
            addUser24(user24);
            getUserData();
        });
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            user24.splice(index, 1);
            addUser24(user24);
            // localStorage.setItem('users', JSON.stringify(users));
            getUserData();
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
    axios.post('https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0/userAppointmentDetails', user)
        .then(res => console.log(res))
        .catch(err => console.log(err))

}

function getUserData() {
    axios.get('https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0/userAppointmentDetails')
        .then((appointment) => {
            console.log(appointment);
            // for (var i = 0; i < appointment.data.length; i++){
            //     renderUsers(appointment.data[i]);
            // }
            renderUsers(appointment.data)
        })
        .catch(err => console.log(err))
    
}




document.addEventListener('DOMContentLoaded', getUserData);


