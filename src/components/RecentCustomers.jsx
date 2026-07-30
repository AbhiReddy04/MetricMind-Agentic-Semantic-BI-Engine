function RecentCustomers() {
  const customers = [
    { name: "Rahul", city: "Hyderabad" },
    { name: "Priya", city: "Bangalore" },
    { name: "Kiran", city: "Chennai" },
    { name: "Anjali", city: "Vijayawada" },
  ];

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "15px",
        padding: "20px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
      }}
    >
      <h3>Recent Customers</h3>

      {customers.map((customer, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "12px 0",
            borderBottom: "1px solid #eee",
          }}
        >
          <strong>{customer.name}</strong>
          <span>{customer.city}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentCustomers;