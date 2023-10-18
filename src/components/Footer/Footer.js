import React from "react";
import logo1 from "../assas/f_logo.png";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container text-center top">
                    <div className="img">
                        <img src={logo1} alt="" />
                    </div>
                    <p>© 2021. All rights reserved by GorkCoder-Themes.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
