import React from "react";
import Footer from "../Footer";
import Header from "../Header";

const Layout = ({children}) => {
    return(
        <>
            <Header />
                <main className="text-center container mx-auto my-12">
                    {children}
                </main>
            <Footer />
        </>
    );
}

export default Layout;