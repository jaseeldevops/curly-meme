import React, { Component, StrictMode } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import { Card2 } from "../widgets/cards";
import "../styles/ot.css";

const cardsData = {
  name: "From Our Founder",
  img: require("../assets/publicImg/why2.png"),
  desc: "The impact of an individual on the world is often underestimated. Every decision we make, no matter how small, has the potential to influence the world around us in a significant way. From choosing to recycle a plastic bottle to volunteering at a local charity, every action we take has the potential to make a positive difference in someone's life or to the environment.",
};

const card2Data = {
  title: "How we are impacting with small steps",
  desc: "The impact of an individual on the world is often underestimated. Every decision we make, no matter how small, has the potential to influence the world around us in a significant way. From choosing to recycle a plastic bottle to volunteering at a local charity, every action we take has the potential to make a positive difference in someone's life or to the environment.",
};

const founders = [
  {
    name: "Matt Elston",
    position: "FOUNDER - IMPACT ECOSYSTEM",
    img: require("../assets/publicImg/men1.png"),
    words:
      "Stop the pollution, stop the damage: Let's heal the planet together.",
  },
  {
    name: "Manish Chandrashekar",
    position: "OPERATIONS HEAD",
    img: require("../assets/publicImg/men2.png"),
    words:
      "Every decision we make, no matter how small, has the potential to influence the world around us in a significant way",
  },
  {
    name: "Md. Shan'E Ali",
    position: "CREATIVE HEAD",
    img: require("../assets/publicImg/men3.png"),
    words:
      "Materialising unconventional concepts and redefining design processes",
  },
];

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
        <Card2 data={card2Data} />
        <div className="otD">
          {founders.map((it, k) => (
            <div className="otDa" key={k}>
              <div
                className="otDaA"
                style={{ backgroundImage: `url(${it?.img})` }}
              ></div>
              <div className="otDaB">{it?.name}</div>
              <div className="otDaC">{it?.position}</div>
              <div className="otDaD">{it?.words}</div>
            </div>
          ))}
        </div>
        <div className="otE">
          <div className="otEa">Our purpose</div>
          <div className="otEb">
            OUR AMBITIOUS TEAM OF FORWARD THINKING PHILANTHROPISTS , DYNAMIC
            DEVELOPERS, DATA GURUS, FINANCE INNOVATORS AND CREATIVES ARE HERE TO
            LEVEL THE CAUSE, HELPING US BUILD MONEY WITH MEANING FOR BETTER
            TOMORROW.
          </div>
        </div>
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}
