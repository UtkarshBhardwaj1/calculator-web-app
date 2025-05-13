import React from 'react';
import Button from './Button';
import '../App.css';

interface NormalModeProps {
  handleNumberClick: (value: string) => void;
  handleOperatorClick: (value: string) => void;
  handleEqualsClick: () => void;
  handleClearClick: () => void;
  handleDecimalClick: () => void;
  handlePercentageClick: () => void;
}

const NormalMode: React.FC<NormalModeProps> = ({
  handleNumberClick,
  handleOperatorClick,
  handleEqualsClick,
  handleClearClick,
  handleDecimalClick,
  handlePercentageClick,
  
}) => {
  return (
    <div className="normal-mode">
      <div className="row">
        <Button value="AC" onClick={() => handleClearClick()} className="clear" />
        <Button value="+/-" onClick={() => console.log('+/-')} />
        <Button value="%" onClick={() => handlePercentageClick()} />
        <Button value="/" onClick={handleOperatorClick} className="operator" />
        
      </div>
      <div className="row">
        {['7', '8', '9'].map((num) => (
          <Button key={num} value={num} onClick={handleNumberClick} />
        ))}
        <Button value="*" onClick={handleOperatorClick} className="operator" />
      </div>
      <div className="row">
        {['4', '5', '6'].map((num) => (
          <Button key={num} value={num} onClick={handleNumberClick} />
        ))}
        <Button value="-" onClick={handleOperatorClick} className="operator" />
      </div>
      <div className="row">
        {['1', '2', '3'].map((num) => (
          <Button key={num} value={num} onClick={handleNumberClick} />
        ))}
        <Button value="+" onClick={handleOperatorClick} className="operator" />
      </div>
      <div className="row">
        <Button value="0" onClick={handleNumberClick} className="zero" />
        <Button value="." onClick={() => handleDecimalClick()} />
        <Button value="=" onClick={() => handleEqualsClick()} className="equals" />
      </div>
    </div>
  );
};

export default NormalMode;
