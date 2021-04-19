/* eslint-disable no-console */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';
import Calendar from './components/Calendar';
import InputLogIcons from './components/InputLogIcons';
import InputLog from './components/InputLog';
import AddButton from './components/AddButton';
import HappyLogHeader from './components/HappyLogHeader';
import HappyLog from './components/HappyLog';
import { Wrapper } from './components/StyledInputLog';
import { WrapperRigth, WrapperLeft, WrapperSides } from './components/StyledCalendar';
import { WrapperImg } from './components/StyledInputLogIcons';

function App() {
  const isInputVisible = useSelector((state) => state.userReducer.isInputVisible);
  const dateClicked = useSelector((state) => state.userReducer.dateClicked);
  const inputText = useSelector((state) => state.userReducer.currentData.text);
  const inputEmoticon = useSelector((state) => state.userReducer.currentData.emoticon);
  const data = useSelector((state) => state.userReducer.data);
  const [toggleBoolean, setToggleBoolean] = useState(false);

  const dispatch = useDispatch();
  // const [value, onChange] = useState(new Date());
  // const [classe, setClasse] = useState(['2', '13', '15', '10', '21']);
  function onClickEmoticon({ target: { alt } }) {
    console.log(alt);
    dispatch(allActions.userActions.emoticonSelector(alt));
  }

  function onChangeInput({ target: { value } }) {
    dispatch(allActions.userActions.inputSelector(value));
  }
  function addButton() {
    if (dateClicked === null || inputText === '' || inputEmoticon === '') {
      window.alert('Fill everything :)');
      return;
    }
    dispatch(allActions.userActions.addInput());
    dispatch(allActions.userActions.resetInput());
    dispatch(allActions.userActions.inputVisibility());
  }

  function dayClick(value) {
    // dispatch(allActions.userActions.inputVisibility());
    // dispatch(allActions.userActions.inputDate(value));
    const valor = value.toJSON();
    dispatch(allActions.userActions.dateOnClick(value.toJSON()));
    if (dateClicked == valor || dateClicked == undefined || (dateClicked !== valor && !isInputVisible)) dispatch(allActions.userActions.inputVisibility());
  }
  // eslint-disable-next-line consistent-return
  const calendarFunction = (activeStartDate, date, view, data) => {

    // if (data.length) {
    //   return console.log((data.find((element) => element.date == date.toJSON())).emoticon);
    // }
    // return null;
  };
  // console.log(date.toString());
  // console.log(data.toString());

  // if (data !== [] || data !== undefined) console.log(date == data[0].date);

  return (
    <>
      <WrapperSides>
        <WrapperRigth>
          <Calendar
            data={data}
            funct={calendarFunction}
            dayClick={dayClick}
          />
          <Wrapper visibility={isInputVisible}>
            <InputLogIcons funct={onClickEmoticon} />
            <InputLog funct={onChangeInput} inpuText={inputText} />
            <AddButton funct={addButton} />
          </Wrapper>
        </WrapperRigth>
        <WrapperLeft>
          <HappyLogHeader funct={setToggleBoolean} toggleBoolean={toggleBoolean} />
          {toggleBoolean && <HappyLog data={data} />}
        </WrapperLeft>
      </WrapperSides>
    </>
  );
}

export default App;
