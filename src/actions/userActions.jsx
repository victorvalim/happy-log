/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable semi */
/* eslint-disable eol-last */
const inputVisibility = () => {
  return {
    type: 'INPUT_VISIBILITY',
  }
}
const resetInput = () => {
  return {
    type: 'RESET_INPUT',
  }
}
const addInput = () => {
  return {
    type: 'ADD_INPUT',
  }
}
const emoticonSelector = (payload) => {
  return {
    type: 'EMOTICON',
    payload,
  }
}

const inputSelector = (payload) => {
  return {
    type: 'INPUT',
    payload,
  }
}

// const inputDate = (payload) => {
//   return {
//     type: 'INPUT_DATE',
//     payload,
//   }
// }

const dateOnClick = (payload) => {
  return {
    type: 'DATE_ON_CLICK',
    payload,
  }
}
const defaultAction = () => {
  return {
      // eslint-disable-next-line quotes
      type: "DEFAULT",
  }
}
export default {
  defaultAction,
  inputVisibility,
  dateOnClick,
  emoticonSelector,
  inputSelector,
  resetInput,
  addInput,
// eslint-disable-next-line semi
}