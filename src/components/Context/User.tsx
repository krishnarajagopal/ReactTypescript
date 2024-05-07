import React, { useState, useContext } from 'react'
import { UserContext } from './UserContext'


const User = () =>
{
        const userDetails = useContext(UserContext)

        const handleLogin = () =>
        { 
                userDetails.setUser({ name: 'John', email: 'j@j.com' })
        }


        const handleLogout = () =>
        {
                if (userDetails) userDetails.setUser(null)
         }

        return (
                <div>

                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleLogout}>Logout</button>
                        <div>User name is {userDetails.User?.name}</div>
                        <div>User email is {userDetails.User?.email}</div>

                </div>
        )
}

export default User