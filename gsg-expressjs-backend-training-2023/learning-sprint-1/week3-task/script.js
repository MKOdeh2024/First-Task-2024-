async function fetchData() {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character/?status=alive');
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    return data.filter(object => object.length > 50).map(object => object.slice(0,50);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
