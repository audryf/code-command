import React from "react";
import CookieConsent from "react-cookie-consent";
import { CookieLink } from "../../Global";

export default function Cookies() {
  return (
    <>
      <CookieConsent
        debug={true}
        style={{ background: "rgba(16,21,34,0.78)", textAlign: "left" }}
        buttonStyle={{
          color: "#fff",
          background: "#4B59F7",
          fontSize: "24px",
          borderRadius: "8px",
        }}
        buttonText={"I understand!"}
        expires={150}
        buttonClasses="btn btn-primary"
      >
        This site use cookies. See our{" "}
        <CookieLink to="/cookies">privacy policy</CookieLink> for more.
      </CookieConsent>
    </>
  );
}
