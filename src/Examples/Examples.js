import React from "react";
import s from './Examples.module.css'
import sCont from '.././Common/Common_styles/Container.module.css'



function Examples() {
    return (
        <div className={s.worksBlock}>
            <div className={`${sCont.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <div className={s.example1}>
                        <button className={s.button}>Check out</button>
                        <h3>Project X</h3>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className={s.example2}>
                        <button className={s.button}>Check out</button>
                        <h3>Project Y</h3>
                        <div>Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Examples;