import React, {useCallback} from "react";
import { Link } from "react-router-dom";
import "../styles/components/menuExtension.scss"

type Props = {
    className?: string,
    isOpen: boolean,
    close: () =>  void,
}

const MenuExtension = ({className, isOpen, close} : Props) => {
    // const [isOpen, setIsOpen] = useState(false)
    const handleClose = useCallback(() => {
        close();
    }, [close])
    if (isOpen) return  (<React.Fragment>
    <div className="menu-extension hiragino">
        <span className="icon-close clickable" onClick={handleClose}></span>
        <div><Link to={"/exercise"}>自分の記録</Link></div>
        <div>体重グラフ</div>
        <div>目標</div>
        <div>選択中のコース</div>
        <div><Link to={"/menu"}>コラム一覧</Link></div>
        <div>設定</div>
    </div>
    <div className="menu-extension-overlay"></div>
    </React.Fragment>)
    else return (<></>)
}

export default MenuExtension;