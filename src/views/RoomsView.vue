<template>
   <div class="Hotel">
    <div class="main">
        <video
            controls
            autoplay
            loop
            muted
            poster="../assets/images/hotel-page/mainBg.png"
        >
      <source src="../assets/images/hotel-page/Kings-Hotel.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
        <div class="textBlock">
            <h1>SLEEP LIKE</h1>
            <h1 class="colorText">A KING</h1>
            <p>Enjoy the comfort and a moments for yourself.
                We offer a wide range of rooms that suits to any King.
            </p>
        </div>
        <div class="roomsCategory">
        <ul>
            <li>
                <span>
                    5 star luxury
                </span>
            </li>
            <li>
                <span>
                    4 star deluxe
                </span>
            </li>
            <li>
                <span>
                    4 star comfort
                </span>
            </li>
            <li>
                <span>
                    3 star for everybody
                </span>
            </li>
            <li>
                <span>
                    2 star basic
                </span>
            </li>
        </ul>
      </div>
    </div>
    <section class="luxury">
        <div class="wrapper">
            <div class="main">
                <div class="description">
                    <span>
                        5 STAR LUXURY

                    </span>
                    <h2>
                        THE MOST
                        <span>
                            LUXURIOUS
                        </span>
                        ACCOMMODATION
                    </h2>
                    <p>
                        King's New and Old 5-star hotels offer a wide selection
                        of luxurious rooms and suites. The hotel rooms and suites
                        feature exceptional interior decorated with art and golden
                        embroidery. The selection varies from Superior Rooms to
                        the King's Leon Suite with a private whirlpool.
                    </p>
                    <p>
                        Choose the room/suite that suits your needs best:
                        Superior Twin Room, Superior Double Room,
                        Deluxe Double Room, King's Exclusive Suite,
                        King's Grand Suite, King's Leon Suite with a private whirlpool.
                    </p>
                </div>
                <div class="content">
                    <swiper
    :spaceBetween="30"
    :effect="'fade'"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-1.jpg" alt="ololo"/></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-2.jpg" alt="ololo"/></swiper-slide
    ><swiper-slide
      ><img
        src="https://swiperjs.com/demos/images/nature-3.jpg" alt="ololo"></swiper-slide
    ><swiper-slide
      ><img src="https://swiperjs.com/demos/images/nature-4.jpg" alt="ololo"
    /></swiper-slide>
  </swiper>

                </div>
            </div>
        </div>

    </section>
   </div>
</template>

<script>
import {
  Swiper, SwiperSlide, EffectFade, Navigation, Pagination,
} from 'swiper/vue';
// import { EffectFade, Navigation, Pagination } from 'swiper';

// import 'swiper/swiper.less';
// import 'swiper/swiper.scss';
// import 'swiper/swiper-bundle.css';
// import 'swiper/pagination.scss';
// import 'swiper/swiper-bundle.min/css';

// import 'swiper/swiper.scss';

// import 'swiper/css';
// import 'swiper/css/effect-fade';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import 'swiper/swiper-bundle.min.css';s

// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination/pagination.min.css';

export default {
  name: 'Hotel-page',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [EffectFade, Navigation, Pagination],
    };
  },
};
</script>

<style scoped lang="scss">
// @import 'swiper/css';
// @import 'swiper/css/effect-fade';
// @import 'swiper/css/navigation';
// @import 'swiper/css/pagination';
    .Hotel{
        .main {
        position: relative;

            .mainImage, video{
                width: 100%;
                height: 100%;
                min-height: 100vh;
                object-fit: cover;
            }
            .textBlock{
                position: absolute;
                top: 50%;
                left: 50%;
                width: fit-content;
                transform: translate(-50%, -50%);
                text-align: center;
                display: flex;
                flex-direction: column;
                gap: 16px;

                p{
                    color: var(--color-white);
                    font-family: var(--font-text-reg);
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 24px */
                    text-transform: uppercase;
                    max-width: 80%;
                    margin: 0 auto;

                }
                h1{
                    color: var(--color-white);
                    font-family: var(--font-grot-reg);
                    font-size: clamp(45px, 10vw, 80px);
                    font-style: normal;
                    font-weight: 420;
                    line-height: 100%; /* 80px */
                    text-transform: uppercase;
                }
                .colorText{
                    color: var(--color-gold);
                }
            }
            .roomsCategory{
                position: absolute;
                bottom: 5%;
                width: 100%;
                z-index: 5;
                ul{
                    width: 80%;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    list-style-type: none;
                    flex-shrink: 0;

                    li{
                        color: var(--color-gold);
                        background: rgba(0,0,0,0.75);
                        border-radius: 5px;
                        padding: 10px 20px;
                        font-family: var(--font-text-reg);
                        font-size: 18px;
                        text-transform: uppercase;
                        transition: all ease 0.3s;
                        cursor: pointer;
                        transform: translateX(0) scaleX(1);

                    }
                    li:hover{
                        background: var(--color-gold);
                        color: var(--color-black);
                        transition: all ease 0.3s;
                        transform: translateX(0px) scaleX(1.1);
                    }
                }
            }
        }
    }
</style>
