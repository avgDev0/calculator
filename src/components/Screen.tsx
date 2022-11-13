import React, { useEffect, useState } from 'react'
import { Action } from '../containers/Calculator/enums';

export type ScreenProps = {
  operation: Array<string | Action>;
  currentNumber: string | null;
};

export default function Screen({ operation, currentNumber }: ScreenProps) {
  const [operationText, setOperationText] = useState<string>('');

  useEffect(() => {
    setOperationText(operation.reduce<string>((acc, operationItem) => {
      return acc + operationItem.toString();
    }, ''));
  }, [operation]);

  return (
    <div className='screen'>
      <div className='operation'>
        {operationText}
      </div>
      <div className='currentNumber'>
        {currentNumber ?? ''}
      </div>
    </div>
  )
}
