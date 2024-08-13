<template>
    <div class="Page Restaurants">
        <div class="main">
            <video
              controls
              autoplay
              loop
              muted
              poster="../assets/images/restaurants/mainBg.png"
            >
              <source src="../assets/images/restaurants/Kings-Restaurant.mp4" type="video/mp4" />
              <!-- <source src="path/to/video.webm" type="video/webm" /> -->
              Your browser does not support the video tag.
            </video>
            <div class="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>
                            Homepage
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>
                        restaurants
                    </span>
                </div>
                <h1>
                    Dine
                </h1>
                <h1 class="colorTitle">like a King </h1>
                <p class="description">
                    Explore a wide range of dishes from buffet options to
                    world-class gastronomy at Radimský Restaurant
                </p>
            </div>
        </div>
        <div class="cafeBlock">
          <section class="luxury" ref="luxury">
            <div class="wrapper">
              <div class="main">
                <div class="description">
                  <span class="topBlock"> Dine like a King </span>
                  <h2>
                    Radimský
                    <span class="colorText"> á la carte restaurant </span>
                  </h2>
                  <p>
                    Indulge in the ultimate culinary experience while surrounded by
                    the beautiful paintings by Czech impressionist Václav Radimský.
                  </p>
                  <p>
                    Our skilled chef prepare gourmet dishes with carefully chosen fresh ingredients.
                    We offer a wide selection of dishes to suit every palate.
                  </p>
                  <div class="buttonGroup">
                    <router-link to="/rooms/king-suite">
                      <PrimaryButton buttonText="More details" />
                    </router-link>
                    <PrimaryButton buttonText="Check availability" />

                  </div>
                </div>
                <!-- <div class="content"> -->
                <swiper
                  ref="swiperLux"
                  :spaceBetween="30"
                  :effect="'fade'"
                  :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
                  @slideChange="onSlideChangeLux"
                  @swiper="onSwiperLux"
                  :modules="modules"
                  :autoplay="true"
                  class="mySwiper"
                >
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg1.jpg" alt="image1" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Prosciutto di <br/> Parma
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg2.jpg" alt="image2" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Argentinian <br/> Steak
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg3.jpg" alt="image3" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Sea <br/> Bass
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg4.jpg" alt="image4"/>
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Beef <br/> Consommé
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg5.jpg" alt="image5" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Spicing <br/> things up
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg6.jpg" alt="image6" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Coordinating <br/> every step
                    </h2>
                  </swiper-slide>
                  <swiper-slide>
                    <img src="@/assets/images/restaurants/restImg7.jpg" alt="image7" />
                    <div class="gradient"></div>
                    <h2 class="slideTittle">
                      Grilled to <br/> perfection
                    </h2>
                  </swiper-slide>
                  <div class="buttonWrapper">
                    <div class="swiper-button-prev">
                      <SvgIcon name="longArrowLeft" size="large" fill="red" />
                    </div>
                    <div class="info">
                      <p>{{ luxCurrentSlide }}</p>
                      <span>/</span>
                      <p>{{ luxTotalSlides }}</p>
                    </div>
                    <div class="swiper-button-next">
                      <SvgIcon name="longArrowRight" size="large" fill="red" />
                    </div>
                  </div>
                </swiper>

                <!-- </div> -->
              </div>
            </div>
          </section>
        </div>
        <div class="pageItems">
        <h4 class="preTitle">
            RESTAURANT & BUFFET
        </h4>
        <h2 class="title">
            nearby RESTAURANTS
        </h2>
        <div class="sliderWrapper">
            <div class="cafeDescription">
                <h3 class="cafeName">
                    Radimský
                </h3>
                <ul>
                    <li>
                        <DistanceC distance='800' meters='meters'/>
                        <span class="option">
                            Distance from King's
                        </span>
                    </li>
                    <li class="strokeSvg">
                        <SvgIcon name='cafeSuite' size="large" strokeWidth="0"/>
                        <span class="option">
                            European cuisine
                        </span>
                    </li>
                    <li>
                        <SvgIcon name='location' size="large" strokeWidth="0"/>
                        <span class="option">
                            Rozvadov 7
                        </span>
                    </li>
                </ul>
            </div>
            <div class="cafeImage">
                <img src="../assets/images/restaurants/restSlider1.png" alt="">
            </div>
        </div>

        </div>
        <div class="cardsWrapper">
            <div class="card" v-for="cafe in cafeData" :key="cafe.id">
                <img :src="cafe.image" alt="cafe">
                <div class="bottomSide">
                    <h3 class="title">
                        {{ cafe.name }}
                    </h3>
                <ul>
                    <li>
                        <DistanceC :distance="cafe.distance" :meters="cafe.meters"/>
                        <span class="option">
                            Distance from King's
                        </span>
                    </li>
                    <li class="strokeSvg">
                        <SvgIcon name='cafeSuite' size="large" strokeWidth="0"/>
                        <span class="option">
                            European cuisine
                        </span>
                    </li>
                    <li>
                        <SvgIcon name='location' size="large" strokeWidth="0"/>
                        <span class="option">
                            {{ cafe.location }}
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
        <div class="infoBlock">
          <div class="infoWrapper">
            <span class="topBlock">
              Dine like a King
            </span>
            <h2 >
              We take hospitality
              <span class="colorText">
                and your comfort very seriously
              </span>
            </h2>
            <p >
              Our ultimate goal is to make you feel like a King in our resort.
              Therefore, we serve a wide selection of freshly-prepared food at
              our buffet and special fine dishes at Radimsky restaurant.
              Our team is always at your disposal to make your stay at King's memorable.
            </p>
          </div>
          <img src="@/assets/images/restaurants/radimsky-team.png" alt="team">
        </div>
        <RoomsCarusel tittleName="King's palace room"/>
    </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import SvgIcon from '@/components/SvgIcon.vue';
import DistanceC from '@/components/DistanceC.vue';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'RestaurantsComponent',
  components: {
    SvgIcon,
    DistanceC,
    RoomsCarusel,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      cafeData: [
        {
          id: 1,
          name: 'Myslivna',
          distance: '650',
          meters: 'meters',
          image: './cafe/cafe1.png',
          location: 'Rozvadov 63',
        },
        {
          id: 2,
          name: 'U Šilhů',
          distance: '700',
          meters: 'meters',
          image: './cafe/cafe2.png',
          location: 'Rozvadov 219',
        },
        {
          id: 3,
          name: 'Baileys',
          distance: '2,3',
          meters: 'km',
          image: './cafe/cafe3.png',
          location: 'Rozvadov 605',
        },
        {
          id: 4,
          name: 'Vian',
          distance: '2,8',
          meters: 'km',
          image: './cafe/cafe4.png',
          location: 'Střeble 21',
        },
        {
          id: 1,
          name: 'Royal Point',
          distance: '3,6',
          meters: 'km',
          image: './cafe/cafe5.png',
          location: 'Svatá Kateřina 108',
        },
        {
          id: 1,
          name: 'McDonald/\'s Rozvadov',
          distance: '4,4',
          meters: 'km',
          image: './cafe/cafe6.png',
          location: 'Svatá Kateřina 100',
        },
        {
          id: 1,
          name: 'KFC Rozvadov',
          distance: '10,4',
          meters: 'km',
          image: './cafe/cafe7.png',
          location: 'Rozvadov 277',
        },
      ],
    };
  },
  setup() {
    const swiperLux = ref(null);
    const luxCurrentSlide = ref(0);
    const luxTotalSlides = ref(0);

    const onSwiperLux = (swiper) => {
      swiperLux.value = swiper;
      luxTotalSlides.value = swiper.slides.length;
    };

    const onSlideChangeLux = () => {
      if (swiperLux.value) {
        luxCurrentSlide.value = swiperLux.value.realIndex + 1;
      }
    };

    return {
      modules: [Autoplay, EffectFade, Navigation],
      swiperLux,
      luxCurrentSlide,
      luxTotalSlides,
      onSwiperLux,
      onSlideChangeLux,
    };
  },
};

</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';
@import '@/style/main.scss';
.Restaurants {
  @include pageStyle;

  .main {
    position: relative;
    overflow: hidden;
    .mainImage, video {
      @include mainBg;
    }
    .textBlock {
      @include mainTextBlock;
      .path {
        @include alignPath;
        a {
          text-decoration: none;
          cursor: pointer;
        }
        span {
          @include pathText;
        }
      }
      .colorTitle {
        color: var(--color-gold);
      }
      h1 {
        @include mainTitle;
      }
      .description {
        @include mainDescription;
      }
    }
  }

  .cafeBlock {
    .luxury {
    width: 100%;
    background: var(--color-light);
    position: relative;
    overflow: hidden;
    // padding-block: 20px;

    .wrapper {
      width: 100%;
      margin: 0 auto;

      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        // margin: 0 20px;
      @include blockStyles;

        @media (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
          gap: 50px;
        }

        .description {
          position: relative;
          margin-block: 20px;
          flex: 0 0 100%;
          max-width: 100%;

          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .topBlock {
            &::before {
              content: "";
              width: 79px;
              height: 1px;
              display: inline-block;
              background-color: var(--color-gold);
              vertical-align: middle;
              top: -2px;
              margin-bottom: 1px;
              margin-right: 18px;
            }
          }

          span {
            font-family: var(--font-grot-bold);
            font-size: 14px;
            color: var(--color-gold);
            font-weight: 700;
            letter-spacing: 2px;
          }

          h2 {
            font-family: var(--font-text-reg);
            font-size: 24px;
            font-weight: 700;
            line-height: 1.1;
            text-transform: uppercase;
            margin: 20px 0 30px;

            @media (min-width: 768px) {
              font-size: 42px;
            }

            .colorText {
              font-size: 24px;

              @media (min-width: 768px) {
                font-size: 42px;
              }

              &::before {
                display: none;
              }
            }
          }

          p {
            font-family: var(--font-text-reg);
            font-size: 16px;
            margin-block: 20px;
            max-width: 100%;

            @media (min-width: 768px) {
              font-size: 20px;
              max-width: 70%;
            }
          }
          .buttonGroup{
            display: flex;
            justify-content: start;
            align-items: center;
            padding-top: 15px;
            gap: 15px;
          }
        }

        .swiper {
          width: 100%;
          flex: 0 0 100%;
          max-width: 100%;
          height: auto;

          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 40%;
          }

          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            width: 100%;
            height: 100%;

            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              transition: all ease 0.5s;
              transform: scale(1);

              &:hover {
                transform: scale(1.1);
                transition: all ease 0.5s;
              }
            }
            &:hover{
              .slideTittle{
                  @include text(var(--color-gold), 40px, uppercase, 900);
                  transition: all ease 0.5s;

                }
            }
            .gradient{
              width: 100%;
              height: 100%;
              background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 70%, rgba(0, 0, 0, 0.8) 100%);
              position: absolute;
              z-index: 1;
            }
            .slideTittle {
              @include text(var(--color-white), 40px, uppercase, 900);
              position: absolute;
              transition: all ease 0.5s;
              bottom: 0;
              left: 0;
              padding: 15% 10%;
              z-index: 2;
            }
          }

          .buttonWrapper {
            position: absolute;
            bottom: 0;
            right: 10%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30%;
            height: 50px;
            background: rgba(0, 0, 0, 0.7);
            z-index: 10;

            .swiper-button-prev,
            .swiper-button-next {
              flex: 1;
              border-radius: 50%;
              svg {
                stroke: var(--color-gold);
              }

              &::after {
                content: "";
              }
            }
            .info{
                @include text(var(--color-gold), 16px, uppercase, 700);
                line-height: 1.1;
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
          }
        }

        .roomImg {
          width: 100%;
          height: 100%;
          object-fit: cover;

          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 40%;
          }
        }
      }
    }
  }
  }

  .pageItems {
    padding: 40px;
    .preTitle {
      color: var(--color-gold);
      font-family: var(--font-text-reg);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
    }
    .title {
      color: var(--color-black);
      font-family: var(--font-text-reg);
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      text-transform: uppercase;
    }
    .sliderWrapper {
      display: flex;
      align-items: center;
      background: var(--color-white);
      padding: 20px;
      margin-top: 20px;

      .cafeDescription {
        flex: 1;
        padding-right: 20px;
        .cafeName {
          color: var(--color-black);
          font-family: var(--font-text-reg);
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          text-transform: uppercase;
        }
        ul {
          display: flex;
          flex-direction: column;
          margin-top: 20px;
          padding: 0;
          gap: 15px;
          li {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 10px;
            .option {
              // color: var(--color-black);
              // font-family: var(--font-text-reg);
              // font-size: 14px;
              // font-style: normal;
              // font-weight: 400;
              // line-height: 150%;
              @include text(var(--color-black), 14px, unset, 400);
            }
          }
        }
      }

      .cafeImage {
        flex: 0 0 70%;
        position: relative;
        overflow: hidden;
        img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }
    }
    @media (max-width: 768px) {
      .sliderWrapper {
        flex-direction: column-reverse;
        padding: 0;
        .cafeDescription{
            ul{
                flex-direction: initial;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 2vw;
                padding: 10px;
        }
        }

      }
    }
  }

  .cardsWrapper {
    box-sizing: border-box;
    margin-bottom: 60px;
    padding-inline: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    gap: 20px;

    padding: clamp(30px, 5vw, 60px);
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    margin: clamp(10px, 5vw, 40px);

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      background: var(--color-white);
      max-width: fit-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: hidden; /* Добавлено */
      box-sizing: border-box; /* Добавлено */
      .bottomSide {
        padding: 16px;
        .title {
          margin: 16px 0 10px;
          // color: var(--color-black);
          // font-family: var(--font-text-reg);
          // font-size: 24px;
          // font-style: normal;
          // font-weight: 500;
          // line-height: 130%;
          // text-transform: uppercase;
          @include text(var(--color-black), 24px, uppercase, 500);
        }
        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            .option {
              // color: var(--color-black);
              // font-family: var(--font-text-reg);
              // font-size: 14px;
              // font-style: normal;
              // font-weight: 400;
              // line-height: 150%;
              @include text(var(--color-black), 14px, unset, 400);
            }
          }
        }
      }
    }
  }
  .infoBlock {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    padding-block: 70px;
    overflow: hidden;
    .infoWrapper{
      flex: 0 0 40%;
      .topBlock {
            &::before {
              content: "";
              width: 79px;
              height: 1px;
              display: inline-block;
              background-color: var(--color-gold);
              vertical-align: middle;
              top: -2px;
              margin-bottom: 1px;
              margin-right: 18px;
            }
          }

          span {
            font-family: var(--font-grot-bold);
            font-size: 14px;
            color: var(--color-gold);
            font-weight: 700;
            letter-spacing: 2px;
          }

          h2 {
            font-family: var(--font-text-reg);
            font-size: 24px;
            font-weight: 700;
            line-height: 1.1;
            text-transform: uppercase;
            margin: 20px 0 30px;

            @media (min-width: 768px) {
              font-size: 42px;
            }

            .colorText {
              font-size: 24px;

              @media (min-width: 768px) {
                font-size: 42px;
              }

              &::before {
                display: none;
              }
            }
    }
  }
  img{
      flex: 0 0 60%;
      // width: 50%;
      // height: 100%;
      object-fit: cover;
      // max-height: 880px;
      // min-height: 650px;
      width: calc(50vw - 15px);
    }
}
}
</style>
