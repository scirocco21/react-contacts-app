import React, {Component} from 'react'

function ContactList(props) {
  const people = props.contacts
  return (
    <ol className="contact-list">
      {people.map(person => (
        <li key={person.id} className='contact-list-item'>
          <div className='contact-avatar' style={{
             backgroundImage: `url(${person.avatarURL})`
           }}>
          </div>
          <div className='contact-details'>
            <p>{person.name}</p>
            <p>{person.email}</p>
          </div>
          <button className='contact-remove'>
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

export default ContactList
