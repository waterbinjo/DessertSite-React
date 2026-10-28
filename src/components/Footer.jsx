import React from "react";
import { footerData } from "../data/footerData";

const Footer = () => {
  return (
    <footer id="footer" className="section">
      <h2 className="blind">푸터영역</h2>
      <div className="container footer_inner">
        {footerData.map((footer, index) => (
          <div>
            <h2>{footer.title}</h2>
            <ul>
              {footer.links.map(() => (
                <li key={i}>
                  <a href="/">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer_capyright">
        2021 A TWOSOME PLACE Co., LTD.
        <br />
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
