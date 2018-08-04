export const ASYNC_ACTION_START = "ASYNC_ACTION_START";
export const ASYNC_ACTION_FINISH = "ASYNC_ACTION_FINISH";
export const ASYNC_ACTION_ERROR = "ASYNC_ACTION_ERROR";

const asyncActionStart = () => {
  return {
    type: ASYNC_ACTION_START
  }
}
const asyncActionFinish = () => {
  return {
    type: ASYNC_ACTION_FINISH
  }
}
const asyncActionError = () => {
  return {
    type: ASYNC_ACTION_ERROR
  }
}