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

      <ResponsiveContainer width="100%" height="80%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={90}
            paddingAngle={4}
            labelLine={false}
            animationDuration={1000}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
              const RADIAN = Math.PI / 180;

              // Label donut ring center lo untundi
              const radius =
                innerRadius + (outerRadius - innerRadius) * 0.40;

              const x =
                cx + radius * Math.cos(-midAngle * RADIAN);

              const y =
                cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#ffffff"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={18}
                  fontWeight="700"
                >
                  {`${Math.round(percent * 100)}%`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value, name) => [`${value}%`, name]}
          />

          <Legend
            verticalAlign="bottom"
            align="center"
            iconType="circle"
            wrapperStyle={{
              fontSize: "16px",
              paddingTop: "15px",
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesPieChart;