import React from 'react'
import {App} from './App'
import {render} from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

const DOCUMENT = document.getElementById('root')


render(<Router>
<App />
</Router>, DOCUMENT)