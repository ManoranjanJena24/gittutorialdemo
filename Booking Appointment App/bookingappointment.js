// let users = [];
// let edit=false;
var url1 = "https://crudcrud.com/api/a94495b64971468dafcce7ca42ccfae0/userAppointmentDetails";
// var url = "https://crudcrud.com/api/ad994afcddaa41f78db001adac5d114e/userAppointmentDetails";
var url = "https://crudcrud.com/api/38e25a0fb6fb41fd90043d721265851f/userAppointmentDetails";
var id3;

// function handleFormSubmit(event) {
//     event.preventDefault();
//     const user = {
//         username: event.target.username.value,
//         email: event.target.email.value,
//         phone: event.target.phone.value,
//     };
//     // users.push(user);
//     if(edit==false)
//     addUser24(user);

//     else

//     // localStorage.setItem('users', JSON.stringify(users));
//     event.target.reset();

// }

let isEditMode = false; // Variable to track if in edit mode

function handleFormSubmit(event) {
    event.preventDefault();
    const user = {
        username: event.target.username.value,
        email: event.target.email.value,
        phone: event.target.phone.value,
    };

    if (isEditMode) {
        // If in edit mode, call editData function
        const userId = event.target.dataset.userId;
        console.log(id3)
        editData(id3, user);
    } else {
        // If not in edit mode, call addUser24 function
        addUser24(user);
    }

    // Reset form and switch back to submit button
    event.target.reset();
    switchToSubmitButton();
}

function switchToUpdateButton() {
    isEditMode = true;
    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = 'Update';
}

function switchToSubmitButton() {
    isEditMode = false;
    const submitButton = document.getElementById('submitButton');
    submitButton.textContent = 'Submit';
}

function editData(id1, user) {
    axios.put(`${url}/${id1}`, user)
        .then(res => {
            console.log(res);
            getUserData();
            switchToSubmitButton(); // Switch back to submit button after update
        })
        .catch(err => {
            console.error(err);
            // Handle CORS errors and provide user feedback
        });
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
        });
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => {
            document.getElementById('username').value = user.username;
            document.getElementById('email').value = user.email;
            document.getElementById('phone').value = user.phone;
            var id1 = user._id;
            id3 = id1
            console.log(id1);
            switchToUpdateButton(); // Switch to update button
        });
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        ul.appendChild(li);
    });
}


// function renderUsers(user24) {
//     const ul = document.querySelector('ul');
//     ul.innerHTML = '';
//     user24.forEach((user, index) => {
//         const li = document.createElement('li');
//         li.textContent = Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone};
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => {
//             var id = user._id
//             console.log(id)
//             deleteData(id);

//             // localStorage.setItem('users', JSON.stringify(users));


//         });
//         const editButton = document.createElement('button');
//         editButton.textContent = 'Edit';
//         editButton.addEventListener('click', () => {
//             document.getElementById('username').value = user.username;
//             document.getElementById('email').value = user.email;
//             document.getElementById('phone').value = user.phone;
//             var id1 = user._id
//             console.log(id1)
//             const updateUser={
//                 username:user.username,
//         email: user.email,
//         phone: user.phone,
//             }
//             editData(id1, updateUser);

//             // localStorage.setItem('users', JSON.stringify(users));




//         });
//         li.appendChild(deleteButton);
//         li.appendChild(editButton);
//         ul.appendChild(li);
//     });
// }

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



// function editData(id1, user) {
//     // Use the dynamic ID from the argument
//     console.log(user)
//     edit=true;
//     axios.put(${url}/${id1}, user)

//         .then(res => {
//             console.log(res);
//             // If necessary, delete the old entry after successful update
//             // deleteData(id1);
//             getUserData();
//         })
//         .catch(err => {
//             console.error(err);
//             // Handle CORS errors and provide user feedback
//         });
// }



function deleteData(id) {
    axios.delete(`${url} / ${id}`)
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