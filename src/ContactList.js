import React from 'react';
import PropTypes from 'prop-types';

function ContactList(props) {
  const people = props.contacts
  return (
    <ol className="contact-list">
      {/* map each person in the array to a specific li */}
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
          <button className='contact-remove' onClick={() => props.onDeleteContact(person)}>
            Remove
          </button>
        </li>
      ))}
    </ol>
  )
}

// use Proptypes to ensure correct datatypes are handed down
ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}

// just like regular classes, stateless functional components need to be explicitly imported/exported
export default ContactList
