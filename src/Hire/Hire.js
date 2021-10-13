import React from "react";
import s from './Hire.module.css'


function Hire() {
    return (
    <div className={s.hireBlock}>
        <div className={s.hireContainer}>
            <div className={s.text}>
                Ready for remote work
            </div>
            <button className={s.hireButton}>Hire me</button>
        </div>
    </div>
    )
}

export default Hire