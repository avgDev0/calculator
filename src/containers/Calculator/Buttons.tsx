import React from 'react'
import type { ButtonMeta } from './types';

export default function Buttons() {
  const buttons: ButtonMeta[] = [
    {
      text: 'CE',
      type: 'double',
    },
    {
      text: '←',
      type: 'single',
    },
    {
      text: '÷',
      type: 'single',
    },
    {
      text: '7',
      type: 'single',
    },
    {
      text: '8',
      type: 'single',
    },
    {
      text: '9',
      type: 'single',
    },
    {
      text: '×',
      type: 'single',
    },
    {
      text: '4',
      type: 'single',
    },
    {
      text: '5',
      type: 'single',
    },
    {
      text: '6',
      type: 'single',
    },
    {
      text: '+',
      type: 'single',
    },
    {
      text: '1',
      type: 'single',
    },
    {
      text: '2',
      type: 'single',
    },
    {
      text: '3',
      type: 'single',
    },
    {
      text: '-',
      type: 'single',
    },
    {
      text: '0',
      type: 'single',
    },
    {
      text: '.',
      type: 'single',
    },
    {
      text: '=',
      type: 'double',
    },
  ];

  return (
    <div className='buttons'>
      {buttons.map(({ text, type }) => (
        <button className={`button ${type === 'double' ? 'double' : ''}`}>{text}</button>
      ))}
    </div>
  )
}
