import React from 'react'

export function ContactFilter({ onFilter }) {
  function onType({ target }) {
    onFilter({ term: target.value })
  }
  return (
    <div className="contact-filter">
      <input
        autoFocus
        type="text"
        onChange={onType}
        placeholder="Search Contacts"
      />
    </div>
  )
}
