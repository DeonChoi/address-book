import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Header extends React.Component {
    render () {
        return(
            <Navbar className='bg-primary'>
               <Navbar.Brand className='text-light'>Address Book</Navbar.Brand>
            </Navbar>
        );
    }
}

export default Header;