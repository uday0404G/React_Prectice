import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux"
import { store } from './Redux/store.jsx'
import Counter2 from './Component/Counter2.jsx'
import Counter5 from './Component/counter5.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <Counter2/>
    <Counter5/>
  </Provider>,
)
