import React from 'react';
import Form from 'react-bootstrap/Form';


class ContactForm extends React.Component {
    
    render () {
        return(
            <Form>
                <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type='name' placeholder='John'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type='name' placeholder='Smith' required></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='address' placeholder='123 Apple Street'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='city' placeholder='Washington'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>State</Form.Label>
                    <Form.Control type='state' placeholder='DC'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Control type='country' placeholder='United States'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type='number' placeholder='12345'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type='tel' placeholder='1234567890'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder='johnsmith@email.com'></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control type='number' placeholder='22'></Form.Control>
                </Form.Group>
            </Form>
        );
    }

}

export default ContactForm;