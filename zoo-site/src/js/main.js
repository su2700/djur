
document.addEventListener('DOMContentLoaded', () => {
    let allAnimals = [];

    fetch('data/animals.json')
        .then(response => response.json())
        .then(animals => {
            allAnimals = animals;
            displayAnimals(allAnimals);
            setupSearch(allAnimals);
        })
        .catch(error => console.error('Error loading animal data:', error));
});

function displayAnimals(animals) {
    const cardsContainer = document.querySelector('.animal-cards');
    if (!cardsContainer) return;
    cardsContainer.innerHTML = '';

    animals.forEach(animal => {
        const article = document.createElement('article');
        const imageSrc = generateImagePathFromName(animal.name);
        article.innerHTML = `
            <figure>
                <img src="${imageSrc}" alt="${animal.name}" onerror="this.onerror=null;this.src='images/griffin.jpg'">
                <figcaption>${animal.name}</figcaption>
            </figure>
            <h3>${animal.name}</h3>
            <p>Type: ${animal.type}</p>
            <p>Color: ${animal.color}</p>
            <p>Year of Birth: ${animal.yearOfBirth ?? ''}</p>
            <button type="button" onclick="showMoreInfo('${escapeForAttr(animal.name)}', '${escapeForAttr(animal.description)}')">More info</button>
        `;
        cardsContainer.appendChild(article);
    });
}

function setupSearch(allAnimals) {
    const searchInput = document.getElementById('search');
    if (!searchInput) return;
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            displayAnimals(allAnimals);
            return;
        }
        const filtered = allAnimals.filter(animal => {
            const haystack = [
                animal.name,
                animal.type,
                animal.color,
                animal.description,
                String(animal.yearOfBirth)
            ].filter(Boolean).join(' ').toLowerCase();
            return haystack.includes(query);
        });
        displayAnimals(filtered);
    });
}

function showMoreInfo(name, description) {
    alert(`More info about ${name}: ${description}`);
}

function escapeForAttr(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/\"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}

function generateImagePathFromName(name) {
    const slug = String(name)
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    return `images/${slug}.jpg`;
}