import TrafficSources from "../components/TrafficSources";
import RevenueRegion from "../components/RevenueRegion";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import Chart from "../components/Chart";
import PieChart from "../components/PieChart";
import "../styles/Dashboard.css";
import AIInsights from "../components/AIInsights";

function Analytics() {
  return (
    <div className="dashboard">
      <Navbar />

      <div className="main-content">
        <Sidebar />

        <div className="content">

          <div className="dashboard-header">
            <h1>Analytics 📊</h1>
            <p>Monitor your business performance and sales analytics.</p>
          </div>

          <div className="cards">
            <DashboardCard title="Revenue" value="₹48,500" />
            <DashboardCard title="Orders" value="152" />
            <DashboardCard title="Customers" value="430" />
            <DashboardCard title="Growth" value="+24%" />
          </div>

          <div className="charts-section">
            <div className="chart-box">
              <Chart />
            </div>
            <div className="analytics-summary">
    <RevenueRegion />
</div>

            <div className="pie-box">
              <PieChart />
            </div>
          </div>

          {/* Analytics Summary */}
          <div className="analytics-summary">
            <div className="summary-card">
              <h3>Best Selling Product</h3>
              <p>Wireless Headphones 🎧</p>
            </div>
        <div className="analytics-summary">
    <RevenueRegion />
    <TrafficSources />
</div>

            <div className="summary-card">
              <h3>Top Region</h3>
              <p>Hyderabad 📍</p>
            </div>

            <div className="summary-card">
              <h3>Conversion Rate</h3>
              <p>68%</p>
              <AIInsights />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;