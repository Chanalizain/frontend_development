import React from "react";
import pnLogo from "../assets/pn-logo.png";
const Header = ({batchName}) => {
    return (
        <header id="header">
            <img src={pnLogo} alt="PN Logo" />
            <h1 className = "text">Student result for {batchName}</h1>
        </header>
    );
};
export default Header;