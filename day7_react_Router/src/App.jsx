import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Movies from "./pages/Movies";
import Layout from "./pages/Layout"; // A common layout for navigation

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // A wrapper for all pages
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/movies", element: <Movies /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// another method of doing this is  but this is done in starting version of react router but now i prefered the object one 
//while the newer, recommended approach uses createBrowserRouter with an object-based configuration. the above one 
/*
below v*6.1
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Movies from "./Movies";
import Layout from "./Layout"; // A common layout component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="movies" element={<Movies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/