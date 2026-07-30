import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      {/* Logo */}
      <div className="logo">
        <span className="logo-icon">📊</span>
        <h2>MetricMind</h2>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        {/* Search */}
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>

        {/* Notification */}
        <div className="notification">
          <FaBell className="nav-icon" />
        </div>

        {/* Profile */}
        <div className="profile">
          <FaUserCircle className="profile-icon" />

          <div className="user-info">
            <h4>Abhishek</h4>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;