import React from 'react';
import {PageMain} from "./pages/main";
import {Slider} from "./utility/Slider"

function GetPath(): string {
    console.log(window.location.pathname);
    return window.location.pathname;
}

function GetPage() {
    switch (GetPath()) {
        case "":
            return <PageMain/>;
        case "/":
            return <PageMain/>;
            break;
        case "/main":
            return <PageMain/>;
            break;
        default:
            return (
                <div>
                    Not Found
                </div>
            );
    }
}


function App() {
    return (
        GetPage()
    );
}

export default App;
