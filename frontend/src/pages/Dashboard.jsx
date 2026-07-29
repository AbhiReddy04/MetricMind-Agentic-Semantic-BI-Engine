import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div style={{ padding: "20px", flex: 1 }}>
          <h1>Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <DashboardCard title="Total Sales" value="120" />
            <DashboardCard title="Orders" value="45" />
            <DashboardCard title="Revenue" value="₹25,000" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;