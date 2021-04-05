import React from "react";
import {InputSwitchElement } from "./SISwitch"
import './SISwitch.css';


export interface IPropsPageSIMode {

}

export interface IStatePageSIMode {

}

export class SIMode extends React.Component<IPropsPageSIMode, IStatePageSIMode> {
    constructor(props: IPropsPageSIMode) {
        super(props);
    }

    render() {
        return (
            <div style={{
                margin: "0 auto",
                padding: "5em 0em",
                display: "block",
                textAlign: "center"}}>

                    <InputSwitchElement/>
            </div>
        );
    }
}