import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { putData, clearPointData } from '../actions/pointActions';
import { deleteHistoryItem } from '../actions/historyActions'


const History = () => {
  const historyData = useSelector((state => state.history))

  const dispatch = useDispatch()

  const clickHandler = (idx) => () => {
    dispatch(clearPointData())
    dispatch(putData(historyData[idx]))
  }

  const deleteHandler = (idx) => (ev) => {
    ev.stopPropagation()
    dispatch(deleteHistoryItem([idx]))
  }

  if (historyData.length) {
    return <div className="history">
      <ul>
        {historyData.map((item, key) => (key !== historyData.length - 1) &&
          <li
            key={key}
            onClick={clickHandler(key)}
          >
            <span className="history__item">
              {item.name}
              <span onClick={deleteHandler(key)} className="history__delete">&#10006;</span>
            </span>
          </li>)}
      </ul>
    </div>
  } else {
    return null
  }
}

export default History