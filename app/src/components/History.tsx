// src/components/History.tsx
import React from 'react';

interface Props {
  history: string[];
}

export const History: React.FC<Props> = ({ history }) => {
  if (!history.length) return null;

  return (
    <div className="mt-4 p-2 bg-gray-100 rounded text-sm max-h-40 overflow-y-auto">
      <h3 className="font-semibold mb-2">History</h3>
      <ul>
        {history.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

