import React, { Component } from 'react';
import ContactList from './ContactList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  // alternatively, state could be defined inside a constructor function:
  //   constructor(props) {
  //     super(props);
  //     this.state = {contacts: [...]}
  // }
  state = {
    contacts: [
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "email": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "michael",
        "name": "Michael Jackson",
        "email": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "email": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

  // removeContact returns a new array without the selected item (the element to be removed). The function will be invoked by pressing a button in the child component ContactList and therefore needs to be passed down via props
  removeContact = (contact) => {
    this.setState((state) => ({
     contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }

  render() {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
      </div>
    );
  }

}

export default App;
