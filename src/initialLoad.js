function headerLine() {
    const headerInfo = document.createElement('h1');
    headerInfo.textContent = 'Between the Trees Restaurant';
    return headerInfo;
}

function describeVibe() {
    const vibe = document.createElement('div');
    vibe.classList.add('vibe');
    vibe.textContent = 'Enjoy a meal in every season surrounded by the trees.'
    return vibe;
}

function storePhone() {
    const pNumber = document.createElement('div');
    pNumber.classList.add('pnumber');
    pNumber.textContent = 'Phone: 808-555-5050';
    return pNumber;
}

function storeHours() {
    const hours = document.createElement('div');
    hours.classList.add('hours');
    hours.textContent = 'Daily 7 AM - 9 PM';
    return hours;
}

function address() {
    const location = document.createElement('div');
    location.classList.add('location');
    location.textContent = '100 Forest Road'
    return location;
}

function loadHome(container) {
    container.innerHTML = '';

    container.appendChild(headerLine());
    container.appendChild(describeVibe());
    container.appendChild(storePhone());
    container.appendChild(storeHours());
    container.appendChild(address());
}

export { loadHome }
