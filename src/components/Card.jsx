import React, { useEffect } from "react";
import { cardData } from "../data/cardData";
import AOS from "aos";
import "aos/dist/aos.css";

const Card = ({ title }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="cardType" className="section">
      <h2>{title}</h2>
      <p>
        투썸플레이스는 프리미엄 커피 & 디저트 카페의 리딩 브랜드로서 디저트 카페 문화의 차별화된
        제품과 서비스를 선보일 것입니다.
      </p>
      <div className="container card_inner">
        {cardData.map((card, index) => (
          <div className="card" key={index} data-aos="flip-left" data-aos-delay={index * 500}>
            <figure>
              <img src={card.img} alt={card.alt} />
            </figure>
            <div className="card_body">
              <div className="tit">{card.tit}</div>
              <div className="desc">{card.desc}</div>
              <a href="#">
                더 자세히 보기
                <span>
                  <svg
                    width="78"
                    height="8"
                    viewBox="0 0 78 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 3.68188V4.18188H77.5V3.68188V3.18188H0V3.68188ZM77.8536 4.03544C78.0488 3.84018 78.0488 3.52359 77.8536 3.32833L74.6716 0.146351C74.4763 -0.0489113 74.1597 -0.0489113 73.9645 0.146351C73.7692 0.341613 73.7692 0.658195 73.9645 0.853458L76.7929 3.68188L73.9645 6.51031C73.7692 6.70557 73.7692 7.02216 73.9645 7.21742C74.1597 7.41268 74.4763 7.41268 74.6716 7.21742L77.8536 4.03544Z"
                      fill="#1C1C1C"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Card;
