import React, { useState } from 'react';
import './SegmentModal.css';

const schemaOptions = [
  { value: 'first_name', label: 'First Name' },
  { value: 'last_name', label: 'Last Name' },
  { value: 'gender', label: 'Gender' },
  { value: 'age', label: 'Age' },
  { value: 'account_name', label: 'Account Name' },
  { value: 'city', label: 'City' },
  { value: 'state', label: 'State' }
];

const SegmentModal = ({ onClose, onSave }) => {
  const [segmentName, setSegmentName] = useState('');
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  const [currentDropdownValue, setCurrentDropdownValue] = useState('');
  const [savedSegment, setSavedSegment] = useState(null);

  const getAvailableOptions = () => {
    const selectedValues = selectedSchemas.map(schema => schema.value);
    return schemaOptions.filter(option => !selectedValues.includes(option.value));
  };

  const handleAddSchema = () => {
    if (currentDropdownValue) {
      const selectedOption = schemaOptions.find(option => option.value === currentDropdownValue);
      if (selectedOption) {
        setSelectedSchemas([...selectedSchemas, selectedOption]);
        setCurrentDropdownValue('');
      }
    }
  };

  const handleRemoveSchema = (index) => {
    const newSchemas = selectedSchemas.filter((_, i) => i !== index);
    setSelectedSchemas(newSchemas);
  };

  const handleSave = () => {
    if (!segmentName.trim()) {
      alert('Please enter a segment name');
      return;
    }

    if (selectedSchemas.length === 0) {
      alert('Please add at least one schema');
      return;
    }

    const segmentData = {
      segment_name: segmentName,
      schema: selectedSchemas.map(schema => ({
        [schema.value]: schema.label
      }))
    };

    // Save the segment data to display in View Audience
    setSavedSegment(segmentData);
    
    // Call the parent save function
    onSave(segmentData);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-content">
          {/* Left Panel - View Audience */}
          <div className="left-panel">
            <div className="panel-header">
              <span className="back-arrow">←</span>
              <span>View Audience</span>
            </div>
            <div className="panel-content">
              <div className="audience-preview">
                <h3>Audience Preview</h3>
                {savedSegment ? (
                  <div className="saved-segment-display">
                    <div className="segment-header">
                      <h4>Saved Segment Data</h4>
                    </div>
                    <div className="json-display">
                      <pre className="json-code">
{JSON.stringify(savedSegment, null, 2)}
                      </pre>
                    </div>
                  </div>
                ) : (
                  <div className="no-segment">
                    <p>No segment saved yet</p>
                    <p className="instruction-text">Create and save a segment to see it here</p>
                    <div className="audience-stats">
                      <div className="stat-item">
                        <span className="stat-label">Current Schemas:</span>
                        <span className="stat-value">{selectedSchemas.length}</span>
                      </div>
                      {selectedSchemas.length > 0 && (
                        <div className="current-schemas-preview">
                          <h5>Current Selection:</h5>
                          <div className="schema-preview-list">
                            {selectedSchemas.map((schema, index) => (
                              <span key={index} className="schema-preview-item">
                                {schema.label}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Panel - Saving Segment */}
          <div className="right-panel">
            <div className="panel-header">
              <span className="back-arrow">←</span>
              <span>Saving Segment</span>
            </div>
            <div className="panel-content">
              <div className="input-group">
                <label htmlFor="segmentName">Enter the Name of the Segment</label>
                <input
                  id="segmentName"
                  type="text"
                  placeholder="Name of the segment"
                  value={segmentName}
                  onChange={(e) => setSegmentName(e.target.value)}
                />
              </div>

              <div className="instruction">
                <p>To save your segment, you need to add the schemas to build the query.</p>
              </div>

              <div className="schema-section">
                <div className="schema-dropdown-container">
                  <select
                    value={currentDropdownValue}
                    onChange={(e) => setCurrentDropdownValue(e.target.value)}
                    className="schema-dropdown"
                  >
                    <option value="">Add schema to segment</option>
                    {getAvailableOptions().map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button 
                    className="add-schema-btn"
                    onClick={handleAddSchema}
                    disabled={!currentDropdownValue}
                  >
                    + Add new schema
                  </button>
                </div>

                <div className="selected-schemas">
                  {selectedSchemas.map((schema, index) => (
                    <div key={index} className="schema-item">
                      <span className="schema-label">{schema.label}</span>
                      <button 
                        className="remove-schema-btn"
                        onClick={() => handleRemoveSchema(index)}
                      >
                        −
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save the Segment
          </button>
        </div>
      </div>
    </div>
  );
};

export default SegmentModal;
