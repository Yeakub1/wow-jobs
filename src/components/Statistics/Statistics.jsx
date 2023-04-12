import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const Statistics = () => {
     const marks = [
       
       { studentId: 1, assignment: "A1", mark: 60 },
       { studentId: 2, assignment: "A2", mark: 59 },
       { studentId: 3, assignment: "A3", mark: 60 },
       { studentId: 4, assignment: "A4", mark: 58 },
       { studentId: 5, assignment: "A5", mark: 58 },
       { studentId: 6, assignment: "A6", mark: 60 },
       { studentId: 7, assignment: "A7", mark: 59 },
       { studentId: 8, assignment: "A8", mark: 58 },
     ];

    return (
      <div className="lg:px-20 mt-10 ">
        <LineChart width={500} height={300} data={marks}>
          <Line dataKey="mark" stroke="#8884d8"></Line>

          <XAxis dataKey="assignment" />
          <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="mark" stroke="#82ca9d" fill="#82ca9d" />
          
        </LineChart>
      </div>
    );
};

export default Statistics;