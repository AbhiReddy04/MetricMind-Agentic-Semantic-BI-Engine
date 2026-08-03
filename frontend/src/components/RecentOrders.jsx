function RecentOrders() {
  const orders = [
    { id: 101, customer: "Rahul", amount: "₹2,500", status: "Completed" },
    { id: 102, customer: "Priya", amount: "₹1,800", status: "Pending" },
    { id: 103, customer: "Kiran", amount: "₹3,200", status: "Completed" },
    { id: 104, customer: "Anjali", amount: "₹950", status: "Processing" },
  ];

  return (
    <div className="recent-orders">
      <h2>Recent Orders</h2>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.amount}</td>
              <td
                className={
                  order.status === "Completed"
                    ? "completed"
                    : order.status === "Pending"
                    ? "pending"
                    : "processing"
                }
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