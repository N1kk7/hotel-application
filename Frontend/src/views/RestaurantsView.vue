<template>
  <div class="Page Restaurants">
    <div class="main" ref="mainDiv">
      <video
        playsinline
        autoplay
        loop
        muted
        :poster="posterImg"
        ref="mainImageBg"
      >
        <source src="../assets/images/restaurants/Kings-Restaurant.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="textBlock" ref="textBlock">
        <h1>Dine</h1>
        <h1 class="colorTitle">like a King</h1>
        <p class="description">
          Explore a wide range of dishes from buffet options to world-class gastronomy at Radimský
          Restaurant
        </p>
      </div>
      <div class="path">
        <router-link to="/">
          <span> Homepage </span>
        </router-link>
        <SvgIcon name="arrowRight" size="medium" />
        <span> restaurants </span>
      </div>
    </div>
    <div class="cafeBlock">
      <div class="blockWrapper">
        <div class="defaultBlock">
        <div class="description">
          <span class="topBlock"> Dine like a King </span>
          <h2>Radimský</h2>
          <h2 class="colorText"> á la carte restaurant</h2>
          <p>
            Indulge in the ultimate culinary experience while surrounded by
            the beautiful paintings by Czech impressionist Václav Radimský.
          </p>
          <p>
            Our skilled chef prepare gourmet dishes with carefully chosen fresh ingredients.
            We offer a wide selection of dishes to suit every palate.
          </p>
        </div>
        <swiper
          ref="cafeSwiper"
          :spaceBetween="30"
          :effect="'fade'"
          :navigation="{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }"
          @slideChange="onSlideChangeCafe"
          @swiper="onCafeSwiper"
          :modules="modules"
          :autoplay="true"
          class="mySwiper"
        >
          <swiper-slide v-for="slide in radimskySlides" :key="slide.id">
            <picture>
              <source
                :srcset="require(`@/assets/images/restaurants/mob/${slide.pathImg}`)"
                media="(max-width: 768px)"
              >
              <img
                :src="require(`@/assets/images/restaurants/${slide.pathImg}`)"
                alt="hotelImg"
            />
            </picture>
          </swiper-slide>
          <div class="buttonWrapper">
            <div class="swiper-button-prev">
              <SvgIcon name="longArrowLeft" size="large" fill="red" />
            </div>
            <div class="info">
              <p>{{ cafeCurrentSlide }}</p>
              <span>/</span>
              <p>{{ cafeTotalSlides }}</p>
            </div>
            <div class="swiper-button-next">
              <SvgIcon name="longArrowRight" size="large" fill="red" />
            </div>
          </div>
        </swiper>
      </div>
      </div>
    </div>
    <div class="pageItems">
      <h4 class="preTitle">RESTAURANT & BUFFET</h4>
      <h2 class="title">nearby RESTAURANTS</h2>
      <div class="sliderWrapper">
        <div class="cafeDescription">
          <h3 class="cafeName">Radimský</h3>
          <ul>
            <li>
              <DistanceC distance="800" meters="m" />
              <span class="option"> Distance from King's </span>
            </li>
            <li class="strokeSvg">
              <SvgIcon name="cafeSuite" size="medium" strokeWidth="0" />
              <span class="option"> European cuisine </span>
            </li>
            <li>
              <SvgIcon name="location" size="medium" strokeWidth="0" />
              <span class="option"> Rozvadov 7 </span>
            </li>
          </ul>
        </div>
        <div class="cafeImage">
          <picture>
            <source
              :srcset="require('@/assets/images/restaurants/mob/restSlider1.png')"
              media="(max-width: 768px)"
            >
            <img
              :src="require('@/assets/images/restaurants/restSlider1.png')"
              alt="cafe"
            />
          </picture>
        </div>
      </div>
    </div>
    <div class="RestaurantsWrapper">
      <RestaurantCarusel tittleName="Other restaurants" />
    </div>
    <div class="infoBlock">
      <div class="blockWrapper">
        <div class="defaultBlock">
          <div class="description">
            <span class="topBlock"> Dine like a King </span>
            <h2>We take hospitality</h2>
            <h2 class="colorText">and your comfort very seriously</h2>
            <p>
              Our ultimate goal is to make you feel like a King in our resort. Therefore, we serve a
              wide selection of freshly-prepared food at our buffet and special fine dishes at
              Radimsky restaurant. Our team is always at your disposal to make your stay at King's
              memorable.
            </p>
          </div>
          <picture>
            <source :srcset="require('@/assets/images/restaurants/mob/radimsky-team.jpg')">
            <img
              class="defaultImg"
              :src="require('@/assets/images/restaurants/radimsky-team.png')"
              alt="playKing"
            />
          </picture>
        </div>
      </div>
    </div>
    <RoomsCarusel tittleName="King's palace room" />
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import SvgIcon from '@/components/SvgIcon.vue';
import useAnimations from '@/animations/useAnimations';
import DistanceC from '@/components/DistanceC.vue';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
import RestaurantCarusel from '@/components/RestaurantCarusel.vue';
import mainBg from '@/assets/images/restaurants/mainBg.png';
import mobileBg from '@/assets/images/restaurants/mob/mainBg.png';
import 'swiper/swiper-bundle.css';

export default {
  name: 'RestaurantsComponent',
  components: {
    SvgIcon,
    DistanceC,
    RoomsCarusel,
    RestaurantCarusel,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      radimskySlides: [
        {
          id: 1,
          nameSlide: 'Prosciutto di <br/> Parma',
          pathImg: 'restImg1.jpg',
        },
        {
          id: 2,
          nameSlide: 'Argentinian <br/> Steak',
          pathImg: 'restImg2.jpg',
        },
        {
          id: 3,
          nameSlide: 'Sea <br/> Bass',
          pathImg: 'restImg3.jpg',
        },
        {
          id: 4,
          nameSlide: 'Beef <br/> Consommé',
          pathImg: 'restImg4.jpg',
        },
        {
          id: 5,
          nameSlide: 'Spicing <br/> things up',
          pathImg: 'restImg5.jpg',
        },
        {
          id: 6,
          nameSlide: 'Coordinating <br/> every step',
          pathImg: 'restImg6.jpg',
        },
        {
          id: 7,
          nameSlide: 'Grilled to <br/> perfection',
          pathImg: 'restImg7.jpg',
        },

      ],
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
          name: "McDonald/'s Rozvadov",
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
    const cafeSwiper = ref(null);
    const swiperLux = ref(null);
    const cafeCurrentSlide = ref(0);
    const cafeTotalSlides = ref(0);
    const luxCurrentSlide = ref(0);
    const luxTotalSlides = ref(0);
    const posterImg = ref('');
    const {
      mainDiv, textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

    const onSwiperLux = (swiper) => {
      swiperLux.value = swiper;
      luxTotalSlides.value = swiper.slides.length;
    };

    const onCafeSwiper = (swiper) => {
      cafeSwiper.value = swiper;
      cafeTotalSlides.value = swiper.slides.length;
    };

    const onSlideChangeCafe = () => {
      if (cafeSwiper.value) {
        cafeCurrentSlide.value = cafeSwiper.value.realIndex + 1;
      }
    };

    const onSlideChangeLux = () => {
      if (swiperLux.value) {
        luxCurrentSlide.value = swiperLux.value.realIndex + 1;
      }
    };

    const setPosterImg = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768) {
        posterImg.value = mainBg;
      } else {
        posterImg.value = mobileBg;
      }
    };
    onMounted(() => {
      setPosterImg();
      window.addEventListener('resize', setPosterImg);
    });
    onBeforeUnmount(() => {
      window.removeEventListener('resize', setPosterImg);
    });
    return {
      modules: [Autoplay, EffectFade, Navigation],
      swiperLux,
      luxCurrentSlide,
      luxTotalSlides,
      onSwiperLux,
      onSlideChangeLux,
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
      cafeSwiper,
      cafeCurrentSlide,
      cafeTotalSlides,
      onCafeSwiper,
      onSlideChangeCafe,
      posterImg,
      setPosterImg,
    };
  },
  mounted() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },
};
</script>

<style lang="scss">
@import "@/style/mixins.scss";
@import "@/style/main.scss";
.Restaurants {
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
    .path {
      @include alignPath;
    }
  }

  .cafeBlock {
    .blockWrapper {
      @include defaultBlock;
      .defaultBlock {
        @include blockStyles;
      }
    }
  }

  .pageItems {
    background-color: white;
    margin-block: 20px;
    padding: clamp(20px, 5vw, 40px);
    .preTitle {
      @include text(var(--color-gold), 14px, unset, 500);
    }
    .title {
      @include text(var(--color-black), clamp(24px, 4vw, 32px), uppercase, 500);
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
          @include text(var(--color-black), 24px, unset, 500);
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
        .cafeDescription {
          ul {
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
  .RestaurantsWrapper{
    @include blockStyles;
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
  }
  .infoBlock {
    .blockWrapper {
      @include defaultBlock;
      .defaultBlock {
        @include blockStyles;
      }
    }
  }
}
</style>
