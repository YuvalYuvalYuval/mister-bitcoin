import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact }) {
  const { name, _id } = contact
  return (
    <li className="contact-preview flex">
      <Link to={`/contact/${contact._id}`}>
        <h3>{name}</h3>
        <img
          src={`https://robohash.org/${contact._id}?set=set2`}
          alt="contact-img"
        />
      </Link>
    </li>
  )
}
