import React, {useState} from "react";
import { Router, Link } from "react-router-dom";
import "../styles/components/header.scss";
import MenuExtension from "./MenuExtension";


const Header = function() {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenuExtension = () : void => {
        setIsOpen((ok) => !ok )
    }

    return (<React.Fragment>
        <header className="page-header">
            <ul>
            <Link  to="/" ><li className="app-logo clickable"><div > </div></li></Link>
                <li className="menu-item">
                    <div className="menu-logo icon-menu" onClick={handleMenuExtension}></div>
                </li>
                <li className="menu-item clickable">
                    {/* <Link to="/"> */}
                        <div className="menu-logo icon-info"><div className="info-count"></div></div>
                        <span className="color-light">お知らせ</span>
                    {/* </Link> */}
                </li>
                <li className="menu-item clickable"><Link to="/menu">
                    <div className="menu-logo icon-challenge"></div>
                    <span>チャレンジ</span>
                    </Link>
                </li>
                
                <li className="menu-item clickable"><Link to="/exercise">
                    <div className="menu-logo icon-memo"></div>
                    <span className="color-light">自分の記録</span>
                    </Link></li>
                
            </ul>
        </header>
            {isOpen && <MenuExtension isOpen={isOpen} close={() => setIsOpen(false)}></MenuExtension>}
            </React.Fragment>

    )
}

export default Header;