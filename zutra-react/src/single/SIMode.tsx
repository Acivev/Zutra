import React from "react";


export interface IPropsPageSIMode { }

export interface IStatePageSIMode { }

export class SIMode extends React.Component<IPropsPageSIMode, IStatePageSIMode> {
    constructor(props: IPropsPageSIMode) {
        super(props);
    }

    render() {
        return (
            <div>
             SIMode
            </div>
        );
    }
}