import React, { Component } from 'react';
import ContactList from './ContactList';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  // alternatively, state could be defined inside a constructor function:
  //   constructor(props) {
  //     super(props);
  //     this.state = {contacts: [...]}
  // }
  state = {
    contacts: []
  }

  // make API request once components mounts. Calling setState will cause re=render of DOM and cause contacts array to populate and display
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts })
    })
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
