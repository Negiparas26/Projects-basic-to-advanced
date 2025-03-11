import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="big">
      <nav>
        <Link to="/">Home</Link> | <Link to="/contact">Contact</Link> | <Link to="/movies">Movies</Link>
      </nav>
      <h1>Hello React Router</h1>
      <Outlet /> {/* This renders the nested routes */}
    </div>
  );
};

export default Layout;
