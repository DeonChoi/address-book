import React from 'react';

class NewContact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newFirstName: '',
            newLastName: '',
            newAddress: '',
            newCity: '',
            newCountry: '',
            newPostalCode: 0,
            newPhone: 0,
            newEmail: '',
            newAge: 0,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            firstName: event.target.value
        });
    }
    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.firstName);
        event.preventDefault();
    }

    render () {
        return (
            <tr>
                <td>{this.state.newFirstName}</td>
                <td>{this.state.newLastName}</td>
                <td>{this.state.newAddress}</td>
                <td>{this.state.newCity}</td>
                <td>{this.state.newCountry}</td>
                <td>{this.state.newPostalCode}</td>
                <td>{this.state.newPhone}</td>
                <td>{this.state.newEmail}</td>
                <td>{this.state.newAge}</td>
            </tr>
        );
    }

}

export default NewContact;