import './assets/scss/global.scss'
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { userService } from './services/userService'
import { Header } from './cmps/Header'
import { Signup } from './pages/Signup'
import { HomePage } from './pages/HomePage'
import { ContactPage } from './pages/ContactPage'
import { ContactDetails } from './pages/ContactDetails'
import { ContactEdit } from './pages/ContactEdit'
import { Statistics } from './pages/Statistics'

function App() {
  const PrivateRoute = (props) => {
    const loggedInUser = userService.getUser()
    return loggedInUser ? <Route {...props} /> : <Redirect to='/signup' />
  }

  return (
    <Router>
      <div className="App">
        <Header user={userService.getUser()} />
        <Switch>
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/contact/edit/:id?' component={ContactEdit} />
          <PrivateRoute path='/contact/:id' component={ContactDetails} />
          <PrivateRoute path='/contacts' component={ContactPage} />
          <PrivateRoute path='/statistics' component={Statistics} />
          <PrivateRoute path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

