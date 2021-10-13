import React from "react";
import s from './Main.module.css'
import sCont from '.././Common/Common_styles/Container.module.css'

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={sCont.container}>
                <div className={s.text}>
                    <div>Greetings!</div>
                    <h1>Baleu Aleksei</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.mainPhoto}>my photo</div>
            </div>
        </div>
    );
}

export default Main;