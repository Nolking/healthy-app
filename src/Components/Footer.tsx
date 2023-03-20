import React from "react";
import "../styles/components/footer.scss"

const Footer = function() {
    return (
        <footer className="app-footer">
            <ul className="horizontal-list">
                <li>会員登録</li>
                <li>運営会社</li>
                <li>利用規約</li>
                <li>個人情報の取扱について</li>
                <li>特定商取引法に基づく表記</li>
                <li>お問い合わせ</li>
            </ul>
        </footer>
    )
}

export default Footer;