import Footer from "../Footer";
import Header from "../Header";

const Layout = (props: any) => {

    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout;