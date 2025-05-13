import { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';

const useCalculatorLogic = () => {
  const [expression, setExpression] = useState<string>(''); // holds full expression
  const [result, setResult] = useState<string>('0');

  const handleNumberClick = (value: string) => {
    setExpression((prev) => prev + value);
  };

  const handleOperatorClick = (value: string) => {
    setExpression((prev) => prev + ' ' + value + ' ');
  };

  const handleEqualsClick = () => {
    try {
      const evalResult = evaluate(expression);
      setResult(String(evalResult));
      setExpression(String(evalResult)); // allow chaining like real calculators
    } catch {
      setResult('Error');
      setExpression('');
    }
  };

  const handleClearClick = () => {
    setExpression('');
    setResult('0');
  };

  const handleDecimalClick = () => {
    if (!expression.includes('.')) {
      setExpression((prev) => prev + '.');
    }
  };

  const handlePercentageClick = () => {
    try {
      const evalResult = evaluate(expression + ' / 100');
      setResult(String(evalResult));
      setExpression(String(evalResult));
    } catch {
      setResult('Error');
      setExpression('');
    }
  };

  const handleBackspaceClick = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  // Add keyboard event listener
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;

      if (key >= '0' && key <= '9') {
        handleNumberClick(key);
      } else if (key === '.') {
        handleDecimalClick();
      } else if (key === '+') {
        handleOperatorClick('+');
      } else if (key === '-') {
        handleOperatorClick('-');
      } else if (key === '*') {
        handleOperatorClick('*');
      } else if (key === '/') {
        handleOperatorClick('/');
      } else if (key === '=' || key === 'Enter') {
        handleEqualsClick();
      } else if (key === 'Backspace') {
        handleBackspaceClick();
      } else if (key === 'Escape') {
        handleClearClick();
      }
    };

    // Listen to keyboard events
    document.addEventListener('keydown', handleKeyPress);

    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [expression]);

  return {
    expression,
    result,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentageClick,
    handleBackspaceClick, // Expose the new handler
    setExpression,
  };
};

export default useCalculatorLogic;