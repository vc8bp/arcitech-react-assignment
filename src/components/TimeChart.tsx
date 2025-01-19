import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { ResponseTime } from '../types/data';

interface Props {
  dayWiseData: ResponseTime[];
  weekWiseData: ResponseTime[];
}

const options: { key: 'day' | 'week'; title: string }[] = [
  { key: 'day', title: 'Daily' },
  { key: 'week', title: 'Weekly' },
];

export const ResponseTimeChart: React.FC<Props> = ({ dayWiseData, weekWiseData }) => {
  const [activeView, setActiveView] = useState<'day' | 'week'>('day');

  const data = activeView === 'day' ? dayWiseData : weekWiseData;

  return (
    <div className="bg-white rounded-lg p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Response Times</h2>
        <div className="flex bg-gray-100 rounded-lg p-1">
          {options.map(option => (
              <button
                onClick={() => setActiveView(option.key)}
                className={`px-4 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeView === option.key
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {option.title}
              </button>
          ))}
        </div>
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey={activeView === 'day' ? 'date' : 'week'} 
              tickFormatter={activeView === 'week' ? (week) => `Week ${week}` : undefined}
            />
            <YAxis />
            <Tooltip 
              labelFormatter={(label) => 
                activeView === 'week' ? `Week ${label}` : label
              }
            />
            <Line 
              type="monotone" 
              dataKey="average_time" 
              stroke="#8B5CF6" 
              strokeWidth={2}
              dot={{ fill: '#8B5CF6' }}
              name="Average Time (s)"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};