import React, { useState, useEffect } from 'react';
import Display from './Display';
import NormalMode from './NormalMode';
import ScientificMode from './ScientificMode';
import useCalculatorLogic from '../hooks/useCalculatorLogic';
import '../App.css';

const Calculator: React.FC = () => {
  const [mode, setMode] = useState<'normal' | 'scientific'>('normal');
  const {
    expression,
    result,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentageClick,
    setExpression,
  } = useCalculatorLogic();

  return (
    <div className="app">
      <h1>Modern React Calculator</h1>
      <div className="calculator">
        <button
          onClick={() => setMode(mode === 'normal' ? 'scientific' : 'normal')}
          className="mode-toggle"
        >
          Switch to {mode === 'normal' ? 'Scientific' : 'Normal'} Mode
        </button>
        <Display expression={expression} result={result} />
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
            currentInput={expression}
            setCurrentInput={setExpression}
            handleNumberClick={handleNumberClick}
            handleOperatorClick={handleOperatorClick}
            handleEqualsClick={handleEqualsClick}
          />
        )}
      </div>
    </div>
  );
};

export default Calculator;
