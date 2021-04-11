/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import { WrapperImg } from './StyledInputLogIcons';
import smile from '../images/smile.svg';
import normal from '../images/normal.svg';
import sad from '../images/sad.svg';

// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function InputLogIcons({ visibility }) {
  return (

    <WrapperImg visibility={visibility}>
      <div>
        <img alt="smile-face" src={smile} />
        <img alt="normal-face" src={normal} />
        <img alt="sad-face" src={sad} />

      </div>
    </WrapperImg>

  );
}

export default InputLogIcons;