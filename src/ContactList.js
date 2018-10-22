import React, { Component } from 'react';
import PropTypes from 'prop-types';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by'

class ContactList extends Component {
  // use Proptypes to ensure correct datatypes are handed down
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState( {query: query.trim() })
  }

  render() {
    const people = this.props.contacts;
    const { onDeleteContact } = this.props
    const {query} = this.state

    let showingPeople;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingPeople = people.filter((contact) => match.test(contact.name))
    } else {
      showingPeople = people;
    }

    showingPeople.sort(sortBy('name'))

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* search form is a controlled component because the value displayed is a direct reflection of the contact list's internal state, where query is stored */}
          <input
            className="search-contacts" type="text"
            placeholder="Search Contacts" value={query} onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol className="contact-list">
        {/* map each person in the array to a specific li */}
        {showingPeople.map(person => (
          <li key={person.id} className='contact-list-item'>
            <div className='contact-avatar' style={{
               backgroundImage: `url(${person.avatarURL})`
             }}>
            </div>
            <div className='contact-details'>
              <p>{person.name}</p>
              <p>{person.email}</p>
            </div>
            <button className='contact-remove' onClick={() => onDeleteContact(person)}>
              Remove
            </button>
          </li>
        ))}
      </ol>
    </div>
    )
  }
}

export default ContactList
