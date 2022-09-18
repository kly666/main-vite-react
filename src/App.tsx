import React, { useState } from 'react'
import './App.css'
import { classVarCss } from './utils/class-var-css'
import antClass from './ant/ant-class'
import { getStyle } from './utils/color-fade'

function App() {
  /** 方案一 */
  const classVarColor = classVarCss({
    primaryColor: '#ff4d13',
    linkColor: '#5768a8',
    successColor: '#0cb389',
    warningColor: '#ff8000',
    errorColor: '#ff1226'
  })
  const headDOM = document.querySelector('head')
  let headStyleDOM = document.getElementById('ant-variables-color')
  if (!headStyleDOM && headDOM) {
    const styleDOM = document.createElement('style')
    styleDOM.id = 'ant-variables-color'
    styleDOM.innerHTML = classVarColor
    headDOM.appendChild(styleDOM)
  }
  console.log(classVarColor, 'classVarColor')
  const bodyDOM = document.querySelector('body')
  let bodyStyleDOM = document.getElementById('ant-class')
  if (!bodyStyleDOM && bodyDOM) {
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
