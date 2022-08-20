import { Component } from 'react'
import { contactService } from '../services/contactService'
import { userService } from '../services/userService'
import { TransferFund } from '../cmps/TransferFund'
import { MoveList } from '../cmps/MoveList'

export class ContactDetails extends Component {
  state = {
    contact: null,
    user: null,
    movesToContact: null,
  }
  contactId = this.props.match.params.id

  componentDidMount() {
    this.loadState()
  }
  async loadState() {
    const contact = await contactService.getContactById(this.contactId)
    this.setState({
      contact,
      movesToContact: userService.getMoves(this.contactId),
      user: userService.getUser(),
    })
  }
  goBack = () => {
    this.props.history.push('/contacts')
  }
  goToEdit = () => {
    this.props.history.push(`edit/${this.contactId}`)
  }

  transfer = amount => {
    if (!amount) return
    userService.addMove(this.state.contact, amount)
    this.loadState()
  }

  render() {
    const { contact, user, movesToContact } = this.state
    if (contact && user)
      return (
        <>
          <section className="contact-details">
            <main className="flex align-center">
              <img
                src={`https://robohash.org/${contact._id}?set=set2`}
                alt="contact-img"
              />
              <ul className="clean-list">
                <li>Name: {contact.name}</li>
                <li>Phone: {contact.phone}</li>
                <li style={{ textTransform: 'none' }}>
                  Email: {contact.email}
                </li>
              </ul>
            </main>
            <footer className="flex">
              <button onClick={this.goToEdit}>Edit</button>
              <button onClick={this.goBack}>Back</button>
            </footer>
          </section>
          <TransferFund
            name={contact.name}
            maxAmount={user.coins}
            transfer={this.transfer}
          />
          <MoveList moves={movesToContact} name={contact.name} />
        </>
      )
  }
}
