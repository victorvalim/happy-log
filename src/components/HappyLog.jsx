/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import 'react-dragswitch/dist/index.css';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function HappyLog({ data }) {
  return (
    <>
      {data.map((element) => (
        <h1>
          {' '}
          {element.text}
        </h1>
      ))}
    </>
  );
}

export default HappyLog;
