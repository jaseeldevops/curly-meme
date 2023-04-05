import React, { Component, StrictMode, useRef } from "react";
import { AppHeader, AppFooter } from "../widgets/headerFooter";
import "../styles/hm.css";

export default class HomeScreen extends Component {
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
        <div className="hmB">
          <br />
          <div className="hmBa">
            IMPACT <b>ECOSYSTEM</b>
          </div>
          <div className="hmBb" />
        </div>
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="hmC">
          <div className="hmCa">Introducing</div>
          <div className="hmCb">IE.Money</div>
          <div className="hmCc">
            A Holistic Solution that includes Revenue Streams for Ecosystem
            Service Stakeholders & Income for Natural Capital Owners
          </div>
          <div className="hmCd">Join The Waitlist</div>
        </div>
        <Container3 />
        <Container4 />
        <Container5 state={state} />
        <AppFooter state={state} />
        <AppHeader state={state} />
      </StrictMode>
    );
  }
}

function Container3() {
  const myRef = useRef(null);
  const executeScroll = () => {
    const left = myRef.current.scrollLeft + 880;
    myRef.current.scrollTo({ left, behavior: "smooth" });
  };
  return (
    <div className="hmE" ref={myRef}>
      <div className="hmEa">
        <div className="hmEaA">PEOPLE PLANET PROSPERITY</div>
        <div className="hmEaB">
          Impact Ecosystem brings together businesses, communities, government,
          individuals, NGOs and mother nature to achieve mutual prosperity.
        </div>
      </div>

      <div className="hmEb c10">
        <div className="hmEbA">
          <div className="hmEbAa">01</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Bring A Smile</div>
          <div className="hmEbBb">
            Human health and happines are central to our mission!
          </div>
        </div>
      </div>
      <div className="hmEb c11">
        <div className="hmEbA">
          <div className="hmEbAa">02</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Regenerative Economy</div>
          <div className="hmEbBb">
            Make the world a better place for future generation not only gives
            our lives meaning, purpose and ethical value, but it provides
            economic, health and social benifit as well.
          </div>
        </div>
      </div>
      <div className="hmEb c12">
        <div className="hmEbA">
          <div className="hmEbAa">03</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Preserve Biodiversity</div>
          <div className="hmEbBb">
            Nature isn't just nice to look at, it is essential for food
            production, a thriving economy and human survival
          </div>
        </div>
      </div>
      <div className="hmEb c13">
        <div className="hmEbA">
          <div className="hmEbAa">04</div>
          <div className="hmEbAb" onClick={executeScroll} />
        </div>
        <div className="hmEbB">
          <div className="hmEbBa">Empower Communities</div>
          <div className="hmEbBb">
            Human have been the most ingenious and social species on the planet.
            While we are far from perfect, our ability to share, cooperate,
            learn from and help each other are the keys for us to prospor in the
            short loang run.
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="hmG">
      <div className="hmGa">The Philanthropic Currency</div>
      <div className="hmGb">
        powered by Impact Investments, Natural Capital & Team Humanity
      </div>
    </div>
  );
}

function Container5({ state }) {
  const { navScreen } = state;
  return (
    <div className="hmH">
      <div className="hmHa">HOW IT WORKS</div>
      <div className="hmHc">
        <div className="hmHcA">1.</div>
        <div className="hmHcB">
          IE point tokens are distributed to Ecosystem Service Stakeholders,
          Impact Investors, Natural Asset Owners & Nonprofits.
        </div>
      </div>
      <div className="hmHc">
        <div className="hmHcA">2.</div>
        <div className="hmHcB">
          Like gift cards, loyalty points and government currency, value can be:
          <div className="hmHcBb">
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              USED FOR <br />
              PURCHASES
            </div>
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              TRANSFERRED/
              <br />
              GIFTED/DONATED
            </div>
            <div className="hmHcBbA">
              <div className="hmHcBbAa" />
              GIVEN AS A REWARD
              <br />
              TO INCENTIVIZE
            </div>
          </div>
        </div>
      </div>
      <div className="hmHc">
        <div className="hmHcA">3.</div>
        <div className="hmHcB">
          Merchants & Ecosystem Partners who accept ie.Money as payment can
          redeem ie.Money for local currency like $USD OR
          spend/transfer/gift/donate within the Impact Ecosystem.
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="hmHa">OUR NETWORK</div>
      <div className="hmHd">
        <div className="hmHdA c20" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">INDIVIDUALS</div>
        </div>
        <div className="hmHdA c21" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">NGOs AND NON PROFIT ORGANIZATION</div>
        </div>
        <div className="hmHdA c22" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">
            LANDOWNERS-ENVIRONMENTAL SERVICE PROVIDERS
          </div>
        </div>
        <div className="hmHdA c23" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">IMPACT INVESTORS</div>
        </div>
        <div className="hmHdA c24" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">BUSINESSES</div>
        </div>
        <div className="hmHdA c25" onClick={() => navScreen("/networks")}>
          <div className="hmHdAa">ENVIRONMENTAL ACCOUNTANTS</div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="hmHa">BLOGS</div>
      <div className="hmHe">
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
        <div className="hmHeA">
          <div className="hmHeAa">
            <div className="hmHeAaA" />
            <div className="hmHeAaB">Paul Sheparo</div>
            <div className="hmHeAaC">29 Aug 2022</div>
          </div>
          <div className="hmHeAb"></div>
          <div className="hmHeAc">Forestation in Nepal</div>
          <div className="hmHeAd">
            breaking new ground with carbon removal purchases and investments to
            help nvestments to help nvestments to help
          </div>
        </div>
      </div>
      <div className="hmHf">WHERE DO YOU FIT INTO THIS POWERFUL NETWORK?</div>
    </div>
  );
}
