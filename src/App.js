import React, { Component } from 'react'
import { 
    Router,
    Route
} from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './App.css'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'


export default class App extends Component {

    render () {
        return (
            <Router history={createBrowserHistory()}>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route path="/login">
                        <Login />
                    </Route>
            </Router>
        )
    }
}