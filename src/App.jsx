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
import InputLog from './components/InputLog';
import InputLogIcons from './components/inputLogIcons';

function App() {
  const isInputVisible = useSelector((state) => state.userReducer.isInputVisible);
  const dateClicked = useSelector((state) => state.userReducer.dateClicked);

  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());
  const [classe, setClasse] = useState(['2', '13', '15', '10', '21']);
  function dayClick(value) {
    console.log(dateClicked);
    console.log(value);
    // dispatch(allActions.userActions.inputVisibility());
    const valor = value.toJSON();
    dispatch(allActions.userActions.dateOnClick(value.toJSON()));
    if (dateClicked == valor || dateClicked == undefined || (dateClicked !== valor && !isInputVisible)) dispatch(allActions.userActions.inputVisibility());
  }
  return (
    <>
      <Calendar
        dayClick={dayClick}
      />
      <InputLog visibility={isInputVisible} />
      <InputLogIcons visibility={isInputVisible} />
    </>
  );
}

export default App;
