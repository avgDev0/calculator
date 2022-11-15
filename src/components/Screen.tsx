import React from 'react'

export type ScreenProps = {
  currentOperationText: string | null;
  currentNumber: string | null;
};

export default function Screen({ currentOperationText, currentNumber }: ScreenProps) {
  return (
    <div className='screen'>
      <div className='operation'>
        {currentOperationText ?? ''}
      </div>
      <div className='currentNumber'>
        {currentNumber ?? ''}
      </div>
    </div>
  )
}
