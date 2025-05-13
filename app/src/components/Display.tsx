import React from 'react';
import '../App.css';

interface DisplayProps {
  expression: string;
  result: string;
}

const Display: React.FC<DisplayProps> = ({ expression, result }) => {
  return (
    <div className="display">
      <div className="expression">{expression}</div>
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
