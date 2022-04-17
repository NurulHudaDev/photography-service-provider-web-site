import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase.init';
import './Header.css';

const Header = () => {

    const [user, setUser] = useState({});
    console.log(user);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            } else {
              setUser({});
            }
          });
    
    },[])

    const hendelLogOut =() =>{
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    
    return (
        <div>
            <Navbar className='header' variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'>Oshine</Navbar.Brand>
                    <Nav className="me-right">
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                        <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                        {user?.uid?<Nav.Link onClick={hendelLogOut}>Log Out</Nav.Link>:<Nav.Link as={Link} to='/login'>Log In</Nav.Link>}
                    </Nav>
                </Container>
                <h4 className="logo">User: {user?.displayName}</h4>
            </Navbar>
        </div>
    );
};

export default Header;