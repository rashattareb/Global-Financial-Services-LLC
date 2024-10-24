const cars = [
    { make: 'Toyota', model: 'Camry', year: 2021, price: 25000 },
    { make: 'Honda', model: 'Civic', year: 2020, price: 22000 },
    { make: 'Ford', model: 'Mustang', year: 2019, price: 27000 },
    { make: 'Tesla', model: 'Model 3', year: 2022, price: 45000 },
    { make: 'Chevrolet', model: 'Malibu', year: 2021, price: 24000 }
];

function displayCars() {
    const carsContainer = document.getElementById('carsContainer');
    carsContainer.innerHTML = '';

    cars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-item');
        carDiv.innerHTML = `
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Price: $${car.price.toLocaleString()}</p>
        `;
        carsContainer.appendChild(carDiv);
    });
}

function searchCars() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filteredCars = cars.filter(car => 
        car.make.toLowerCase().includes(input) || 
        car.model.toLowerCase().includes(input) ||
        car.year.toString().includes(input)
    );

    const carsContainer = document.getElementById('carsContainer');
    carsContainer.innerHTML = '';

    filteredCars.forEach(car => {
        const carDiv = document.createElement('div');
        carDiv.classList.add('car-item');
        carDiv.innerHTML = `
            <h3>${car.year} ${car.make} ${car.model}</h3>
            <p>Price: $${car.price.toLocaleString()}</p>
        `;
        carsContainer.appendChild(carDiv);
    });
}

window.onload = displayCars;
