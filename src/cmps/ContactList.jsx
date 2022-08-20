import React from 'react'
import { ContactPreview } from './ContactPreview'

export function ContactList({ contacts }) {
  const contactList = contacts.map(contact => (
    <ContactPreview key={contact._id} contact={contact} />
  ))
  return (
    <ul className="contact-list clean-list flex justify-center">
      {contactList}
    </ul>
  )
}
