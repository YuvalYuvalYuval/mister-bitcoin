import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

export function Header() {
  const btcImg = require('../assets/imgs/bitcoin-coin.png')
  return (
    <header className="App-header flex align-center space-between">
      <div className="logo flex align-center">
        <img src={btcImg} alt="₿" />
        <NavLink to="/">
          <h3>Mister Bitcoin</h3>
        </NavLink>
      </div>
      <nav className="flex">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/statistics">Statistics</NavLink>
      </nav>
    </header>
  )
}
