/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import add from '../images/add.svg';
import { Wrapper } from './StyledInputLog';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function AddButton({ visibility, funct }) {
  return (
    <>
      {/* <Wrapper visibility={visibility}> */}
      <button onClick={funct} type="button">
        <img
          src={add}
        />
      </button>
      {/* </Wrapper> */}
    </>
  );
}

export default AddButton;
