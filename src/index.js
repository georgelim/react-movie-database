import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Root from './components/Root'
import './index.css'
import configureStore from "./redux/configureStore";

injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
