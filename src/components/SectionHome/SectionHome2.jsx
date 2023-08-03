import React from "react";
import "./sectionHome2.scss";
import { ReactComponent as Vector } from "./Icons/counterclockwise.svg";
import { ReactComponent as Google } from "./Icons/google.svg";
import { ReactComponent as Group } from "./Icons/group.svg";
import { ReactComponent as Nasdaq } from "./Icons/nasdaq.svg";
import { ReactComponent as Ods } from "./Icons/ods.svg";
import { ReactComponent as Wecar } from "./Icons/wecar.svg";
import { ReactComponent as Xwc } from "./Icons/xwc.svg";
import { ReactComponent as Yahoo } from "./Icons/yahoo.svg";
import { ReactComponent as Yandex } from "./Icons/yandex.svg";
import { ReactComponent as Ambev } from "./Icons/ambev.svg";
import { ReactComponent as Vector2 } from "./Icons/vector2.svg";
import { ReactComponent as Rectangle } from "./Icons/rectangle.svg";
import { ReactComponent as Ellipse } from "./Icons/ellipse.svg";

export const SectionHome2 = () => {
  return (
    <section className="section_2">
      <div className="container">
        <div className="left">
          <div className="up">
            <h2>Нас поддерживают</h2>
            <p>
              Получите свободу, благодаря конфиденциальным, глобальным <br />
              цифровым деньгам. Становитесь своим собственным банком с <br />
              полным контролем над своими цифровыми активами.
            </p>
          </div>
          <div className="swipe__container">
            <div className="swipe__container__btn">
              <button className="swipe__btn">TIPS</button>
              <span>Swap to see more</span>
            </div>
            <div className="countries__icon">
              <Vector />
            </div>
          </div>
        </div>
        <div className="right__container_icons">
            <Nasdaq className="nasdaq"/>
            <Group className="group"/>
            <Google className="google"/>
            <Ods className="ods"/>
            <Wecar className="wecar"/>
            <Xwc className="xwc"/>
            <Yahoo className="yahoo"/>
            <Yandex className="yandex"/>
            <Ambev className="ambev"/>
            <div className="vector">
                 <Vector2 />
                 <Rectangle className="rectangle"/>
                 <Ellipse className="ellipse"/>
            </div>
           
        </div>
      </div>
    </section>
  );
};
