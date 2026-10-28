import React from "react";
import { imageTextData, imageTextData2 } from "../data/imageTextData";

const ImageText = () => {
  return (
    <section id="imageText" className="section">
      <h1 className="blind">이미지 텍스트 유형</h1>
      <div className="container imageText_inner">
        <div className="imageText_txt">
          <div className="small">이미지/텍스트 유형</div>
          <div className="title">디저트 사이트 살펴보기</div>
          <div className="desc">제빵사, 파티시에, 요식업 종사자를 위한 유용한 사이트입니다</div>
          <ul className="list">
            {imageTextData2.map((title, index) => (
              <li key={index}>
                <a href="#">&#8231; {title}</a>
              </li>
            ))}
          </ul>
        </div>

        {imageTextData.map((text, index) => (
          <div className={`imageText_img img${index + 1}`} key={text.id}>
            <img src={text.img} alt={text.text} />
            <a href="#">{text.text}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageText;
