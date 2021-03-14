import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useAuthState } from 'contexts/auth/AuthContext';

const countryList = [
	{ id: "TR", name: "Turkey" },
	{ id: "US", name: "United States of America" },
	{ id: "GB", name: "United Kingdom" },
	{ id: "DE", name: "Germany" },
	{ id: "SE", name: "Sweden" },
	{ id: "KE", name: "Kenya" },
	{ id: "BR", name: "Brazil" },
	{ id: "ZW", name: "Zimbabwe" }
]

const ContactForm = () => {
    const [state] = useAuthState();
    const [countries, setCountries] = useState(countryList);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const intl = useIntl();
    const handleSearchCountry = (e) => {
        setCountries(e.target.value.length > 0 ? countryList.filter(c => c.name.toLowerCase().startsWith(e.target.value.toLowerCase())) : countryList)
    }

    const handleSelect = (e) => setSelectedCountry(e);
    
    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            const data = {
                name: e.target.name.value,
                email: e.target.email.value,
                phonenumber: e.target.phone.value,
                country_code: selectedCountry,
                text: e.target.text.value
            }
            console.log("sended: ", data)
            return false;
        }}>
            <Form.Group controlId="name">
                <Form.Label><FormattedMessage id="name"/></Form.Label>
                <Form.Control required defaultValue={state.currentUser?.name} placeholder={intl.formatMessage({id: "nameEnterMessage"})} />
            </Form.Group>
            <Form.Group controlId="email">
                <Form.Label><FormattedMessage id="email"/></Form.Label>
                <Form.Control required defaultValue={state.currentUser?.email} type="email" placeholder={intl.formatMessage({id: "emailEnterMessage"})} />
            </Form.Group>
            <Form.Group controlId="phone">
                <Form.Label><FormattedMessage id="phonenumber"/></Form.Label>
                <Form.Control required type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{4}" placeholder={intl.formatMessage({id: "phoneNumberEnterMessage"})}/>
            </Form.Group>
            <Form.Group controlId="country">
                <Form.Label><FormattedMessage id="country"/></Form.Label>
                <Dropdown>
                    <Dropdown.Toggle>
                        {selectedCountry || <FormattedMessage id="countryEnterMessage"/>}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <div className="flex justify-content-center">
                            <input onChange={(e) => handleSearchCountry(e)}/>
                        </div>
                        {countries.map((c, i) => (
                            <Dropdown.Item eventKey={c.id} key={i} active={c.id === selectedCountry?.id} onSelect={(e) => handleSelect(e)}><FormattedMessage id={c.id.toLowerCase()}/></Dropdown.Item>
                        ))}
                        {countries.length === 0 && (
                            <div>
                                <FormattedMessage id="noitems"/>
                            </div>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </Form.Group>
            <Form.Group controlId="text">
                <Form.Label><FormattedMessage id="text"/></Form.Label>
                <Form.Control required as="textarea" placeholder={intl.formatMessage({id: "textEnterMessage"})} />
            </Form.Group>
            <Button variant="primary" type="submit">
                <FormattedMessage id="submit"/>
            </Button>
        </Form>
    )
}

export default ContactForm;