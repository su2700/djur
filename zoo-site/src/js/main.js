
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/animals.json')
        .then(response => response.json())
        .then(animals => {
            displayAnimals(animals);
        })
        .catch(error => console.error('Error loading animal data:', error));
});

function displayAnimals(animals) {
    const main = document.querySelector('main');
    animals.forEach(animal => {
        const article = document.createElement('article');
        article.innerHTML = `
            <figure>
                <img src="${animal.image}" alt="${animal.name}">
                <figcaption>${animal.name}</figcaption>
            </figure>
            <p>Type: ${animal.type}</p>
            <p>Color: ${animal.color}</p>
            <button onclick="showMoreInfo('${animal.name}', '${animal.description}')">More info</button>
        `;
        main.appendChild(article);
    });
}

function showMoreInfo(name, description) {
    alert(`More info about ${name}: ${description}`);
}