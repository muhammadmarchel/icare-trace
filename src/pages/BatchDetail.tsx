import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, QrCode, CheckCircle2, XCircle, AlertCircle, 
  MapPin, Clock, Search, ShieldAlert, ArrowDown, ExternalLink
} from 'lucide-react';
import { batches, timelineData, timelineOrder } from '../mockData/data';

export default function BatchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showTraceBack, setShowTraceBack] = useState(false);

  // fallback for demo
  const batchId = id || 'GG-IND-2026-003';
  const batch = batches.find(b => b.id === batchId) || batches.find(b => b.id === 'GG-IND-2026-003')!;
  const timeline = timelineData[batchId as keyof typeof timelineData] || timelineData['GG-IND-2026-003'];

  const isRejected = batch.status === 'Rejected';

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Navigation */}
      <div className="flex items-center text-sm text-slate-500 hover:text-primary cursor-pointer w-fit" onClick={() => navigate(-1)}>
        <ArrowLeft className="h-4 w-4 mr-1" /> Back to Batches
      </div>

      {/* Header / Passport Title */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-b border-slate-200 pb-4">
        <div>
          <h2 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-1">Digital Product Passport</h2>
          <h1 className="text-3xl font-bold text-slate-900 font-mono tracking-tight">{batch.id}</h1>
        </div>
        <div className="mt-4 md:mt-0 flex gap-3">
          <button className="flex items-center px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium shadow-sm">
            <QrCode className="h-4 w-4 mr-2 text-slate-500" /> View QR
          </button>
          {isRejected && !showTraceBack && (
            <button 
              onClick={() => setShowTraceBack(true)}
              className="flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-bold shadow-sm animate-pulse"
            >
              <Search className="h-4 w-4 mr-2" /> TRACE BACK
            </button>
          )}
        </div>
      </div>

      {/* Main Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Origin Info */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-slate-500 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              <h3 className="font-semibold text-slate-800">Origin Info</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Farm</div>
                <div className="font-semibold text-slate-900">{batch.farmId}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Farmer</div>
                <div className="text-slate-800">{batch.farmerName}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Location</div>
                <div className="text-slate-800">Indramayu, West Java</div>
              </div>
            </div>
          </div>
          <button onClick={() => navigate(`/farms/${batch.farmId}`)} className="mt-4 text-primary text-sm font-medium flex items-center hover:text-primary-dark w-fit">
            View Farm Profile <ExternalLink className="h-3 w-3 ml-1" />
          </button>
        </div>

        {/* Product Info */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center text-slate-500 mb-4">
              <Clock className="h-5 w-5 mr-2" />
              <h3 className="font-semibold text-slate-800">Product Info</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Product</div>
                <div className="font-semibold text-slate-900">Gedong Gincu Mango</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Harvest Date</div>
                <div className="text-slate-800">{batch.harvestDate}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">Quantity</div>
                <div className="text-slate-800 font-medium">{batch.quantity} kg</div>
              </div>
            </div>
          </div>
        </div>

        {/* Status Info */}
        <div className={`rounded-xl shadow-sm border p-6 flex flex-col ${
          isRejected ? 'bg-red-50 border-red-200' : 
          batch.status === 'Passed' ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'
        }`}>
          <div>
             <div className={`flex items-center mb-4 ${
                isRejected ? 'text-red-600' : 
                batch.status === 'Passed' ? 'text-green-600' : 'text-blue-600'
             }`}>
              {isRejected ? <XCircle className="h-6 w-6 mr-2" /> : 
               batch.status === 'Passed' ? <CheckCircle2 className="h-6 w-6 mr-2" /> : <AlertCircle className="h-6 w-6 mr-2" />}
              <h3 className="font-bold text-lg uppercase tracking-wider">{batch.status}</h3>
            </div>
            <div className="space-y-3">
              <div>
                <div className={`text-xs uppercase tracking-wider ${isRejected ? 'text-red-400' : 'text-slate-500'}`}>Current Stage</div>
                <div className={`font-semibold text-lg ${isRejected ? 'text-red-900' : 'text-slate-900'}`}>{batch.currentStage}</div>
              </div>
              <div>
                <div className={`text-xs uppercase tracking-wider ${isRejected ? 'text-red-400' : 'text-slate-500'}`}>Destination</div>
                <div className={`font-medium ${isRejected ? 'text-red-800' : 'text-slate-800'}`}>{batch.destination}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trace Back Mode View */}
      {showTraceBack && isRejected && (
        <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
           <div className="flex items-center gap-3 border-b-2 border-red-200 pb-3">
              <ShieldAlert className="h-8 w-8 text-red-600" />
              <h2 className="text-2xl font-bold text-slate-900">Backward Trace Analysis</h2>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Vertical Timeline */}
              <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm border border-slate-200 relative">
                <div className="absolute top-0 bottom-0 left-[39px] w-0.5 bg-slate-200"></div>
                <div className="space-y-6 relative">
                  {/* Reverse timeline for trace back */}
                  {[...timelineOrder].reverse().map((stageName, index) => {
                    const event = timeline.find(e => e.stage === stageName);
                    if (!event) return null;
                    
                    const isRejectedEvent = event.status === 'Rejected';
                    const isProblem = event.isProblemPoint;
                    
                    return (
                      <div key={stageName} className="flex relative z-10 group cursor-pointer">
                         <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 bg-white flex items-center justify-center relative mt-1 z-10
                            ${isRejectedEvent ? 'border-red-500 bg-red-50 text-red-500' : 
                              isProblem ? 'border-orange-500 bg-orange-50 text-orange-500 ring-4 ring-orange-100' : 
                              'border-green-500 bg-green-50 text-green-500'}
                         ">
                            {isRejectedEvent ? <XCircle className="h-4 w-4" /> : 
                             isProblem ? <AlertCircle className="h-4 w-4" /> : 
                             <CheckCircle2 className="h-4 w-4" />}
                         </div>
                         <div className={`ml-4 p-4 rounded-lg border flex-1 transition-all ${
                            isProblem ? 'border-orange-300 bg-orange-50 shadow-sm' : 
                            isRejectedEvent ? 'border-red-200 bg-white' : 'border-slate-100 bg-white hover:border-slate-300'
                         }`}>
                           <div className="flex justify-between items-start mb-1">
                             <div className={`text-xs font-bold uppercase tracking-wider ${isProblem ? 'text-orange-700' : 'text-slate-500'}`}>{stageName}</div>
                             <div className="text-xs text-slate-400">{event.date}</div>
                           </div>
                           <div className={`font-semibold ${isProblem ? 'text-orange-900' : isRejectedEvent ? 'text-red-700' : 'text-slate-800'}`}>
                             {event.name}
                           </div>
                           {event.detail && (
                             <div className={`mt-2 text-sm ${isProblem ? 'text-orange-800' : 'text-slate-600'}`}>
                               {event.detail}
                             </div>
                           )}
                         </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Problem Analysis */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 shadow-sm relative overflow-hidden">
                   <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                     <AlertCircle className="h-32 w-32 text-orange-600" />
                   </div>
                   <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2 flex items-center">
                     <AlertCircle className="h-4 w-4 mr-2" /> Potential Problem Point
                   </h3>
                   <h2 className="text-2xl font-bold text-orange-900 mb-4">SORTING / GRADING</h2>
                   
                   <p className="text-orange-800 font-medium mb-6">
                     Based on recorded quality data, this checkpoint requires investigation. The system detected anomalies during the sorting process.
                   </p>

                   <div className="bg-white rounded-lg border border-orange-100 p-5">
                      <h4 className="font-semibold text-slate-800 mb-4">Recorded QC Information</h4>
                      <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                        <div>
                          <div className="text-slate-500">Date Recorded</div>
                          <div className="font-medium">19 Aug 2026, 08:45 AM</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Inspector</div>
                          <div className="font-medium">Joko W. (QC-042)</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Rejection Rate</div>
                          <div className="font-medium text-orange-600">18% (Warning: Normal &lt; 10%)</div>
                        </div>
                        <div>
                          <div className="text-slate-500">Primary Issue</div>
                          <div className="font-medium">Fruit Spotting / Physical Blemish</div>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-slate-500 mb-1">Inspector Notes:</div>
                        <div className="text-slate-700 italic bg-slate-50 p-3 rounded">
                          "Notable presence of latex burn and minor physical blemishes on skin. Passed with warning as size and ripeness met criteria, but shelf-life may be affected during transit."
                        </div>
                      </div>
                   </div>

                   <div className="mt-6 flex gap-3 relative z-10">
                     <button className="px-4 py-2 bg-orange-600 text-white rounded-md font-medium text-sm hover:bg-orange-700 shadow-sm">
                       Flag for Investigation
                     </button>
                     <button className="px-4 py-2 bg-white text-orange-700 border border-orange-300 rounded-md font-medium text-sm hover:bg-orange-50 shadow-sm">
                       View Full QC Report
                     </button>
                   </div>
                </div>
              </div>
           </div>
        </div>
      )}

      {/* Normal Timeline View (Forward) */}
      {!showTraceBack && (
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h3 className="font-semibold text-slate-800 mb-6">Traceability Timeline</h3>
          
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-5 left-0 w-full h-0.5 bg-slate-200"></div>
            
            <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-6 md:space-y-0">
              {timelineOrder.map((stageName, index) => {
                const event = timeline.find(e => e.stage === stageName);
                if (!event) return null;
                
                const isRejectedEvent = event.status === 'Rejected';
                const isWarning = event.status === 'Warning';
                const isPassed = event.status === 'Passed';
                
                return (
                  <div key={stageName} className="flex md:flex-col items-center group relative md:w-full">
                    {/* Mobile vertical line connecting */}
                    {index < timelineOrder.length - 1 && (
                       <div className="md:hidden absolute top-8 bottom-[-24px] left-5 w-0.5 bg-slate-200 z-[-1]"></div>
                    )}
                    
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center relative z-10 transition-transform group-hover:scale-110 shadow-sm
                       ${isRejectedEvent ? 'border-red-500 text-red-500' : 
                         isWarning ? 'border-yellow-500 text-yellow-500' : 
                         isPassed ? 'border-green-500 text-green-500' : 'border-slate-300 text-slate-300'}
                    `}>
                       {isRejectedEvent ? <XCircle className="h-5 w-5" /> : 
                        isWarning ? <AlertCircle className="h-5 w-5" /> : 
                        <CheckCircle2 className="h-5 w-5" />}
                    </div>
                    
                    <div className="ml-4 md:ml-0 md:mt-4 flex flex-col md:items-center text-left md:text-center w-full">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">{stageName}</div>
                      <div className={`text-sm font-semibold mb-1
                        ${isRejectedEvent ? 'text-red-600' : 
                          isWarning ? 'text-yellow-600' : 
                          isPassed ? 'text-green-600' : 'text-slate-400'}
                      `}>
                        {event.name}
                      </div>
                      <div className="text-xs text-slate-400">{event.date}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Export Readiness Card */}
      {!showTraceBack && !isRejected && (
         <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h3 className="font-semibold text-slate-800 mb-4">Export Readiness Checklist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Farmer Registered', 'Farm Registered', 'Harvest Recorded', 
                'Fruit Fly Monitoring', 'Sorting Completed', 'Fruit Size Meets Standard',
                'VHT Completed', 'Packing Completed', 'Required Documents'
              ].map((req, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                  <span className="text-sm text-slate-700">{req}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
               <span className="text-sm text-slate-500">System Evaluation</span>
               <span className="px-3 py-1 bg-green-100 text-green-800 font-bold rounded text-sm tracking-wide">EXPORT READY</span>
            </div>
         </div>
      )}
    </div>
  );
}
