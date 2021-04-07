import React from "react";
import {Slider} from "../utility/Slider";


export interface IPropsPageSIMode { }

export interface IStatePageSIMode { }

export class SIMode extends React.Component<IPropsPageSIMode, IStatePageSIMode> {
    constructor(props: IPropsPageSIMode) {
        super(props);
    }

    render() {
        return (
            <div style={{padding: "5em", margin: "0 auto", textAlign: "center"}}>
                <div>
                    <p style={{color: "#92cd62"}}>Hide your Cards from Public</p>
                    <a style={{color: "#fff", marginRight: 10, fontSize: 18, fontWeight: "bold"}}>Off</a>
                    <Slider default={false}/>
                    <a style={{color: "#fff", marginLeft: 10, fontSize: 18, fontWeight: "bold"}}>On</a>
                </div>

            </div>
        );
    }
}