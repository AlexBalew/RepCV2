import React from "react";
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Examples from "./Examples/Examples";
import Hire from "./Hire/Hire";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Examples/>
            <Hire/>
            <Contacts/>
            <Footer/>
            <div></div>
        </div>
    );
}

export default App;
