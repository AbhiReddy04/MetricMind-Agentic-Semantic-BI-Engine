import {
  FaChartPie,
  FaChartLine,
  FaRobot,
  FaFileAlt,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">MAIN MENU</h3>

      <ul className="sidebar-menu">
        <li className="active">
          <FaChartPie className="menu-icon" />
          <span>Dashboard</span>
        </li>

        <li>
          <FaChartLine className="menu-icon" />
          <span>Analytics</span>
        </li>

        <li>
          <FaRobot className="menu-icon" />
          <span>AI Chat</span>
        </li>

        <li>
          <FaFileAlt className="menu-icon" />
          <span>Reports</span>
        </li>

        <li>
          <FaCog className="menu-icon" />
          <span>Settings</span>
        </li>
      </ul>

      <div className="logout">
        <FaSignOutAlt className="menu-icon" />
        <span>Logout</span>
      </div>
    </aside>
  );
}

export default Sidebar;