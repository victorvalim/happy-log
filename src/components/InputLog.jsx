/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import { Wrapper } from './StyledInputLog';

function InputLog({ visibility, funct, inpuText }) {
  return (
    <form>
      <label htmlFor="main-input">
        Tell us
        <textarea value={inpuText} onChange={funct} id="main-input" />
      </label>
    </form>
  );
}

export default InputLog;
