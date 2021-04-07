import React from "react";


export interface IPropsPageSILogin {

}

export interface IStatePageSILogin {

}

export class SILogin extends React.Component<IPropsPageSILogin, IStatePageSILogin> {
    constructor(props: IPropsPageSILogin) {
        super(props);
    }

    render() {
        return (
                <div style={{textAlign: "center"}} >
                    <form>
                        <input type="text" name="name" placeholder={"username"}
                               style={{cursor: "pointer", textAlign: "center", fontSize: "25px", border: "0",color: "#4a5e79", background:"#1b2529", outline: "none"}}
                               />
                    </form>

                    <form style={{margin: 5}}>
                        <input type="text" name="name" placeholder={"password"}
                               style={{cursor: "pointer", textAlign: "center", fontSize: "25px", border: "0",color: "#4a5e79", background:"#1b2529", outline: "none"}}
                               />
                    </form>

                    <p>
                        <input type="button" name="login" value={"Login"}
                               style={{color: "#ffffff", fontSize: "20px", width: "100px", background:"#1F2833", borderLeft: "none", borderRight: "none", borderTop: "none", borderBottom: "none", outline: "none"}}
                               />
                    </p>

                </div>
        );
    }
}