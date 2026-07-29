import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "20px",
        }}
      >
        <DashboardCard
          title="Total Sales"
          value="120"
          color="#22c55e"
        />

        <DashboardCard
          title="Orders"
          value="45"
          color="#3b82f6"
        />

        <DashboardCard
          title="Revenue"
          value="₹25,000"
          color="#f59e0b"
        />
      </div>
    </div>
  );
}

export default Dashboard;