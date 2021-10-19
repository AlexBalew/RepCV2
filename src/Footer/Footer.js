import s from "./Footer.module.css";
import React from "react";
import {SocialLink} from "./SocialLink";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h3 className={s.text}>
                    Baleu Aleksei
                </h3>
                <div className={s.footerMiddle}>
                    <SocialLink/>
                    <SocialLink/>
                    <SocialLink/>
                    <SocialLink/>
                </div>
                <span className={s.rights}>2021© All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer