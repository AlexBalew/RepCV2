import React from "react";
import s from './Skills.module.css'
import sCont from '.././Common/Common_styles/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {
    return (
        <div className={s.skillBlock}>
            <div className={`${sCont.container} ${s.skillContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}/>
                    <Skill title={'HTML'} description={'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Skill title={'CSS'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}/>

                    <Skill title={'React'} description={'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}/>

                </div>
            </div>
        </div>
    );
}

export default Skills;