<template>
    <div class="Page GuestRoom">
        <div class="main">
            <img
                src="../assets/images/guest-room/GuestRoom.png"
                alt="Header Image" class="mainImage"
            />
        </div>
        <div class="kingOption">
            <ul>
                <li>
                    <SvgIcon name="parking" size="large" stroke="#D7B154"/>
                    <div class="description">
                        <span class="title">
                            Free
                        </span>
                        <span class="subtitle">
                            Parking
                        </span>
                    </div>
                </li>
                <li>
                    <div class="distance">
                        <span>
                            1,2 km
                        </span>
                    </div>
                    <div class="description">
                        <span class="title">
                            Distance to KING’s
                        </span>
                        <span class="subtitle">
                            From your room
                        </span>
                    </div>
                </li>
                <li>
                    <SvgIcon name="wifi" size="large" stroke="#D7B154"/>
                    <div class="description">
                        <span class="title">
                            Super King bed
                        </span>
                        <span class="subtitle">
                            210cm
                        </span>
                    </div>
                </li>
                <li>
                    <SvgIcon name="conditioner" size="large" stroke="#D7B154"
                    strokeWidth="0"
                    />
                    <div class="description">
                        <span class="title">
                            Air Conditioner
                        </span>
                        <span class="subtitle">
                            210cm
                        </span>
                    </div>
                </li>
                <li>
                    <PrimaryButton buttonText="Check availability"/>
                </li>
            </ul>
        </div>
        <div class="accomodation">
            <span>
                Accomodation
            </span>
            <h2>
                Kings Leon Suite
            </h2>
            <p>
                A pleasant Superior-class room with a large double
                bed and one single bed. Accommodates up to three people.
            </p>
            <div class="underline"></div>

        </div>
        <div class="swiperBlock">
            <h2>
                Gallery
            </h2>
            <div>

            </div>
            <swiper
              :autoplay="{ delay: 3000 }"
              :slides-per-view="'auto'"
              :centered-slides="true"
              :space-between="30"
              :modules="modules"
              class="mySwiper"
            >
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/images/guest-room/Gallery1.png" alt="gallery-img">
                </swiper-slide>
            </swiper>
        </div>
        <div class="details">
            <h1>
                Details
            </h1>
            <div v-for="(detail, index) in showItems" :key="detail.id"
            class="detailsGroup"
            :id="`detail-${detail.id}`"
            >
                <div class="tittle">
                    <h3>
                    <!-- Bed & Bath -->
                        {{ detail.tittle }}
                    </h3>
                    <SvgIcon
                    name="topBtn"
                    size="medium"
                    v-show="detail.id !== 1" @click="collapseDetail(index)"/>
                </div>
                <ul>
                    <li v-for="item in detail.details" :key="item.id">
                        <SvgIcon
                        :name="item.nameSvg"
                        size="large" :strokeWidth="item.strokeWidth" stroke="#D7B154"/>
                        <span>
                            <!-- Hair Dryer -->
                             {{ item.description }}
                        </span>
                    </li>
                </ul>
            </div>
            <!-- <transition name="fade"> -->
              <TertiaryButton
                  buttonText="Show more"
                  color="black"
                  ref="showMoreButton"
 v-show="showMoreBtn"
                  @click="handleShowDetail"
              />
            <!-- </transition> -->

        </div>
        <RoomsCarusel tittleName="Similar CLASS Accomodations"/>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import SvgIcon from '@/components/SvgIcon.vue';
import { gsap } from 'gsap';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import TertiaryButton from '@/components/Buttons/TertiaryButton.vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import { Pagination, Autoplay } from 'swiper/modules';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
// import RoomsData from '@/Data/RoomsData.json';

import {
  ref, onMounted, nextTick, watch,
} from 'vue';
import 'swiper/swiper-bundle.css';

gsap.registerPlugin();

export default {
  name: 'KingsSuiteView',
  components: {
    SvgIcon,
    PrimaryButton,
    TertiaryButton,
    Swiper,
    SwiperSlide,
    RoomsCarusel,
  },
  data() {
    return {
      // RoomsData,
    };
  },
  setup() {
    const showMoreBtn = ref(true);
    const showMoreButton = ref(null);

    const detailItems = ref([
      {
        id: 1,
        tittle: 'Room Highlights',
        details: [{
          id: 1,
          nameSvg: 'doubleBed',
          description: 'Double king size bed',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'safe',
          description: 'In-room safe',
          strokeWidth: '0',
        },
        {
          id: 3,
          nameSvg: 'memoryMatress',
          description: 'Memory form matress',
          strokeWidth: '0',
        },
        {
          id: 4,
          nameSvg: 'noSmoking',
          description: 'Non-smoking room',
          strokeWidth: '1',
        },
        {
          id: 5,
          nameSvg: 'linenIcon',
          description: 'High quality linen',
          strokeWidth: '0',
        },
        {
          id: 6,
          nameSvg: 'parking',
          description: 'Free parking',
          strokeWidth: '1',
        },
        ],

      },
      {
        id: 2,
        tittle: 'Bed & bath',
        details: [{
          id: 1,
          nameSvg: 'heatedFloor',
          description: 'Bathroom floor heating',
          strokeWidth: '2',
        },
        {
          id: 2,
          nameSvg: 'shower',
          description: 'Shower',
          strokeWidth: '0',
        },
        {
          id: 3,
          nameSvg: 'bathAmenities',
          description: 'Bath amenities',
          strokeWidth: '0',
        },
        {
          id: 4,
          nameSvg: 'bathrobe',
          description: 'Bathrobe and slippers',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 3,
        tittle: 'Technology',
        details: [{
          id: 1,
          nameSvg: 'wifi',
          description: 'Free high-speed Wi-Fi',
          strokeWidth: '1',
        },
        {
          id: 2,
          nameSvg: 'climateControl',
          description: 'Room temperature control',
          strokeWidth: '2',
        },
        {
          id: 3,
          nameSvg: 'smartTv',
          description: 'Smart TV (40 inches)',
          strokeWidth: '0',
        },
        {
          id: 4,
          nameSvg: 'miniFridge',
          description: 'Fridge',
          strokeWidth: '0',
        },
        ],
      },
    ]);
    const showItems = ref([]);
    // console.log(RoomsData, 'ololo');

    const handleShowDetail = () => {
      const existingIDs = showItems.value.map((item) => item.id);
      const foundElem = detailItems.value.find((elem) => !existingIDs.includes(elem.id));

      if (foundElem) {
        showItems.value.push(foundElem);
        nextTick(() => {
          const element = document.querySelector(`#detail-${foundElem.id}`);
          gsap.fromTo(element, { height: 0 }, { height: 'auto', duration: 0.5 });
        });
        showMoreBtn.value = detailItems.value.length !== showItems.value.length;
      }
    };
    // gsap.fromTo(showMoreBtn, { height: 0 }, { height: 'auto', duration: 3.5 });

    // Функция для управления состоянием кнопки "Показать больше"
    const toggleShowMoreBtn = () => {
      showMoreBtn.value = !showMoreBtn.value;
    };
    const collapseDetail = (index) => {
    //   showItems.value.splice(index, 1);
      // const element = document.querySelector(`#detail-${showItems.value[index].id}`);
      // //   gsap.to(element, {
      // //     height: 0,
      // //     duration: 0.5,
      // //     onComplete: () => {
      // //       showItems.value.splice(index, 1);
      // //     },
      // //   });
      // console.log(showItems.value.length, '1');
      // gsap.to(element, {
      //   height: 10, // анимируем до небольшой высоты
      //   duration: 0.3,
      //   onComplete: () => {
      //     gsap.to(element, {
      //       height: 0, // затем анимируем до 0
      //       duration: 0.2,
      //       onComplete: () => {
      //         showItems.value.splice(index, 1);
      //         showMoreBtn.value = detailItems.value.length !== showItems.value.length;
      //       },
      //     });
      //   },
      // });
      // console.log(showItems.value.length, '2');
      const element = document.querySelector(`#detail-${showItems.value[index].id}`);
      if (element) {
        gsap.to(element, {
          height: 0,
          autoAlpha: 0,
          duration: 0.5,
          onComplete: () => {
            showItems.value.splice(index, 1);
            showMoreBtn.value = detailItems.value.length !== showItems.value.length;
          },
        });
      }
    };

    // Функция анимации появления
    const animateIn = () => {
      if (showMoreButton.value) {
        gsap.fromTo(
          showMoreButton.value,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
        );
      }
    };

    // Функция анимации исчезновения// Функция анимации исчезновения
    const animateOut = () => {
      if (showMoreButton.value) {
        gsap.to(
          showMoreButton.value,
          { opacity: 0, y: -20, duration: 0.5 },
        );
      }
    };

    // Управляем анимацией в зависимости от состояния showMoreBtn
    watch(showMoreBtn, async (newValue) => {
      await nextTick(); // Ждем, пока элемент отобразится
      if (newValue) {
        animateIn();
      } else {
        animateOut();
      }
    });

    onMounted(() => {
      showItems.value.push(detailItems.value[0]);
      if (showMoreBtn.value) {
        animateIn();
      }
    });
    // onMounted(async () => {
    //   if (showMoreBtn.value) {
    //     await nextTick(); // Ждем, пока элемент отобразится
    //     animateIn();
    //   }
    // });

    return {
      modules: [Pagination, Autoplay],
      showMoreBtn,
      detailItems,
      showItems,
      handleShowDetail,
      collapseDetail,
      toggleShowMoreBtn,
      animateIn,
      animateOut,
      showMoreButton,
    };
  },
};
</script>

<style scoped lang="scss">
    @import '@/style/mixins.scss';
    @import '@/style/main.scss';

  //   .fade-enter-active, .fade-leave-active {
  // transition: opacity 0.5s;
  //   }
  //   .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  //     opacity: 0;
  //   }

    //   /* Определяем анимацию для появления и исчезновения */
    // .fade-enter-active, .fade-leave-active {
    //   transition: opacity 0.5s;
    // }
    // .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
    //   opacity: 0;
    // }
/* Определяем анимацию для появления и исчезновения */
// .fade-enter-active, .fade-leave-active {
//   transition: opacity 0.5s;
// }
// .fade-enter, .fade-leave-to {
//   opacity: 0;
// }

    .GuestRoom {
        @include pageStyle;
        .main{
           position: relative;
           .mainImage{
            @include mainBg;
            }
        }

        .kingOption{
            background: var(--color-white);
            ul{
                display: flex;
                justify-content: space-evenly;
                align-items: center;
                padding-block: 45px;
                li{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    .distance{
                        width: 53px;
                        height: 53px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: var(--color-gold);
                        border-radius: 50%;
                        span{
                          @include text(var(--color-white), 16px, unset, 700);
                        }

                    }
                    .description{
                        display: flex;
                        flex-direction: column;
                        // gap: 10px;
                        .title{
                            @include text(var(--color-black), 20px, uppercase, 500);
                        }
                        .subtitle{
                            @include text(var(--color-black), 16px, unset, 400);
                        }
                    }

                }
            }
        }

        .accomodation{
            margin: 40px 0 100px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            span{
                @include text(var(--color-black), 14px, uppercase, 500);
            }
            h2{
                @include text(var(--color-black), 40px, uppercase, 600);
            }
            p{
                margin-bottom: 20px;
                max-width: 60%;
                text-align: center;
                @include text(var(--color-black), 20px, unset, 400);
            }
            .underline{
                width: 20%;
                background: black;
                height: 1px;
            }
        }
        .swiperBlock{
            h2{
                text-align: center;
                @include text(var(--color-black), 40px, uppercase, 600);
                margin-bottom: 40px;
            }
            .swiper{
              width: 100%;
              height: 100%;
                .swiper-wrapper{
                    .swiper-slide{
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      max-width: 80%;

                    }
                    .swiper-slide img {
                      display: block;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }
                    .swiper-slide-next,
                    .swiper-slide-prev{
                    img{
                      opacity: 0.5;
                    }
                  }
                }
            }
        }
        .details{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 100px;
            margin-bottom: 80px;
            h1{
                @include text(var(--color-black), 40px, uppercase, 600);
                margin-bottom: 40px;
            }
            .detailsGroup{
                display: flex;
                flex-direction: column;
                gap: 32px;
                width: 80%;
                // margin-bottom: 80px;
                overflow: hidden;
                .tittle{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    h3{
                        @include text(var(--color-black), 28px, uppercase, 500);
                    }
                }
                ul{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    row-gap: 24px;
                    padding-bottom: 80px;
                    li{
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        span{
                            @include text(var(--color-black), 20px, unset, 400);
                        }
                    }

                }
            }
            .TertiaryButton{
                margin-top: -30px;
            }
        }

    }
</style>
