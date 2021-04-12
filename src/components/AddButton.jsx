/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { Wrapper } from './StyledInputLog';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function AddButton({ visibility, funct }) {
  return (
    <form>
      <Wrapper visibility={visibility}>
        <button onClick={funct} type="button">
          +
        </button>
      </Wrapper>
    </form>
  );
}

export default AddButton;
