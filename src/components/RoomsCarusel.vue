<template>
  <section class="rooms">
    <div class="topRooms">
      <!-- <h2>KING'S PALACE ROOM</h2> -->
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
        <!-- <div>
            :navigation="true"

              :autoplay="{
          delay: 3500,
        }"
        </div> -->
      <swiper
        @swiper="onSwiper"
        :slidesPerView="slidesPerView"
        :spaceBetween="spaceBetween"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="room in rooms" :key="room.id">
          <div class="roomCard">
            <swiper
             @swiper="onCardSwiper"
             :pagination="pagination"
             :modules="modules"
             class="mySwiper"
            >
              <swiper-slide>
                <img :src="`/${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`/${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`/${room.image}`" alt="Room Image" />
              </swiper-slide>
              <swiper-slide>
                <img :src="`/${room.image}`" alt="Room Image" />
              </swiper-slide>
            </swiper>
            <!-- <img :src="`/${room.image}`" alt="Room Image" /> -->
            <div class="cardInfo">
              <h3>{{ room.name }}</h3>
              <ul class="roomOption">
                <li>
                  <span class="distance">
                    <span class="meters"> 100 </span>
                    <span class="description"> meters </span>
                  </span>
                  <span class="option"> Distance from King's </span>
                </li>
                <li>
                  <SvgIcon name="doubleBed" size="medium" stroke="#D7B154" strokeWidth="0"/>
                  <span class="option"> King bed </span>
                </li>
                <li>
                  <SvgIcon name="conditioner" size="medium" stroke="#D7B154" strokeWidth="0"/>
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
// import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
  FreeMode, Pagination, Autoplay, Navigation,
} from 'swiper/modules';
import { ref, onMounted } from 'vue';
import SvgIcon from './SvgIcon.vue';
import TertiaryButton from './Buttons/TertiaryButton.vue';
// import Additional3 from './Buttons/Additional3.vue';
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
    // cardItems: {
    //   type: Array,
    //   required: true,
    // },
  },
  setup() {
    const swiperInstance = ref(null);
    const cardSwiperInstance = ref(null);
    const slidesPerView = ref(3);
    const spaceBetween = ref(40);
    // const getImagePath = (img) => { require(`@/assets/images/${img}`); };
    // const getImagePath = (image) => new URL(`/images/${image}`, import.meta.url).href;

    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      console.log(spaceBetween.value, slidesPerView.value);
      if (width >= 1024) {
        slidesPerView.value = 3;
        spaceBetween.value = 40;
      } else if (width >= 430 && width < 1024) {
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
    // onMounted(() => {
    //   console.log(props.cardItems);
    // });
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
      // getImagePath,
    //   getImagePath,
    };
  },
};
</script>

<style  lang="scss">
@import "@/style/mixins.scss";
@import "@/style/main.scss";
.rooms {
  background: var(--color-light);
  margin-inline: 40px;
  .topRooms {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-block: 20px;
    h2 {
      @include text(var(--color-black), 48px, uppercase, 500);
      // text-align: center;
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
    margin-bottom: 80px;
    display: flex;
    justify-content: space-around;
    gap: 10px;
    .swiper-slide{
      // max-width: 460px;
      .roomCard {
      position: relative;
      width: 100%;
      height: 100%;
      // max-width: 460px;
      .swiper{
        .swiper-wrapper{
          .swiper-slide{
          // height: auto;
          img{
            min-height: 300px;
            width: 100%;
            // height: 100%;
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
          gap: 1px;
          .swiper-pagination-bullet {
            width: 22%;
            background: white;
            opacity: 0.9;
            border-radius: 0;
            transition: 0.3s;
            height: 4px;
          }
          .swiper-pagination-bullet-active{
            background: var(--color-gold);
            transition: 0.3s;

          }
        }
      }
      .cardInfo {
        padding: clamp(14px, 2vw, 24px);
        background: white;
        h3 {
          @include text(var(--color-black), clamp(12px, 1.7vw, 26px), unset, 500);
          text-transform: uppercase;
          white-space: nowrap;
          margin-bottom: 20px;
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
                @include text(var(--color-gold), 15px, unset, 800);
              }
              .description {
                @include text(var(--color-gold), 12px, unset, 700);
              }
            }
            svg {
              border: 1px solid #d7b154;
              border-radius: 10px;
              padding: 7px;
            }
            .option {
              @include text(var(--color-black), 20px, unset, 400);
            }
          }
        }
        .cardButtons {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 20px;
          margin-bottom: 25px;
          .TertiaryButton {
            flex: 1;
          }
        }
      }
    }
    }

  }
}
@media (max-width: 1024px) {
      .rooms{
        .roomCards{
          .swiper{
            .swiper-wrapper{
              .swiper-slide{
                // max-width: clamp(250px, 30vw, 460px) ;
                max-width: unset;

                .roomCard{
                  max-width: unset;
                }
              }
            }
          }
        }
      }
    }
    @media (max-width: 425px) {
      .rooms{
        margin-inline: 15px;
        .roomCards{
          .swiper{
            .swiper-wrapper{
              .swiper-slide{
                // max-width: clamp(250px, 30vw, 460px) ;
                max-width: unset;
                // left: 25px;
                .roomCard{
                  // max-width: clamp(250px, 30vw, 460px);
                  max-width: unset;
                // left: 25px;

                }
              }
            }
          }
        }
      }
    }
</style>
