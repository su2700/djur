
document.addEventListener('DOMContentLoaded', () => {
    fetch('data/animals.json') //use fetch to get the JSON data
        .then(response => response.json()) //parse the JSON data
        .then(animals => {
            displayAnimals(animals); //display the animals on the page
        })
        .catch(error => console.error('Error loading animal data:', error));
});

function displayAnimals(animals) { //function to display animals
    const main = document.querySelector('main'); //select the main element
    animals.forEach(animal => {
        const article = document.createElement('article'); //create an article element for each animal
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

function showMoreInfo(name, description) { //function to show more info about the animal
    alert(`More info about ${name}: ${description}`); //alert() here
}