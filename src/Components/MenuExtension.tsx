import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/menuExtension.scss"

type Props = {
    className?: string,
}

const MenuExtension = ({className} : Props) => {
    const handleClose = () => {
        
    }
    return (<React.Fragment>
    <div className="menu-extension hiragino">
        <span className="icon-close" onClick={handleClose}></span>
        <div><Link to={"/"}>自分の記録</Link></div>
        <div>体重グラフ</div>
        <div>目標</div>
        <div>選択中のコース</div>
        <div><Link to={"/"}>コラム一覧</Link></div>
        <div>設定</div>
    </div>
    <div className="menu-extension-overlay"></div>
    </React.Fragment>)
}

export default MenuExtension;