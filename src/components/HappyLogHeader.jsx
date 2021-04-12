/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { ToggleSwitch } from 'react-dragswitch';
import 'react-dragswitch/dist/index.css';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function HappyLog({ funct, toggleBoolean }) {
  return (
    <>
      <h1>Happy Log</h1>
      <ToggleSwitch checked={toggleBoolean} onChange={(e) => funct(e)} />
    </>
  );
}

export default HappyLog;
