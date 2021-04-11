/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { Wrapper } from './StyledInputLog';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function InputLog({ visibility }) {
  return (
    <form>
      <Wrapper visibility={visibility}>
        <label htmlFor="main-input">
          Tell us
          <input id="main-input" />
        </label>
      </Wrapper>
    </form>
  );
}

export default InputLog;
