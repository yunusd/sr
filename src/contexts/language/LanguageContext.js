import { IntlProvider } from "react-intl";
import PropTypes from "prop-types";
import {language} from '___mocks__/languages';
import { useAuthState } from "../auth/AuthContext";

export const LanguageProvider = ({ children }) => {
    const [state] = useAuthState();
    const handleTranslationError = (err) => {
        if (err.code === "MISSING_TRANSLATION") {
            console.warn('MISSING_TRANSLATION', '|', err.message);
            return;
        }

        if (err.code === "INVALID_CONFIG") {
            console.warn('INVALID_CONFIG', '|', err.message);
            return;
        }

        throw err;
    }
  
    return (
        <IntlProvider locale={state.userSettings?.language} messages={state.userSettings?.localization || language.en} defaultLocale="en" onError={handleTranslationError}>
            {children}
        </IntlProvider>
    );
};

LanguageProvider.propTypes = {
    children: PropTypes.node.isRequired,
};