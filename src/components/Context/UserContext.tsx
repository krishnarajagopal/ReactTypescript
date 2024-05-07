import React, { createContext, useState } from 'react'
export type AuthUser = {
        name: string
        email: string
}

type UserContextProviderProps = {
        children: React.ReactNode
}

type UserContextType = {
        User: AuthUser | null
        setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}
export const UserContext = createContext({} as UserContextType)

export const UserContextProvider = ({ children }: UserContextProviderProps) =>
{
        const [User, setUser] = useState<null | AuthUser>(null)
        return (

                <UserContext.Provider value={{ User, setUser }}>{children}</UserContext.Provider>
        )

}
