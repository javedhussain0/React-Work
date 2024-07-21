import React, { useState } from 'react';
import "./History.css"

const initialHistory = [
  { id: 1, query: 'The last day' },
  { id: 2, query: 'Java ' },
  { id: 3, query: 'Web dovelopmwnt' }
];

const HistoryItem = ({ id, query, timestamp }) => (
  <div>
    <p>{query}</p>
  </div>
);

const History = () => {
  const [history, setHistory] = useState(initialHistory);

  const deleteHistory = () => {
    setHistory([]);
  };

  return (
    <div className='history-li'>
      <h1>Browsing History</h1>
      {history.length === 0 ? (
        <p className='para'>No history available.</p>
      ) : (
        history.map((item) => (
          <HistoryItem key={item.id} id={item.id} query={item.query} timestamp={item.timestamp} />
        ))
      )}
      <button id='delete-btn' onClick={deleteHistory}>Delete All History</button>
    </div>
  );
};

export default History;
