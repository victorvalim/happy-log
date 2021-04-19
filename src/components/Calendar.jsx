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

// eslint-disable-next-line no-unused-vars
function Calendar({ dayClick, funct, data }) {
  return (
    <LibCalendar
      view="month"
      onClickDay={dayClick}
      tileClassName={({ activeStartDate, date, view }) => {
        const day = data.find((element) => element.date == date.toJSON());
        return day === undefined ? null : day.emoticon;
      }}

    />
  );
}

export default Calendar;
