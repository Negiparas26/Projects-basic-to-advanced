# Movie Website with React Router

## Overview
This project is a movie website built using React and React Router DOM. It fetches movie data from the OMDB API and displays a list of movies with detailed information.



## 🚀 Live Demo
🔗 **Check out the deployed app here:**  
👉 [View on Vercel](https://moviewebport404.netlify.app/)

## 📸 Project Screenshot
# Movie Website with React Router

![Movie Website Preview](https://drive.google.com/uc?id=1yJvY1YPkv-o8tSP4Hqx0ywxy_rKt39lL)

## Features
- **React Router Navigation:** Implements dynamic routing with `createBrowserRouter`.
- **Movie Search:** Fetches movies from the OMDB API.
- **Movie Details Page:** Shows detailed information for each movie.
- **Error Handling:** Displays error pages when routes are not found.
- **Loading State:** Uses `useNavigation` to show a loading indicator while fetching data.

## Technologies Used
- React.js
- React Router DOM
- Fetch API
- Tailwind CSS (or any other styling framework used)

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-website.git
   ```
2. Navigate to the project folder:
   ```sh
   cd movie-website
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your OMDB API key:
   ```sh
   VITE_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## File Structure
```
/src
│── components
│   ├── UI
│   │   ├── Card.jsx
│   │   ├── Loading.jsx
│   ├── layout
│   │   ├── AppLayout.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│── pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Movie.jsx
│   ├── MovieDetails.jsx
│   ├── ErrorPage.jsx
│── App.jsx
│── main.jsx
```

## API Usage
The app fetches movie data from the [OMDB API](https://www.omdbapi.com/). Ensure you have a valid API key.

Example API call:
```js
const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
const data = await response.json();
```

## Deployment
You can deploy this project using services like Vercel, Netlify, or GitHub Pages.

## Contributions
Feel free to contribute to this project by submitting issues or pull requests.

## License
This project is licensed under the MIT License.
