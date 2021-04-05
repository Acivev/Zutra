import React from "react";
import "./Slider.css"

export interface IPropsSlider {default: boolean }
export interface IStateSlider {know: boolean }
export class Slider extends React.Component<IPropsSlider, IStateSlider> {
    constructor(props: IPropsSlider) {
        super(props);
        this.state = { know: props.default };
    }

    private OnChange(change: boolean) {
        this.setState({know: change });
    }

    private GetSwitch() {
        switch (this.state.know) {
            case false:
                return (
                    <label className="TMSwitch">
                        <input type="checkbox" onChange={(e) => { this.OnChange(e.target.checked); } }/>
                        <span className="TMSlider TMSliderRound"></span>
                    </label>
                );
            case true:
                return(
                    <label className="TMSwitch">
                        <input type="checkbox" checked onChange={(e) => { this.OnChange(e.target.checked); } }/>
                        <span className="TMSlider TMSliderRound"></span>
                    </label>
                );
        }
    }

    render() {
        return this.GetSwitch();
    }
}