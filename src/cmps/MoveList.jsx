import React from 'react'

export function MoveList({ moves, name }) {
  const title = () => {
    if (moves.length) {
      return name ? (
        <h3>Your transections to {name} </h3>
      ) : (
        <h3>last transections</h3>
      )
    }
    //no moves by the user
    return name ? (
      <p>No transections to {name} yet. </p>
    ) : (
      <p>Your last transections will show here.</p>
    )
  }

  const to = move => {
    if (!name) return <p>To: {move.to} </p> //renders only at home page
  }
  return (
    <ul className="move-list clean-list flex column">
      {title()}
      {moves.map(move => {
        return (
          <li key={move.at}>
            <p>At: {move.at}</p>
            <p>Amount: {'$' + move.amount}</p>
            {to(move)}
          </li>
        )
      })}
    </ul>
  )
}
