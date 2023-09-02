import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { setupListeners } from '@reduxjs/toolkit/query'
import { Data } from '../src/state/Data'
import store from './store'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

// export const store = configureStore({
//   reducer: {
//     [Data.reducerPath]: Data.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(Data.middleware),
// })

// setupListeners(store.dispatch)

ReactDOM.render(
  <Provider store={store}>
    <ApiProvider api={Data}>
      <App />
    </ApiProvider>
  </Provider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()