import React from "react";

export interface IPropsInputSwitchElement {
}

export interface IStateInputSwitchElement {
}

export class InputSwitchElement extends React.Component<IPropsInputSwitchElement, IStateInputSwitchElement> {
    constructor(props: IPropsInputSwitchElement) {
        super(props);
    }

    render() {
        return (<div>
            <div style={{
                margin: "0 auto",
                padding: "5em 0em",
                display: "block",
                textAlign: "center"}}>

                <form method="get">
                    <InputSwitchElement/>
                    <input type="submit"/>
                </form>
            </div>
        </div>);
    }
}

export class extends HTMLElement{
    private name: string | null;
    public tabIndex: number;

    constructor() {
        super();
        this.tabIndex = 0;
        this.name= this.getAttribute("name");

    }

    isConnectedCallback(){
        this.innerHTML = `
        <input type='hidden' name='${this.name}' value='false'>
        <input type='checkbox' name='${this.name}' value='true'>
        <span aria-hidden="true"></span>`;
        this.addEventListener('click', e =>this.inputListener(e))
    }

    private inputListener(e: Event) {
        const checkbox: HTMLInputElement | null = this.querySelector("[type='checkbox']");
        if (checkbox === null)
            return;
        checkbox.checked = !checkbox.checked;
    }
}

customElements.define("input-switch", InputSwitchElement);
