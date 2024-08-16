<template>
  <div class="Page kingsPalace">
    <div class="main" ref="mainDiv">
      <video
        playsinline
        autoplay
        loop
        muted
        ref="mainImageBg"
        poster="../assets/images/home-page/main.png"
      >
        <source src="../assets/images/home-page/Kings-Main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="textBlock" ref="textBlock">
        <p>Rozvadov 7, Entrance 2, 348 06 Rozvadov, Plzeňský kraj, Czech Republic</p>
        <h1>WELCOME TO</h1>
        <h1 class="colorTittle">KING'S PALACE</h1>
      </div>
    </div>
    <section class="mobileCheckAvailable">
      <PrimaryButton buttonText="check availability" />
      <SvgIcon name="showAround" size="large" stroke="D7B154" />
    </section>

    <section class="hotelDescription">
      <div class="container">
        <h2>King’s Palace Rozvadov, Czech Republic</h2>
        <div class="description">
          <p>
            Experience comfort and luxury where every moment becomes an unforgettable experience.
          </p>
          <p>We offer rooms in various categories, ranging from 2* to 5*.</p>
        </div>
        <div class="underLine"></div>
      </div>
    </section>

    <section class="sleepLikeAKing">
      <div class="topBlock">
        <span class="accomodation"> ACCOMMODATIONS </span>
        <h4>SLEEP LIKE A KING</h4>
      </div>
      <div class="items">
        <div class="rightItem">
          <div class="buttons">
            <button id="leftBtn">
              <SvgIcon name="whiteArrow" size="medium" />
            </button>
            <button id="rightBtn">
              <SvgIcon name="goldArrow" size="medium" />
            </button>
          </div>
          <div class="title">
            <h2>Luxury 5-star</h2>
          </div>
          <p class="description">
            Choose the bed that suits you best, from a Comfort bed to a spacious King size double
            bed. Rest like a true King!
          </p>
          <PrimaryButton buttonText="CHECK AVAILABILITY" />
        </div>
        <div class="leftItem">
          <img src="../assets/images/home-page/room5s.png" alt="Luxury Room" />
        </div>
      </div>
    </section>

    <section class="relaxLikeAKing">
      <div class="topBlock">
        <span class="accomodation"> Relax </span>
        <h4>RELAX LIKE A KING</h4>
      </div>
      <div class="items">
        <div class="leftItem">
          <img src="../assets/images/home-page/welness.png" alt="welness" />
        </div>
        <div class="rightItem">
          <div class="buttons">
            <button id="leftBtn">
              <SvgIcon name="whiteArrow" size="medium" />
            </button>
            <button id="rightBtn">
              <SvgIcon name="goldArrow" size="medium" />
            </button>
          </div>
          <div class="title">
            <h2>Welness</h2>
          </div>
          <p class="description">
            Take time out of your routine to restore energy to your body, mind and spirit at our
            wellness center.
          </p>
          <PrimaryButton buttonText="CHECK AVAILABILITY" />
        </div>
      </div>
    </section>
    <section class="eatLikeAKing">
      <div class="topBlock">
        <span class="accomodation"> RESTAURANT & BUFFET </span>
        <h4>Eat like a king</h4>
      </div>
      <RestaurantCarusel tittleName="Nearby restaurants"/>
    </section>
    <section class="visualTour">
      <img src="../assets/images/home-page/tour.png" alt="tour" />
      <div class="sectionItems">
        <div class="description">
          <h2 class="colorText">visual tour</h2>
          <h2>dIscover KING'S palace</h2>
        </div>
        <Additional3 buttonText="3D TOUR" />
      </div>
    </section>

    <RoomsCarusel tittleName="KING'S PALACE ROOM" />

    <section class="slider">
      <swiper
        @swiper="onSwiperInit"
        ref="mySwiper"
        :effect="'fade'"
        :autoplay="{
          delay: autoplayConfig.delay,
        }"
        :modules="modules"
        :loop="true"
        :slides-per-view="1"
      >
        <swiper-slide v-for="slide in dataSlides" :key="slide.id">
          <img :src="require(`@/assets/images/home-page/tour/${slide.slideImg}`)" alt="tour-img" />
          <div class="slideContent">
            <h2>{{ slide.slideName }}</h2>
            <p>{{ slide.description }}</p>
            <router-link>
              <span>
                {{ slide.buttonText }}
              </span>
              <SvgIcon name="arrowRight" size="medium" />
            </router-link>
          </div>
          <div class="bg"></div>
        </swiper-slide>
      </swiper>

      <ProgressBar :autoplay="autoplayConfig.delay" :goToSlide="goToSlide" :isPlay="true" />
    </section>

    <section class="instagram">
      <div class="topBlock">
        <h2>VISIT OUR INSTAGRAM</h2>
        <span> And be inspired to relax like a King. </span>
      </div>
      <div class="instagramGallery">
        <img
          v-for="image in instagramImages"
          :src="image"
          :alt="`Instagram Image ${image}`"
          :key="image"
        />
      </div>
    </section>

    <section class="map">
      <img src="../assets/images/home-page/map.png" alt="Map" />
      <HelpInfo />
    </section>
  </div>
</template>

<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  EffectFade, Navigation, Pagination, Autoplay,
} from 'swiper/modules';
import useAnimations from '@/animations/useAnimations';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
import HelpInfo from '@/components/HelpInfo.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import RestaurantCarusel from '@/components/RestaurantCarusel.vue';
import SvgIcon from '../components/SvgIcon.vue';
import Additional3 from '../components/Buttons/Additional3.vue';

export default {
  data() {
    return {
      autoplayConfig: {
        delay: 3000, // Длительность autoplay в миллисекундах
        disableOnInteraction: false, // Продолжать прокрутку после взаимодействия
      },
      dataSlides: [
        {
          id: 1,
          slideName: 'Radimský restaurant',
          description:
            'Taste international specilities at the Radimský Restaurant and dine like a King',
          buttonText: 'cozy radimský restaurant',
          linkTo: '/restaurants',
          slideImg: 'tourBg1.jpg',
        },
        {
          id: 2,
          slideName: 'Experience Authentic Thai Massages',
          description:
            'Let your stress go and enjoy yourself in a place of rest and relaxation. Try an exclusive Thai massage from certified Thai masseuses.',
          buttonText: 'Thai massage and procedures',
          linkTo: '/relax/massages',
          slideImg: 'tourBg2.jpg',
        },
        {
          id: 3,
          slideName: 'Release the Steam',
          description:
            'Relax at the Finnish sauna, steam bath or herbal steam bath. Do some laps in the pool and enjoy the serene view of the Bohemian Forest!',
          buttonText: 'Enjoy our Wellness',
          linkTo: '/relax/wellness',
          slideImg: 'tourBg3.jpg',
        },
        {
          id: 4,
          slideName: 'Visit the Pilsen Beer Brewery',
          description:
            "The Pilsner Urquell brewery has inspired the majority of beers worldwide being labeled as Pilsner. Find out how it's made and drink a fresh, unfiltered Pilsner Urquell! Just 45 minutes from the resort.",
          buttonText: 'Manufactoring of Pilsen beer',
          linkTo: 'https://www.pilsnerurquell.com/',
          slideImg: 'tourBg5.jpg',
        },
        {
          id: 5,
          slideName: 'Play Some Golf',
          description:
            "Fancy a game of golf? You have many options to choose from! For example, The Royal Golf Club in Mariánské Lázně is the oldest golf course in the country. Play a round or two, then explore the town's historical center!",
          buttonText: 'Play Some Golf',
          linkTo: '/golf',
          slideImg: 'tourBg6.jpg',
        },
        {
          id: 6,
          slideName: "Exclusive Leon's Suite",
          description:
            "Along with accomodations for all needs, the pearl of the King's 5-star hotel is the Leon's suite with its very own whirlpool. Indulge yourself in pure luxury and truly sleep like a King!",
          buttonText: 'Try our the most luxury suite',
          linkTo: '/rooms/king-suite',
          slideImg: 'tourBg4.jpg',
        },
      ],
    };
  },
  methods: {
    goToSlide(index) {
      this.$nextTick(() => {
        if (this.swiperInstance) {
          this.swiperInstance.slideTo(index);
        } else {
          console.error('Swiper instance is not available.');
        }
      });
    },
    onSwiperInit(swiper) {
      this.swiperInstance = swiper;
    },
  },
  components: {
    PrimaryButton,
    RoomsCarusel,
    SvgIcon,
    Additional3,
    HelpInfo,
    Swiper,
    SwiperSlide,
    ProgressBar,
    RestaurantCarusel,
  },
  setup() {
    const {
      mainDiv, textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

    const progressWidth = ref(0);

    const onSlideChange = (swiper) => {
      const progress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
      progressWidth.value = progress;
    };

    return {
      modules: [EffectFade, Navigation, Pagination, Autoplay],
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
      onSlideChange,
      progressWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/mixins.scss";
@import "@/style/main.scss";
@import "swiper/swiper-bundle.css";
.kingsPalace {
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
      @include mainTextBlock;

      p {
        white-space: nowrap;
        @include text(var(--color-white), 16px, uppercase, 400);
      }
      h1 {
        @include mainTitle;
      }
      .colorTittle {
        color: var(--color-gold);
      }
    }
  }
  .mobileCheckAvailable {
    display: none;
  }
  .hotelDescription {
    margin: 66px 0 80px;
    h2 {
      @include text(var(--color-black), clamp(28px, 5vw, 40px), uppercase, 500);
      text-align: center;
    }
    .description {
      text-align: center;
      margin: 40px 0;
      p {
        @include text(var(--color-black), clamp(16px, 3vw, 20px), none, 400);
      }
    }
    .underLine {
      width: 20vw;
      height: 1px;
      background: #3f3f3f;
      margin: 20px auto;
    }
  }
  .sleepLikeAKing,
  .relaxLikeAKing,
  .eatLikeAKing {
    background: var(--color-white);
    .topBlock {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 80px;
      gap: 12px;
      .accomodation {
        @include text(var(--color-gold), 14px, uppercase, 500);
      }
      h4 {
        @include text(var(--color-black), 48px, uppercase, 500);
      }
    }
    .items {
      display: flex;
      align-items: center;
      justify-content: center;
      padding-block: 60px;
      gap: 40px;
      .rightItem {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 60px;
        .buttons {
          #leftBtn {
            transform: rotate(180deg);
          }
        }
        .title {
          @include text(var(--color-black), 40px, uppercase, 500);
        }
        .description {
          @include text(#3f3f3f, 20px, unset, 400);
        }
        .PrimaryButton {
          margin-top: 60px;
        }
      }
      .leftItem {
        display: flex;
        justify-content: flex-end;
        position: relative;
      }
    }
  }
  .relaxLikeAKing {
    .items {
      .rightItem {
        padding-left: 0;
        padding-right: 20px;
      }
    }
  }
}

.visualTour {
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .sectionItems {
    position: absolute;
    bottom: 15%;
    left: 10%;
    .description {
      padding-bottom: 40px;

      .colorText {
        color: var(--color-gold);
      }
      h2 {
        @include text(var(--color-white), 60px, uppercase, 500);
      }
    }
  }
}
.instagram {
  margin-bottom: 80px;
  .topBlock {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 24px;
    margin-block: 80px;
    h2 {
      @include text(var(--color-black), 48px, uppercase, 500);
    }
    span {
      @include text(#3f3f3f, 20px, unset, 400);
    }
  }
  .instagramGallery {
    padding-inline: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    img {
      width: clamp(100px, 30vw, 400px);
    }
  }
}
.slider {
  position: relative;
  .swiper {
    position: relative;
    width: 100%;
    height: clamp(350px, 90vw, 950px);
    .swiper-wrapper {
      height: 30% !important;
      img {
        width: 100%;
        height: clamp(350px, 90vw, 950px);
        object-fit: cover;
      }
      .slideContent {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        top: 15%;
        left: 10%;
        // width: 25%;
        width: clamp(200px, 25vw, 300px);
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        gap: 20px;
        padding: 20px;
        h2 {
          @include text(var(--color-gold), clamp(12px, 2vw, 48px), uppercase, 500);
        }
        p {
          @include text(var(--color-white), clamp(10px, 2vw, 20px), unset, 400);
        }
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          @include text(var(--color-white), 16px, unset, 400);
        }
        @media (max-width: 570px) {
          & {
            width: 50%;
          }
        }
      }
      .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%);
      }
    }
    ::v-deep {
      .swiper-button-next,
      .swiper-button-prev {
        display: none;
      }
    }
  }
  .progress-bar {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    height: 4px;
    z-index: 5;
    @media (max-width: 570px) {
      & {
        display: none;
      }
    }
  }
  .progress {
    height: 100%;
    background-color: #ffd700;
    transition: width 0.5s ease;
  }
}
.map {
  position: relative;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.booking,
.rooms,
.eatLikeAKing {
  padding: 20px;
  text-align: center;

  .bookingForm {
    input[type="date"] {
      margin: 0 10px;
      padding: 10px;
      border: 1px solid #ccc;
    }

    button {
      padding: 10px 20px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
  }

  .roomCards,
  .restaurantCards,
  .instagramGallery {
    display: flex;
    justify-content: space-around;
    gap: 10px;

    .roomCard,
    .restaurantCard {
      width: 30%;
      //   padding: 10px;
      border: 1px solid #ccc;

      img {
        width: 100%;
        height: auto;
      }
    }

    .instagramGallery img {
      width: 30%;
      height: auto;
      padding: 5px;
    }
  }
}

@media screen and (max-width: 1024px) {
  .kingsPalace {
    .main {
      .textBlock {
        max-width: 70vw;
        p {
          white-space: pre-wrap;
        }
      }
    }
    .mobileCheckAvailable {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-inline: 20px;
      margin: 14px 0;
      gap: 20px;
      .PrimaryButton {
        width: -webkit-fill-available;
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .kingsPalace {
    .hotelDescription {
      margin: 40px 0 60px;
      .underLine {
        width: 80vw;
      }
    }
  }
}
</style>
