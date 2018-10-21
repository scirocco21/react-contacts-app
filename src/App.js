import React, { Component } from 'react';
import ContactList from './ContactList'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
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
  render() {
    return (
      <div className="App">
        <ContactList contacts={this.state.contacts}/>
      </div>
    );
  }
  
}

export default App;
