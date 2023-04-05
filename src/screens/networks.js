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
          <div className="nwAa">CONTACT US</div>
          <div className="nwAb">We love to hear from you.</div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
