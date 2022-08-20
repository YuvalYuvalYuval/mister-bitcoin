import { Component } from 'react'
import { connect } from 'react-redux'
import { MoveList } from '../cmps/MoveList'
import { userService } from '../services/userService'
import { bitcoinService } from '../services/bitcoinService'
import { loadUser, logout } from '../store/actions/userActions'

class _HomePage extends Component {
  state = {
    user: null,
    currRate: null,
  }

  componentDidMount() {
    this.props.loadUser()
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      const { user } = this.props
      this.setState({
        user,
        currRate: await bitcoinService.getRate(user.coins),
      })
    }
  }

  logout = () => {
    this.props.history.push('/signup')
    this.props.logout()
  }

  render() {
    const { user, currRate } = this.state
    if (!user) return   <img
    className="btc-img"
    src="https://media1.giphy.com/media/26jv2rdEfXnRugnsWb/giphy.gif?cid=6c09b952d0bcebf8fc34a2350022b1771dc797520ae78479&rid=giphy.gif&ct=s"
    alt="loading..."
  />
    const { name, coins } = user
    const btcImg = require('../assets/imgs/bitcoin-coin.png')
    return (
      <>
        <section className="home-page flex column">
          <img
            className="profile-img"
            src={`https://robohash.org/${user.name}?set=set2`}
            alt="profile-img"
          />
          <h2>{name}</h2>
          <h3 style={{ textDecoration: 'underline' }}> ₿ Wallet</h3>
          <ul className="clean-list flex column">
            <li>
              {currRate}
              <img className="btc-img" src={btcImg} alt="₿" />
            </li>
            <li>(${coins})</li>
          </ul>
          <button onClick={this.logout}>Logout</button>
        </section>
        <MoveList moves={userService.getMoves()} />
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.userModule.user,
  }
}

const mapDispatchToProps = {
  loadUser,
  logout,
}

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(_HomePage)
