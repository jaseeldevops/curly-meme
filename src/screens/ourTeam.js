import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/ot.css";

export default class OurTeamScreen extends Component {
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
        <div className="otA">
          <div className="otAa">OurTeam</div>
          <div className="otAb">
            WE’RE A GLOBAL TEAM OF THINKERS AND DOERS WITHOUT BORDERS.
          </div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
