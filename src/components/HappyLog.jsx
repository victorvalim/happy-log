/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
// import { Calendar as LibCalendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import 'react-dragswitch/dist/index.css';
import {
  WrapperCard, Card, CardLeft, CardRigth,
} from './StyledCardLog';
// import { useSelector, useDispatch } from 'react-redux';
// import allActions from '../actions';

function HappyLog({ data }) {
  return (
    <WrapperCard>
      {data.map((element) => (
        <Card>
          <CardLeft>
            <h4>
              {element.date}
            </h4>
            <h3>
              {' '}
              {element.text}
            </h3>

          </CardLeft>
          <CardRigth>
            <h4>{element.emoticon}</h4>
          </CardRigth>
        </Card>
      ))}
    </WrapperCard>
  );
}

export default HappyLog;
