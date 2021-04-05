import React from "react";

export interface IPropsPageSINavbar { }

export interface IStatePageSINavbar { }

export class SINavbar extends React.Component<IPropsPageSINavbar, IStatePageSINavbar> {
    constructor(props: IPropsPageSINavbar) {
        super(props);
    }

    render() {
        return (
            <div
                 style={{
                     textAlign: "center",
                     whiteSpace: "nowrap",
                     position: "fixed",
                     minWidth: "100%",
                     zIndex: 1000,
                     background: "#1b2528",
                     boxShadow: "0 1px 3px #0e0e0e, #101010",
                     boxSizing: "border-box",
                     lineHeight: "1.6",
                     color: "#333333",
                     fontSize: "16px",
                     fontWeight: "bold",


                 }}>

                <div style={{
                    position: "relative",
                    paddingTop: ".5em",
                    paddingBottom: ".5em",
                    display: "inline-block",
                    width: "auto",
                    verticalAlign: "middle",
                    boxSizing: "border-box",
                    textAlign: "center",
                    whiteSpace: "nowrap",
                    fontWeight: "bold"

                }}>

                    <div style={{display: "flex"}}>
                        <div style={{padding: ".5em 0"}}>
                            <ul style={{
                                display: "inline-block", listStyle: "none", margin: 0,
                                padding: 0, boxSizing: "border-box", whiteSpace: "nowrap", textAlign: "center"
                            }}>
                                <li
                                    style={{
                                        cursor: "pointer",
                                        display: "inline-block",
                                        zoom: 1,
                                        verticalAlign: "middle",
                                        padding: 0,
                                        margin: 0,
                                        height: "100%",
                                        position: "relative",
                                        boxSizing: "border-box",

                                    }}>
                                    <a
                                       style={{
                                           color: "#ffffff",
                                           padding: ".5em 1em",
                                           display: "block",
                                           whiteSpace: "nowrap",
                                           lineHeight: 1.6,
                                           fontSize: "16px"
                                       }}>
                                        <b> Login </b>
                                    </a>
                                </li>

                                <li
                                    style={{
                                        cursor: "pointer",
                                        color: "#ffffff",
                                        display: "inline-block",
                                        zoom: 1,
                                        verticalAlign: "middle",
                                        padding: 0,
                                        margin: 0,
                                        height: "100%",
                                        position: "relative",
                                        boxSizing: "border-box",

                                    }}>

                                    <a>
                                        <b> Help </b>
                                    </a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}