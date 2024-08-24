<template>
  <div class="Page Hotel">
    <div class="main" ref="mainDiv">
      <video playsinline autoplay loop muted
      ref="mainImageBg"
      poster ="../assets/images/hotel-page/mainBg.png">
        <source src="../assets/images/hotel-page/Kings-Hotel.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="textBlock" ref="textBlock">
        <h1>SLEEP LIKE</h1>
        <h1 class="colorText">A KING</h1>
        <p>
          Enjoy the comfort and a moments for yourself. We offer a wide range of rooms that suits to
          any King.
        </p>
      </div>
      <div class="roomsCategory">
        <ul>
          <li @click="scrollToSection('luxury')" @keydown="none">
            <span> 5 star luxury </span>
          </li>
          <li @click="scrollToSection('deluxe')" @keydown="none">
            <span> 4 star deluxe </span>
          </li>
          <li @click="scrollToSection('comfort')" @keydown="none">
            <span> 4 star comfort </span>
          </li>
          <li @click="scrollToSection('everybody')" @keydown="none">
            <span> 3 star for everybody </span>
          </li>
          <li @click="scrollToSection('basic')" @keydown="none">
            <span> 2 star basic </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mobileRoomCategory">
        <h2>
            Our rooms
        </h2>
        <ul>
          <li @click="scrollToSection('luxury')" @keydown="none">
            <span> 5 star luxury </span>
          </li>
          <li @click="scrollToSection('deluxe')" @keydown="none">
            <span> 4 star deluxe </span>
          </li>
          <li @click="scrollToSection('comfort')" @keydown="none">
            <span> 4 star comfort </span>
          </li>
          <li @click="scrollToSection('everybody')" @keydown="none">
            <span> 3 star for everybody </span>
          </li>
          <li @click="scrollToSection('basic')" @keydown="none">
            <span> 2 star basic </span>
          </li>
        </ul>
    </div>
    <section class="luxury" ref="luxury">
      <div class="wrapper">
        <div class="main">
          <div class="description">
            <span class="topBlock"> 5 STAR LUXURY </span>
            <h2>
              THE MOST
              <span class="colorText"> LUXURIOUS </span>
              ACCOMMODATION
            </h2>
            <p>
              King's New and Old 5-star hotels offer a wide selection of luxurious rooms and suites.
              The hotel rooms and suites feature exceptional interior decorated with art and golden
              embroidery. The selection varies from Superior Rooms to the King's Leon Suite with a
              private whirlpool.
            </p>
            <p>
              Choose the room/suite that suits your needs best: Superior Twin Room, Superior Double
              Room, Deluxe Double Room, King's Exclusive Suite, King's Grand Suite, King's Leon
              Suite with a private whirlpool.
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
            <swiper-slide
              ><img src="@/assets/images/hotel-page/king/king1.jpg" alt="image1" /> </swiper-slide
            ><swiper-slide
              ><img src="@/assets/images/hotel-page/king/king2.jpg" alt="image2" /> </swiper-slide
            ><swiper-slide
              ><img src="@/assets/images/hotel-page/king/king3.jpg" alt="image3" /> </swiper-slide
            ><swiper-slide
              ><img src="@/assets/images/hotel-page/king/king4.jpg" alt="image4"
            /></swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/king/king5.jpg" alt="image5" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/king/king6.jpg" alt="image6" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/king/king7.jpg" alt="image7" />
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
        <div class="includeOptions">
          <h3 class="preTitle">Our 5 stars</h3>
          <div class="optionsBlock">
            <h3>King's New Hotel</h3>
            <p>The new King's Hotel offers a wide selection of luxurious rooms and suites.</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 0M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>King's Classic Hotel</h3>
            <p>
              Situated in the old part of the resort, the hotel provides a variety of luxurious
              rooms.
            </p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 0M </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="luxury" ref="deluxe">
      <div class="wrapper">
        <div class="main">
          <swiper
            ref="swiperDeluxe"
            :spaceBetween="30"
            :effect="'fade'"
            :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
            @slideChange="onSlideChangeDeluxe"
            @swiper="onSwiperDeluxe"
            :modules="modules"
            :autoplay="true"
            class="mySwiper"
          >
            <swiper-slide
              ><img
                src="@/assets/images/hotel-page/admiral/admiral1.png"
                alt="image1"
              /> </swiper-slide
            ><swiper-slide
              ><img
                src="@/assets/images/hotel-page/admiral/admiral2.png"
                alt="image2"
              /> </swiper-slide
            ><swiper-slide
              ><img
                src="@/assets/images/hotel-page/admiral/admiral3.png"
                alt="image3"
              /> </swiper-slide
            ><swiper-slide
              ><img src="@/assets/images/hotel-page/admiral/admiral4.png" alt="image4"
            /></swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral5.png" alt="image5" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral6.png" alt="image6" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral7.png" alt="image7" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral8.png" alt="image8" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral9.png" alt="image9" />
            </swiper-slide>
            <swiper-slide>
              <img src="@/assets/images/hotel-page/admiral/admiral10.png" alt="image10" />
            </swiper-slide>
            <div class="buttonWrapper">
              <div class="swiper-button-prev">
                <SvgIcon name="longArrowLeft" size="large" fill="red" />
              </div>
              <div class="info">
                <p>{{ deluxeCurrentSlide }}</p>
                <span>/</span>
                <p>{{ deluxeTotalSlides }}</p>
              </div>
              <div class="swiper-button-next">
                <SvgIcon name="longArrowRight" size="large" fill="red" />
              </div>
            </div>
          </swiper>
          <div class="description">
            <span class="topBlock"> 4 STAR DELUXE </span>
            <h2>four stars of spacious luxury</h2>
            <p>
              The new Admiral Hotel is a 2 minutes’ walk to King’s and offers luxury, spacious
              double and triple rooms as well as a suite. All rooms are equipped with air
              conditioning, blackout curtains, comfy 33cm high mattresses, fridge, safe and an
              ensuite bathroom with floor heating and walk-in shower. The hotel has an elevator and
              all rooms are wheelchair accessible.
            </p>
            <div class="buttonGroup">
              <router-link to="/rooms/guest-room">
                <PrimaryButton buttonText="More details" />
              </router-link>
              <PrimaryButton buttonText="Check availability" />

            </div>
          </div>
        </div>
        <div class="includeOptions">
          <h3 class="preTitle">Our 4 stars deluxe</h3>
          <div class="optionsBlock">
            <h3>Admiral</h3>
            <p>
              Right across the road from King’s and offers a wide selection of excellent 4-star
              rooms.
            </p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 100m </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="luxury" ref="comfort">
      <div class="wrapper">
        <div class="main">
          <div class="description">
            <span class="topBlock"> 4 STAR COMFORT </span>
            <h2>4 stars of best comfort</h2>
            <p>
              King's offers a wide selection of four-star accomodation around Rozvadov, where you
              can find deluxe rooms for a lower rate. To make your stay more comfortable, King's
              provides free transfer to/from accommodation to the resort.
            </p>
            <div class="buttonGroup">
              <PrimaryButton buttonText="Check availability" />
            </div>
          </div>
          <img class="roomImg" src="@/assets/images/hotel-page/comfort.png" alt="comfort" />
        </div>
        <div class="includeOptions">
          <h3 class="preTitle">Our 4 stars</h3>
          <div class="optionsBlock">
            <h3>Orange house</h3>
            <p>A small cozy house only 50 m away from King's</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 50M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>Yellow House</h3>
            <p>The Yellow Hourse offers a wide selection of 4-star deluxe rooms.</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 150M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>Olympia</h3>
            <p>A complex of two buildings, which offers a wide selection of elegant 4-star rooms</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 600M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>La Corte</h3>
            <p>
              The building is reminiscent of Latin American architecture and offers a wide selection
              of beautifully renovated 4-star rooms
            </p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 400M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>Border</h3>
            <p>A newly-renovated cozy accommodation</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 2200M </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="luxury" ref="everybody">
      <div class="wrapper">
        <div class="main">
          <img class="roomImg" src="@/assets/images/hotel-page/3star.png" alt="3star" />
          <div class="description">
            <span class="topBlock"> 3 STAR EVERYBODY </span>
            <h2>3 stars to enjoy every night at king’s</h2>
            <p>
              King's offers a selection of newly renovated rooms at a reasonable price. The rooms
              are perfect if you are coming to stay with your friends as the 3-star rooms range from
              Twin Rooms to Quadriple rooms.
            </p>
            <div class="buttonGroup">
              <PrimaryButton buttonText="Check availability" />
            </div>
          </div>
        </div>
        <div class="includeOptions">
          <h3 class="preTitle">Our 3 stars</h3>
          <div class="optionsBlock">
            <h3>Non Stop</h3>
            <p>Affordable accommodation, which offers comfortable rooms</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 500M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>OMV</h3>
            <p>The most affordable accommodation in the area.</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 600M </span>
            </div>
          </div>
          <div class="optionsBlock">
            <h3>Octavia house</h3>
            <p>Accomodation located in a quiet area of Rozvadov.</p>
            <ul>
              <li>
                <SvgIcon name="bathtub" size="large" />
                <SvgIcon name="miniFridge" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="smartTv" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="tvSet" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
                <SvgIcon name="bathtub" size="large" />
              </li>
            </ul>
            <div class="mobPosition">
                <h5>Distance from <br> King's</h5>
                <span> 2700M </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="luxury" ref="basic">
      <div class="wrapper">
        <div class="main">
          <div class="description">
            <span class="topBlock"> 2 STAR BASIC </span>
            <h2>2- star affordable rooms</h2>
            <p>
              King's offers a wide selection of two-star accommodation around Rozvadov, where you
              can find basic rooms for a lower rate. King's provides free transfer to/from
              accommodation to the resort to make your stay more comfortable. Please note that there
              are no private bathrooms in the rooms. The shared bathrooms and showers are located in
              the corridor.
            </p>
            <div class="buttonGroup">
              <PrimaryButton buttonText="Check availability" />
            </div>
          </div>
          <!-- <div class="content"> -->
          <img class="roomImg" src="@/assets/images/hotel-page/2star.png" alt="2star" />

          <!-- </div> -->
        </div>
        <div class="includeOptions">
          <h3 class="preTitle">Our 2 stars</h3>
          <div class="optionsBlock">
            <h3>OMV</h3>
            <p>Affordable accomodation, which offers convenient rooms</p>
            <ul>
              <li>
                <SvgIcon name="wifi" size="large" stroke="#D7B154" strokeWidth="0" />
              </li>
            </ul>
            <div class="mobPosition">
              <h5>Distance from <br> King's</h5>
              <span> 600M </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from 'vue';
import useAnimations from '@/animations/useAnimations';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import SvgIcon from '../components/SvgIcon.vue';
import 'swiper/swiper-bundle.css';

export default {
  name: 'Hotel-page',
  components: {
    SvgIcon,
    Swiper,
    SwiperSlide,
    PrimaryButton,
  },
  setup() {
    // const swiperInstance = ref(null);
    const luxury = ref(null);
    const deluxe = ref(null);
    const comfort = ref(null);
    const everybody = ref(null);
    const basic = ref(null);

    const swiperLux = ref(null);
    const swiperDeluxe = ref(null);
    const luxCurrentSlide = ref(0);
    const luxTotalSlides = ref(0);
    const deluxeCurrentSlide = ref(0);
    const deluxeTotalSlides = ref(0);

    const scrollToSection = (section) => {
      const target = {
        luxury: luxury.value,
        deluxe: deluxe.value,
        comfort: comfort.value,
        everybody: everybody.value,
        basic: basic.value,
      }[section];
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const onSwiperLux = (swiper) => {
      swiperLux.value = swiper;
      luxTotalSlides.value = swiper.slides.length;
    };
    const onSwiperDeluxe = (swiper) => {
      swiperDeluxe.value = swiper;
      deluxeTotalSlides.value = swiper.slides.length;
    };

    const onSlideChangeLux = () => {
      if (swiperLux.value) {
        luxCurrentSlide.value = swiperLux.value.realIndex + 1;
      }
    };
    const onSlideChangeDeluxe = () => {
      if (swiperDeluxe.value) {
        deluxeCurrentSlide.value = swiperDeluxe.value.realIndex + 1;
      }
    };
    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();
    return {
      luxury,
      deluxe,
      comfort,
      everybody,
      basic,
      swiperLux,
      swiperDeluxe,
      luxCurrentSlide,
      luxTotalSlides,
      deluxeCurrentSlide,
      deluxeTotalSlides,
      scrollToSection,
      onSwiperLux,
      onSwiperDeluxe,
      onSlideChangeLux,
      onSlideChangeDeluxe,
      modules: [EffectFade, Autoplay, Navigation],
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
    };
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';
@import '@/style/main.scss';
.Hotel {
  @include pageStyle;
  .main {
    position: relative;
    overflow: hidden;
    .mainImage,
    video {
      @include mainBg;
    }
    video::-webkit-media-controls {
        display: none !important;
        }

        video::-webkit-media-controls-enclosure {
        display: none !important;
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
        @include mainTitle;
      }

      .colorText {
        color: var(--color-gold);
      }
    }

    .roomsCategory {
      position: absolute;
      bottom: 5%;
      width: 100%;
      z-index: 4;
      ul {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        list-style-type: none;
        flex-wrap: wrap;
        gap: 10px;
        flex-shrink: 0;
        @media (max-width: 768px) {
            &{
                width: 95%;

            }
        }
        li {
          color: var(--color-gold);
          background: rgba(0, 0, 0, 0.75);
          border-radius: 20px;
        padding-block: clamp(5px, 2vw, 10px);
            padding-inline: clamp(10px, 2vw, 20px);
          font-family: var(--font-text-reg);
          font-size: clamp(10px, 1vw, 12px);
          text-transform: uppercase;
          transition: all ease 0.3s;
          cursor: pointer;
          transform: translateX(0) scaleX(1);
          @media (max-width: 768px) {
            padding: 0;
            background: none;
          }
        }

        li:hover {
          background: var(--color-gold);
          color: var(--color-black);
          transition: all ease 0.3s;
          transform: translateX(0px) scaleX(1.1);
        }
      }
      @media (max-width: 768px) {
        display: none;
      }
    }
  }
  .mobileRoomCategory{
    display: none;
    @media (max-width: 768px) {
      display: block;
      margin: 20px;
      h2{
        @include text(var(--color-gold), 20px, uppercase, 700);

      }
        ul{
                list-style-type: none;
                display: flex;
                padding: 0;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 10px;
                width: 80%;
                max-width: fit-content;
                margin: 0 auto;
                li{
                    padding: 5px 7px;
                    border-radius: 20px;
                    background: var(--color-light);
                    width: fit-content;
                    @include text(var(--color-gold), 12px, uppercase, 500);
                    cursor: pointer;
                    white-space: nowrap;
                    z-index: 4;
                }
            }
        }
    }
  }
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
      .includeOptions {
        margin: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .preTitle {
          font-family: var(--font-grot-bold);
          font-size: 18px;
          text-transform: uppercase;
          color: var(--color-gold);
          font-weight: 700;
          letter-spacing: 2px;
          margin: 30px 20px;
          border-bottom: 1px solid;
          padding-bottom: 10px;
          @media (min-width: 768px) {
            font-size: 20px;
          }
        }
        .optionsBlock {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: var(--color-white);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
          border-radius: 10px;
          padding: 25px 40px;
          margin: 0 20px;
          gap: 30px;
          position: relative;
          h3 {
            font-family: var(--font-grot-bold);
            font-size: 18px;
            text-transform: uppercase;
            color: var(--color-gold);
            font-weight: 700;
            letter-spacing: 2px;
            // flex: 1 1 20%;
            width: 20%;
            @media (max-width: 768px) {
              font-size: 20px;
              white-space: nowrap;
            }
          }
          p {
            font-family: var(--font-text-reg);
            color: #3f3f3f;
            font-size: 16px;
            margin-block: 20px;
            // max-width: 30%;
            // flex: 1 1 20%;
            width: 30%;

            // @media (min-width: 768px) {
            //     font-size: 20px;
            //     max-width: 70%;
            // }
          }
          ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: auto;
            width: 30%;
            padding: 0;
            gap: 10px;
            li {
              display: flex;
              align-items: center;
              flex-wrap: wrap;
              gap: 10px;
              svg {
                width: clamp(20px, 2vw, 30px);
              }
            }
          }
          .mobPosition {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            width: 20%;
            gap: 20px;
          }
          h5 {
            font-family: var(--font-text-reg);
            color: #3f3f3f;
            font-weight: 600;
            font-size: 16px;
            margin-block: 20px;
            // max-width: 15%;
          }
          span {
            font-family: var(--font-text-reg);
            color: var(--color-gold);
            font-weight: 600;
            font-size: 16px;
            margin-block: 20px;
            max-width: 15%;
          }
          @media (max-width: 768px) {
          & {
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: clamp(20px, 2vw, 25px);
            margin: 0;
            gap: 10px;
            p {
              width: 100%;
              margin-block: 0;
            }
            ul{
              margin-block: 0;
              width: 100%;
            }
            .mobPosition{
                // display: flex;
                justify-content: flex-start;
                align-items: flex-end;
                width: -webkit-fill-available;
                gap: 30px;
            }
            h5{
                margin-block: 0;
                max-width: 100%;
                flex-shrink: 0;
            }
            span{
                max-width: 100%;
                margin-block: 0;
            }
          }
        }
        }
      }
    }
  }
</style>
