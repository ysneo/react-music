import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Hello from './components/hello.jsx'
console.log(React.version)
ReactDom.render(<Hello />, document.getElementById('root'))
