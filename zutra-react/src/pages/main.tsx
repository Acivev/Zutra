import React from "react";
import {TLMain} from "../template/main/main";

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
            <TLMain/>
        );
    }
}