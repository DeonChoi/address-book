import React from 'react';
import Table from 'react-bootstrap/Table';

class AddressTable extends React.Component {

    render () {
        return(
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>City</th>
                        {/* <th>State</th> */}
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
                    
                </tbody>
            </Table>
        );
    }

}

export default AddressTable;