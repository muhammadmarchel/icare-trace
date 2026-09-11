import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { farms } from '../mockData/data';
import { Filter, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import L from 'leaflet';

// Fix leaflet icon issue in react
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const defaultCenter: [number, number] = [-6.45, 108.28]; // Indramayu center approx

export default function MapPage() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const filteredFarms = filter === 'All' ? farms : farms.filter(f => f.status === filter);

  return (
    <div className="h-full flex flex-col p-6 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Farm Map</h1>
          <p className="text-slate-500 mt-1">Spatial distribution and real-time status of all registered farms.</p>
        </div>
        <div className="flex bg-white rounded-lg p-1 shadow-sm border border-slate-200">
          {['All', 'Active', 'Monitoring', 'Warning', 'Problem'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${filter === f ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col relative z-0">
        <MapContainer center={defaultCenter} zoom={12} className="w-full h-full min-h-[500px]">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredFarms.map((farm) => (
            <Marker key={farm.id} position={[farm.lat, farm.lng]}>
              <Popup className="rounded-lg">
                <div className="p-1 min-w-[200px]">
                  <div className="font-bold text-slate-900 text-base">{farm.id}</div>
                  <div className="text-sm text-slate-600 mt-1">{farm.farmerName}</div>
                  <div className="text-xs text-slate-500">{farm.cooperative}</div>
                  <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-slate-400 block">Area</span>
                      <span className="font-medium">{farm.area} ha</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">Fruit Fly</span>
                      <span className={`font-medium ${farm.fruitFlyStatus === 'Normal' ? 'text-green-600' : 'text-red-600'}`}>{farm.fruitFlyStatus}</span>
                    </div>
                    <div className="col-span-2">
                       <span className="text-slate-400 block">Current Batch</span>
                       <span className="font-medium text-primary">{farm.currentBatch}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => navigate(`/farms/${farm.id}`)}
                    className="mt-4 w-full flex items-center justify-center bg-primary text-white py-2 rounded-md text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    View Farm <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
        
        {/* Legend Overlay */}
        <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-md border border-slate-200 z-[400]">
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center">
            <Filter className="h-3 w-3 mr-1" /> Legend
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span> Active</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span> Monitoring</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span> Warning</div>
            <div className="flex items-center"><span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span> Problem</div>
          </div>
        </div>
      </div>
    </div>
  );
}
