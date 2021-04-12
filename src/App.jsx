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
  return (
    <>
      <Calendar
        dayClick={dayClick}
      />
      <InputLog visibility={isInputVisible} funct={onChangeInput} inpuText={inputText} />
      <AddButton visibility={isInputVisible} funct={addButton} />
      <InputLogIcons visibility={isInputVisible} funct={onClickEmoticon} />
      {data == false || <HappyLogHeader funct={setToggleBoolean} toggleBoolean={toggleBoolean} />}
      {/* {toggleBoolean && } */}
    </>
  );
}

export default App;
