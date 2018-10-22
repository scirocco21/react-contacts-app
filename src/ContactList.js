import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          {/* search form is a controlled component because the value displayed is a direct reflection of the contact list's internal state, where query is stored */}
          <input
            className="search-contacts" type="text"
            placeholder="Search Contacts" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
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
            <button className='contact-remove' onClick={() => this.props.onDeleteContact(person)}>
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
