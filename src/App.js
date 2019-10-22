import React from 'react';
import './App.css';
import ContactForm from './components/ContactForm';
import AddressTable from './components/AddressTable';
import AddContact from './components/AddContact';
import Header from './components/Header';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';



function App() {
  return (
    <div className="App">

      <Header />

      <Container>
        <Row>
          <AddContact />
        </Row>
        <Row>
          <AddressTable />
          <ContactForm />
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
