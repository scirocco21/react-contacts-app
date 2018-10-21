import React, {Component} from 'react'

export default class ContactList extends Component {
  render() {
    const people = this.props.contacts
    return <ol className="contact-list">
      {people.map(person => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ol>
  }
}
