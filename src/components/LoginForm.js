import React from 'react'

import './loginform.css'

export default function LoginPage({username, password, handleChange}) {

    return (
        <form className="login-form">
            <h3>Log in here!</h3>
            <label>Username</label>
            <input className="form-input" 
                type="text" 
                value={username} 
                placeholder="FishSlayer22" 
                onChange={handleChange("username")}
                />
            <label>Password</label>
            <input className="form-input" 
                type="password" 
                value={password} 
                onChange={handleChange("password")}
                />
            <input id="login-submit" 
                type="submit" 
                value="Log In" />
        </form>
    )
}
