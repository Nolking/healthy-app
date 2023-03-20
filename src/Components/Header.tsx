import React from "react";
import { Router, Link } from "react-router-dom";
import "../styles/components/header.scss"

const Header = function() {

    return (
        <header className="page-header">
            <ul>
                <li className="app-logo clickable"><Link  to="/" ><div > </div></Link></li>
                <li className="menu-item">
                    <div className="menu-logo icon-menu"></div>
                </li>
                <li className="menu-item">
                    <Link to="/exercise">
                        <div className="menu-logo icon-info"><div className="info-count"></div></div>
                        <span>お知らせ</span>
                    </Link>
                </li>
                <li className="menu-item"><Link to="/menu">
                    <div className="menu-logo icon-challenge"></div>
                    <span>チャレンジ</span>
                    </Link>
                </li>
                
                <li className="menu-item"><Link to="/">
                    <div className="menu-logo icon-memo"></div>
                    <span>自分の記録</span>
                    </Link></li>
                
            </ul>
            
        </header>
    )
}

export default Header;