/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import add from '../images/add.svg';
import { Wrapper } from './StyledInputLog';

function AddButton({ visibility, funct }) {
  return (
    <>
      <button onClick={funct} type="button">
        <img
          src={add}
        />
      </button>
    </>
  );
}

export default AddButton;
