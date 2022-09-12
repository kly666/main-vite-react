import React, { useState } from 'react'
import './App.css'
import { getStyle } from './utils/color-fade'
import antClass from './ant-class'

function App() {
  /** 方案一 */
  const bodyDOM = document.querySelector('body')
  let styleDOM = document.getElementById('ant-class')
  if (!styleDOM && bodyDOM) {
    const styleDOM = document.createElement('style')
    styleDOM.id = 'ant-class'
    styleDOM.innerHTML = antClass
    bodyDOM.appendChild(styleDOM)
  }

  /** 方案二 */
  // const color = getStyle('ant', {
  //   primaryColor: 'blue'
  // })
  // const headDOM = document.querySelector('head')
  // let styleDOM = document.getElementById('ant-variables-color')
  // if (!styleDOM && headDOM) {
  //   const styleDOM = document.createElement('style')
  //   styleDOM.id = 'ant-variables-color'
  //   styleDOM.innerHTML = color
  //   headDOM.appendChild(styleDOM)
  // }

  return (
    <div className="App">
      <div id="main-app">
        <h1>我是主页面</h1>
      </div>
    </div>
  )
}

export default App
