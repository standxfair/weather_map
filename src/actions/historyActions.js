import { PUSH_HISTORY } from '../constants/history';


export const putHistoryData = (data) => {
  return {
    type: PUSH_HISTORY,
    payload: [data]
  }
}