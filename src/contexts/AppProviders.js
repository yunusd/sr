import { LanguageProvider } from "./language/LanguageContext";
import { AuthProvider } from "./auth/AuthContext";
import { PageProvider } from "./page/PageContext";

const AppProviders = ({ children }) => (
    <AuthProvider>
        <PageProvider>
            <LanguageProvider>{children}</LanguageProvider>
        </PageProvider>
    </AuthProvider>
);

export default AppProviders;
