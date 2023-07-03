// script.js
async function fetchAliveCharacters() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character?status=alive');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data.results.slice(0, 50);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

async function displayAliveCharacters() {
  try {
    const characterList = document.getElementById('character-list');
    const characters = await fetchAliveCharacters();

    characters.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
        <h3>${character.name}</h3>
        <img src="${character.image}" alt="${character.name}">
        <p>Location: ${character.location.name}</p>
        <p>Species: ${character.species}</p>
        <p>Gender: ${character.gender}</p>
      `;
      characterList.appendChild(li);
    });
  } catch (error) {
    const characterList = document.getElementById('character-list');
    characterList.innerHTML = '<p>Error fetching characters. Please try again later.</p>';
    console.error('Error:', error);
  }
}

displayAliveCharacters();
