import { useParams } from 'react-router-dom';
import { 
  CheckCircle2, XCircle, AlertCircle, 
  MapPin, Clock, ShieldAlert, ArrowDown, Leaf, Box, Factory, Plane
} from 'lucide-react';
import { batches, timelineData, timelineOrder } from '../mockData/data';

export default function PublicTrace() {
  const { batchId } = useParams();

  const batch = batches.find(b => b.id === batchId) || batches.find(b => b.id === 'GG-IND-2026-003')!;
  const timeline = timelineData[batch.id as keyof typeof timelineData] || timelineData['GG-IND-2026-003'];

  const isRejected = batch.status === 'Rejected';

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12">
      {/* Public Header */}
      <header className="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-primary-dark tracking-tight">ICARE TRACE</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto mt-8 px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Title & Status Badge */}
        <div className="text-center space-y-4">
          <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Gedong Gincu Mango</h2>
          <h1 className="text-3xl font-bold text-slate-900 font-mono tracking-tight">{batch.id}</h1>
          
          <div className="flex justify-center mt-2">
            <span className={`px-4 py-1.5 inline-flex items-center text-sm font-bold rounded-full border ${
              isRejected ? 'bg-red-50 text-red-700 border-red-200' : 
              batch.status === 'Passed' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-blue-50 text-blue-700 border-blue-200'
            }`}>
              {isRejected ? <XCircle className="h-4 w-4 mr-2" /> : 
               batch.status === 'Passed' ? <CheckCircle2 className="h-4 w-4 mr-2" /> : <Clock className="h-4 w-4 mr-2" />}
              {batch.currentStage === 'Japan' && !isRejected ? 'EXPORTED' : 
               batch.status === 'Passed' && batch.currentStage === 'Export Ready' ? 'EXPORT READY' : 
               batch.status === 'Rejected' ? 'REJECTED' : 'PROCESSING'}
            </span>
          </div>
        </div>

        {/* Digital Product Passport */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center">
               <QrCodeIcon className="h-4 w-4 mr-2 text-primary" /> Digital Product Passport
             </h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Product</div>
                <div className="font-semibold text-slate-900">Gedong Gincu Mango</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Origin</div>
                <div className="font-semibold text-slate-900 flex items-center">
                  Indramayu, West Java <MapPin className="h-3 w-3 ml-1 text-slate-400" />
                </div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Farm ID</div>
                <div className="font-semibold text-slate-900">{batch.farmId}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Cooperative</div>
                <div className="font-semibold text-slate-900">{batch.cooperative}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Harvest Date</div>
                <div className="font-semibold text-slate-900">{batch.harvestDate}</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Total Weight</div>
                <div className="font-semibold text-slate-900">{batch.quantity} kg</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Grade</div>
                <div className="font-semibold text-slate-900">Premium</div>
              </div>
              <div>
                <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Target Market</div>
                <div className="font-semibold text-slate-900">{batch.destination}</div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-slate-100">
               <div className="flex items-center justify-between">
                 <span className="text-sm text-slate-500">Traceability Status</span>
                 <span className="text-sm font-bold text-primary flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" /> Complete
                 </span>
               </div>
            </div>
          </div>
        </div>

        {/* Trace Back (If Rejected) */}
        {isRejected && (
          <div className="bg-red-50 rounded-2xl shadow-sm border border-red-200 overflow-hidden">
            <div className="bg-red-100/50 border-b border-red-200 px-6 py-4 flex items-center justify-between">
               <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider flex items-center">
                 <ShieldAlert className="h-4 w-4 mr-2" /> Trace Back Analysis
               </h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-lg text-slate-900 mb-2">Why was this batch rejected?</h4>
              
              <div className="flex flex-col items-center my-6 space-y-1 font-medium text-slate-700 text-sm">
                <div>Export Inspection (Japan)</div>
                <ArrowDown className="h-4 w-4 text-red-400" />
                <div className="text-red-600 font-bold bg-red-100 px-3 py-1 rounded-full">Fruit Quality Issue</div>
                <ArrowDown className="h-4 w-4 text-slate-400" />
                <div>Packing</div>
                <ArrowDown className="h-4 w-4 text-slate-400" />
                <div>VHT Passed</div>
                <ArrowDown className="h-4 w-4 text-slate-400" />
                <div className="text-orange-600 font-bold bg-orange-100 px-3 py-1 rounded-full border border-orange-200">Sorting / Grading</div>
                <ArrowDown className="h-4 w-4 text-slate-400" />
                <div>Harvest</div>
                <ArrowDown className="h-4 w-4 text-slate-400" />
                <div>Farm ({batch.farmId})</div>
              </div>

              <div className="bg-white rounded-xl p-5 border border-red-100">
                <h5 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2 flex items-center">
                  <AlertCircle className="h-4 w-4 mr-2" /> Checkpoint Requiring Investigation
                </h5>
                <h4 className="text-xl font-bold text-slate-900 mb-2">SORTING / GRADING</h4>
                <p className="text-sm text-slate-600">
                  Fruit quality issue detected during export inspection. Based on traceability records, anomalies were recorded at the Sorting/Grading facility prior to VHT.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Product Journey Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
             <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider flex items-center">
               <Plane className="h-4 w-4 mr-2 text-slate-500" /> Product Journey
             </h3>
          </div>
          <div className="p-6 sm:p-8">
            <div className="relative">
              {/* Vertical line connecting nodes */}
              <div className="absolute top-4 bottom-4 left-6 w-0.5 bg-slate-200"></div>

              <div className="space-y-8 relative">
                {timelineOrder.map((stageName) => {
                  const event = timeline.find(e => e.stage === stageName);
                  if (!event) return null;
                  
                  const isRejectedEvent = event.status === 'Rejected';
                  const isWarning = event.status === 'Warning';
                  const isPassed = event.status === 'Passed';
                  
                  // Pick icon based on stage
                  let StageIcon = CheckCircle2;
                  if (stageName === 'FARM' || stageName === 'HARVEST') StageIcon = Leaf;
                  if (stageName === 'COOPERATIVE' || stageName === 'VHT') StageIcon = Factory;
                  if (stageName === 'PACKING' || stageName === 'SORTING / GRADING') StageIcon = Box;
                  if (stageName === 'EXPORT' || stageName === 'JAPAN') StageIcon = Plane;
                  
                  return (
                    <div key={stageName} className="flex relative z-10 group">
                       <div className={`flex-shrink-0 w-12 h-12 rounded-full border-4 bg-white flex items-center justify-center relative z-10
                          ${isRejectedEvent ? 'border-red-500 text-red-500' : 
                            isWarning ? 'border-orange-400 text-orange-500' : 
                            isPassed ? 'border-primary text-primary' : 'border-slate-300 text-slate-300'}
                       `}>
                          {isRejectedEvent ? <XCircle className="h-5 w-5" /> : 
                           isWarning ? <AlertCircle className="h-5 w-5" /> : 
                           <StageIcon className="h-5 w-5" />}
                       </div>
                       
                       <div className="ml-6 flex-1 pt-1">
                         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                           <div className="text-sm font-bold uppercase tracking-wider text-slate-900">{stageName}</div>
                           <div className="text-xs font-medium text-slate-400 mt-1 sm:mt-0">{event.date}</div>
                         </div>
                         <div className={`text-sm font-medium mb-1
                           ${isRejectedEvent ? 'text-red-600' : 
                             isWarning ? 'text-orange-600' : 
                             isPassed ? 'text-slate-600' : 'text-slate-400'}
                         `}>
                           {event.name}
                         </div>
                         {event.detail && (
                           <div className="mt-1 text-sm text-slate-500">
                             {event.detail}
                           </div>
                         )}
                       </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

      </main>
      
      {/* Simple Footer */}
      <footer className="max-w-3xl mx-auto mt-12 px-4 text-center pb-8 text-sm text-slate-400">
        <div className="font-bold text-slate-500 mb-1">ICARE TRACE</div>
        <p>Digital Traceability System for Gedong Gincu Mango</p>
        <p className="mt-2">Indramayu, West Java</p>
      </footer>
    </div>
  );
}

// Simple internal icon
function QrCodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
      <rect x="7" y="7" width="3" height="3"></rect>
      <rect x="14" y="7" width="3" height="3"></rect>
      <rect x="7" y="14" width="3" height="3"></rect>
      <rect x="14" y="14" width="3" height="3"></rect>
    </svg>
  );
}
