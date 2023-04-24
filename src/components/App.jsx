import React, { Component } from 'react';
// import { nanoid } from 'nanoid';

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       Привіт, Світ
//     </div>
//   );
// };

class App extends Component {
  state = {
    contacts: [],
    name: 'n',
    number: '',
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <div className="inputForm" style={{ border: '1px solid', display: '' }}>
          <p>Name</p>
          <input
            type="text"
            name="name"
            // value={this.state.inputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="button">Add contact</button>
        </div>
        <h2>Contacts</h2>
        <ul>
          <li>{this.state.name}</li>
        </ul>
      </div>
    );
  }
}

export default App;
