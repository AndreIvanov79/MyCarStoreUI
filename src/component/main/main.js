import React from "react";
import Navigation from "../navigation/navigation";
import WelcomePage from "../welcome-page/welcome-page";


export default function Main(){
    return (
        <div className="App">
            <header className="App-header">
                <Navigation/>
                <WelcomePage/>
            </header>
        </div>
    )
}