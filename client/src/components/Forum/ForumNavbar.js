import { Link } from "react-router-dom";
const ForumNavbar = () => {
  return (
    <nav className="navbar">
      <h1>Forum</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/Create">New Post</Link>
      </div>
    </nav>
  );
};

export default ForumNavbar;
