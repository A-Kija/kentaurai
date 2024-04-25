console.log('API');

window.addEventListener('load', _ => {

const ul = document.querySelector('.users');    

// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(users => {
//         console.log(users);
//         let usersLi = '';

//         users.forEach(u => {
//             usersLi += '<li>' + u.name + '</li>';
//         });

//         ul.innerHTML = usersLi;

//     });

axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        console.log(res.data);
        let usersLi = '';

        res.data.forEach(u => {
            usersLi += '<li>' + u.company.catchPhrase + '</li>';
        });

        ul.innerHTML = usersLi;


    })



});



