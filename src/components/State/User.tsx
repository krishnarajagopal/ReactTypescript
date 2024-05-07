import React, { useState } from 'react'

type AuthUser = {
        name: string
        email: string
}
const User = () =>
{
        const [user, setUser] = useState<null | AuthUser>(null)
        const handleLogin = () =>
        { setUser({ name: 'John', email: 'j@j.com' }) }

        const handleLogout = () =>
        { setUser(null) }
        return (
                <div>

                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleLogout}>Logout</button>
                        <div>User mame is  {user?.name}</div>
                        <div>User email is  {user?.email}</div>

                </div>
        )
}

export default User