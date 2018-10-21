import React, {Component} from 'react'

export default class ContactList extends Component {
  render() {
    const people = this.props.contacts
    return <ol>
      {people.map(person => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}
