import React from 'react'
import ReactDom from 'react-dom'
import App from './app.jsx'
import { AppContainer } from 'react-hot-loader'

const render = Component => {
  ReactDom.render(<Component />, document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./app.jsx', () => render(App))
}
