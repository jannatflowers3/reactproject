import React, { Component } from 'react';
import './App.css';
// import ModalComponent from './components/ModalComponent';
import Mymodal from './components/Mymodal';

class App extends Component {
  render() {
    return (
      <div className="App">
          {/* <ModalComponent/>         */}
          <Mymodal />
      </div>
    );
  }
}

export default App;