import ContactForm from "components/molecules/ContactForm"
import { useEffect } from "react"
import { usePageState } from "contexts/page/PageContext";
import { FormattedMessage } from "react-intl";

const Contact =  () => {
    const [_, pageDispatch] = usePageState()
    useEffect(() => {
        pageDispatch({
            type: "PAGE_ADD",
            payload: {
                name: "contact"
            }
        })
    }, [])

    return (
        <>
            <h3><FormattedMessage id="contact"/></h3>
            <ContactForm />
        </>
    )
}

export default Contact;