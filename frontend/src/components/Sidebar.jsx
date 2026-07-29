import "../styles/Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📂 Menu</h2>

      <ul>
        <li>🏠 Dashboard</li>
        <li>📊 Analytics</li>
        <li>📦 Orders</li>
        <li>👥 Customers</li>
        <li>⚙️ Settings</li>
      </ul>
    </div>
  );
}

export default Sidebar;