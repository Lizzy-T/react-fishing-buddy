import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'
import {
    createBrowserHistory
} from 'history'


export default function PrivateRoute({component: Component, ...rest}) {
    const history = createBrowserHistory()
    console.log("history location", history.location)
    return (
        <Route
            {...rest}
           render={(props) => {
                    return localStorage.token ?
                    <Component {...props} />                 
                    :
                    <Redirect to={{
                        pathname: '/login',
                        state: { from : props.location }
                    }} />
                }}
        />
    )
}
