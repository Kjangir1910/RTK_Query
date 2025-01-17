import React, { useState } from 'react';
import { useFetchDataQuery } from '../app/apiSlice';

const ApiButtons = () => {
  const [selectedId, setSelectedId] = useState(null);
  const { data, error, isLoading } = useFetchDataQuery(selectedId, {
    skip: selectedId === null, // Skip fetching if no ID is selected
  });

  const handleButtonClick = (id) => {
    setSelectedId(id); // Trigger the API call with the selected ID
  };

  return (
    <div>
      <h1>API Buttons</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index + 1)} 
            style={{
              padding: '10px 20px',
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Button {index + 1}
          </button>
        ))}
      </div>

      {/* Data rendering */}
      <div style={{ marginTop: '20px' }}>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div>
            <h3>Data for ID {selectedId}:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <div>
              <h4>{data.title}</h4>
              <p>Price: ${data.price}</p>
              <img src={data.image} alt={data.title} style={{ width: '100px' }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApiButtons;