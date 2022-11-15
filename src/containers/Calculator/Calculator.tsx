import React, { useState } from 'react';
import Screen from '../../components/Screen';
import Buttons from './Buttons';
import { Action } from './enums';
import './styles.css';

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState<string | null>(null);
  const [previousNumber, setPreviousNumber] = useState<string | null>(null);
  const [currentAction, setCurrentAction] = useState<Action | null>(null);

  const resolveOperation = (v1: number, v2: number, operation: Action) => {
    let result = 0;
    switch (operation) {
      case Action.SUM:
        result = v1 + v2;
        break;
      case Action.MINUS:
        result = v1 - v2;
        break;
      case Action.DIVIDE:
        result = v1 / v2;
        break;
      case Action.TIMES:
        result = v1 * v2;
        break;
      default:
        return 0;
    }

    return Number.parseFloat(result.toFixed(13));
  };

  const handleNumberButtonClick = (value: string) => {
    if (currentAction && !previousNumber) {
      //! If action is pressed and no previous number is present, set current as previous, keep action and clean new number
      setPreviousNumber(currentNumber);
      setCurrentNumber(null);
    }

    setCurrentNumber(v => v ? v + value : value);
  };

  const handleActionClick = (action: Action) => {
    switch (action) {
      case Action.CLEAR:
        setCurrentNumber(null);
        setCurrentAction(null);
        setPreviousNumber(null)
        break;
      case Action.DELETE:
        setCurrentNumber(v => {
          if (v) {
            const remaining = v.slice(0, v.length - 1);
            return remaining.length ? remaining : null;
          }

          return v;
        });
        break;
      case Action.RESOLVE:
        if (currentAction && previousNumber && currentNumber) {
          setCurrentNumber(
            resolveOperation(
              parseFloat(previousNumber),
              parseFloat(currentNumber),
              currentAction
            ).toString(),
          );

          setCurrentAction(null);
          setPreviousNumber(null);
        }
        break;
      case Action.DIVIDE:
      case Action.TIMES:
      case Action.MINUS:
      case Action.SUM:
        //! Fall-through
        if (currentAction && previousNumber && currentNumber) {
          setPreviousNumber(
            resolveOperation(
              parseFloat(previousNumber),
              parseFloat(currentNumber),
              currentAction
            ).toString(),
          );

          setCurrentAction(action);
          setCurrentNumber(null);

          break;
        }

        setCurrentAction(action);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Screen currentOperationText={previousNumber && `${previousNumber}${currentAction ?? ''}`} currentNumber={currentNumber} />
      <Buttons
        currentAction={currentAction}
        markCurrentAction={Boolean(currentNumber && !previousNumber || previousNumber && !currentNumber)}
        onNumberClick={handleNumberButtonClick}
        onActionClick={handleActionClick}
      />
    </div>
  )
}
