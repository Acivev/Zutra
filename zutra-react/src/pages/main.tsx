import React from "react";
import {SINavbar} from "../single/SINavbar"
import {SINavbarLoggedIn} from "../single/SINavbarLoggedIn";
import {SINavbarAdmin} from "../single/SINavbarAdmin";
import {SICards} from "../single/SICards";
import {SIMode} from "../single/SIMode";
import {SIHelp} from "../single/SIHelp";
import {SILogin} from "../single/SILogin";

export interface IPropsPageMain {

}

export interface IStatePageMain {

}

export class PageMain extends React.Component<IPropsPageMain, IStatePageMain> {
    constructor(props: IPropsPageMain) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<SINavbar/>*/}
                <SINavbarLoggedIn/>
                {/*<SINavbarAdmin/>*/}
                <SICards/>
                <SIMode/>
                <SIHelp/>
                <SILogin/>
            </div>
        );
    }
}