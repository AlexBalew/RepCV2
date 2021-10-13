import s from "./Footer.module.css";
import React from "react";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <h3 className={s.text}>
                    Baleu Aleksei
                </h3>
                <div className={s.footerMiddle}>

                </div>
                <span className={s.rights}>2021© All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer