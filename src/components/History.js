import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { putData, clearPointData } from '../actions/pointActions';

const History = () => {
  const historyData = useSelector((state => state.history))

  const dispatch = useDispatch()

  const clickHandler = (idx) => () => {
    dispatch(clearPointData())
    dispatch(putData(historyData[idx]))
  }

  if (historyData.length) {
    return <ul>
      {historyData.map((item, key) => (key !== historyData.length - 1) &&
        <li
          key={key}
          onClick={clickHandler(key)}
        >
          {item.name}
        </li>)}
    </ul>
  } else {
    return null
  }
}

export default History