import React from "react";
import {SINavbar} from "../../single/SINavbar";
import {SINavbarLoggedIn} from "../../single/SINavbarLoggedIn";
import {SINavbarAdmin} from "../../single/SINavbarAdmin";
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
                {/* TODO Finish First AdminPage, Then the others.*/}

                    {/*<SINavbar MobileMode={false}/>*/}
                    {/*<SINavbarLoggedIn MobileMode={false}/>*/}
                    {/*TODO Lambda Check :D*/}
                    <SINavbarAdmin MobileMode={false}/>
                    {/*<SICards/>*/}
                    <SIMode/>
                    {/*<SIHelp/>*/}
                    <SILogin/>
            </div>
        );
    }
}