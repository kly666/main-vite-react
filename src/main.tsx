import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { registerMicroApps, start } from 'qiankun'
registerMicroApps([
  {
    name: 'my-vite-react',
    entry: '//localhost:3002',
    container: '#main-app',
    activeRule: '/sub-app-vite',
  }
]);

start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('main-root')
)
