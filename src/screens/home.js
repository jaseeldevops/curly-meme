import React, { Component, StrictMode, useRef } from "react";
import "../styles/hm.css";

export default class HomeScreen extends Component {
  render() {
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
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
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
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        <Container3 />
        <Container4 />
        <Container5 />
        <MyFooter />
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        {/* //////////////////////////////////////////////////////////////// */}
        <div className="hmA">
          <div className="hmAa" />
          <div className="hmAb">
            <div className="hmAbA">About Us</div>
            <div className="hmAbA">IE Money</div>
            <div className="hmAbA">Resourses</div>
            <div className="hmAbA">Grand Application</div>
            <div className="hmAbB">Get IE Money</div>
          </div>
        </div>
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
      {[1, 1, 1, 1, 1, 1].map((it, k) => (
        <div className="hmEb">
          <div className="hmEbA">
            <div className="hmEbAa">
              {k < 9 ? "0" : ""}
              {k + 1}
            </div>
            <div className="hmEbAb" onClick={executeScroll} />
          </div>
          <div className="hmEbB">
            <div className="hmEbBa">Bring A Smile</div>
            <div className="hmEbBb">
              Human health and happines are central to our mission!
            </div>
          </div>
        </div>
      ))}
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

function Container5() {
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
        <div className="hmHdA">
          <div className="hmHdAa">INDIVIDUALS</div>
        </div>
        <div className="hmHdA">
          <div className="hmHdAa">NGOs AND NON PROFIT ORGANIZATION</div>
        </div>
        <div className="hmHdA">
          <div className="hmHdAa">
            LANDOWNERS-ENVIRONMENTAL SERVICE PROVIDERS
          </div>
        </div>
        <div className="hmHdA">
          <div className="hmHdAa">IMPACT INVESTORS</div>
        </div>
        <div className="hmHdA">
          <div className="hmHdAa">BUSINESSES</div>
        </div>
        <div className="hmHdA">
          <div className="hmHdAa">ENVIRONMENTAL ACCOUNTANTS</div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      {/* /////////////////////////////////////////////////////////////// */}
      <div className="hmHa">BLOGS</div>
      <div className="hmHe">
        {[1, 1, 1, 1].map((it, k) => (
          <div className="hmHeA" key={k}>
            <div className="hmHeAa">
              <div className="hmHeAaA" />
              <div className="hmHeAaB">Paul Sheparo</div>
              <div className="hmHeAaC">29 Aug 2022</div>
            </div>
            <div className="hmHeAb"></div>
            <div className="hmHeAc">Forestation in Nepal</div>
            <div className="hmHeAd">
              breaking new ground with carbon removal purchases and investments
              to help nvestments to help nvestments to help
            </div>
          </div>
        ))}
      </div>
      <div className="hmHf">WHERE DO YOU FIT INTO THIS POWERFUL NETWORK?</div>
    </div>
  );
}

function MyFooter() {
  return (
    <div className="hmJ">
      <div className="hmJa">
        <div className="hmJaA">Subscribe to our newsletters</div>
        <div className="hmJaB"></div>
      </div>
      <div className="hmJb"></div>
    </div>
  );
}
