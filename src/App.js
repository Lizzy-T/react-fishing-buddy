import React, { Component } from 'react'
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import './App.css'

import Login from './components/Login'
import PrivateRoute from './components/PrivateRoute'
import Home from './components/Home'


export default class App extends Component {
    state = {
        currentUser: "me"
    }

    setCurrentUser = (user) => {
        this.setState({
            currentUser: user
        })
    }

    removeCurrentUser = () => {
        this.setState({
            currentUser: ""
        })
    }

    render () {
        const { currentUser } = this.state
        console.log("current user", currentUser)
        return (
            <Router >
                <PrivateRoute exact path="/" component={Home} />
                <Route path="/login" 
                        render={(props) => <Login 
                            {...props}
                            setCurrentUser={this.setCurrentUser}
                            removeCurrentUser={this.removeCurrentUser}
                    />} />
            </Router>
        )
    }
}