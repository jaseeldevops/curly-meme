import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/wi.css";

export default class WhyImportentScreen extends Component {
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
        <div className="wiA">
          <div className="wiAa">
            WE’RE BUILDING AN EQUITABLE FUTURE PHILANTHROPIC CURRENCY POWERED BY
            IMPACT INVESTMENTS, NATURAL CAPITAL & TEAM HUMANITY
          </div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
