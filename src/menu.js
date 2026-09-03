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

function loadMenu(container) {
    container.innerHTML = '';

    container.appendChild(describeApps1());
}

export { loadMenu }