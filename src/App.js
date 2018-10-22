import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import ContactList from './ContactList';
import CreateContact from './CreateContact'
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
    // API remove method deletes selected contact from database
    ContactsAPI.remove(contact)
  }

  // first call create action on server side, then when async action resolves update state to trigger re-render and show new contact in the DOM
  createContact(contact) {
  ContactsAPI.create(contact).then(contact => {
    this.setState(state => ({
      contacts: state.contacts.concat([ contact ])
    }))
  })
}

  render() {
    return (
      <div className="App">
        {/* exact flag is required here to avoid rendering both '/' and '/create' components */}
        <Route exact path="/" render={() => (
          <ContactList contacts={this.state.contacts} onDeleteContact={this.removeContact}/>
        )}
        />
        <Route path="/create" render={({ history }) => (
          // render CreateContact component with create function as props
          <CreateContact
            onCreateContact={(contact) => {
              this.createContact(contact);
          // history.push('/') redirects to index route after contact creation
              history.push('/')
            }}
          />
        )}/>
      </div>
    );
  }

}

export default App;
