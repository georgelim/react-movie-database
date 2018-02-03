import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/Root'
import './index.css'

injectTapEventPlugin()

ReactDOM.render(<Root />, document.getElementById('root'))
