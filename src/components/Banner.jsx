import React from "react";

const Banner = ({ title }) => {
  return (
    <section id="bannerType" className="section">
      <div className="banner_inner">
        <h2 className="blind">{title}</h2>
        <h3 className="title">특별함으로 물들어요</h3>
        <p className="desc">
          카페와 어울리는 세상의 모든 디저트
          <a href="#" className="small">
            www.twosome.co.kr
          </a>
        </p>
        <span className="small">투썸플레이스</span>
      </div>
    </section>
  );
};

export default Banner;
