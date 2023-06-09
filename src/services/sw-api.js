export const getAllStarships = async () => {
  try {
    const fetchedStarshipsData = await fetch(
      'https://swapi.dev/api/starships/'
    );

    return await fetchedStarshipsData.json();
  } catch (error) {
    console.error(error);
  }
};
