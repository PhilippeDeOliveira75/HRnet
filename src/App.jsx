import './App.scss'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PublicRouter } from '@pages/Public/import'

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>

    <Provider store={store}>

      <BrowserRouter>

        <Routes>

          <Route path="/*" element={<PublicRouter />} />

        </Routes>

      </BrowserRouter>

    </Provider>

  </React.StrictMode>

)
