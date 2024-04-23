console.log('products.js');
 
const html = `
<div class="product">
    <div>
        <div class="id">ID:{{id}}</div>
        <div class="title">{{title}}</div>
        <div class="price">{{price}}eur</div>
    </div>
    <div>
        <button type="button" value="{{id}}" class="gray --edit">Edit</button>
        <button type="button" value="{{id}}" class="red --delete">Delete</button>
    </div>
</div>
`;


window.addEventListener('load', _ => {

    const LAST_ID_LS = 'productsLastSavedId';
    const PRODUCTS_LS = 'productsList';

    const listHtml = document.querySelector('.--list');
    const closeButtons = document.querySelectorAll('.--close');
    const createModal = document.querySelector('.modal--create');
    const storeButton = createModal.querySelector('.--submit');
    const createButton = document.querySelector('.--create');
    
    
    const getId = _ => {
        const id = localStorage.getItem(LAST_ID_LS);
        if (null === id) {
            localStorage.setItem(LAST_ID_LS, 1);
            return 1;
        }
        localStorage.setItem(LAST_ID_LS, parseInt(id) + 1);
        return parseInt(id) + 1;
    }
    
    const write = data => {
        localStorage.setItem(PRODUCTS_LS, JSON.stringify(data));
    }
    
    const read = _ => {
        const data = localStorage.getItem(PRODUCTS_LS);
        if (null === data) {
            return [];
        }
        return JSON.parse(data);
    }
    
    const storeData = data => {
        const storeData = read();
        data.id = getId();
        storeData.push(data);
        write(storeData);
    }
    
    const showModal = modal => modal.style.display = 'flex';

    const hideModal = modal => {
        modal.querySelectorAll('[name]').forEach(i => {
            i.value = '';
        });
        modal.style.display = 'none';
    }
    
    const getDataFromForm = form => {
        const data = {};
        form.querySelectorAll('[name]').forEach(i => {
            data[i.getAttribute('name')] = i.value;
        });
        return data;
    }
    
    const store = _ => {
        const data = getDataFromForm(createModal);
        storeData(data);
        hideModal(createModal);
        showList();
    }

    const showList = _ => {
        let productsHtml = '';
        read().forEach(p => {
            let temp = html;
            temp = temp.replaceAll('{{id}}', p.id);
            temp = temp.replaceAll('{{price}}', p.productPrice);
            temp = temp.replaceAll('{{title}}', p.productTitle);
            productsHtml += temp;
        });
        listHtml.innerHTML = productsHtml;
    }


///////////////////////EVENTS//////////////////////////////////////

    closeButtons.forEach(b => {
        b.addEventListener('click', _ => {
            hideModal(b.closest('.--modal'));
        });
    });

    createButton.addEventListener('click', _ => showModal(createModal));

    storeButton.addEventListener('click', _ => store());


    showList();

});