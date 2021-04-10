/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function Calendar({ dayClick }) {
  return (
    <LibCalendar
      selectRange
      view="month"
      onClickDay={dayClick}
      // tileClassName={({ activeStartDate, date, view }) => (classe.some((element) => element == date.getDate()) ? 'classinha' : null)}
    />
  );
}

export default Calendar;
