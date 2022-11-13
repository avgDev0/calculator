import React, { useEffect, useState } from 'react'
import { OperationItem } from '../containers/Calculator/types';

export type ScreenProps = {
  operation: Array<OperationItem>;
  currentNumber: string | null;
};

export default function Screen({ operation, currentNumber }: ScreenProps) {
  const [operationText, setOperationText] = useState<string>('');

  useEffect(() => {
    setOperationText(operation.reduce<string>((acc, operationItem) => {
      return acc + operationItem.text;
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
