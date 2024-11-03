const url = 'https://rickandmortyapi.com/api/character';
const url2 = 'https://rickandmortyapi.com/api/character/?name=';
const container = document.querySelector('main');

function makeCard(character) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imgCard = document.createElement('img');
  imgCard.src = character.image;
  imgCard.alt = character.name;

  const nameCard = document.createElement('h2');
  nameCard.textContent = `Name: ${character.name}`;

  const statusCard = document.createElement('h3');
  statusCard.textContent = `Status: ${character.status}`;

  const speciesCard = document.createElement('h4');
  speciesCard.textContent = `Species: ${character.species}`;

  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = '0px 0px 20px 10px white';
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = '';
  });

  imgCard.addEventListener('mouseenter', () => {
    imgCard.style.boxShadow = '0px 0px 20px 10px pink';
  });
  imgCard.addEventListener('mouseleave', () => {
    imgCard.style.boxShadow = '';
  });

  card.appendChild(imgCard);
  card.appendChild(nameCard);
  card.appendChild(statusCard);
  card.appendChild(speciesCard);
  container.appendChild(card);
}

const getCharacters = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  cardss(data.results);
};

try {
  getCharacters(url);
} catch (error) {
  console.log("function getCharacters is not defined");
}

function cardss(characters) {
  container.innerHTML = '';
  characters.forEach(character => makeCard(character));
}

const input = document.getElementById('input');

input.addEventListener('input', () => search(url2 + input.value));

async function search(url) {
  if (input.value.trim() !== '') { 
    await getCharacters(url);
  } else {
    container.innerHTML = ''; 
  }
}
