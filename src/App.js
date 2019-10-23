import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = new FormData(event.target);
    
  //   fetch('/api/form-submit-url', {
  //     method: 'POST',
  //     body: data,
  //   });


  // }

  render () {
    return (
      <div className="App">
  
        <Header />
  
        <Container>
          <Row>
            <AddContact />
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default App;
