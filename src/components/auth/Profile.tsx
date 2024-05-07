import React from 'react'

export type ProfileProps = {
        name: string
}
const Profile = ({name}: ProfileProps) => {
  return (
    <div>Private Profile Component for {name}</div>
  )
}

export default Profile