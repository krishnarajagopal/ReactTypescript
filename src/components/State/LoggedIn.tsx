import React from 'react'
import { useState } from 'react'
type LoggedInProps = {
        isLoggedIn: boolean
        setLoggedIn: () => void
        
}

const LoggedIn = () =>
{
        const [isLoggedIn, setIsLoggedIn] = useState(false)
        const handleLogin = () =>
        { 
                setIsLoggedIn(true)
        }

        const handleLogout = () =>
        { 
                setIsLoggedIn(false)
        }
        return (

                <div>

                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleLogout}>Logout</button>
                        <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
                </div>
        )
}

export default LoggedIn