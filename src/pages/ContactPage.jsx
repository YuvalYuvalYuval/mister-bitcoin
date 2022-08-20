import { Component } from 'react'
import { connect } from 'react-redux'
import { ContactFilter } from '../cmps/ContactFilter'
import { ContactList } from '../cmps/ContactList'
import { loadContacts, setFilterBy } from '../store/actions/contactActions'

class _ContactPage extends Component {
  async componentDidMount() {
    await this.props.setFilterBy('')
    this.props.loadContacts()
  }

  onFilter = filterBy => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  goToEdit = () => {
    this.props.history.push('contact/edit')
  }

  render() {
    const { contacts } = this.props
    if (!contacts)
      return (
        <img
          className="btc-img"
          src="https://media1.giphy.com/media/26jv2rdEfXnRugnsWb/giphy.gif?cid=6c09b952d0bcebf8fc34a2350022b1771dc797520ae78479&rid=giphy.gif&ct=s"
          alt="loading..."
        />
      )
    return (
      <section className="contact-page flex column align-center">
        <header className="flex">
          <ContactFilter onFilter={this.onFilter} />
          <button onClick={this.goToEdit}> Add Contact</button>
        </header>
        <ContactList contacts={contacts} />
      </section>
    )
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contactModule.contacts,
  }
}

const mapDispatchToProps = {
  loadContacts,
  setFilterBy,
}

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage)
