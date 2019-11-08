import React from 'react'
import {
    Route,
    Redirect
} from 'react-router-dom'


export default function PrivateRoute({children, ...rest}) {
    console.log(rest)
    return (
        <Route
            path = "/"
           render={ ({location}) => {
                    return localStorage.token ?
                    children                  
                    :
                    <Redirect to={{
                        pathname: '/login',
                        state: { from : location }
                    }} />
                }}
        />
    )
}
