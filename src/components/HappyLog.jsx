/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import React from 'react';
import smile from '../images/smile.svg';
import normal from '../images/normal.svg';
import sad from '../images/sad.svg';
import 'react-calendar/dist/Calendar.css';
import '../App.css';
import 'react-dragswitch/dist/index.css';
import {
  WrapperCard, Card, CardLeft, CardRigth, CardDown,
} from './StyledCardLog';

function HappyLog({ data }) {
  function imageSelector(info) {
    const saver = info.substring(0, 3);
    switch (saver) {
      case 'nor':
        return normal;
      case 'sad':
        return sad;

      default:
        return smile;
    }
  }

  return (
    <WrapperCard>
      {data.map((element) => (
        <Card>
          <CardLeft>
            <h4>
              {element.date}
            </h4>
          </CardLeft>
          <CardRigth>
            <img src={imageSelector(element.emoticon)} />
          </CardRigth>
          <CardDown>
            <h3>
              {' '}
              {element.text}
            </h3>
          </CardDown>
        </Card>
      ))}
    </WrapperCard>
  );
}

export default HappyLog;
