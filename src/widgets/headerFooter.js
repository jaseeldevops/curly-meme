import React, { useState } from "react";
import "../styles/hf.css";

export function AppHeader({ state }) {
  const { navScreen } = state;
  const [isNavDrower, setisNavDrower] = useState(false);
  return (
    <div className="hfA">
      <div className="hfAa" onClick={() => navScreen("/")} />
      <div className="hfAb">
        <div className="hfAbA">
          About Us
          <div className="hfAbAa">
            <div className="hfAbAaA" onClick={() => navScreen("/whyImportent")}>
              Why Impact Ecosystem
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/ourTeam")}>
              Our Team
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Careers
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Community
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/contactUs")}>
              Contact Us
            </div>
          </div>
        </div>
        <div className="hfAbA">
          IE Money
          <div className="hfAbAa">
            <div className="hfAbAaA" onClick={() => navScreen("/ieMoneyWorks")}>
              How IE Money Works
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Area Of Work
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Developer Tools
            </div>
          </div>
        </div>
        <div className="hfAbA">
          Resourses
          <div className="hfAbAa">
            <div className="hfAbAaA" onClick={() => navScreen("/blogs")}>
              Blogs
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Case Studies
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              E-Books
            </div>
            <div className="hfAbAaA" onClick={() => navScreen("/")}>
              Impact Stories
            </div>
          </div>
        </div>
        <div className="hfAbA">Grand Application</div>
        <div className="hfAbB">Get IE Money</div>
        <div className="hfAbC" onClick={() => setisNavDrower(!isNavDrower)}>
          {isNavDrower ? (
            <div className="hfAbCa">
              <div className="hfAbCaA">About Us</div>
              <div className="hfAbCaA">IE Money</div>
              <div className="hfAbCaA">Resourses</div>
              <div className="hfAbCaA">Grand Application</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function AppFooter({ state }) {
  const { navScreen } = state;
  return (
    <div className="hfD">
      <div className="hfDa">
        <div className="hfDaA">Subscribe to our newsletters</div>
        <div className="hfDaB">
          <input className="hfDaBa" placeholder="Email Address" />
          <div className="hfDaBb">Submit</div>
        </div>
      </div>
      <div className="hfDb">
        <div className="hfDbA">
          <div className="hfDbAa" onClick={() => navScreen("/")} />
          <div>
            <div className="hfDbAb">
              <div className="hfDbAbA" onClick={() => navScreen("/")}>
                Home
              </div>
              <div className="hfDbAbB">&nbsp;</div>
              <div className="hfDbAbC">FAQ's</div>
            </div>
            <div className="hfDbAb">
              <div className="hfDbAbA">About Us</div>
              <div className="hfDbAbB">Risk Disclosure & Disclaimer</div>
              <div className="hfDbAbC">Terms of use</div>
            </div>
            <div className="hfDbAb">
              <div className="hfDbAbA">IE money</div>
              <div className="hfDbAbB">Resources</div>
              <div className="hfDbAbC">Privacy policy</div>
            </div>
          </div>
        </div>
        <div className="hfDbB">
          <div className="hfDbBa" />
          <div className="hfDbBb" />
          <div className="hfDbBc" />
          <div className="hfDbBd" />
          <div className="hfDbBe" />
        </div>
      </div>
    </div>
  );
}
