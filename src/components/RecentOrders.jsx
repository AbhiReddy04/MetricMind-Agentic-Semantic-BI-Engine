function RecentOrders() {
  const orders = [
    { id: 101, customer: "Rahul", amount: "₹2,500", status: "Completed" },
    { id: 102, customer: "Priya", amount: "₹1,800", status: "Pending" },
    { id: 103, customer: "Kiran", amount: "₹3,200", status: "Completed" },
    { id: 104, customer: "Anjali", amount: "₹950", status: "Processing" },
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2
        style={{
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Recent Orders
      </h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          color: "#333",
        }}
      >
        <thead>
          <tr style={{ background: "#2563eb", color: "#fff" }}>
            <th style={{ padding: "12px" }}>Order ID</th>
            <th style={{ padding: "12px" }}>Customer</th>
            <th style={{ padding: "12px" }}>Amount</th>
            <th style={{ padding: "12px" }}>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr
              key={order.id}
              style={{
                borderBottom: "1px solid #ddd",
                textAlign: "center",
              }}
            >
              <td style={{ padding: "12px" }}>{order.id}</td>
              <td style={{ padding: "12px" }}>{order.customer}</td>
              <td style={{ padding: "12px" }}>{order.amount}</td>
              <td
                style={{
                  padding: "12px",
                  color:
                    order.status === "Completed"
                      ? "green"
                      : order.status === "Pending"
                      ? "orange"
                      : "blue",
                  fontWeight: "bold",
                }}
              >
                {order.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentOrders;