import React, { useState } from 'react';
import Display from './Display';
import NormalMode from './NormalMode';
import ScientificMode from './ScientificMode';
import useCalculatorLogic from '../hooks/useCalculatorLogic';
import '../App.css';

const Calculator: React.FC = () => {
  const [mode, setMode] = useState<'normal' | 'scientific'>('normal');
  const {
    currentInput,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentageClick,
    setCurrentInput,
  } = useCalculatorLogic();

  return (
    <div className="calculator">
      <button onClick={() => setMode(mode === 'normal' ? 'scientific' : 'normal')} className="mode-toggle">
        Switch to {mode === 'normal' ? 'Scientific' : 'Normal'} Mode
      </button>
      <Display displayValue={currentInput} />
      {mode === 'normal' ? (
        <NormalMode
          handleNumberClick={handleNumberClick}
          handleOperatorClick={handleOperatorClick}
          handleEqualsClick={handleEqualsClick}
          handleClearClick={handleClearClick}
          handleDecimalClick={handleDecimalClick}
          handlePercentageClick={handlePercentageClick}
        />
      ) : (
        <ScientificMode
          currentInput={currentInput}
          setCurrentInput={setCurrentInput}
          handleOperatorClick={handleOperatorClick}
          handleEqualsClick={handleEqualsClick}
        />
      )}
    </div>
  );
};

export default Calculator;
