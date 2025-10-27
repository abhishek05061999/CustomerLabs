import React, { useState } from 'react';
import './App.css';
import SegmentModal from './components/SegmentModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveSegment = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveSegmentData = (segmentData) => {
    console.log('Segment data to be sent to server:', segmentData);
    // Here you would typically send the data to your server
    alert('Segment saved successfully! Check console for data.');
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>Segment Management</h1>
        <button 
          className="save-segment-btn"
          onClick={handleSaveSegment}
        >
          Save segment
        </button>
      </div>
      
      {isModalOpen && (
        <SegmentModal
          onClose={handleCloseModal}
          onSave={handleSaveSegmentData}
        />
      )}
    </div>
  );
}

export default App;
