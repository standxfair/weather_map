import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { watchLoadData } from '../sagas'

const loadState = () => {
  return {};
}

const store = loadState();

export const configureStore = (initialState = store) => {
  let result
  const sagaMiddleware = createSagaMiddleware()

  if (process.env.NODE_ENV !== 'production') {
    result = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(
        applyMiddleware(sagaMiddleware)
      ),
    )

    sagaMiddleware.run(watchLoadData)

  } else {
    result = createStore(
      rootReducer,
      initialState,
      // applyMiddleware(thunk),
    )
  }

  return result

}