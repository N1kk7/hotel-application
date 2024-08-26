<template>
    <div class="Page KingsSuite">
        <div class="main" ref="mainDiv">
            <img
                src="../assets/images/king-suite/KingsSuite.png"
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
                    King suite
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
            <div class="swiper">
                <!-- <img src="../assets/images/king-suite/gallery1.png" alt="gallery"> -->
                <swiper
                :autoplay="{ delay: 3000 }"
              :slides-per-view="'auto'"
              :centered-slides="true"
              :space-between="30"
              :modules="modules"
              class="mySwiper"
                >
                    <swiper-slide>
                        <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                        <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                    <swiper-slide>
                      <img src="../assets/images/king-suite/gallery1.png" alt="gallery-img">
                    </swiper-slide>
                </swiper>
            </div>
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
        <RoomsCarusel tittleName="Similar CLASS Accomodations" pathImg="."/>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import { gsap } from 'gsap';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import TertiaryButton from '@/components/Buttons/TertiaryButton.vue';
import useAnimations from '@/animations/useAnimations';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Autoplay } from 'swiper/modules';
import RoomsCarusel from '@/components/RoomsCarusel.vue';
import 'swiper/swiper-bundle.css';

import {
  ref, onMounted, nextTick, watch,
} from 'vue';

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
    };
  },
  setup() {
    const showMoreBtn = ref(true);
    const showMoreButton = ref(null);

    const detailItems = ref([
      {
        id: 1,
        tittle: 'Bed & Bath',
        details: [{
          id: 1,
          nameSvg: 'hairDryer',
          description: 'Hair Dryer',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'heatedFloor',
          description: 'Heated Floor',
          strokeWidth: '0',
        },
        {
          id: 3,
          nameSvg: 'additionalBath',
          description: ' Additional bathroom',
          strokeWidth: '0',
        },
        {
          id: 4,
          nameSvg: 'twoSingleBed',
          description: 'Two single beds',
          strokeWidth: '0',
        },
        {
          id: 5,
          nameSvg: 'beautyAids',
          description: 'Beauty aids',
          strokeWidth: '2',
        },
        {
          id: 6,
          nameSvg: 'bidet',
          description: 'Bidet',
          strokeWidth: '0',
        },
        {
          id: 7,
          nameSvg: 'premiumToilet',
          description: 'Premium toilet',
          strokeWidth: '1',
        },
        {
          id: 8,
          nameSvg: 'closet',
          description: 'Closet',
          strokeWidth: '2',
        },
        {
          id: 9,
          nameSvg: 'bathrobe',
          description: 'Bathrobe',
          strokeWidth: '0',
        },
        {
          id: 10,
          nameSvg: 'bathRobeSet',
          description: 'Bathroom amenities set',
          strokeWidth: '0',
        },
        {
          id: 11,
          nameSvg: 'superKingBed',
          description: 'Super King bed',
          strokeWidth: '0',
        },
        {
          id: 12,
          nameSvg: 'cosmeticMirror',
          description: 'Cosmetic mirror',
          strokeWidth: '0',
        },
        ],

      },
      {
        id: 2,
        tittle: 'Food & Drinks',
        details: [{
          id: 1,
          nameSvg: 'teaSet',
          description: 'Tea set',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 3,
        tittle: 'Interior & Furnishings',
        details: [{
          id: 1,
          nameSvg: 'electronicLock',
          description: 'Electronic Lock',
          strokeWidth: '2',
        },
        {
          id: 2,
          nameSvg: 'highSeilings',
          description: 'High seilings',
          strokeWidth: '2',
        },
        {
          id: 3,
          nameSvg: 'exclusiveFurniture',
          description: 'Exclusive furniture',
          strokeWidth: '2',
        },
        {
          id: 4,
          nameSvg: 'carpet',
          description: 'Carpet',
          strokeWidth: '0',
        },
        {
          id: 5,
          nameSvg: 'twoRooms',
          description: 'Two rooms',
          strokeWidth: '1',
        },
        {
          id: 6,
          nameSvg: 'centralCond',
          description: 'Central conditioning',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 4,
        tittle: 'Kitchen accessories',
        details: [{
          id: 1,
          nameSvg: 'flatware',
          description: 'Flatware',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'glasses',
          description: 'Glasses',
          strokeWidth: '2',
        },
        {
          id: 3,
          nameSvg: 'diningArea',
          description: 'Dining Area',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 5,
        tittle: 'Living area',
        details: [{
          id: 1,
          nameSvg: 'desk',
          description: 'Desk',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'clothesRack',
          description: 'Clothes rack',
          strokeWidth: '0',
        },
        {
          id: 3,
          nameSvg: 'upholsteredFurniture',
          description: 'Upholstered furniture',
          strokeWidth: '2',
        },
        {
          id: 4,
          nameSvg: 'livingArea',
          description: 'Living area',
          strokeWidth: '0',
        },
        {
          id: 5,
          nameSvg: 'sofa',
          description: 'Sofa',
          strokeWidth: '0',
        },
        {
          id: 6,
          nameSvg: 'armchair',
          description: 'Armchairs',
          strokeWidth: '2',
        },
        {
          id: 7,
          nameSvg: 'conferenceTable',
          description: 'Conference table',
          strokeWidth: '0',
        },
        {
          id: 8,
          nameSvg: 'chairs',
          description: 'Chairs',
          strokeWidth: '0',
        },
        {
          id: 9,
          nameSvg: 'coffeeTable',
          description: 'Coffee table',
          strokeWidth: '0',
        },
        {
          id: 10,
          nameSvg: 'wardrobe',
          description: 'Wardrobe',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 6,
        tittle: 'Services',
        details: [{
          id: 1,
          nameSvg: 'roomServices',
          description: 'Room Services',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'parking',
          description: 'Free parking',
          strokeWidth: '0',
        },
        ],
      },
      {
        id: 7,
        tittle: 'Technology',
        details: [{
          id: 1,
          nameSvg: 'smartTv',
          description: 'Smart TV',
          strokeWidth: '0',
        },
        {
          id: 2,
          nameSvg: 'climateControl',
          description: 'Climate control system',
          strokeWidth: '2',
        },
        {
          id: 3,
          nameSvg: 'safe',
          description: 'Safe',
          strokeWidth: '0',
        },
        {
          id: 4,
          nameSvg: 'wifi',
          description: 'Wi-Fi',
          strokeWidth: '0',
        },
        {
          id: 5,
          nameSvg: 'washerDryer',
          description: 'Washer and dryer',
          strokeWidth: '0',
        },
        {
          id: 6,
          nameSvg: 'kettle',
          description: 'Kettle',
          strokeWidth: '0',
        },
        {
          id: 7,
          nameSvg: 'freezer',
          description: 'Freezer',
          strokeWidth: '2',
        },
        {
          id: 8,
          nameSvg: 'ironingBoard',
          description: 'Ironing board',
          strokeWidth: '0',
        },
        {
          id: 9,
          nameSvg: 'miniFridge',
          description: 'Mini bar',
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
      await nextTick();
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
      pageBlock, blockWrapper, mainImageBg,
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
      pageBlock,
      blockWrapper,
      mainImageBg,
    };
  },
};
</script>

<style scoped lang="scss">
    @import '@/style/mixins.scss';
    @import '@/style/main.scss';

    .KingsSuite {
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
                    // padding-top: 80px;

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
