function aboutIntro() {
    const descript = document.createElement('div');
    descript.classList.add('description');
    descript.textContent = 'Welcome to Between the Trees Restaurant, where we pride ourselves on being the most entertaining place to eat. All of our food comes from the forest right behind the restaurant.';
    return descript;
}

function aboutFood() {
    const food = document.createElement('div');
    food.classList.add('food');
    food.textContent = 'We grow and harvest all the food here locally. Everything is farm to table fresh. From the cows roaming our pastures outback, to the spices that we mine ourselves. High quality fresh, is our guarentee.';
    return food;
}

function aboutStaff() {
    const staff = document.createElement('div');
    staff.classList.add('staff');
    staff.textContent = 'All our staff are locals who enjoy food. We have many different backgrounds which has helped build our success. Every member brings something unique like Dave, who is our head chef. Before being head chef, he was the superintendent for our local schools. We also have Mary, our best waiter, who before joining us was at the local library as one of their IT staff. We do this because we love to share good food.'
    return staff;
}

function aboutDave() {
    const dave = document.createElement('div');
    dave.classList.add('staff');
    dave.textContent = 'Dave M. Previously Superintendent. Now Head chef and Co Owner';
    return dave;
}

function aboutMary() {
    const mary = document.createElement('div');
    mary.classList.add('staff');
    mary.textContent = 'Mary M. Previously IT for local libraries. Now the best waiter at the restaurant and Co Owner';
    return mary;
}

function aboutBuilding() {
    const building = document.createElement('div');
    building.classList.add('building');
    building.textContent = 'The building we are in is an warehouse that was on the edge of town. \nWe found it had the space we needed to build out an incredible\nrestaurant that we always dreamed would be busy from breakfast till dinner. We restored\nthe original walls and lighting to the 1920 style and gave it a fresh seal coat and roof.';
    return building;
}

function loadAbout(container) {
    container.innerHTML = '';

    container.appendChild(aboutIntro());
    container.appendChild(aboutFood());
    container.appendChild(aboutStaff());
    container.appendChild(aboutDave());
    container.appendChild(aboutMary());
    container.appendChild(aboutBuilding());
}

export { loadAbout }