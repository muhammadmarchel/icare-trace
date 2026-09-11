export const farmers = [
  { id: 'F-001', name: 'Budi Santoso', phone: '081234567890', cooperative: 'Cooperative 01', village: 'Jatibarang', district: 'Indramayu', area: 1.2, trees: 120, variety: 'Gedong Gincu', plantingYear: 2015, status: 'Active' },
  { id: 'F-002', name: 'Siti Rahma', phone: '081234567891', cooperative: 'Cooperative 02', village: 'Haurgeulis', district: 'Indramayu', area: 2.0, trees: 200, variety: 'Gedong Gincu', plantingYear: 2012, status: 'Active' },
  { id: 'F-003', name: 'Agus Setiawan', phone: '081234567892', cooperative: 'Cooperative 01', village: 'Lohbener', district: 'Indramayu', area: 0.8, trees: 80, variety: 'Gedong Gincu', plantingYear: 2018, status: 'Active' },
  { id: 'F-004', name: 'Dewi Lestari', phone: '081234567893', cooperative: 'Cooperative 02', village: 'Widasari', district: 'Indramayu', area: 1.5, trees: 150, variety: 'Gedong Gincu', plantingYear: 2014, status: 'Active' },
  { id: 'F-005', name: 'Wawan Gunawan', phone: '081234567894', cooperative: 'Cooperative 01', village: 'Sliyeg', district: 'Indramayu', area: 1.0, trees: 100, variety: 'Gedong Gincu', plantingYear: 2016, status: 'Active' },
  { id: 'F-006', name: 'Rina Marlina', phone: '081234567895', cooperative: 'Cooperative 03', village: 'Jatibarang', district: 'Indramayu', area: 1.8, trees: 180, variety: 'Gedong Gincu', plantingYear: 2013, status: 'Active' },
  { id: 'F-007', name: 'Ahmad Faisal', phone: '081234567896', cooperative: 'Cooperative 01', village: 'Haurgeulis', district: 'Indramayu', area: 2.5, trees: 250, variety: 'Gedong Gincu', plantingYear: 2010, status: 'Active' },
  { id: 'F-008', name: 'Nurhayati', phone: '081234567897', cooperative: 'Cooperative 02', village: 'Lohbener', district: 'Indramayu', area: 0.9, trees: 90, variety: 'Gedong Gincu', plantingYear: 2017, status: 'Active' },
  { id: 'F-009', name: 'Hendra Saputra', phone: '081234567898', cooperative: 'Cooperative 03', village: 'Widasari', district: 'Indramayu', area: 1.3, trees: 130, variety: 'Gedong Gincu', plantingYear: 2015, status: 'Active' },
  { id: 'F-010', name: 'Lilis Suryani', phone: '081234567899', cooperative: 'Cooperative 01', village: 'Sliyeg', district: 'Indramayu', area: 1.1, trees: 110, variety: 'Gedong Gincu', plantingYear: 2016, status: 'Active' },
];

export const farms = [
  { id: 'FARM-001', farmerId: 'F-001', farmerName: 'Budi Santoso', cooperative: 'Cooperative 01', area: 1.2, lat: -6.4719, lng: 108.2861, variety: 'Gedong Gincu', treeCount: 120, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-12', currentBatch: 'GG-IND-2026-001', village: 'Jatibarang' },
  { id: 'FARM-024', farmerId: 'F-002', farmerName: 'Siti Rahma', cooperative: 'Cooperative 02', area: 2.0, lat: -6.4520, lng: 108.2910, variety: 'Gedong Gincu', treeCount: 200, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-18', currentBatch: 'GG-IND-2026-003', village: 'Haurgeulis' },
  { id: 'FARM-003', farmerId: 'F-003', farmerName: 'Agus Setiawan', cooperative: 'Cooperative 01', area: 0.8, lat: -6.4800, lng: 108.2700, variety: 'Gedong Gincu', treeCount: 80, status: 'Warning', fruitFlyStatus: 'High', lastHarvest: '2026-08-10', currentBatch: 'GG-IND-2026-015', village: 'Lohbener' },
  { id: 'FARM-004', farmerId: 'F-004', farmerName: 'Dewi Lestari', cooperative: 'Cooperative 02', area: 1.5, lat: -6.4900, lng: 108.2600, variety: 'Gedong Gincu', treeCount: 150, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-15', currentBatch: 'GG-IND-2026-020', village: 'Widasari' },
  { id: 'FARM-005', farmerId: 'F-005', farmerName: 'Wawan Gunawan', cooperative: 'Cooperative 01', area: 1.0, lat: -6.4600, lng: 108.2500, variety: 'Gedong Gincu', treeCount: 100, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-14', currentBatch: 'GG-IND-2026-025', village: 'Sliyeg' },
  { id: 'FARM-006', farmerId: 'F-006', farmerName: 'Rina Marlina', cooperative: 'Cooperative 03', area: 1.8, lat: -6.4500, lng: 108.2800, variety: 'Gedong Gincu', treeCount: 180, status: 'Monitoring', fruitFlyStatus: 'Low', lastHarvest: '2026-08-11', currentBatch: 'GG-IND-2026-030', village: 'Jatibarang' },
  { id: 'FARM-007', farmerId: 'F-007', farmerName: 'Ahmad Faisal', cooperative: 'Cooperative 01', area: 2.5, lat: -6.4400, lng: 108.2900, variety: 'Gedong Gincu', treeCount: 250, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-16', currentBatch: 'GG-IND-2026-035', village: 'Haurgeulis' },
  { id: 'FARM-008', farmerId: 'F-008', farmerName: 'Nurhayati', cooperative: 'Cooperative 02', area: 0.9, lat: -6.4300, lng: 108.3000, variety: 'Gedong Gincu', treeCount: 90, status: 'Problem', fruitFlyStatus: 'Critical', lastHarvest: '2026-08-09', currentBatch: 'GG-IND-2026-040', village: 'Lohbener' },
  { id: 'FARM-009', farmerId: 'F-009', farmerName: 'Hendra Saputra', cooperative: 'Cooperative 03', area: 1.3, lat: -6.4200, lng: 108.3100, variety: 'Gedong Gincu', treeCount: 130, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-17', currentBatch: 'GG-IND-2026-045', village: 'Widasari' },
  { id: 'FARM-010', farmerId: 'F-010', farmerName: 'Lilis Suryani', cooperative: 'Cooperative 01', area: 1.1, lat: -6.4100, lng: 108.3200, variety: 'Gedong Gincu', treeCount: 110, status: 'Active', fruitFlyStatus: 'Normal', lastHarvest: '2026-08-13', currentBatch: 'GG-IND-2026-050', village: 'Sliyeg' }
];

export const batches = [
  { id: 'GG-IND-2026-001', farmId: 'FARM-001', farmerName: 'Budi Santoso', cooperative: 'Cooperative 01', harvestDate: '2026-08-12', quantity: 450, currentStage: 'Exported', status: 'Passed', destination: 'Japan' },
  { id: 'GG-IND-2026-002', farmId: 'FARM-004', farmerName: 'Dewi Lestari', cooperative: 'Cooperative 02', harvestDate: '2026-08-15', quantity: 380, currentStage: 'Exported', status: 'Passed', destination: 'Japan' },
  { id: 'GG-IND-2026-003', farmId: 'FARM-024', farmerName: 'Siti Rahma', cooperative: 'Cooperative 02', harvestDate: '2026-08-18', quantity: 420, currentStage: 'Japan', status: 'Rejected', destination: 'Japan' },
  { id: 'GG-IND-2026-004', farmId: 'FARM-005', farmerName: 'Wawan Gunawan', cooperative: 'Cooperative 01', harvestDate: '2026-08-14', quantity: 350, currentStage: 'Packing', status: 'Processing', destination: 'Singapore' },
  { id: 'GG-IND-2026-005', farmId: 'FARM-007', farmerName: 'Ahmad Faisal', cooperative: 'Cooperative 01', harvestDate: '2026-08-16', quantity: 500, currentStage: 'Export Ready', status: 'Passed', destination: 'Japan' },
  { id: 'GG-IND-2026-006', farmId: 'FARM-003', farmerName: 'Agus Setiawan', cooperative: 'Cooperative 01', harvestDate: '2026-08-10', quantity: 200, currentStage: 'Sorting', status: 'Warning', destination: 'Middle East' },
  { id: 'GG-IND-2026-007', farmId: 'FARM-009', farmerName: 'Hendra Saputra', cooperative: 'Cooperative 03', harvestDate: '2026-08-17', quantity: 400, currentStage: 'VHT', status: 'Processing', destination: 'Japan' },
  { id: 'GG-IND-2026-008', farmId: 'FARM-010', farmerName: 'Lilis Suryani', cooperative: 'Cooperative 01', harvestDate: '2026-08-13', quantity: 300, currentStage: 'Exported', status: 'Passed', destination: 'Japan' },
  { id: 'GG-IND-2026-009', farmId: 'FARM-006', farmerName: 'Rina Marlina', cooperative: 'Cooperative 03', harvestDate: '2026-08-11', quantity: 450, currentStage: 'Packing', status: 'Processing', destination: 'Singapore' },
  { id: 'GG-IND-2026-010', farmId: 'FARM-008', farmerName: 'Nurhayati', cooperative: 'Cooperative 02', harvestDate: '2026-08-09', quantity: 150, currentStage: 'Farm', status: 'Problem', destination: 'Local' },
];

export const rejections = [
  { id: 'REJ-001', batchId: 'GG-IND-2026-003', date: '2026-08-20', destination: 'Japan', quantity: 120, reason: 'Fruit Quality', stage: 'Sorting', status: 'Rejected' },
  { id: 'REJ-002', batchId: 'GG-IND-2026-012', date: '2026-08-21', destination: 'Japan', quantity: 80, reason: 'Size', stage: 'Grading', status: 'Rejected' },
  { id: 'REJ-003', batchId: 'GG-IND-2026-015', date: '2026-08-22', destination: 'Singapore', quantity: 50, reason: 'Physical Damage', stage: 'Packing', status: 'Rejected' },
  { id: 'REJ-004', batchId: 'GG-IND-2026-018', date: '2026-08-23', destination: 'Middle East', quantity: 200, reason: 'Fruit Fly / Pest', stage: 'Farm', status: 'Rejected' },
];

export const timelineData = {
  'GG-IND-2026-003': [
    { stage: 'FARM', name: 'FARM-024', status: 'Passed', date: '2026-08-18', detail: 'Farmer: Siti Rahma, Cooperative: Cooperative 02, Harvest: 18 Aug 2026, Quantity: 420 kg' },
    { stage: 'HARVEST', name: 'Completed', status: 'Passed', date: '2026-08-18' },
    { stage: 'COOPERATIVE', name: 'Received', status: 'Passed', date: '2026-08-18' },
    { stage: 'SORTING / GRADING', name: 'Warning', status: 'Warning', date: '2026-08-19', detail: 'This checkpoint recorded a higher-than-normal rejection rate and quality warning.', isProblemPoint: true },
    { stage: 'VHT', name: 'Passed', status: 'Passed', date: '2026-08-19' },
    { stage: 'PACKING', name: 'Passed', status: 'Passed', date: '2026-08-19' },
    { stage: 'EXPORT', name: 'Completed', status: 'Passed', date: '2026-08-20' },
    { stage: 'JAPAN', name: 'Rejected', status: 'Rejected', date: '2026-08-20', detail: 'Reason: Fruit Quality. 120kg affected.' },
  ]
}

export const timelineOrder = ['FARM', 'HARVEST', 'COOPERATIVE', 'SORTING / GRADING', 'VHT', 'PACKING', 'EXPORT', 'JAPAN'];
