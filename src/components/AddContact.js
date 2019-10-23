import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';


class AddContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
            people: [],
            // people: [{
            //     newFirstName: '',
            //     newLastName: '',
            //     newAddress: '',
            //     newCity: '',
            //     newCountry: '',
            //     newPostalCode: null,
            //     newPhone: null,
            //     newEmail: '',
            //     newAge: null
            // }],
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            country: '',
            postalCode: null,
            phone: null,
            email: '',
            age: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addPerson = this.addPerson.bind(this);
        this.editPerson = this.editPerson.bind(this);
        this.deletePerson = this.deletePerson.bind(this);

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleChange = e => {
        switch (e.target.name){
            case 'firstName':
                return this.setState({ 'firstName': e.target.value });
            case 'lastName':
                return this.setState({ 'lastName': e.target.value });
            case 'address':
                return this.setState({ 'address': e.target.value });
            case 'city':
                return this.setState({ 'city': e.target.value });
            case 'country':
                return this.setState({ 'country': e.target.value });
            case 'postalCode':
                return this.setState({ 'postalCode': e.target.value });
            case 'phone':
                return this.setState({ 'phone': e.target.value });
            case 'email':
                return this.setState({ 'email': e.target.value });
            case 'age':
                return this.setState({ 'age': e.target.value });
            default:
                return this.state.people;
        }
    }
    handleSubmit = e => {
        e.preventDefault();
    }
    addPerson = () => {
        this.setState((state) => ({
            people: [...state.people, {newFirstName: state.firstName, newLastName: state.lastName, newAddress: state.address, newCity: state.city, newCountry: state.country, newPostalCode: state.postalCode, newPhone: state.phone,newEmail: state.email, newAge: state.age}]
        }));
    }
    editPerson = (index) => {
        this.setState(state => {
            const people = state.people.map((item, person) => {
                if (person === index) {
                return item + 1;
                } else {
                return item;
                }
            });
            return {
                people,
            };
        });
    }
    deletePerson = (index) => {
        this.setState(state => {
            const people = state.people.filter((item, person) => index !== person);
            return {
              people,
            };
        });
    }
    handleClose = () => {
        this.setState({
            show:false
        });
    }
    handleShow = () => {
        this.setState({
            show:true
        });
    }
    render () {
        return (
            <>
                <Button variant='outline-primary' onClick={this.handleShow}>Add Contact</Button>

                <Modal show={this.state.show} onHide={this.handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            Add New Contact
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type='name' placeholder='John' name='firstName' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type='name' placeholder='Smith' name='lastName' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type='address' placeholder='123 Apple Street' name='address' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control type='city' placeholder='New York' name='city' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Country</Form.Label>
                                <Form.Control type='country' placeholder='United States' name='country' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Postal Code</Form.Label>
                                <Form.Control type='number' placeholder='12345' name='postalCode' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type='tel' placeholder='1234567890' name='phone' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type='email' placeholder='johnsmith@email.com' name='email' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Age</Form.Label>
                                <Form.Control type='number' placeholder='22' name='age' required onChange={event => this.handleChange(event)}></Form.Control>
                            </Form.Group>
                            <Button type="submit" onClick={this.addPerson}>Submit form</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Postal Code</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {/* new table rows with table data nested inside */}
                       {this.state.people.map( (person,index) => 
                            <tr key={person}>
                                <td>{person.newFirstName}</td>
                                <td>{person.newLastName}</td>
                                <td>{person.newAddress}</td>
                                <td>{person.newCity}</td>
                                <td>{person.newCountry}</td>
                                <td>{person.newPostalCode}</td>
                                <td>{person.newPhone}</td>
                                <td>{person.newEmail}</td>
                                <td>{person.newAge}</td>
                                <td><Button variant='primary' onClick={() => {this.handleShow(); this.editPerson(index); }}>Edit</Button></td>
                                <td><Button variant='primary' onClick={() => {this.deletePerson(index); }}>Delete</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
           </>
        );
    }
}

export default AddContact;