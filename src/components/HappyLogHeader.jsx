/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';

function HappyLogHeader({ funct, toggleBoolean }) {
  return (
    <>
      <h1 style={{ color: '#080910' }}>Happy Log</h1>
      <ToggleSwitch onColor="#FF4D2D" offColor="#B1AAAA" checked={toggleBoolean} onChange={(e) => funct(e)} />
    </>
  );
}

export default HappyLogHeader;
