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



function loadHome(container) {
    container.innerHTML = '';

    container.appendChild(headerLine());
    container.appendChild(describeVibe());
}

export { loadHome }
