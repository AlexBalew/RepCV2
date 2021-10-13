import React from "react";
import s from './Contacts.module.css'

function Contacts () {
    return (
        <div className={s.contactsBlock}>
            <div className={s.contactsContainer}>
                <h2>Contacts</h2>
                <div className={s.formBlock}>
                <form action="/">
                    <div className={s.row}>
                        <div className={s.formGroup}>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" placeholder="Insert your name..."/>
                        </div>

                        <div className={s.formGroup}>
                            <label htmlFor="email">Your Email:</label>
                            <input type="email" id="email" placeholder="Insert your email..."/>
                        </div>
                    </div>
                    <div className={s.formGroup}>
                        <label htmlFor="text">Your message:</label>
                        <br/>
                            <textarea id="text" rows="2" cols="15"></textarea>
                    </div>
                    <input className={s.btn} type="submit" value="Contact me"/>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Contacts