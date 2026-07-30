import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Electronics", value: 40 },
  { name: "Fashion", value: 25 },
  { name: "Groceries", value: 20 },
  { name: "Others", value: 15 },
];

const COLORS = ["#2563eb", "#22c55e", "#f59e0b", "#ef4444"];

function SalesPieChart() {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "20px",
        padding: "20px",
        height: "420px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#111827",
          fontWeight: "700",
          fontSize: "28px",
        }}
      >
        Sales by Category
      </h2>

      <ResponsiveContainer width="100%" height="85%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="45%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={4}
            label={({ percent }) =>
              `${(percent * 100).toFixed(0)}%`
            }
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              fontSize: "14px",
              paddingTop: "10px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesPieChart;