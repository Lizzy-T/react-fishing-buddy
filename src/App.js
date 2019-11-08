import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation
} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import Home from './components/Home'
import PrivateRoute from './components/PrivateRoute'

export default class App extends Component {
    state = {
        isAuthenticated: false
    }


    render () {
        return (
            <Router >
                <Switch>
                    <Route path="/">
                        <Login />
                    </Route>
                    {/* <PrivateRoute path="/home">
                        <Home />
                    </PrivateRoute> */}
                </Switch>

            </Router>
        )
    }
}