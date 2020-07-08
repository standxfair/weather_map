import { PUSH_HISTORY, DELETE_HISTORY_ITEM, CLEAR_HISTORY } from '../constants/history';

export const putHistoryData = (data) => {
  return {
    type: PUSH_HISTORY,
    payload: [data]
  }
}

export const deleteHistoryItem = (data) => {
  return {
    type: DELETE_HISTORY_ITEM,
    payload: [data]
  }
}

export const clearHistory = () => {
  return {
    type: CLEAR_HISTORY,
    payload: []
  }
}