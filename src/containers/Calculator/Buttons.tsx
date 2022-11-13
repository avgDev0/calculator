import React from 'react'
import { Action } from './enums';
import type { ButtonMeta } from './types';

export type ButtonsProps = {
  onNumberClick: (value: string) => void;
  onActionClick: (action: Action) => void;
  currentAction: Action | null;
}

export default function Buttons({ onNumberClick, onActionClick, currentAction }: ButtonsProps) {
  const handleNumberClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: { value } } = e;
    console.log({ value });

    onNumberClick(value);
  };

  const buttons: ButtonMeta[] = [
    {
      text: 'CE',
      type: 'double',
      onClick: () => onActionClick(Action.CLEAR),
    },
    {
      text: '←',
      type: 'single',
      onClick: () => onActionClick(Action.DELETE),
    },
    {
      text: '÷',
      type: 'single',
      onClick: () => onActionClick(Action.DIVIDE),
    },
    {
      text: '7',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '8',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '9',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '×',
      type: 'single',
      onClick: () => onActionClick(Action.TIMES),
    },
    {
      text: '4',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '5',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '6',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '+',
      type: 'single',
      onClick: () => onActionClick(Action.SUM),
    },
    {
      text: '1',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '2',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '3',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '-',
      type: 'single',
      onClick: () => onActionClick(Action.MINUS),
    },
    {
      text: '0',
      type: 'single',
      onClick: handleNumberClick,
    },
    {
      text: '.',
      type: 'single',
      onClick: () => onActionClick(Action.CLEAR),
    },
    {
      text: '=',
      type: 'double',
      onClick: handleNumberClick,
    },
  ];

  return (
    <div className='buttons'>
      {buttons.map(({ text, type, onClick }) => {
        const classes = ['button'];
        if (type === 'double') {
          classes.push('double');
        }

        if (currentAction && currentAction.toString() === text) {
          classes.push('selected');
        }

        return (
          <button
            className={classes.join(' ')}
            value={text}
            onClick={onClick}
          >
            {text}
          </button>
        )
      })}
    </div>
  )
}
