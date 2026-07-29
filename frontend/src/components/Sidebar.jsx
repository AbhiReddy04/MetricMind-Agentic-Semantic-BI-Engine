function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        height: "100vh",
        backgroundColor: "#111827",
        color: "white",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <p>🏠 Dashboard</p>
      <p>📊 Analytics</p>
      <p>📦 Orders</p>
      <p>👥 Customers</p>
      <p>⚙️ Settings</p>
    </div>
  );
}

export default Sidebar;