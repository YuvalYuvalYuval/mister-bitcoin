import { Component } from 'react'
import { contactService } from '../services/contactService'

export class ContactEdit extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const contact = id
      ? await contactService.getContactById(id)
      : contactService.getEmptyContact()
    this.setState({ contact })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value || '' : target.value
    this.setState(prevState => ({
      contact: { ...prevState.contact, [field]: value },
    }))
  }

  onSaveContact = async ev => {
    ev.preventDefault()
    const { name, phone, email } = ev.target.elements
    if (name.value === '' || phone.value === '' || email.value === '') return
    await contactService.saveContact({ ...this.state.contact })
    this.props.history.push('/contacts')
  }

  onBack = () => {
    this.props.history.push('/contacts')
  }

  render() {
    const { contact } = this.state

    const contactImg = () => {
      if (contact._id)
        return (
          <img
            src={`https://robohash.org/${contact._id}?set=set2`}
            alt="contact-img"
          />
        )
    }
    if (contact)
      return (
        <section className="contact-edit flex column align-center">
          {contactImg()}
          <h2>{contact._id ? 'Edit' : 'Add new'} Contact</h2>
          <form
            onSubmit={this.onSaveContact}
            className="flex column align-center"
          >
            <label htmlFor="name">Name</label>
            <input
              value={contact.name}
              onChange={this.handleChange}
              type="text"
              name="name"
              id="name"
              placeholder="Enter Contact Name"
            />
            <label htmlFor="phone">Phone</label>
            <input
              value={contact.phone}
              onChange={this.handleChange}
              type="text"
              name="phone"
              id="phone"
              placeholder="Enter Contact Phone"
            />
            <label htmlFor="email">Email</label>
            <input
              value={contact.email}
              onChange={this.handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter Contact Email"
            />
            <footer>
              <button>Save</button>
              <button onClick={this.onBack}>Back</button>
            </footer>
          </form>
        </section>
      )
  }
}
