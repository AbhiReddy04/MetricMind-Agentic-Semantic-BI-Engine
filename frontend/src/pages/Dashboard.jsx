import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import PieChart from "../components/PieChart";
import RecentOrders from "../components/RecentOrders";
import RecentCustomers from "../components/RecentCustomers";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="main-content">
        <Sidebar />

        <div className="content">

          {/* Welcome Section */}
          <div className="dashboard-header">
            <h1>Welcome back, Abhishek</h1>
            <p>Here's what's happening with your business today.</p>
          </div>

          {/* Dashboard Cards */}
          <div className="cards">
            <DashboardCard title="Revenue" value="₹25,000" />
            <DashboardCard title="Orders" value="45" />
            <DashboardCard title="Customers" value="120" />
            <DashboardCard title="Growth" value="+18%" />
          </div>

          {/* Charts Section */}
          <div className="charts-section">
            <div className="chart-box">
              <Chart />
            </div>

            <div className="pie-box">
              <PieChart />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section">
            <div className="orders-box">
              <RecentOrders />
            </div>

            <div className="customers-box">
              <RecentCustomers />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;