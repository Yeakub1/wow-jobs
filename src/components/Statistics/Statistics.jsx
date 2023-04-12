
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "A 1",
    uv: 60,
  },
  {
    name: "A 2",
    uv: 59,
  },
  {
    name: "A 3",
    uv: 60,
  },
  {
    name: "A 4",
    uv: 58,
  },
  {
    name: "A 5",
    uv: 58,
  },
  {
    name: "A 6",
    uv: 60,
  },
  {
    name: "A 7",
    uv: 59,
  },
  {
    name: "A 8",
    uv: 58,
  },
];

export default function App() {
 

    return (
      <ResponsiveContainer width="50%" aspect={3}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }

