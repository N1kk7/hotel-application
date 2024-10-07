<template>
    <div class="Page GuestRoom">
        <div class="main" ref="mainDiv">
            <img
                src="../assets/images/guest-room/GuestRoom.png"
                ref="mainImageBg"
                alt="Header Image" class="mainImage"
            />
            <div class="path">
                <router-link to="/">
                    <span>
                        Homepage
                    </span>
                </router-link>
                <SvgIcon name="arrowRight" size="medium"/>
                <router-link to="/rooms">
                    <span>
                        Rooms
                    </span>
                </router-link>
                <SvgIcon name="arrowRight" size="medium"/>
                <span>
                    Admiral suite
                </span>
            </div>
            <div class="bg"></div>

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
        <div class="accommodation">
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
            <TertiaryButton
                buttonText="Show more"
                color="black"
                ref="showMoreButton"
                v-show="showMoreBtn"
                @click="handleShowDetail"
            />

        </div>
        <RoomsCarusel tittleName="Similar CLASS Accommodations" pathImg="."/>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import SvgIcon from '@/components/SvgIcon.vue';
import { gsap } from 'gsap';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import TertiaryButton from '@/components/Buttons/TertiaryButton.vue';
import useAnimations from '@/animations/useAnimations';
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

    const toggleShowMoreBtn = () => {
      showMoreBtn.value = !showMoreBtn.value;
    };
    const collapseDetail = (index) => {
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

    const animateIn = () => {
      if (showMoreButton.value) {
        gsap.fromTo(
          showMoreButton.value,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5 },
        );
      }
    };

    const animateOut = () => {
      if (showMoreButton.value) {
        gsap.to(
          showMoreButton.value,
          { opacity: 0, y: -20, duration: 0.5 },
        );
      }
    };

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
    const {
      mainDiv,
      textBlock, pageBlock, blockWrapper, mainImageBg, animatedTitle,
    } = useAnimations();

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
      mainDiv,
      textBlock,
      pageBlock,
      blockWrapper,
      mainImageBg,
      animatedTitle,
    };
  },
};
</script>

<style scoped lang="scss">
    @import '@/style/mixins.scss';
    @import '@/style/main.scss';

    .GuestRoom {
        @include pageStyle;
        .main{
           position: relative;
           overflow: hidden;
           .mainImage{
            @include mainBg;
            }
            .path{
              @include alignPath;
            }
            .bg{
              @include gradientBg;
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
                            @include text(
                              var(--color-black), clamp(17px, 1.5vw, 20px), uppercase, 500
                            );
                            @media screen and (max-width: 1024px){
                              font-size: 20px;
                            }
                        }
                        .subtitle{
                            @include text(var(--color-black), 16px, unset, 400);
                        }
                    }

                }
                @media screen and (max-width: 1024px){
                  flex-direction: column;
                  gap: 4vw;
                  align-items: baseline;
                  width: fit-content;
                  margin: 0 auto;
                  li {
                    width: 100%;
                    justify-content: flex-start;
                    button{
                      margin: 20px auto 0;
                      padding: clamp(7px, 4vw, 20px) clamp(10px, 20vw, 50px);
                    }
                  }
                }
            }
        }

        .accommodation{
            margin: 40px 0 clamp(50px, 5vw, 100px);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            span{
                @include text(var(--color-textGrey), 16px, uppercase, 500);
            }
            h2{
                @include text(var(--color-gold), clamp(30px, 5vw, 40px), uppercase, 600);
            }
            p{
                margin-bottom: 20px;
                max-width: 60%;
                text-align: center;
                @include text(var(--color-textGrey), 20px, unset, 400);
            }
            .underline{
                width: 20%;
                background: var(--color-gold);
                height: 1px;
            }
        }
        .swiperBlock{
            h2{
                text-align: center;
                @include text(var(--color-gold), clamp(30px, 5vw, 40px), uppercase, 600);

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
              @include text(var(--color-gold), clamp(30px, 5vw, 40px), uppercase, 600);
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
                      @include text(
                        var(--color-textGrey), clamp(18px, 2.5vw, 28px), uppercase, 500
                      );
                    }
                }
                ul{
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    row-gap: 24px;
                    padding-bottom: 80px;
                    gap: 10px;
                    li{
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        span{
                            @include text(
                              var(--color-textGrey), clamp(14px, 2.5vw, 20px), unset, 400
                              );
                              word-break: break-word;
                        }
                    }
                    @media screen and (max-width: 600px){
                      grid-template-columns: repeat(2, 1fr);
                    }

                }
            }
            .TertiaryButton{
                margin-top: -30px;
            }
        }

    }
</style>
