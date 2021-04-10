/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';

function App() {
  const [value, onChange] = useState(new Date());
  const [classe, setClasse] = useState(['2', '13', '15', '10', '21']);
  function dayClick(value) {
    return console.log(value);
  }
  return (
    <Calendar
      selectRange
      // showWeekNumbers
      // defaultActiveStartDate={value}
      // defaultValue={value}
      view="month"
      onClickDay={dayClick}
      // tileClassName={({ date, view }) => (classe.map((element) => (element == date ? 'classinha' : false)))}
      tileClassName={({ activeStartDate, date, view }) => (classe.some((element) => element == date.getDate()) ? 'classinha' : null)}
    />
  );
}

export default App;
