import React from 'react'

type PersonListProps = {
  names: {
    first: string
    last: string
  }[]
}
function PersonList(props: PersonListProps)
{
  return (
    <div>
      {props.names.map((name, index) =>
      {
        return (
          <h2 key={index}>{index} - {name.first} {name.last}</h2>

        )
      }

      )}
    </div>
  )
}

export default PersonList