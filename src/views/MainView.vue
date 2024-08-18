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
      <!-- <div class="container"> -->
        <h2>King’s Palace Rozvadov, Czech Republic</h2>
        <div class="description">
          <p>
            Experience comfort and luxury where every moment becomes an unforgettable
            experience.<br>
          We offer rooms in various categories, ranging from 2* to 5*.
        </p>
        </div>
        <div class="underLine"></div>
      <!-- </div> -->
    </section>

    <section class="PlayKing">
      <div class="container">
        <div class="main">
          <div class="description">
            <span class="topBlock"> Poker & Casino </span>
            <h2>
              Play Like
            </h2>
            <h2 class="colorText">
              A King
            </h2>
            <p>
              Game on! Are you ready for some serious play at King’s?
              Claim your spot and play poker in Europe’s biggest poker room.
              Home to the WSOPE, King’s also houses card and dice games like Blackjack,
              Craps, or Roulette. If slots are your game, we’ve got plenty.
              Let yourself be carried away by the atmosphere of Las Vegas today!
            </p>
          </div>
          <!-- <div class="content"> -->
          <img src="@/assets/images/home-page/playKing.jpg" alt="playKing"/>
          <!-- </div> -->
        </div>
      </div>
    </section>

    <section class="sleepLikeAKing">
      <div class="topBlock">
        <span class="accomodation"> ACCOMMODATIONS </span>
        <h4>SLEEP LIKE A
          <span class="colorText">
            KING
          </span>
        </h4>
      </div>
      <div class="main">
        <div class="description">
            <span class="topBlock"> HOTEL </span>
            <h2>four stars of spacious luxury</h2>
            <p>
              After playing for many hours, you definitely need to recharge your energy
              to prepare yourself for another exciting day full of action! From a comfort
              bed to a King size double bed, choose the one that suits you the best and will
              make you rest like a true King!
            </p>
          </div>
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
            <swiper-slide v-for="hotel in hotelSlides" :key="hotel.id">
              <img :src="require(`@/assets/images/home-page/accomodation/${hotel.pathImg}`)"
              alt="hotelImg"
              >

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
          <div class="tittle">
            <h2>Wellness</h2>
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
          v-for="image in igImg"
          :src="require(`@/assets/images/home-page/ig/${image.pathImg}`)"
          alt="picture"
          :key="image.id"
        />
      </div>
    </section>

    <section class="map">
      <div class="mapImg">
        <img src="../assets/images/home-page/map.png" alt="Map" />

      </div>
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
        delay: 3000,
        disableOnInteraction: false,
      },
      hotelSlides: [
        {
          id: 1,
          pathImg: 'hotelSlider1.jpg',
          tittle: 'King’s palace',
          description: 'Luxury hotel',
        },
        {
          id: 2,
          pathImg: 'hotelSlider2.jpg',
          tittle: 'Radimský restaurant',
          description: 'Radimský restaurant',
        },
        {
          id: 3,
          pathImg: 'hotelSlider3.jpg',
          tittle: 'Radimský restaurant',
          description: 'Radimský restaurant',
        },
        {
          id: 4,
          pathImg: 'hotelSlider1.jpg',
          tittle: 'Radimský restaurant',
          description: 'Radimský restaurant',
        },
      ],
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
      igImg: [
        {
          id: 1,
          pathImg: 'ig1.png',
        },
        {
          id: 2,
          pathImg: 'ig2.png',
        },
        {
          id: 3,
          pathImg: 'ig3.png',
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
    const swiperDeluxe = ref(null);
    const deluxeTotalSlides = ref(0);
    const deluxeCurrentSlide = ref(0);

    const {
      mainDiv, textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

    const progressWidth = ref(0);

    const onSlideChange = (swiper) => {
      const progress = ((swiper.activeIndex + 1) / swiper.slides.length) * 100;
      progressWidth.value = progress;
    };

    const onSwiperDeluxe = (swiper) => {
      swiperDeluxe.value = swiper;
      deluxeTotalSlides.value = swiper.slides.length;
    };
    const onSlideChangeDeluxe = () => {
      if (swiperDeluxe.value) {
        deluxeCurrentSlide.value = swiperDeluxe.value.realIndex + 1;
      }
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
      swiperDeluxe,
      onSwiperDeluxe,
      deluxeTotalSlides,
      deluxeCurrentSlide,
      onSlideChangeDeluxe,
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
  position: relative;

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
    @include blockStyles;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    h2 {
      @include text(var(--color-black), clamp(17px, 3vw, 40px), uppercase, 700);
      text-align: center;
      width: fit-content;
      @media (min-width: 768px) {
        text-align: left;
      }
    }
    .description {
      text-align: center;
      margin: 40px 0;
      width: fit-content;
      p {
        @include text(var(--color-black), clamp(16px, 3vw, 20px), none, 400);
        width: fit-content;
      }
    }
    .underLine {
      width: 20vw;
      height: 1px;
      background: #3f3f3f;
      margin: 20px auto;
    }
  }
  .PlayKing{
    background: #121212;
    padding-block: 20px;
    .container{
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        background: rgba(255, 255, 255, 0.02);
      @include blockStyles;

        @media (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
          gap: clamp(20px, 2vw, 50px);
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
            @include text(var(--color-gold), 14px, uppercase, 700);
          }

          h2 {
            @include text(var(--color-white), 24px, uppercase, 700);

            @media (min-width: 768px) {
              font-size: 42px;
            }

          }
          .colorText {
              font-size: 24px;
              color: var(--color-gold);

              @media (min-width: 768px) {
                font-size: 42px;
              }

              &::before {
                display: none;
              }
            }

          p {
            @include text(var(--color-white), 16px, none, 400);

            @media (min-width: 768px) {
              font-size: 20px;
              max-width: 70%;
            }
          }
        }
        @media (max-width: 768px) {
          img{
            max-width: 100%;
          }
        }
      }
    }
  }
  .sleepLikeAKing{
    background: white;
    @include blockStyles;

    .topBlock {
      display: flex;
      align-items: center;
      flex-direction: column;
      // padding-bottom: 30px;
      padding-bottom: clamp(10px, 2vw, 30px);
      gap: 12px;
      .accomodation {
        @include text(var(--color-gold), 14px, uppercase, 500);
        @media (max-width: 768px){
          margin-bottom: 15px;
        }
      }
      h4 {
        @include text(var(--color-black), clamp(20px, 4vw, 48px), uppercase, 500);
        .colorText {
          color: var(--color-gold);
        }
        @media (max-width: 768px) {
          text-align: start;
          width: 100%;
        }
      }
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        // margin: 0 20px;
      margin-bottom: 0;

        @media (min-width: 768px) {
          flex-direction: row;
          justify-content: space-between;
          gap: 50px;
        }

        .description {
          position: relative;
          flex: 0 0 100%;
          max-width: 100%;
          margin: 10px 0 0;

          @media (min-width: 768px) {
            flex: 0 0 50%;
            max-width: 50%;
            margin-block: 20px;

          }

          .topBlock {
            display: flex;
            flex-direction: row;
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
            @include text(var(--color-gold), 14px, uppercase, 700);
          }

          h2 {
            @include text(var(--color-black), clamp(20px, 4vw, 42px), uppercase, 500);
            margin: 20px 0 30px;
            @media (max-width: 768px) {
              margin: 10px 0 15px;
            }
          }

          p {
            @include text(var(--color-black), 16px, none, 400);
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
  }
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
  .eatLikeAKing {
    @include blockStyles;
    padding-bottom: 0;
    .topBlock {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 0;
      padding-bottom: clamp(10px, 2vw, 30px);
      gap: 12px;
      .accomodation {
        @include text(var(--color-gold), 14px, uppercase, 500);
        @media (max-width: 768px){
          margin-bottom: 15px;
        }
      }
      h4 {
        @include text(var(--color-black), clamp(20px, 4vw, 48px), uppercase, 500);
        .colorText {
          color: var(--color-gold);
        }
        @media (max-width: 768px) {
          text-align: start;
          width: 100%;
        }
      }
    }
  }
  .relaxLikeAKing {
    .topBlock {
      display: flex;
      align-items: center;
      flex-direction: column;
      padding-top: 40px;
      padding-bottom: clamp(10px, 2vw, 30px);
      gap: 12px;
      .accomodation {
        @include text(var(--color-gold), 14px, uppercase, 500);
        @media (max-width: 768px){
          margin-bottom: 15px;
        }
      }
      h4 {
        @include text(var(--color-black), clamp(20px, 4vw, 48px), uppercase, 500);
        .colorText {
          color: var(--color-gold);
        }
        @media (max-width: 768px) {
          text-align: start;
          padding-left: 20px;
          width: 100%;
        }
      }
    }
    .items {
      justify-content: space-between;
      position: relative;
      .rightItem {
        padding-left: 0;
        padding-right: 20px;
        flex: 1 1 50%;
        gap: 50px;
        width: 80%;
        .tittle{
          h2{
            @include text(var(--color-gold), clamp(16px, 5vw, 42px), uppercase, 600);
          }
        }
        p{
          width: 70%;
        }
        @media (max-width: 768px) {
          padding: 0;
          width: 100%;
          gap: 20px;
          button{
            margin-top: 40px !important;
          }
        }
      }
      .leftItem{
        flex: 1 1 50%;
        img{
          width: 100%;
        }
      }
      @media (max-width: 768px) {
        flex-direction: column-reverse;
        padding-block: 0;
        .rightItem{
          padding: 20px;
        }
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
        @include text(var(--color-white), clamp(30px, 5vw, 60px), uppercase, 500);
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
    @media (max-width: 525px) {
      padding: 0 20px 20px;
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
      min-height: 300px;
    }
    @media (max-width: 525px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 10px;
      img {
        width: 90%;
      }
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
        bottom: 15%;
        right: 5%;
        // width: 25%;
        width: clamp(200px, 25vw, 300px);
        border-radius: 10px;
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
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.4) 100%);
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
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
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
        // max-width: 70vw;
        text-align: center;
        p {
          white-space: pre-wrap;
          max-width: 60vw;
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
      margin: 20px 0 40px;
      .underLine {
        width: 80vw;
      }
    }
  }
}
</style>
