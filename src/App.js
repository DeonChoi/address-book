import React from 'react';
import './App.css';
import AddContact from './components/AddContact';
import Header from './components/Header';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

class App extends React.Component {
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
