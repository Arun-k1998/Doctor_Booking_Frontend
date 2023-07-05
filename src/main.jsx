import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import {UserContest} from './helper/contest/UserContest.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContest>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </UserContest>
  </React.StrictMode>,
)
