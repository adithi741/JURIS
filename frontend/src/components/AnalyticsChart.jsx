import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AnalyticsChart() {

  const data = [
    { month: "Jan", cases: 24 },
    { month: "Feb", cases: 38 },
    { month: "Mar", cases: 42 },
    { month: "Apr", cases: 35 },
    { month: "May", cases: 50 },
    { month: "Jun", cases: 61 },
  ];

  return (

    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 mb-8">

      <div className="flex items-center justify-between mb-8">

        <div>

          <h2 className="text-3xl font-bold mb-2">
            Case Analytics
          </h2>

          <p className="text-gray-400">
            Monthly legal case statistics
          </p>

        </div>

        <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-xl text-sm">

          Live

        </div>

      </div>

      <div className="w-full">

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={data}>

            <XAxis dataKey="month" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="cases"
              stroke="#3B82F6"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;