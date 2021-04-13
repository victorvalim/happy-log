/* eslint-disable no-unused-expressions */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

// eslint-disable-next-line no-unused-vars
function Calendar({ dayClick, funct, data }) {
  return (
    <LibCalendar

      // selectRange
      view="month"
      onClickDay={dayClick}
      // className="tamanho"
      // eslint-disable-next-line eqeqeq
      tileClassName={({ activeStartDate, date, view }) => {
        console.log(date);
        const day = data.find((element) => element.date == date.toJSON());
        return day === undefined ? null : day.emoticon;
      }}
      // (data.includes(date.toJSON()) ? (data.find((element) => element.date == date.toJSON())).emoticon : null)

      // tileClassName={({ activeStartDate, date, view }) => (classe.some((element) => element == date.getDate()) ? 'classinha' : null)}
    />
  );
}

export default Calendar;
