import React, { Component } from 'react'
import {
    withRouter
} from 'react-router-dom'


import './loginform.css'

class LoginPage extends Component {

    state = {
        username: "",
        password: ""
    }

    componentDidMount = () => {
        const { removeCurrentUser } = this.props
        localStorage.clear()
        removeCurrentUser()
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        
        const { fetchToken, setCurrentUser,history } = this.props
        const { username, password } = this.state
        
        fetchToken({username, password})
            .then(response => {
                if (response.status >= 400) {
                    throw new Error("unauthorized")
                }
                return response.json()
            }).then(response => {
                localStorage.setItem("token", response.token)
                setCurrentUser(username)
                this.setState({
                    username: '',
                    password: ''
                })
            }).then(() => {
                history.push("/")
            }).catch(error => console.log(error))
    }

    render () {
        const { username, password } = this.state
        return (
            <form className="login-form" onSubmit={this.handleSubmit}>
                <h3>Log in here!</h3>
                <label>Username</label>
                <input className="form-input" 
                    type="text" 
                    name="username"
                    value={username} 
                    placeholder="FishSlayer22" 
                    onChange={this.handleChange}
                    />
                <label>Password</label>
                <input className="form-input" 
                    type="password" 
                    name="password"
                    value={password} 
                    onChange={this.handleChange}
                    />
                <input id="login-submit" 
                    type="submit" 
                    value="Log In" />
            </form>
        )
    }
}

export default withRouter(LoginPage)