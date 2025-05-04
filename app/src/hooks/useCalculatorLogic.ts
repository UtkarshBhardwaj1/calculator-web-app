import { useState } from 'react';
import { evaluate } from 'mathjs';

const useCalculatorLogic = () => {
  const [currentInput, setCurrentInput] = useState<string>('0');
  const [previousInput, setPreviousInput] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [result, setResult] = useState<string>('0');

  const handleNumberClick = (value: string) => {
    setCurrentInput((prev) => (prev === '0' || prev === 'Error' ? value : prev + value));
  };

  const handleOperatorClick = (value: string) => {
    if (currentInput === 'Error') return;
    if (previousInput !== null) {
      handleEqualsClick();
    }
    setPreviousInput(currentInput);
    setOperator(value);
    setCurrentInput('0');
  };

  const handleEqualsClick = () => {
    if (!previousInput || !operator) return;
    try {
      const expression = `${previousInput} ${operator} ${currentInput}`;
      const evalResult = evaluate(expression);
      setResult(String(evalResult));
      setCurrentInput(String(evalResult));
      setPreviousInput(null);
      setOperator(null);
    } catch {
      setCurrentInput('Error');
    }
  };

  const handleClearClick = () => {
    setCurrentInput('0');
    setPreviousInput(null);
    setOperator(null);
    setResult('0');
  };

  const handleDecimalClick = () => {
    if (!currentInput.includes('.')) {
      setCurrentInput((prev) => prev + '.');
    }
  };

  const handlePercentageClick = () => {
    setCurrentInput((prev) => String(parseFloat(prev) / 100));
  };

  return {
    currentInput,
    previousInput,
    operator,
    result,
    handleNumberClick,
    handleOperatorClick,
    handleEqualsClick,
    handleClearClick,
    handleDecimalClick,
    handlePercentageClick,
    setCurrentInput,
  };
};

export default useCalculatorLogic;
