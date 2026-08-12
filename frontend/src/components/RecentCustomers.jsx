function RecentCustomers() {
  const customers = [
    { name: "Rahul", city: "Hyderabad" },
    { name: "Priya", city: "Bangalore" },
    { name: "Kiran", city: "Chennai" },
    { name: "Anjali", city: "Vijayawada" },
  ];

  return (
    <div className="recent-customers">
      <h3>Recent Customers</h3>

      {customers.map((customer, index) => (
        <div className="customer-row" key={index}>
          <strong>{customer.name}</strong>
          <span>{customer.city}</span>
        </div>
      ))}
    </div>
  );
}

export default RecentCustomers;