import 'bootstrap';

// window.addEventListener('load', _ => {

//     if (document.querySelector('.with-csr')) {

//         const checkedInput = document.querySelector(`#shape${shape}`);
//         checkedInput.checked = true;

//     }
// });



window.addEventListener('load', _ => {

    if (document.querySelector('.alert')) {

        setTimeout(_ => {
            document.querySelector('.alert').remove();
        }, 5000);

    }
});


