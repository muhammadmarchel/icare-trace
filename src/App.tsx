import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import FarmsAndFarmers from './pages/FarmsAndFarmers';
import MapPage from './pages/MapPage';
import FarmPassport from './pages/FarmPassport';
import BatchTraceability from './pages/BatchTraceability';
import BatchDetail from './pages/BatchDetail';
import Rejections from './pages/Rejections';
import RejectionAnalysis from './pages/RejectionAnalysis';
import QRTrace from './pages/QRTrace';
import PublicTrace from './pages/PublicTrace';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/trace/:batchId" element={<PublicTrace />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="farms" element={<FarmsAndFarmers />} />
        <Route path="farms/:id" element={<FarmPassport />} />
        <Route path="map" element={<MapPage />} />
        <Route path="batches" element={<BatchTraceability />} />
        <Route path="batches/:id" element={<BatchDetail />} />
        <Route path="rejections" element={<Rejections />} />
        <Route path="analytics" element={<RejectionAnalysis />} />
        <Route path="qr-trace" element={<QRTrace />} />
      </Route>
    </Routes>
  );
}

export default App;
