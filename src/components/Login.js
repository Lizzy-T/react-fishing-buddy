import React, { Component } from 'react'
import {
    Link,
    Route,
    Switch
} from 'react-router-dom'

import logo from '../Bearcubsfly.png'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'

import "./Login.css"

const BASE_URL = "https://fishing-buddy-api.herokuapp.com"

export default class Login extends Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = property = event => {
        console.log(property)
        console.log(event)
    }

    render() {
        const {username, password} = this.state
        return (
            <>
                <header>
                    <h2>Welcome to</h2>
                    <h1>Fishing Buddy</h1>
                    <img src={logo} alt="logo"/>
                </header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to='/'>Login</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Switch className="form-container">
                        <Route path='/signup'>
                            <SignupForm />
                        </Route>
                        <Route path='/'>
                            <LoginForm 
                                username={username} 
                                password={password} 
                                handleChange={this.handleChange}    
                            />
                        </Route>
                    </Switch>
                </main>
            </>
        )
    }
}
