import axios from 'axios';

window.addEventListener('load', _ => {

    const input = document.querySelector('input');
    const button = document.querySelector('button');

    button.addEventListener('click', _ => {

        const animal = input.value;

        input.value = '';

        axios.post('http://localhost/add-animal', {animal})
        .then(res => {
            console.log(res.data);
            getAllAnimals();
        })
        .catch(error => {
            console.log(error)
        });

    });

    document.querySelector('.a-z').addEventListener('click', _ => {
        getAllAnimals('asc');
    });
    
    document.querySelector('.z-a').addEventListener('click', _ => {
        getAllAnimals('desc');
    });

    const getAllAnimals = (sort = '') => {
        const ul = document.querySelector('ul');
        axios.get('http://localhost/get-animals?sort=' + sort)
        .then(res => {
            let html = '';
            res.data.animals.forEach(a => {
                html += `
                <li>
                    <span>${a.animal}</span>
                    <a href="http://localhost/show-animal/${a.id}">show</a>
                </li>
                `;
            });
            ul.innerHTML = html;
        })
        .catch(error => {
            console.log(error)
        });
    }




    getAllAnimals();
});