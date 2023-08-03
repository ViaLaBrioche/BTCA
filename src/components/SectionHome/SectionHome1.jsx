import React from "react";
import { ReactComponent as Coin } from "./Images/coin.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as Left } from "./Images/left.svg";
import { ReactComponent as Right } from "./Images/right.svg";
import "./sectionHome1.scss";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const SectionHome1 = () => {
  return (
    <section className="section_1">
      <div className="container">
        <div className="up">
          <div>
            <h1>
              Становитесь своим <br /> собственным банком
            </h1>
            <p>
              Получите свободу, благодаря конфиденциальным, глобальным <br />
              цифровым деньгам. Становитесь своим собственным банком с <br />
              полным контролем над своими цифровыми активами.
            </p>
          </div>
          <Coin />
        </div>
        <div className="down">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clikable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clikable: true
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
              <div className="card planet">
                <div className="text">
                  <p>
                    <span>Быстро. Доступно. Безопасно</span> <br />
                    Глобальные транзакции
                  </p>
                  <span className="description">
                    An improbable, overnight rise has <br /> established a new
                    token as a <br />
                    blockchain gaming heavyweight.
                  </span>
                </div>
                <div className="btn">
                  <button>Перейти и получить</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card ufo">
                <div className="text">
                  <p>
                    <span>Помогите зашитить сеть</span> <br />И получите
                    вознаграждение
                  </p>
                  <span className="description">
                    An improbable, overnight rise has <br /> established a new
                    token as a <br />
                    blockchain gaming heavyweight.
                  </span>
                </div>
                <div className="btn">
                  <button>перейти и получить</button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card gear">
                <div className="text">
                  <p>
                    <span>Защитите свои активы с помощью</span> <br />
                    Секретных транзакций
                  </p>
                  <span className="description">
                    An improbable, overnight rise has <br /> established a new
                    token as a <br />
                    blockchain gaming heavyweight.
                  </span>
                </div>
                <div className="btn">
                  <button>Перейти и получить</button>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <Left name="arrow-back-outline" />
              </div>
              <div className="swiper-button-next slider-arrow">
                <Right name="arrow-forward-outline" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
