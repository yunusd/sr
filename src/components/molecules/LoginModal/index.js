import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { useAuthState } from 'contexts/auth/AuthContext';
import { FormattedMessage, useIntl } from 'react-intl';

const LoginModal = ({show, onHide, ...rest}) => {
    const [_, authDispatch] = useAuthState();
    const intl = useIntl();

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            {...rest}
        >
            <Modal.Header closeButton onHide={() => onHide()}>
                <Modal.Title id="contained-modal-title-vcenter">
                    <FormattedMessage id="login"/>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form id="loginForm" onSubmit={(e) => {
                    e.preventDefault();
                    const data = {
                        name: e.target.name.value,
                        email: e.target.email.value,
                        password: e.target.password.value,
                    }
                    authDispatch({
                        type: "LOGIN",
                        payload: data
                    })
                    onHide();
                }}>
                   <Form.Group controlId="name">
                        <Form.Label><FormattedMessage id="name"/></Form.Label>
                        <Form.Control required placeholder={intl.formatMessage({id: "nameEnterMessage"})} />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label><FormattedMessage id="email"/></Form.Label>
                        <Form.Control required type="email" placeholder={intl.formatMessage({id: "emailEnterMessage"})} />
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label><FormattedMessage id="password"/></Form.Label>
                        <Form.Control required type="password" placeholder={intl.formatMessage({id: "password"})} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button form="loginForm" variant="primary" type="submit">
                    <FormattedMessage id="submit"/>
                </Button>
                <Button onClick={() => onHide()} variant="outline-danger">
                    <FormattedMessage id="cancel"/>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default LoginModal;