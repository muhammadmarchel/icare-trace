import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { QrCode, Search, History, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';

export default function QRTrace() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState('');
  const [isScannerOpen, setIsScannerOpen] = useState(false);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);
  const navigate = useNavigate();

  // Mock scan history
  const recentScans = [
    { id: 'GG-IND-2026-003', status: 'Rejected', time: '2 minutes ago', icon: AlertCircle, color: 'text-red-500' },
    { id: 'GG-IND-2026-002', status: 'Exported to Japan', time: '1 hour ago', icon: TrendingUp, color: 'text-blue-500' },
    { id: 'GG-IND-2026-001', status: 'VHT Passed', time: '3 hours ago', icon: CheckCircle2, color: 'text-green-500' },
  ];

  useEffect(() => {
    if (isScannerOpen) {
      scannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 250, height: 250}, aspectRatio: 1.0 },
        /* verbose= */ false
      );
      scannerRef.current.render(
        (decodedText) => {
          // On success
          setScanResult(decodedText);
          setIsScannerOpen(false);
          scannerRef.current?.clear();
          
          // Assuming QR code contains the URL or just the ID. We extract ID.
          const batchId = decodedText.split('/').pop() || decodedText;
          navigate(`/trace/${batchId}`);
        },
        (error) => {
          // On error (ignore, it scans continuously)
        }
      );
    } else {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(e => console.error(e));
      }
    }
    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(e => console.error(e));
      }
    };
  }, [isScannerOpen, navigate]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      navigate(`/trace/${searchInput.trim()}`);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center">
          <QrCode className="mr-2 h-6 w-6 text-primary" /> QR Traceability
        </h1>
        <p className="text-slate-500 mt-1">Scan or search a batch to view its complete product journey.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1: Scan QR Code */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col items-center text-center">
          <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mb-4">
            <QrCode className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Scan QR Code</h2>
          <p className="text-slate-500 mb-6 text-sm">Scan a batch QR code using your device camera.</p>
          
          {!isScannerOpen ? (
            <button 
              onClick={() => setIsScannerOpen(true)}
              className="w-full sm:w-auto px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shadow-sm"
            >
              Open Scanner
            </button>
          ) : (
            <div className="w-full max-w-sm">
              <div id="reader" className="w-full overflow-hidden rounded-lg border-2 border-primary"></div>
              <button 
                onClick={() => setIsScannerOpen(false)}
                className="mt-4 px-4 py-2 bg-slate-100 text-slate-600 rounded-md font-medium hover:bg-slate-200 transition-colors text-sm"
              >
                Cancel Scanning
              </button>
            </div>
          )}
        </div>

        {/* CARD 2: Search Batch */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="h-16 w-16 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-blue-500" />
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">Search Batch</h2>
            <p className="text-slate-500 text-sm">Enter Batch ID manually to trace the product journey.</p>
          </div>

          <form onSubmit={handleSearch} className="mt-auto space-y-4">
            <div>
              <label htmlFor="batchId" className="block text-sm font-medium text-slate-700 mb-1">Batch ID</label>
              <input 
                type="text" 
                id="batchId"
                placeholder="e.g. GG-IND-2026-003"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="w-full px-6 py-3 bg-slate-800 text-white rounded-lg font-medium hover:bg-slate-900 transition-colors shadow-sm"
            >
              Trace Batch
            </button>
          </form>
        </div>
      </div>

      {/* Scan History */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
          <History className="mr-2 h-5 w-5 text-slate-400" /> Recent Scans
        </h2>
        <div className="divide-y divide-slate-100">
          {recentScans.map((scan, index) => {
            const Icon = scan.icon;
            return (
              <div key={index} className="py-3 flex justify-between items-center group cursor-pointer hover:bg-slate-50 -mx-6 px-6 transition-colors" onClick={() => navigate(`/trace/${scan.id}`)}>
                <div className="flex items-center">
                  <div className={`p-2 rounded-full bg-slate-50 mr-3 ${scan.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">{scan.id}</p>
                    <p className="text-sm text-slate-500">{scan.status}</p>
                  </div>
                </div>
                <div className="text-sm text-slate-400">
                  {scan.time}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
