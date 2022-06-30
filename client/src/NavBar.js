import { Navbar, Container } from 'react-bootstrap'
import logo from './images/1146980.png'

function NavBar() {
    return(
            <Navbar bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt="takeout box"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                Takeout
                </Navbar.Brand>
                </Container>
            </Navbar>

    )
}

export default NavBar