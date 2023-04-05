import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/nw.css";

export default class NetworksScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ////////////////// SCREEN FUNCTION /////////////////////
      navScreen: props.navScreen,
    };
  }

  render() {
    const state = this.state;
    return (
      <StrictMode>
        <div className="nwA">
          <div className="nwAa">
            <div className="nwAaA">IMPACT INVESTORS</div>
            <div className="nwAaB">
              Impact investing has become increasingly popular in recent years,
              as more investors are looking to align their investments with
              their values and make a positive impact in the world. Impact
              investors are powerful force for good, helping to finance
              businesses and projects that have the potential to create positive
              change in society and the environment.
            </div>
          </div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
