<template>
  <section class="rooms">
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
    <div class="roomCards">
      <swiper
        @swiper="onSwiper"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :pagination="pagination"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="room in roomsWithBreak" :key="room.id">
          <div class="roomCard">
            <swiper
              @swiper="onCardSwiper"
              :pagination="pagination"
              :modules="modules"
              class="mySwiper"
            >
              <swiper-slide>
                <img :src="`${pathImg}./${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`${pathImg}./${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`${pathImg}./${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`${pathImg}./${room.image}`" alt="Room Image" />
              </swiper-slide>
            </swiper>
            <div class="cardInfo">
              <h3 v-html="room.breakTittle"></h3>

              <ul class="roomOption">
                <li>
                  <span class="distance">
                    <span class="meters"> 100 </span>
                    <span class="description"> meters </span>
                  </span>
                  <span class="option"> Distance from King's </span>
                </li>
                <li>
                  <SvgIcon name="doubleBed" size="medium" stroke="#D7B154" strokeWidth="0" />
                  <span class="option"> King bed </span>
                </li>
                <li>
                  <SvgIcon name="conditioner" size="medium" stroke="#D7B154" strokeWidth="0" />
                  <span class="option"> Air conditioner </span>
                </li>
                <li>
                  <SvgIcon name="wifi" size="medium" stroke="#D7B154" />
                  <span class="option"> Wi-Fi </span>
                </li>
              </ul>
              <div class="cardButtons">
                <TertiaryButton
                  buttonText="Check rates"
                  bgColor="#171717"
                  textColor="white"
                  hoverColor="red"
                  id="blackBg"
                />
                <TertiaryButton buttonText="Details" />
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  FreeMode, Pagination, Autoplay, Navigation,
} from 'swiper/modules';
import { ref, onMounted } from 'vue';
import SvgIcon from './SvgIcon.vue';
import TertiaryButton from './Buttons/TertiaryButton.vue';
import 'swiper/swiper-bundle.css';

export default {
  data() {
    return {
      rooms: [
        {
          id: 1,
          name: "King's Superior Double Room",
          image: 'room.png',
        },
        {
          id: 2,
          name: "King's Superior Twin Room",
          image: 'room.png',
        },
        {
          id: 3,
          name: "King's Superior Apartment Room",
          image: 'room.png',
        },
        {
          id: 1,
          name: "King's Superior Double Room",
          image: 'room.png',
        },
        {
          id: 2,
          name: "King's Superior Twin Room",
          image: 'room.png',
        },
        {
          id: 3,
          name: "King's Superior Apartment Room",
          image: 'room.png',
        },
      ],
    };
  },
  components: {
    TertiaryButton,
    SvgIcon,
    Swiper,
    SwiperSlide,
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
  computed: {
    roomsWithBreak() {
      return this.rooms.map((room) => ({
        ...room,
        breakTittle: room.name.replace("King's Superior", "King's Superior<br/>"),
      }));
    },
  },
  setup() {
    const swiperInstance = ref(null);
    const cardSwiperInstance = ref(null);
    const slidesPerView = ref(3);
    const spaceBetween = ref(40);

    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        slidesPerView.value = 3;
        spaceBetween.value = 40;
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
      swiperInstance,
      cardSwiperInstance,
      slidesPerView,
      spaceBetween,
      onSwiper,
      slideNext,
      slidePrev,
      onCardSwiper,
      updateSlidesPerView,
      pagination: {
        clickable: true,
      },
    };
  },
};
</script>

<style lang="scss">
@import "@/style/mixins.scss";
@import "@/style/main.scss";
.rooms {
  background: var(--color-light);
  margin-inline: 40px;
  // margin-bottom: 80px;
  .topRooms {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 20px;
    h2 {
      @include text(var(--color-black), clamp(20px, 5vw, 48px), uppercase, 500);
      flex: 1;
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
  .roomCards {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    @include blockStyles;
    margin: 0 0 50px;
    .swiper {
      padding: 0 40px 50px;
    }
    .swiper-pagination{
      display: none;
      @media (max-width: 768px) {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        align-items: center;
        width: 80vw;
        left: 50%;
            transform: translateX(-50%);
        .swiper-pagination-bullet{
          height: 5px;
          width: 100%;
          background: var(--color-textGrey);
          border-radius: 0;
        }
        .swiper-pagination-bullet-active{
          background: var(--color-gold);
        }

      }
    }
    .swiper-slide {
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0);
      transition: all ease 0.3s;
      .roomCard {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 0;
        transition: all ease 0.5s;
        .swiper {
          padding: 0;
          .swiper-wrapper {
            .swiper-slide {
              img {
                width: 100%;
                object-fit: cover;
              }
            }
          }
          .swiper-pagination {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding-bottom: 5px;
            width: 100%;
            margin-bottom: unset;
            gap: 1px;
            .swiper-pagination-bullet {
              width: 22%;
              background: white;
              opacity: 0.9;
              border-radius: 0;
              transition: 0.3s;
              height: 4px;
            }
            .swiper-pagination-bullet-active {
              background: var(--color-gold);
              transition: 0.3s;
            }
          }
        }
        .cardInfo {
          padding: 10px clamp(10px, 2vw, 16px);
          background: white;
          position: relative;
          h3 {
            @include text(var(--color-black), clamp(12px, 1.6vw, 22px), unset, 700);
            text-transform: uppercase;
            text-align: start;
            margin-bottom: 10px;
          }
          .roomOption {
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
                padding: 5px;
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
            flex-wrap: nowrap;
            gap: 10px;
            padding-top: 10px;
            margin-bottom: 10px;
            position: relative;
            .TertiaryButton {
              padding: unset;
              padding-block: clamp(5px, 1.5vw, 10px);
              flex: 1 1 auto;
              span {
                font-size: clamp(8px, 1.5vw, 13px);
              }
            }
          }
        }
      }
    }
    @media (min-width: 1024px) {
      .swiper-slide:hover {
        box-shadow: 15px 25px 20px rgba(0, 0, 0, 0.25);
        transition: all ease 0.3s;
        .roomCard {
          transform: scale(1.02);
          transition: all ease 0.5s;
        }
      }
    }

    @media (max-width: 768px) {
      margin: clamp(10px, 5vw, 40px);
      width: 90%;

    }
  }
}

@media (max-width: 1024px) {
  .rooms {
    .roomCards {
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
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
    margin-inline: 10px;
    .topRooms {
      .buttons {
        display: none;
      }
    }
    .roomCards {
      .swiper {
        padding: 0 clamp(5px, 3vw, 20px) 50px;
      }
    }
  }
}
@media (max-width: 425px) {
  .rooms {
    margin-inline: 5px;
    padding: 0;
    .roomCards {
      .swiper {
        .swiper-wrapper {
          .swiper-slide {
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
</style>
