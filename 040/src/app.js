import axios from 'axios';

function rand(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

window.addEventListener('load', _ => {

    // const readButton = document.querySelector('#r');
    // const writeButton = document.querySelector('#w');
    // const digitsDiv = document.querySelector('.digits');

    // let counter = 0;


    // writeButton.addEventListener('click', _ => {

    //     const data = {
    //         digit: ++counter
    //     }

    //     axios.post('http://localhost/write', data)
    //     .then(res => {
    //         console.log(res.data);
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });

    // });

    // readButton.addEventListener('click', _ => {

    //     axios.get('http://localhost/read')
    //     .then(res => {
    //         let html = '';
    //         res.data.digits.forEach(d => {
    //             html += `<span>${d}</span>`;
    //         });
    //         digitsDiv.innerHTML = html;
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     });


    // });


    const sd = document.querySelector('.super-digit');

    sd.innerText = rand(0, 9);



});