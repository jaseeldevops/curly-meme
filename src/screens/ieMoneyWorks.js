import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/ie.css";
import { Card1 } from "../widgets/cards";

const cardsData = [
  {
    name: "Carbon",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why2.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Water",
    title: "Our water conservation projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
  {
    name: "Forestation",
    title: "Our carbon negative projects >",
    img: require("../assets/publicImg/why1.png"),
    desc: "To meet our commitment to be carbon negative by 2030, we’re improving efficiencies; delivering technology to help our customers report and reduce their carbon emissions more effectively; and breaking new ground with carbon removal purchases and investments to help develop the carbon removal markets.",
  },
  {
    name: "Ethical Sustainability",
    title: "Our Ethical projects >",
    img: require("../assets/publicImg/why3.png"),
    desc: "To meet our commitment to be water positive by 2030, we will continue our water stewardship work across our operations. We're also expanding access to clean water and replenishment projects.",
  },
];

export default class IeMoneyWorksScreen extends Component {
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
        <div className="ieA"></div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieB"></div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieC"></div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieD"></div>
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <Card1 data={cardsData[0]} />
        <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[1]} />
        <Card1 data={cardsData[2]} />
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieE">
          “CLIMATE CHANGE PRESENTS ENVIRONMENTAL, SOCIAL AND ECONOMIC CRISES ON
          A WHOLE NEW LEVEL. FOR NEARLY TWO MILLENNIA HUMANS HAVE BEEN
          CARBONIZING OUR PLANET AND WE NEED TO ACT TOGETHER TO DECARBONIZE IT.”
        </div>
        <Card1 reverse data={cardsData[3]} />
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        {/* /////////////////////////////////////////////////// */}
        <div className="ieF">
          <div className="ieFa">JOIN IMPACT ECOSYSTEM</div>
          <div className="ieFb">
            Be part of something bigger than you or us, be a change maker.
          </div>
          <div className="ieFc">Get IE Money</div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
