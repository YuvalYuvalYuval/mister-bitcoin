import { Component, createRef } from 'react'
import { userService } from '../services/userService'

export class Signup extends Component {
  nameRef = createRef()

  signup = () => {
    const { current } = this.nameRef
    if (!current.value) return
    userService.signup(current.value)
    this.props.history.push('/')
  }

  render() {
    return (
      <section className="signup">
        <h1>Welcome to Mister Bitcoin</h1>
        <img
          className="btc-img"
          src="https://media1.giphy.com/media/26jv2rdEfXnRugnsWb/giphy.gif?cid=6c09b952d0bcebf8fc34a2350022b1771dc797520ae78479&rid=giphy.gif&ct=s"
          alt="₿"
        />
        <div className="form flex column align-center">
          <h2>Enter your name</h2>
          <input ref={this.nameRef} type="text" placeholder="Enter full name" />
          <button onClick={this.signup}>Sign up</button>
        </div>
      </section>
    )
  }
}
