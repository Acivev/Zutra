import React from "react";
import {SINavbarLoggedIn} from "../../single/SINavbarLoggedIn";
import {SICards} from "../../single/SICards";
import {SIHelp} from "../../single/SIHelp";
import {SILogin} from "../../single/SILogin";
import {SIMode} from "../../single/SIMode";

export interface IPropsTLMain {

}

export interface IStateTLMain {

}

export class TLMain extends React.Component<IPropsTLMain, IStateTLMain> {
    constructor(props: IPropsTLMain) {
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