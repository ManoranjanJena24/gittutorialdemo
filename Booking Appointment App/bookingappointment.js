let users = [];
var url1 = "https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0/userAppointmentDetails";
var url = "https://crudcrud.com/api/ad994afcddaa41f78db001adac5d114e/userAppointmentDetails";

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
            var id = user._id
            console.log(id)
            deleteData(id);

            // localStorage.setItem('users', JSON.stringify(users));


        });
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            var id1 = user._id
            console.log(id1)
            // editData(id1, user);
            deleteData(id1)

            // localStorage.setItem('users', JSON.stringify(users));




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
    axios.post(`${url}`, user)
        .then(res => {
            console.log(res)
            getUserData();
        })
        .catch(err => console.log(err))

}

function editData(id1, user) {

    axios.put(`${url}/${id1}`, user)
        .then(res => {
            console.log(res)
            axios.delete(`${url}/${id1}`)
                .then(res => {
                    console.log(res)
                    getUserData();
                })
                .catch(err => console.log(err))
            getUserData();
        })
        .catch(err => console.log(err))
}

function deleteData(id) {
    axios.delete(`${url}/${id}`)
        .then(res => {
            console.log(res)
            getUserData();
        })
        .catch(err => console.log(err))
}

function getUserData() {
    axios.get(`${url}`)
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
























