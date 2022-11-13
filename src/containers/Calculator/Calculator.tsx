import React, { useState } from 'react';
import Screen from '../../components/Screen';
import Buttons from './Buttons';
import { Action } from './enums';
import './styles.css';
import { OperationItem } from './types';

export default function Calculator() {
  const [currentNumber, setCurrentNumber] = useState<string | null>(null);
  const [currentResult, setCurrentResult] = useState<string | null>(null);
  const [currentAction, setCurrentAction] = useState<Action | null>(null);
  const [operation, setOperation] = useState<Array<OperationItem>>([]);

  const handleNumberButtonClick = (value: string) => setCurrentNumber(v => {
    if (v) {
      return v + value;
    }

    if (currentAction) {
      setOperation(operation.concat({ text: currentAction.toString(), type: 'action' }));
      setCurrentAction(null);
    }

    return value;
  });

  const handleActionClick = (action: Action) => {
    switch (action) {
      case Action.CLEAR:
        setOperation([]);
        setCurrentNumber(null);
        setCurrentAction(null);
        break;
      case Action.DELETE:
        setCurrentNumber(v => {
          if (v) {
            const remaining = v.slice(1, -1);
            return remaining.length ? remaining : null;
          }

          return v;
        });
        break;
      case Action.RESOLVE:
        //TODO: Add this;
        break;
      case Action.DIVIDE:
      case Action.TIMES:
      case Action.MINUS:
      case Action.SUM:
        //! Fall-through
        setCurrentAction(action);
        setOperation(op => {
          if (currentNumber) {
            return op.concat({ text: currentNumber, type: 'number' });
          }

          return op;
        });
        setCurrentNumber(null);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <Screen operation={operation} currentNumber={currentNumber} />
      <Buttons currentAction={currentAction} onNumberClick={handleNumberButtonClick} onActionClick={handleActionClick} />
    </div>
  )
}
