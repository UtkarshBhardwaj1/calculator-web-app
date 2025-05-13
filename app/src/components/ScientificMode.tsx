import React from 'react';
import Button from './Button';
import { evaluate } from 'mathjs';
import '../App.css';

interface ScientificModeProps {
  currentInput: string;
  setCurrentInput: React.Dispatch<React.SetStateAction<string>>;
  handleNumberClick: (value: string) => void;
  handleOperatorClick: (value: string) => void;
  handleEqualsClick: () => void;
}

const ScientificMode: React.FC<ScientificModeProps> = ({
  currentInput,
  setCurrentInput,
  handleNumberClick,
  handleOperatorClick,
  handleEqualsClick,
}) => {
  const handleScientificOperation = (operation: string) => {
    try {
      const result = evaluate(`${operation}(${currentInput})`);
      setCurrentInput(String(result));
    } catch {
      setCurrentInput('Error');
    }
  };

  return (
    <div className="scientific-mode">
      <div className="row">
        <Button value="sin" onClick={() => handleScientificOperation('sin')} />
        <Button value="cos" onClick={() => handleScientificOperation('cos')} />
        <Button value="tan" onClick={() => handleScientificOperation('tan')} />
        <Button value="log" onClick={() => handleScientificOperation('log10')} />
      </div>
      <div className="row">
        <Button value="√" onClick={() => handleScientificOperation('sqrt')} />
        <Button value="x²" onClick={() => setCurrentInput(String(Math.pow(parseFloat(currentInput), 2)))} />
        <Button value="x³" onClick={() => setCurrentInput(String(Math.pow(parseFloat(currentInput), 3)))} />
        <Button value="1/x" onClick={() => setCurrentInput(String(1 / parseFloat(currentInput)))} />
      </div>
      <div className="row">
        <Button value="π" onClick={() => setCurrentInput((prev) => prev + Math.PI.toString())} />
        <Button value="e" onClick={() => setCurrentInput((prev) => prev + Math.E.toString())} />
        <Button value="(" onClick={() => setCurrentInput((prev) => prev + '(')} />
        <Button value=")" onClick={() => setCurrentInput((prev) => prev + ')')} />
      </div>
      <div className="row">
        {['7', '8', '9'].map((val) => (
          <Button key={val} value={val} onClick={handleNumberClick} />
        ))}
        <Button value="*" onClick={handleOperatorClick} />
      </div>
      <div className="row">
        {['4', '5', '6'].map((val) => (
          <Button key={val} value={val} onClick={handleNumberClick} />
        ))}
        <Button value="-" onClick={handleOperatorClick} />
      </div>
      <div className="row">
        {['1', '2', '3'].map((val) => (
          <Button key={val} value={val} onClick={handleNumberClick} />
        ))}
        <Button value="+" onClick={handleOperatorClick} />
      </div>
      <div className="row">
        <Button value="0" onClick={handleNumberClick} className="zero" />
        <Button value="." onClick={() => setCurrentInput((prev) => prev + '.')} />
        <Button value="=" onClick={handleEqualsClick} className="equals" />
      </div>
    </div>
  );
};

export default ScientificMode;
