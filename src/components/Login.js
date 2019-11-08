import React from 'react'
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

export default function Login () {

    const fetchToken = ({username, password}) => {
        return fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({username, password})
        })
    }

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
                            <Link to='/login'>Login</Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    <Switch className="form-container">
                        <Route path='/signup'>
                            <SignupForm />
                        </Route>
                        <Route path='/login'>
                            <LoginForm 
                                fetchToken={fetchToken}    
                            />
                        </Route>
                    </Switch>
                </main>
            </>
        )
}
