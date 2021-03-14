import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import useModal from 'hooks/useModal';
import LoginModal from 'components/molecules/LoginModal';
import { FormattedMessage } from 'react-intl';
import { useAuthState } from 'contexts/auth/AuthContext';
import { usePageState } from 'contexts/page/PageContext';

const Header = () => {
    const {show, handleModal} = useModal();
    const history = useHistory();
    const [state, dispatch] = useAuthState();
    const [pageState] = usePageState();

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand onClick={() => history.push("/")} style={{cursor: "pointer"}}><FontAwesomeIcon icon={faCampground} /></Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className="text-light"><FormattedMessage id={`${pageState.name}`}/></Nav.Link>                
                </Nav>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link><Link to="/" className="text-light"><FormattedMessage id="home"/></Link></Nav.Link>                
                        <Nav.Link><Link to="/contact" className="text-light"><FormattedMessage id="contact"/></Link></Nav.Link>                
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <NavDropdown title={state.userSettings?.language || "en"}>
                                <NavDropdown.Item eventKey="tr" onSelect={(e) => dispatch({type: "CHANGE_LANGUAGE", payload: { language: e}})}><FormattedMessage id="tur"/></NavDropdown.Item>
                                <NavDropdown.Item eventKey="en" onSelect={(e) => dispatch({type: "CHANGE_LANGUAGE", payload: { language: e}})}><FormattedMessage id="en"/></NavDropdown.Item>
                            </NavDropdown>
                        </Nav.Link>
                        <Nav.Link>
                            {state.currentUser ? (
                                <NavDropdown eventKey="loginDropdown" title={state.currentUser?.name} className="dropleft">
                                    <NavDropdown.Item disabled>{state.currentUser?.email}</NavDropdown.Item>
                                    <NavDropdown.Item onSelect={(e) => dispatch({type: "LOGOUT"})}><FormattedMessage id="logout"/></NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <Button variant="primary" onClick={() => handleModal()}><FormattedMessage id="login"/></Button>
                            )}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <LoginModal show={show} onHide={() => handleModal()}/>
        </>
    );
}

export default Header;