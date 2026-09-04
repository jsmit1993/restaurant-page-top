function describeApps1() {
    const apps = document.createElement('div');
    apps.classList.add('apps');
    apps.textContent = 'Apps';
    const app1 = document.createElement('p');
    app1.textContent = 'Fried Pickles - $6.99';
    const app2 = document.createElement('p');
    app2.textContent = 'Potatoe Skins - $6.99';
    const app3 = document.createElement('p');
    app3.textContent = 'Spinach & Artichoke Dip - $10.99';
    
    apps.appendChild(app1);
    apps.appendChild(app2);
    apps.appendChild(app3);
    return apps;
}

function listSalads() {
    const salads = document.createElement('div');
    salads.classList.add('salads');
    salads.textContent = 'Salads';
    const salad1 = document.createElement('p');
    salad1.textContent = 'Greek Salad - $8.99 \nWith chicken - $11.99';
    const salad2 = document.createElement('p');
    salad2.textContent = 'Ceasar Salad - $8.99 \nWith chicken - $11.99';
    const salad3 = document.createElement('p');
    salad3.textContent = 'Pasta Salad - $8.99 \nWith chicken - $11.99';


    salads.appendChild(salad1);
    salads.appendChild(salad2);
    salads.appendChild(salad3);
    return salads;
}

function listMains() {
    const main = document.createElement('div');
    main.classList.add('main');
    main.textContent = 'Main Courses';
    const main1 = document.createElement('p');
    main1.textContent = '8oz Wagu Steak - $18.99';
    const main2 = document.createElement('p');
    main2.textContent = 'Fried Chicken with Mashed Potatoes - $18.99';
    const main3 = document.createElement('p');
    main3.textContent = 'Italian Meatballs and Pasta - $15.99';

    main.appendChild(main1);
    main.appendChild(main2);
    main.appendChild(main3);
    return main;
}

function listDeserts() {}

function loadMenu(container) {
    container.innerHTML = '';

    container.appendChild(describeApps1());
    container.appendChild(listSalads());
    container.appendChild(listMains());
    container.appendChild(listDeserts());
}

export { loadMenu }