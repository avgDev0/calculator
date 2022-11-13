import React from 'react';
import Screen from '../../components/Screen';
import Buttons from './Buttons';
import './styles.css';

export default function Calculator() {
  return (
    <div className="container">
      <Screen />
      <Buttons />
    </div>
  )
}
