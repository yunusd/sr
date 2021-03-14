import {Header, Footer} from 'components/atoms';


const MainLayout = ({children}) => {
    return (
        <>
            <Header />
            <div className="container p-5">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;