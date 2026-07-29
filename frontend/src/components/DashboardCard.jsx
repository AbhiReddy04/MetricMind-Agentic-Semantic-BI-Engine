function DashboardCard({ title, value, color }) {
  return (
    <div
      style={{
        backgroundColor: color,
        color: "white",
        padding: "20px",
        borderRadius: "10px",
        width: "200px",
      }}
    >
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

export default DashboardCard;