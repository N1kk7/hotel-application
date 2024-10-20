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
      <div class="path">
          <router-link to="/">
              <span>
                  Homepage
              </span>
          </router-link>
          <SvgIcon name="arrowRight" size="medium"/>
          <span>
              premium-services
          </span>
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
        <div class="defaultBlock">
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
              v-for="slide in leonSuite"
              :key="slide.id"
            >
              <picture>
                <source :srcset="require(`@/assets/images/hotel-page/king/mob/${slide.img}`)">
                <img
                  :src="require(`@/assets/images/hotel-page/king/${slide.img}`)"
                  alt="image1"
                />
              </picture>
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
        <div class="defaultBlock">
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
              v-for="slide in admiralRoom"
              :key="slide.id"
            >
              <picture>
                <source
                  :srcset="require(`@/assets/images/hotel-page/admiral/mob/${slide.img}`)"
                  media="(max-width: 768px)"
                >
                <img
                  :src="require(`@/assets/images/hotel-page/admiral/${slide.img}`)"
                  alt="image1"
                />
              </picture>
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
        <div class="defaultBlock">
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
          <picture>
            <source :srcset="require(`@/assets/images/hotel-page/mob/comfort.png`)">
            <img
              class="roomImg"
              src="@/assets/images/hotel-page/comfort.png"
              alt="comfort"
            />
          </picture>
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
        <div class="defaultBlock">
          <picture>
            <source :srcset="require('@/assets/images/hotel-page/mob/3star.png')">
            <img
              class="roomImg"
              :src="require('@/assets/images/hotel-page/3star.png')"
              alt="3star"
              />
          </picture>
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
        <div class="defaultBlock">
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
            <picture>
              <source :srcset="require('@/assets/images/hotel-page/mob/2star.png')">
              <img
                class="roomImg"
                :src="require('@/assets/images/hotel-page/2star.png')"
                alt="2star"
              />

            </picture>
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
import { ref, onMounted, onBeforeUnmount } from 'vue';
import useAnimations from '@/animations/useAnimations';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import useMainStore from '@/store/useStore';
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
  data() {
    return {
      leonSuite: [
        {
          id: 1,
          img: 'king1.jpg',
        },
        {
          id: 2,
          img: 'king2.jpg',
        },
        {
          id: 3,
          img: 'king3.jpg',
        },
        {
          id: 4,
          img: 'king4.jpg',
        },
        {
          id: 5,
          img: 'king5.jpg',
        },
        {
          id: 6,
          img: 'king6.jpg',
        },
        {
          id: 7,
          img: 'king7.jpg',
        },
      ],
      admiralRoom: [
        {
          id: 1,
          img: 'admiral1.png',
        },
        {
          id: 2,
          img: 'admiral2.png',
        },
        {
          id: 3,
          img: 'admiral3.png',
        },
        {
          id: 4,
          img: 'admiral4.png',
        },
        {
          id: 5,
          img: 'admiral5.png',
        },
        {
          id: 6,
          img: 'admiral6.png',
        },
        {
          id: 7,
          img: 'admiral7.png',
        },
        {
          id: 8,
          img: 'admiral8.png',
        },
        {
          id: 9,
          img: 'admiral9.png',
        },
        {
          id: 10,
          img: 'admiral10.png',
        },
      ],
    };
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
    const useStore = useMainStore();

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
    onMounted(() => {
      useStore.setMainHeight(mainDiv.value.clientHeight);
    });
    onBeforeUnmount(() => {
      useStore.setMainHeight(0);
    });
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
        @include text(var(--color-white), 16px, uppercase, 400);
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
    .path{
        @include alignPath;
        bottom: 7%;
        @media (max-width: 768px) {
            bottom: 2%;
        }
      }

    .roomsCategory {
      position: absolute;
      bottom: 2%;
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
          @include text(var(--color-gold), clamp(10px, 1vw, 12px), uppercase, 400);
          background: rgba(0, 0, 0, 0.75);
          border-radius: 20px;
        padding-block: clamp(5px, 2vw, 10px);
            padding-inline: clamp(10px, 2vw, 20px);
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
      margin: 20px 20px 0;
      h2{
        @include text(var(--color-textGrey), 20px, uppercase, 500);

      }
        ul{
                list-style-type: none;
                display: flex;
                padding: 0;
                justify-content: flex-start;
                flex-wrap: wrap;
                gap: 10px;
                width: 100%;
                max-width: fit-content;
                margin: 20px auto 0;
                li{
                  padding: 5px 7px;
                  border-radius: 20px;
                  background: var(--color-light);
                  width: fit-content;
                  @include text(var(--color-gold), 12px, uppercase, 700);
                  cursor: pointer;
                  white-space: nowrap;
                  border: 1px solid var(--color-gold);
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

    .wrapper {
      width: 100%;
      margin: 0 auto;
      @include defaultBlock;
      .defaultBlock {
        @include blockStyles;
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
            width: 20%;
            @media (max-width: 768px) {
              font-size: 20px;
              white-space: nowrap;
            }
          }
          p {
            @include text(var(--color-textGrey), 16px, uppercase, 500);
            width: 30%;
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
            @include text(var(--color-textGrey), 16px, unset, 600);
            margin-block: 20px;
          }
          span {
            @include text(var(--color-gold), 16px, unset, 600);
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
