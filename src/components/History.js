import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { putData, clearPointData } from '../actions/pointActions';
import { deleteHistoryItem, clearHistory } from '../actions/historyActions'


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

  const clearHistoryHandler = () => {
    dispatch(clearHistory())
  }


  return (
    <div className="history">
      {historyData.length > 1 ? (
        <span
          className="history__clear_all"
          onClick={clearHistoryHandler}
        >
          Clear all
        </span>
      ) : null}

      <ul>
        {historyData.map((item, key) => (key !== historyData.length - 1) &&
          <li
            key={key}
            onClick={clickHandler(key)}
          >
            <span className="history__item">
              {item.name}, {item.sys.country}
              <span
                onClick={deleteHandler(key)}
                className="history__delete">
                &#10006;
              </span>
            </span>
          </li>)}
      </ul>
    </div>
  )
}

export default History