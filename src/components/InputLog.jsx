/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { Wrapper } from './StyledInputLog';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function InputLog({ visibility, funct }) {
  return (
    <form>
      <Wrapper visibility={visibility}>
        <label htmlFor="main-input">
          Tell us
          <textarea onChange={funct} id="main-input" />
        </label>
      </Wrapper>
    </form>
  );
}

export default InputLog;
