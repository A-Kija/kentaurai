console.log('Welcome to ZOO!');

window.addEventListener('load', _ => {

    const zol = document.querySelectorAll('ul#zoliaedziai li');

    console.log(zol);

    zol.forEach(z => {

        if (z.innerText == 'Laukinė kiaulė') {
            z.remove();
        }

    });

});