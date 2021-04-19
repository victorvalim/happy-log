/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { WrapperImg } from './StyledInputLogIcons';
import smile from '../images/smile.svg';
import normal from '../images/normal.svg';
import sad from '../images/sad.svg';

function InputLogIcons({ visibility, funct }) {
  return (
    <div>
      <img onClick={funct} alt="smile-face" src={smile} />
      <img onClick={funct} alt="normal-face" src={normal} />
      <img onClick={funct} alt="sad-face" src={sad} />
    </div>
  );
}

export default InputLogIcons;
