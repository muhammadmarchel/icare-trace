import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Map, 
  PackageSearch, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  Clock,
  ChevronRight,
  QrCode
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const productionData = [
  { name: 'Mar', total: 120 },
  { name: 'Apr', total: 300 },
  { name: 'May', total: 450 },
  { name: 'Jun', total: 600 },
  { name: 'Jul', total: 800 },
  { name: 'Aug', total: 1248 },
];

const rejectionData = [
  { name: 'Fruit Quality', value: 5, color: '#ef4444' },
  { name: 'Fruit Fly / Pest', value: 3, color: '#f97316' },
  { name: 'Size', value: 2, color: '#eab308' },
  { name: 'Physical Damage', value: 2, color: '#3b82f6' },
];

const traceabilityStatus = [
  { label: 'Registered', count: 1248 },
  { label: 'Harvested', count: 1100 },
  { label: 'Sorted', count: 950 },
  { label: 'VHT', count: 800 },
  { label: 'Packed', count: 750 },
  { label: 'Exported', count: 86 },
];

const recentActivity = [
  { id: 'GG-IND-2026-001', event: 'VHT Passed', time: '2 hours ago', icon: CheckCircle2, color: 'text-status-green' },
  { id: 'GG-IND-2026-002', event: 'Exported to Japan', time: '5 hours ago', icon: TrendingUp, color: 'text-status-blue' },
  { id: 'GG-IND-2026-003', event: 'Rejected - Fruit Quality', time: '1 day ago', icon: AlertCircle, color: 'text-status-red' },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Good afternoon, Admin</h1>
        <p className="text-slate-500 mt-1">Monitor the Gedong Gincu mango journey from farm to export.</p>
      </div>

      {/* Traceability Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-primary p-6 rounded-xl shadow-sm text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-20 pointer-events-none">
              <QrCode className="h-24 w-24" />
            </div>
            <div className="relative z-10">
              <div className="text-5xl font-bold mb-2">92%</div>
              <div className="font-semibold text-lg">Traceability Coverage</div>
              <div className="text-primary-200 text-sm mt-1">of active batches have complete history</div>
            </div>
         </div>
         
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary transition-colors" onClick={() => navigate('/qr-trace')}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><QrCode className="h-6 w-6" /></div>
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">24</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">QR Scans Today</div>
         </div>

         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 cursor-pointer hover:border-primary transition-colors" onClick={() => navigate('/batches')}>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 rounded-lg text-green-600"><CheckCircle2 className="h-6 w-6" /></div>
            </div>
            <div className="text-3xl font-bold text-slate-800 mb-1">1,148</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">Complete Traceability</div>
         </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: 'Total Farmers', value: '600', icon: Users },
          { label: 'Total Farms', value: '420', icon: Map },
          { label: 'Total Batches', value: '1,248', icon: PackageSearch },
          { label: 'Exported', value: '86', icon: TrendingUp },
          { label: 'Export Ready', value: '74', icon: CheckCircle2 },
          { label: 'Rejected', value: '12', icon: AlertCircle },
        ].map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
              <Icon className="h-6 w-6 text-primary mb-2 opacity-80" />
              <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
              <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Overview */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Production Overview</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                <Tooltip cursor={{fill: '#f8fafc'}} />
                <Bar dataKey="total" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alert Card & Recent Activity */}
        <div className="space-y-6">
          <div className="bg-red-50 border border-red-100 p-5 rounded-xl">
            <div className="flex items-start">
              <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
              <div>
                <h3 className="text-sm font-semibold text-red-800">3 batches require investigation</h3>
                <p className="text-sm text-red-600 mt-1 mb-3">Recent export rejections need trace back analysis.</p>
                <button 
                  onClick={() => navigate('/rejections')}
                  className="text-sm font-medium text-red-700 bg-white px-3 py-1.5 rounded-md border border-red-200 hover:bg-red-50 transition-colors"
                >
                  View Rejections
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, i) => {
                const Icon = activity.icon;
                return (
                  <div key={i} className="flex items-start">
                    <Icon className={`h-5 w-5 mt-0.5 mr-3 flex-shrink-0 ${activity.color}`} />
                    <div className="flex-1">
                      <div className="text-sm font-medium text-slate-800">{activity.id}</div>
                      <div className="text-sm text-slate-600">{activity.event}</div>
                      <div className="text-xs text-slate-400 mt-0.5 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> {activity.time}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <button className="w-full mt-4 text-center text-sm font-medium text-primary hover:text-primary-dark flex items-center justify-center">
              View all activity <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>

        {/* Traceability Status */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Traceability Pipeline</h2>
          <div className="space-y-3">
            {traceabilityStatus.map((status, i) => {
              const max = traceabilityStatus[0].count;
              const percent = (status.count / max) * 100;
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{status.label}</span>
                    <span className="text-slate-500">{status.count}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div 
                      className="bg-primary rounded-full h-2" 
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Rejection Overview */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 lg:col-span-2">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Rejection Overview</h2>
          <div className="flex items-center h-48">
            <div className="w-1/2 h-full">
               <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={rejectionData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {rejectionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="w-1/2 space-y-3">
              {rejectionData.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                    <span className="text-sm text-slate-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-900">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
