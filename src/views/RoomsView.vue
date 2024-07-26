<template>
   <div class="Hotel">
    <div class="main">
        <video
            controls
            autoplay
            loop
            muted
            poster="../assets/images/hotel-page/mainBg.png"
        >
      <source src="../assets/images/hotel-page/Kings-Hotel.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <div class="textBlock">
            <h1>SLEEP LIKE</h1>
            <h1 class="colorText">A KING</h1>
            <p>Enjoy the comfort and a moments for yourself.
                We offer a wide range of rooms that suits to any King.
            </p>
        </div>
        <div class="roomsCategory">
        <ul>
            <li>
                <span>
                    5 star luxury
                </span>
            </li>
            <li>
                <span>
                    4 star deluxe
                </span>
            </li>
            <li>
                <span>
                    4 star comfort
                </span>
            </li>
            <li>
                <span>
                    3 star for everybody
                </span>
            </li>
            <li>
                <span>
                    2 star basic
                </span>
            </li>
        </ul>
      </div>
    </div>
        <section class="luxury">
        <div class="wrapper">
            <div class="main">
                <div class="description">
                    <span class="topBlock">
                        5 STAR LUXURY

                    </span>
                    <h2>
                        THE MOST
                        <span class="colorText">
                            LUXURIOUS
                        </span>
                        ACCOMMODATION
                    </h2>
                    <p>
                        King's New and Old 5-star hotels offer a wide selection
                        of luxurious rooms and suites. The hotel rooms and suites
                        feature exceptional interior decorated with art and golden
                        embroidery. The selection varies from Superior Rooms to
                        the King's Leon Suite with a private whirlpool.
                    </p>
                    <p>
                        Choose the room/suite that suits your needs best:
                        Superior Twin Room, Superior Double Room,
                        Deluxe Double Room, King's Exclusive Suite,
                        King's Grand Suite, King's Leon Suite with a private whirlpool.
                    </p>
                </div>
                <!-- <div class="content"> -->
                    <swiper
                        ref="mySwiper"
                        :spaceBetween="30"
                        :effect="'fade'"
                        :navigation="{ nextEl: '.swiper-button-next',
                         prevEl: '.swiper-button-prev'}"
                          @slideChange="onSlideChange"
                          @swiper="onSwiper"
                        :modules="modules"
                        :autoplay="true"
                        class="mySwiper"
                    >
                        <swiper-slide
                        ><img
                            src="@/assets/images/hotel-page/king/king1.jpg" alt="image1"/>
                        </swiper-slide
                        ><swiper-slide
                        ><img
                            src="@/assets/images/hotel-page/king/king2.jpg" alt="image2"/>
                            </swiper-slide
                        ><swiper-slide
                        ><img
                            src="@/assets/images/hotel-page/king/king3.jpg" alt="image3">
                            </swiper-slide
                        ><swiper-slide
                        ><img src="@/assets/images/hotel-page/king/king4.jpg" alt="image4"
                        /></swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/hotel-page/king/king5.jpg" alt="image5"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/hotel-page/king/king6.jpg" alt="image6"/>
                        </swiper-slide>
                        <swiper-slide>
                            <img src="@/assets/images/hotel-page/king/king7.jpg" alt="image7"/>
                        </swiper-slide>
                        <div class="buttonWrapper">
                            <div class="swiper-button-prev">
                                <SvgIcon  name="longArrowLeft" size="large" fill="red"/>
                            </div>
                            <div class="info">
                                <p>Current Slide: {{ currentSlide }}</p>
                                <p>Total Slides: {{ totalSlides }}</p>
                            </div>
                            <div class="swiper-button-next">
                                <SvgIcon  name="longArrowRight" size="large" fill="red"/>

                            </div>
                        </div>
                    </swiper>

                <!-- </div> -->
            </div>
        </div>

        </section>
        <section class="luxury">
            <div class="wrapper">
                <div class="main">
                    <swiper
                            ref="mySwiper"
                            :spaceBetween="30"
                            :effect="'fade'"
                            :navigation="{ nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev'}"
                            @slideChange="onSlideChange"
                            @swiper="onSwiper"
                            :modules="modules"
                            :autoplay="true"
                            class="mySwiper"
                        >
                            <swiper-slide
                            ><img
                                src="@/assets/images/hotel-page/admiral/admiral1.png" alt="image1"/>
                            </swiper-slide
                            ><swiper-slide
                            ><img
                                src="@/assets/images/hotel-page/admiral/admiral2.png" alt="image2"/>
                                </swiper-slide
                            ><swiper-slide
                            ><img
                                src="@/assets/images/hotel-page/admiral/admiral3.png" alt="image3">
                                </swiper-slide
                            ><swiper-slide
                            ><img src="@/assets/images/hotel-page/admiral/admiral4.png" alt="image4"
                            /></swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral5.png"
                                alt="image5"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral6.png"
                                alt="image6"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral7.png"
                                alt="image7"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral8.png"
                                alt="image8"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral9.png"
                                alt="image9"/>
                            </swiper-slide>
                            <swiper-slide>
                                <img src="@/assets/images/hotel-page/admiral/admiral10.png"
                                alt="image10"/>
                            </swiper-slide>
                            <div class="buttonWrapper">
                                <div class="swiper-button-prev">
                                    <SvgIcon  name="longArrowLeft" size="large" fill="red"/>
                                </div>
                                <div class="info">
                                    <p>Current Slide: {{ currentSlide }}</p>
                                    <p>Total Slides: {{ totalSlides }}</p>
                                </div>
                                <div class="swiper-button-next">
                                    <SvgIcon  name="longArrowRight" size="large" fill="red"/>

                                </div>
                            </div>
                        </swiper>
                    <div class="description">
                        <span class="topBlock">
                            4 STAR DELUXE

                        </span>
                        <h2>
                            four stars of spacious luxury
                        </h2>
                        <p>
                            The new Admiral Hotel is a 2 minutes’ walk to King’s and offers luxury,
                            spacious double and triple rooms as well as a suite.
                            All rooms are equipped with air conditioning, blackout curtains,
                            comfy 33cm high mattresses, fridge, safe and an ensuite bathroom with
                            floor heating and walk-in shower. The hotel has an elevator and all
                            rooms are wheelchair accessible.
                        </p>
                    </div>
                </div>
            </div>

        </section>
        <section class="luxury">
            <div class="wrapper">
                <div class="main">
                    <div class="description">
                        <span class="topBlock">
                            4 STAR COMFORT

                        </span>
                        <h2>
                            4 stars of best comfort
                        </h2>
                        <p>
                            King's offers a wide selection of four-star accomodation
                            around Rozvadov, where you can find deluxe rooms for a lower rate.
                            To make your stay more comfortable, King's provides free transfer
                            to/from accommodation to the resort.
                        </p>
                    </div>
                        <img class="roomImg" src="@/assets/images/hotel-page/comfort.png"
                        alt="comfort">

                </div>
            </div>

        </section>
        <section class="luxury">
            <div class="wrapper">
                <div class="main">
                    <img class="roomImg" src="@/assets/images/hotel-page/3star.png" alt="3star">
                    <div class="description">
                        <span class="topBlock">
                            3 STAR EVERYBODY

                        </span>
                        <h2>
                            3 stars to enjoy every night at king’s
                        </h2>
                        <p>
                            King's offers a selection of newly renovated rooms at a reasonable
                            price.
                            The rooms are perfect if you are coming to stay with your friends as the
                            3-star rooms range from Twin Rooms to Quadriple rooms.
                        </p>
                    </div>
                </div>
            </div>

        </section>
        <section class="luxury">
            <div class="wrapper">
                <div class="main">
                    <div class="description">
                        <span class="topBlock">
                            2 STAR BASIC

                        </span>
                        <h2>
                            2- star affordable rooms
                        </h2>
                        <p>
                        King's offers a wide selection of two-star accommodation around Rozvadov,
                        where you can find basic rooms for a lower rate.
                        King's provides free transfer to/from accommodation to the resort to make
                        your stay more comfortable. Please note that there are no private bathrooms
                        in the rooms. The shared bathrooms and showers are located in the corridor.
                        </p>
                    </div>
                    <!-- <div class="content"> -->
                    <img class="roomImg" src="@/assets/images/hotel-page/2star.png" alt="2star">

                    <!-- </div> -->
                </div>
            </div>

        </section>

   </div>
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import SvgIcon from '../components/SvgIcon.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Hotel-page',
  components: {
    SvgIcon,
    Swiper,
    SwiperSlide,
  },
  setup() {
    const swiperInstance = ref(null);
    const currentSlide = ref(0);
    const totalSlides = ref(0);
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
      totalSlides.value = swiper.slides.length;
    };

    const onSlideChange = () => {
      if (swiperInstance.value) {
        currentSlide.value = swiperInstance.value.realIndex + 1; // Add 1 to make it 1-based index
      }
    };
    return {
      swiperInstance,
      currentSlide,
      totalSlides,
      onSwiper,
      onSlideChange,
      modules: [EffectFade, Autoplay, Navigation],
    };
  },
};
</script>
<!--
<style scoped lang="scss">

    .Hotel{
        .main {
        position: relative;

            .mainImage, video{
                width: 100%;
                height: 100%;
                min-height: 100vh;
                object-fit: cover;
            }
            .textBlock{
                position: absolute;
                top: 50%;
                left: 50%;
                width: fit-content;
                transform: translate(-50%, -50%);
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 16px;

                p{
                    color: var(--color-white);
                    font-family: var(--font-text-reg);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    text-transform: uppercase;
                    max-width: 80%;
                    margin: 0 auto;

                }
                h1{
                    color: var(--color-white);
                    font-family: var(--font-grot-reg);
                    font-size: clamp(45px, 10vw, 80px);
                    font-style: normal;
                    font-weight: 420;
                    line-height: 100%; /* 80px */
                    text-transform: uppercase;
                }
                .colorText{
                    color: var(--color-gold);
                }
            }
            .roomsCategory{
                position: absolute;
                bottom: 5%;
                width: 100%;
                z-index: 5;
                ul{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    list-style-type: none;
                    flex-shrink: 0;

                    li{
                        color: var(--color-gold);
                        background: rgba(0,0,0,0.75);
                        border-radius: 5px;
                        padding: 10px 20px;
                        font-family: var(--font-text-reg);
                        font-size: 18px;
                        text-transform: uppercase;
                        transition: all ease 0.3s;
                        cursor: pointer;
                        transform: translateX(0) scaleX(1);

                    }
                    li:hover{
                        background: var(--color-gold);
                        color: var(--color-black);
                        transition: all ease 0.3s;
                        transform: translateX(0px) scaleX(1.1);
                    }
                }
            }
        }
        .luxury{
            width: 100%;
            background: var(--color-light);
            position: relative;
            overflow: hidden;
            .wrapper{
                width: 90%;
                margin: 0 auto;
                .main{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 50px;
                    // margin-left: -15px;
                    // margin-right: -15px;
                    .description{
                        position: relative;
                        margin-block: 20px;
                        flex: 0 0 50%;
                        max-width: 50%;
                        // flex: 0 0 50%;
                        .topBlock{
                            &::before{
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
                        span{
                            font-family: var(--font-grot-bold);
                            font-size: 14px;
                            color: var(--color-gold);
                            font-weight: 700;
                            letter-spacing: 2px;
                        }
                        h2{
                            font-family: var(--font-text-reg);
                            font-size: 42px;
                            font-weight: 700;
                            line-height: 1.1;
                            margin: 20px 0 30px;
                            text-transform: uppercase;
                            .colorText{
                                font-size: 42px;
                                &::before{
                                    display: none;
                                }
                            }
                        }
                        p{
                            font-family: var(--font-text-reg);
                            font-size: 20px;
                            margin-block: 20px;
                            max-width: 70%;
                        }
                    }
                    .swiper {
                        // width: 100%;
                        // flex: 0 0 50%;
                        // max-width: 50%;
                        height: auto;
                        margin: 2vw;
                        width: 100%;
                        flex: 0 0 50%;
                        max-width: 50%;

                        .swiper-slide {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            overflow: hidden; /* Ensures the image doesn't overflow the container */
            width: 100%;
            height: 100%;

                            img {
                                width: 100%;
              height: 100%;
              object-fit: cover;
              transition: all ease 0.5s;
              transform: scale(1);

                                &:hover{
                                    transform: scale(1.1);
                                    // transform: scaleX(1);
                                    transition: all ease 0.5s;

                                }
                            }
                        }
                        .buttonWrapper {
                            position: absolute;
                            bottom: 10px;
                            left: 50%;
                            transform: translateX(-50%);
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: 80%;
                            height: 50px;
                            background: white;
                            z-index: 5;
                            .swiper-button-prev, .swiper-button-next {
                                flex: 1;
                                padding: 10px;
                                border-radius: 50%;
                                svg{
                                    stroke: var(--color-gold);

                                }
                                &::after{
                                    content: "";
                                }
                            }
                        }
                    }
                    .roomImg{
                        flex: 0 0 50%;
                        max-width: 50%;
                    }
                }
            }
        }
    }
</style> -->
<!-- <style scoped lang="scss">
.Hotel {
  .main {
    position: relative;

    .mainImage, video {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      object-fit: cover;
    }

    .textBlock {
      position: absolute;
      top: 50%;
      left: 50%;
      width: fit-content;
      transform: translate(-50%, -50%);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 16px;

      p {
        color: var(--color-white);
        font-family: var(--font-text-reg);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        text-transform: uppercase;
        max-width: 80%;
        margin: 0 auto;
      }

      h1 {
        color: var(--color-white);
        font-family: var(--font-grot-reg);
        font-size: clamp(45px, 10vw, 80px);
        font-style: normal;
        font-weight: 420;
        line-height: 100%; /* 80px */
        text-transform: uppercase;
      }

      .colorText {
        color: var(--color-gold);
      }
    }

    .roomsCategory {
      position: absolute;
      bottom: 5%;
      width: 100%;
      z-index: 5;

      ul {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        flex-shrink: 0;

        li {
          color: var(--color-gold);
          background: rgba(0, 0, 0, 0.75);
          border-radius: 5px;
          padding: 10px 20px;
          font-family: var(--font-text-reg);
          font-size: 18px;
          text-transform: uppercase;
          transition: all ease 0.3s;
          cursor: pointer;
          transform: translateX(0) scaleX(1);
        }

        li:hover {
          background: var(--color-gold);
          color: var(--color-black);
          transition: all ease 0.3s;
          transform: translateX(0px) scaleX(1.1);
        }
      }
    }
  }

  .luxury {
    width: 100%;
    background: var(--color-light);
    position: relative;
    overflow: hidden;

    .wrapper {
      width: 90%;
      margin: 0 auto;

      .main {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        @media (min-width: 768px) {
          flex-direction: row;
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
            font-size: 28px;
            font-weight: 700;
            line-height: 1.1;
            margin: 20px 0 30px;
            text-transform: uppercase;
            @media (min-width: 768px) {
              font-size: 42px;
            }

            .colorText {
              font-size: inherit;

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
        }

        .swiper {
          width: 100%;
          height: auto;
          margin: 2vw;
          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
          }

          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden; /* Ensures the image doesn't overflow the container */
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
          }

          .buttonWrapper {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 50px;
            background: white;
            z-index: 5;

            .swiper-button-prev, .swiper-button-next {
              flex: 1;
              padding: 10px;
              border-radius: 50%;

              svg {
                stroke: var(--color-gold);
              }

              &::after {
                content: "";
              }
            }
          }
        }

        .roomImg {
          flex: 0 0 100%;
          max-width: 100%;
          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }
      }
    }
  }
}
</style> -->
<style scoped lang="scss">
.Hotel {
  .main {
    position: relative;

    .mainImage,
    video {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      object-fit: cover;
    }
    .textBlock {
      position: absolute;
      top: 50%;
      left: 50%;
      width: fit-content;
      transform: translate(-50%, -50%);
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 16px;

      p {
        color: var(--color-white);
        font-family: var(--font-text-reg);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        text-transform: uppercase;
        max-width: 80%;
        margin: 0 auto;
      }

      h1 {
        color: var(--color-white);
        font-family: var(--font-grot-reg);
        font-size: clamp(45px, 10vw, 80px);
        font-style: normal;
        font-weight: 420;
        line-height: 100%; /* 80px */
        text-transform: uppercase;
      }

      .colorText {
        color: var(--color-gold);
      }
    }

    .roomsCategory {
      position: absolute;
      bottom: 5%;
      width: 100%;
      z-index: 5;
      ul {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        flex-shrink: 0;

        li {
          color: var(--color-gold);
          background: rgba(0, 0, 0, 0.75);
          border-radius: 5px;
          padding: 10px 20px;
          font-family: var(--font-text-reg);
          font-size: 18px;
          text-transform: uppercase;
          transition: all ease 0.3s;
          cursor: pointer;
          transform: translateX(0) scaleX(1);
        }

        li:hover {
          background: var(--color-gold);
          color: var(--color-black);
          transition: all ease 0.3s;
          transform: translateX(0px) scaleX(1.1);
        }
      }
    }
  }

  .luxury {
    width: 100%;
    background: var(--color-light);
    position: relative;
    overflow: hidden;
    padding-block: 50px;

    .wrapper {
      width: 100%;
      margin: 0 auto;

      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        margin: 0 20px;

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
            margin: 20px 0 30px;
            text-transform: uppercase;

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
            overflow: hidden; /* Ensures the image doesn't overflow the container */
            width: 100%;
            height: 100%; /* Ensure all images have the same height */

            img {
              width: 100%;
              height: 100%; /* Ensure all images have the same height */
              object-fit: cover;
              transition: all ease 0.5s;
              transform: scale(1);

              &:hover {
                transform: scale(1.1);
                transition: all ease 0.5s;
              }
            }
          }

          .buttonWrapper {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            justify-content: center;
            align-items: center;
            width: 80%;
            height: 50px;
            background: white;
            z-index: 5;

            .swiper-button-prev,
            .swiper-button-next {
              flex: 1;
              padding: 10px;
              border-radius: 50%;
              svg {
                stroke: var(--color-gold);
              }

              &::after {
                content: "";
              }
            }
          }
        }

        .roomImg {
          width: 100%;
          height: 100%; /* Ensure all images have the same height */
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
</style>
