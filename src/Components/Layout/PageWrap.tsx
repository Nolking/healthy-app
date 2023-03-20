import React from "react";
import Header from "../Header";
import Footer from "../Footer";
type Props = {
    children: React.ReactChild | React.ReactChild[]
}

const PageWrap = ({ children} : Props) => {
    return (
        <React.Fragment>
            <Header></Header>
                <div className="page-wrap">
                    {children}
                </div>
            <Footer></Footer>
        </React.Fragment>
    )
}

export default PageWrap;