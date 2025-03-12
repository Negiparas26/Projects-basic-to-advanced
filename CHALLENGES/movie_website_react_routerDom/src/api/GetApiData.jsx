// export const getMoviesData = async () => {
//     try {
//       const response = await fetch(
//         `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
//       );
//       const data = response.json();
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };

//for 30 data because thi api give 10 data at a time thats why i do this
export const getMoviesData = async () => {
  try {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=titanic`;
    
    const responses = await Promise.all([
      fetch(`${BASE_URL}&page=1`),
      fetch(`${BASE_URL}&page=2`),
      fetch(`${BASE_URL}&page=3`),
    ]);

    const moviesData = await Promise.all(responses.map((res) => res.json()));

    // Combine results from all pages
    const allMovies = moviesData.flatMap((data) => data.Search || []);

    return allMovies; // Returns array of 30 movies
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};
