import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line
} from 'recharts';
import { Download } from 'lucide-react';

const reasonData = [
  { name: 'Fruit Quality', value: 35, color: '#ef4444' },
  { name: 'Fruit Fly / Pest', value: 25, color: '#f97316' },
  { name: 'Size', value: 15, color: '#eab308' },
  { name: 'Physical Damage', value: 15, color: '#3b82f6' },
  { name: 'Other', value: 10, color: '#94a3b8' },
];

const stageData = [
  { name: 'Sorting', value: 45 },
  { name: 'Farm', value: 25 },
  { name: 'Packing', value: 20 },
  { name: 'VHT', value: 10 },
];

const trendData = [
  { month: 'Jan', count: 2 },
  { month: 'Feb', count: 3 },
  { month: 'Mar', count: 1 },
  { month: 'Apr', count: 4 },
  { month: 'May', count: 2 },
  { month: 'Jun', count: 5 },
  { month: 'Jul', count: 3 },
  { month: 'Aug', count: 12 }, // Peak season issue
];

export default function RejectionAnalysis() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Rejection Analysis</h1>
          <p className="text-slate-500 mt-1">Identify patterns and problem areas to improve quality.</p>
        </div>
        <button className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium">
          <Download className="h-4 w-4 mr-2" /> Export Report
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-800 mb-6">Rejections by Reason</h3>
          <div className="h-64 flex items-center">
             <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={reasonData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {reasonData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
           <h3 className="font-semibold text-slate-800 mb-6">Rejections by Problem Stage</h3>
           <div className="h-64">
             <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stageData} layout="vertical" margin={{ left: 20, right: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
                <XAxis type="number" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{fill: '#475569', fontWeight: 500}} width={80} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="value" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={30} />
              </BarChart>
            </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 lg:col-span-2">
          <h3 className="font-semibold text-slate-800 mb-6">Rejection Trend Over Time</h3>
          <div className="h-72">
             <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2, fill: '#fff' }} 
                  activeDot={{ r: 6, strokeWidth: 0, fill: '#ef4444' }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
