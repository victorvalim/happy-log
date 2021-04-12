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
// eslint-disable-next-line semi
}