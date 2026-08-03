import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/Reports.css";
import { useNavigate } from "react-router-dom";

function Reports() {
  const navigate = useNavigate();

  const reportData = [
    ["Sales Report", "30 Jul 2026", "Completed"],
    ["Revenue Report", "29 Jul 2026", "Completed"],
    ["Customer Report", "28 Jul 2026", "Pending"],
    ["Inventory Report", "27 Jul 2026", "Processing"],
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Business Reports", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [["Report", "Date", "Status"]],
      body: reportData,
    });

    doc.save("Business_Report.pdf");
  };

  const exportExcel = () => {
    const worksheet = XLSX.utils.aoa_to_sheet([
      ["Report", "Date", "Status"],
      ...reportData,
    ]);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Reports");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const file = new Blob([excelBuffer], {
      type: "application/octet-stream",
    });

    saveAs(file, "Business_Report.xlsx");
  };

  const viewCustomerReport = () => {
    navigate("/customer-report");
  };

  return (
    <div className="dashboard">
      <Navbar />

      <div className="main-content">
        <Sidebar />

        <div className="content">
          <div className="reports-container">

            {/* Header */}
            <div className="reports-header">
              <h1>📄 Reports</h1>
              <p>Download and manage your business reports.</p>
            </div>

            {/* Report Cards */}
            <div className="report-cards">

              <div className="report-card">
                <h2>Sales Report</h2>
                <p>Monthly sales performance report.</p>
                <button onClick={downloadPDF}>
                  📥 Download PDF
                </button>
              </div>

              <div className="report-card">
                <h2>Revenue Report</h2>
                <p>Revenue summary and growth analysis.</p>
                <button onClick={exportExcel}>
                  📊 Export Excel
                </button>
              </div>

              <div className="report-card">
                <h2>Customer Report</h2>
                <p>Customer activity and engagement.</p>
                <button onClick={viewCustomerReport}>
                  👁 View Report
                </button>
              </div>

            </div>

            {/* Recent Reports */}
            <div className="recent-reports">
              <h2>Recent Reports</h2>

              <table>
                <thead>
                  <tr>
                    <th>Report</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Sales Report</td>
                    <td>30 Jul 2026</td>
                    <td>
                      <span className="status-completed">
                        ✅ Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Revenue Report</td>
                    <td>29 Jul 2026</td>
                    <td>
                      <span className="status-completed">
                        ✅ Completed
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Customer Report</td>
                    <td>28 Jul 2026</td>
                    <td>
                      <span className="status-pending">
                        ⏳ Pending
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Inventory Report</td>
                    <td>27 Jul 2026</td>
                    <td>
                      <span className="status-processing">
                        🔄 Processing
                      </span>
                    </td>
                  </tr>

                </tbody>
              </table>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;