import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Leaf, Phone, Bug, Calendar, AlertTriangle } from 'lucide-react';
import { farms } from '../mockData/data';

export default function FarmPassport() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const farm = farms.find(f => f.id === id) || farms[0]; // fallback to first farm for demo

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex items-center text-sm text-slate-500 hover:text-primary cursor-pointer w-fit" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Back
      </div>

      {/* Header Profile */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 sm:p-8 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div>
            <div className="flex items-center space-x-3">
              <h1 className="text-2xl font-bold text-slate-900">{farm.id}</h1>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                farm.status === 'Active' ? 'bg-green-100 text-green-800' :
                farm.status === 'Problem' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
              }`}>
                {farm.status}
              </span>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
              <div className="flex items-center text-sm text-slate-600">
                <span className="w-24 text-slate-400">Farmer:</span>
                <span className="font-medium text-slate-900">{farm.farmerName}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <span className="w-24 text-slate-400">Location:</span>
                <span>{farm.village}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <span className="w-24 text-slate-400">Cooperative:</span>
                <span>{farm.cooperative}</span>
              </div>
              <div className="flex items-center text-sm text-slate-600">
                <span className="w-24 text-slate-400">Area:</span>
                <span>{farm.area} ha</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 min-w-[200px] w-full md:w-auto bg-slate-50 p-4 rounded-lg border border-slate-100">
             <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Current Activity</div>
             <div>
               <div className="text-sm text-slate-500">Active Batch</div>
               <div className="font-semibold text-primary">{farm.currentBatch}</div>
             </div>
             <div>
               <div className="text-sm text-slate-500">Last Harvest</div>
               <div className="font-medium text-slate-800">{farm.lastHarvest}</div>
             </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t border-slate-200">
          <nav className="flex space-x-8 px-6 sm:px-8" aria-label="Tabs">
            {['Overview', 'Production', 'Pest Monitoring', 'Batch History'].map((tab) => {
              const tabId = tab.toLowerCase().replace(' ', '-');
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tabId)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tabId 
                      ? 'border-primary text-primary-dark' 
                      : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'}
                  `}
                >
                  {tab}
                </button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 sm:p-8">
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div>
               <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center"><Leaf className="mr-2 h-5 w-5 text-primary"/> Farm Details</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 <div className="bg-slate-50 p-4 rounded-lg">
                   <div className="text-sm text-slate-500 mb-1">Mango Variety</div>
                   <div className="font-semibold text-slate-800">{farm.variety}</div>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-lg">
                   <div className="text-sm text-slate-500 mb-1">Total Trees</div>
                   <div className="font-semibold text-slate-800">{farm.treeCount}</div>
                 </div>
                 <div className="bg-slate-50 p-4 rounded-lg">
                   <div className="text-sm text-slate-500 mb-1">Planting Year</div>
                   <div className="font-semibold text-slate-800">2012</div>
                 </div>
               </div>
            </div>

            <div>
               <h3 className="text-lg font-medium text-slate-900 mb-4 flex items-center"><Bug className="mr-2 h-5 w-5 text-orange-500"/> Risk Profile</h3>
               <div className={`p-4 rounded-lg border flex items-start ${farm.fruitFlyStatus === 'Normal' ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                 <AlertTriangle className={`h-5 w-5 mr-3 mt-0.5 ${farm.fruitFlyStatus === 'Normal' ? 'text-green-500' : 'text-red-500'}`} />
                 <div>
                   <div className={`font-semibold ${farm.fruitFlyStatus === 'Normal' ? 'text-green-800' : 'text-red-800'}`}>
                     Fruit Fly Status: {farm.fruitFlyStatus}
                   </div>
                   <p className={`text-sm mt-1 ${farm.fruitFlyStatus === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>
                     {farm.fruitFlyStatus === 'Normal' ? 'Pest levels are within acceptable limits. Continue regular monitoring.' : 'Critical pest levels detected. Immediate intervention required.'}
                   </p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab !== 'overview' && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Calendar className="h-12 w-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-medium text-slate-900">Data available in full version</h3>
            <p className="text-slate-500 mt-1">This section is mocked for the prototype.</p>
          </div>
        )}
      </div>
    </div>
  );
}
