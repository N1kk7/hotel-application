<template>
  <div class="RestaurantCarusel">
    <div class="topRooms">
      <h2>{{ tittleName }}</h2>

      <div class="buttons">
        <button id="leftBtn" @click="slidePrev">
          <SvgIcon name="whiteArrow" size="medium" />
        </button>
        <button id="rightBtn" @click="slideNext">
          <SvgIcon name="goldArrow" size="medium" />
        </button>
      </div>
    </div>
    <div class="cafeCards">
      <swiper
        @swiper="onSwiper"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="cafe in cafeData" :key="cafe.id">
          <div class="card">
            <img :src="cafe.image" alt="cafe" />
            <div class="cardInfo">
              <h3 class="title">
                {{ cafe.name }}
              </h3>
              <ul class="cafeOption">
                <li>
                  <span class="distance">
                    <span class="meters"> 100 </span>
                    <span class="description"> meters </span>
                  </span>
                  <span class="option"> Distance from King's </span>
                </li>
                <li class="strokeSvg">
                  <SvgIcon name="cafeSuite" size="small" strokeWidth="0" />
                  <span class="option"> European cuisine </span>
                </li>
                <li>
                  <SvgIcon name="location" size="small" strokeWidth="0" />
                  <span class="option">
                    {{ cafe.location }}
                  </span>
                </li>
              </ul>
              <div class="cardButtons">
                <TertiaryButton
                  buttonText="Reserve a table"
                  bgColor="#171717"
                  textColor="white"
                  hoverColor="red"
                  id="blackBg"
                />
                <TertiaryButton buttonText="Contact" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  FreeMode, Pagination, Autoplay, Navigation,
} from 'swiper/modules';
import TertiaryButton from './Buttons/TertiaryButton.vue';
// import DistanceC from './DistanceC.vue';
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'RestaurantCarusel',
  components: {
    // DistanceC,
    SvgIcon,
    Swiper,
    SwiperSlide,
    TertiaryButton,
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
    const swiperInstance = ref(null);
    const cardSwiperInstance = ref(null);
    const slidesPerView = ref(3);
    const spaceBetween = ref(50);

    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        slidesPerView.value = 3;
        spaceBetween.value = 50;
      } else if (width >= 550 && width < 1024) {
        slidesPerView.value = 2;
        spaceBetween.value = 30;
      } else {
        slidesPerView.value = 1;
        spaceBetween.value = 20;
      }
    };
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const onCardSwiper = (swiper) => {
      cardSwiperInstance.value = swiper;
    };

    const slideNext = () => {
      swiperInstance.value.slideNext();
    };

    const slidePrev = () => {
      swiperInstance.value.slidePrev();
    };
    onMounted(() => {
      updateSlidesPerView();
      window.addEventListener('resize', updateSlidesPerView);
    });
    return {
      modules: [FreeMode, Pagination, Autoplay, Navigation],
      onSwiper,
      onCardSwiper,
      slideNext,
      slidePrev,
      swiperInstance,
      cardSwiperInstance,
      slidesPerView,
      spaceBetween,
    };
  },
  props: {
    tittleName: {
      type: String,
      required: true,
    },
    pathImg: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/style/mixins.scss";
@import "@/style/main.scss";

.RestaurantCarusel {
  margin-inline: 40px;
//   margin-bottom: 80px;
  .topRooms {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 20px;
    h2 {
      @include text(var(--color-black), clamp(16px, 5vw, 32px), uppercase, 500);
    //   flex: 1;
    }
    .buttons {
      display: flex;
      padding-right: 40px;
      button {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      #leftBtn {
        transform: rotate(180deg);
      }
    }
  }
  .cafeCards {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .swiper {
      padding: 0 40px 100px;

      .swiper-slide {
        box-shadow: 10px 10px 8px rgba(0, 0, 0, 0);
        transition: all ease 0.3s;
        height: fit-content;
        // overflow: hidden;
        .card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 0;
          transition: all ease 0.5s;
          img {
            width: 100%;
            object-fit: cover;
          }
          .cardInfo {
            padding: 10px clamp(10px, 2vw, 16px);
            background: white;
            position: relative;
            border: 1px solid var(--color-gold);
            border-top: 0;
            border-radius: 0 0 5px 5px;
            h3 {
              @include text(var(--color-black), clamp(12px, 1.6vw, 22px), unset, 700);
              text-transform: uppercase;
              text-align: start;
              margin-bottom: 10px;
              // min-height: 66px;
            }
            .cafeOption {
              li {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                list-style-type: none;
                margin: 8px 0;
                gap: 12px;
                .distance {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  border: 1px solid #d7b154;
                  border-radius: 10px;
                  padding: 3px;
                  color: #d7b154;
                  .meters {
                    @include text(var(--color-gold), 12px, unset, 800);
                    line-height: 120%;
                  }
                  .description {
                    @include text(var(--color-gold), 7px, unset, 700);
                    line-height: 110%;
                  }
                }
                svg {
                  border: 1px solid #d7b154;
                  border-radius: 10px;
                  padding: 2px;
                }
                .option {
                  @include text(var(--color-black), clamp(10px, 1.5vw, 20px), unset, 400);
                }
              }
            }
            .cardButtons {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
              gap: 10px;
              padding-top: 10px;
              margin-bottom: 10px;
              position: relative;
              .TertiaryButton {
                // padding: 16px clamp(10px, 2vw, 32px);
                padding: unset;
                padding: clamp(5px, 1.5vw, 10px);
                flex: 1 1 auto;
                span {
                  font-size: clamp(8px, 1.5vw, 13px);
                }
              }
            }
          }
        }
      }
      .swiper-slide-next{
        transform: scale(1.2);
        transition: all ease 0.5s;
        @media (max-width: 1024px) {
            & {
                transform: scale(1);

            }
        }
      }
    }
    @media (min-width: 1024px) {
      .swiper-slide:hover {
        box-shadow: 15px 25px 20px rgba(0, 0, 0, 0.25);
        transition: all ease 0.3s;
        .card {
          transform: scale(1.03);
          transition: all ease 0.5s;
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .RestaurantCarusel {
    margin-bottom: 0;
    .cafeCards {
      width: 100%;
      .swiper {
        padding: 0 40px 40px;
        .swiper-wrapper {
          .swiper-slide {
            // max-width: clamp(250px, 30vw, 460px) ;
            max-width: unset;

            .roomCard {
              max-width: unset;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .rooms {
    .topRooms {
      .buttons {
        display: none;
      }
    }
  }
}
@media (max-width: 425px) {
  .RestaurantCarusel {
    margin-inline: 5px;
    padding: 0;
    .cafeCards {
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
            max-width: unset;
            .card {
              max-width: unset;
            }
          }
        }
      }
    }
  }
}
</style>
