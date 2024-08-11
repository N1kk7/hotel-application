<template>
      <section class="rooms">
    <div class="topRooms">
        <!-- <h2>KING'S PALACE ROOM</h2> -->
        <h2>{{ tittleName }}</h2>

        <div class="buttons">
            <button id="leftBtn" @click="slidePrev">
                <SvgIcon name="whiteArrow" size="medium"/>
            </button>
            <button id="rightBtn" @click="slideNext">
                <SvgIcon name="goldArrow" size="medium"/>
            </button>
        </div>

    </div>
    <div class="roomCards">
        <swiper
@swiper="onSwiper"
        :autoplay="{
            delay: 3500,
        }"
        :navigation="true"
        :slidesPerView="3"
        :spaceBetween="30"
        :modules="modules"
        class="mySwiper"
        >
            <swiper-slide v-for="room in rooms" :key="room.id">
                <div class="roomCard" >
                    <img :src="room.image" alt="Room Image" />
                    <div class="cardInfo">
                        <h3>{{ room.name }}</h3>
                        <ul class="roomOption">
                            <li>
                                <span class="distance">
                                    <span class="meters">
                                        100
                                    </span>
                                    <span class="description">
                                        meters
                                    </span>
                                </span>
                                <span class="option">
                                    Distance from King's
                                </span>
                            </li>
                            <li>
                                <SvgIcon name="doubleBed" size="medium" stroke="#D7B154"/>
                                <span class="option">
                                    King bed
                                </span>
                            </li>
                            <li>
                                <SvgIcon  name="conditioner" size="medium" stroke="#D7B154"/>
                                <span class="option">
                                    Air conditioner
                                </span>
                            </li>
                            <li>
                                <SvgIcon name="wifi" size="medium" stroke="#D7B154"/>
                                <span class="option">
                                    Wi-Fi
                                </span>
                            </li>
                        </ul>
                        <div class="cardButtons">
                            <TertiaryButton
                                buttonText="Check rates"
                                bgColor="#171717"
                                textColor="white"
                                hoverColor="red"
                                id="blackBg"/>
                            <TertiaryButton buttonText="Details"/>
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
import { ref } from 'vue';
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
          image: './room.png',
        },
        {
          id: 2,
          name: "King's Superior Twin Room",
          image: './room.png',
        },
        {
          id: 3,
          name: "King's Superior Apartment Room",
          image: './room.png',
        },
        {
          id: 1,
          name: "King's Superior Double Room",
          image: './room.png',
        },
        {
          id: 2,
          name: "King's Superior Twin Room",
          image: './room.png',
        },
        {
          id: 3,
          name: "King's Superior Apartment Room",
          image: './room.png',
        },
      ],
    };
  },
  components: {
    // PrimaryButton,
    TertiaryButton,
    SvgIcon,
    Swiper,
    SwiperSlide,
    // Additional3,
  },
  props: {
    tittleName: {
      type: String,
      required: true,
    },
  },
  setup() {
    const swiperInstance = ref(null);

    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };

    const slideNext = () => {
      swiperInstance.value.slideNext();
    };

    const slidePrev = () => {
      swiperInstance.value.slidePrev();
    };
    return {
      modules: [FreeMode, Pagination, Autoplay, Navigation],
      swiperInstance,
      onSwiper,
      slideNext,
      slidePrev,
    };
  },
};
</script>

<style scoped lang="scss">
 @import '@/style/mixins.scss';
 @import '@/style/main.scss';
.rooms{
        background: var(--color-light);
        .topRooms{
            display: flex;
        align-items: center;
        justify-content: space-between;
        margin-block: 20px;
        h2{
            @include text(var(--color-black), 48px, uppercase, 500);
            text-align: center;
            flex: 1;
        }
        .buttons{
            display: flex;
            button{
                display: flex;
            align-items: center;
            justify-content: center;
            }
            #leftBtn{
                transform: rotate(180deg);
            }
        }
      }
      .roomCards{
        margin-bottom: 80px;
        display: flex;
    justify-content: space-around;
    gap: 10px;
        .roomCard{
            position: relative;
            width: 100%;
            height: 100%;
            .cardInfo{
                h3{
                    @include text(var(--color-black), clamp(12px, 1.7vw, 26px), unset, 500);
                    text-transform: uppercase;
                    white-space: nowrap;
                }
                .roomOption{
                    li{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        list-style-type: none;
                        margin: 8px 0;
                        gap: 10px;
                        .distance{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            border: 1px solid #D7B154;
                            border-radius: 10px;
                            padding: 5px;
                            color: #D7B154;
                            .meters{
                                @include text(var(--color-black), 20px, unset, 500);
                            }
                            .description{
                            @include text(var(--color-black), 12px, unset, 500);
                            }
                        }
                        svg{
                            border: 1px solid #D7B154;
                            border-radius: 10px;
                            padding: 7px;
                        }
                        .option{
                            @include text(var(--color-black), 20px, unset, 400);
                        }
                    }
                }
                .cardButtons{
                    display: flex;
                    justify-content: space-between;
                    padding-inline: 10px;
                    gap: 10px;
                    margin-bottom: 25px;
                    .TertiaryButton{
                        flex: 1;
                    }

                }
            }

            }

        }
      }
</style>
