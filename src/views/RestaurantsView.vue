<template>
    <div class="Page Restaurants">
        <div class="main">
            <video
              controls
              autoplay
              loop
              muted
              poster="../assets/images/restaurants/mainBg.png"
            >
              <source src="../assets/images/restaurants/Kings-Restaurant.mp4" type="video/mp4" />
              <!-- <source src="path/to/video.webm" type="video/webm" /> -->
              Your browser does not support the video tag.
            </video>
            <div class="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>
                            Homepage
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <span>
                        restaurants
                    </span>
                </div>
                <h1>
                    Dine like
                </h1>
                <h1 class="colorTitle">a King </h1>
                <p class="description">
                    Explore a wide range of dishes from buffet options to
                    world-class gastronomy at Radimský Restaurant
                </p>
            </div>
        </div>
        <div class="pageItems">
        <h4 class="preTitle">
            RESTAURANT & BUFFET
        </h4>
        <h2 class="title">
            nearby RESTAURANTS
        </h2>
        <div class="sliderWrapper">
            <div class="cafeDescription">
                <h3 class="cafeName">
                    Radimský
                </h3>
                <ul>
                    <li>
                        <DistanceC distance='800' meters='meters'/>
                        <span class="option">
                            Distance from King's
                        </span>
                    </li>
                    <li class="strokeSvg">
                        <SvgIcon name='cafeSuite' size="large" strokeWidth="0"/>
                        <span class="option">
                            European cuisine
                        </span>
                    </li>
                    <li>
                        <SvgIcon name='location' size="large" strokeWidth="0"/>
                        <span class="option">
                            Rozvadov 7
                        </span>
                    </li>
                </ul>
            </div>
            <div class="cafeImage">
                <img src="../assets/images/restaurants/restSlider1.png" alt="">
            </div>
        </div>

        </div>
        <div class="cardsWrapper">
            <div class="card" v-for="cafe in cafeData" :key="cafe.id">
                <img :src="cafe.image" alt="cafe">
                <div class="bottomSide">
                    <h3 class="title">
                        {{ cafe.name }}
                    </h3>
                <ul>
                    <li>
                        <DistanceC :distance="cafe.distance" :meters="cafe.meters"/>
                        <span class="option">
                            Distance from King's
                        </span>
                    </li>
                    <li class="strokeSvg">
                        <SvgIcon name='cafeSuite' size="large" strokeWidth="0"/>
                        <span class="option">
                            European cuisine
                        </span>
                    </li>
                    <li>
                        <SvgIcon name='location' size="large" strokeWidth="0"/>
                        <span class="option">
                            {{ cafe.location }}
                        </span>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import DistanceC from '@/components/DistanceC.vue';

export default {
  name: 'RestaurantsComponent',
  components: {
    SvgIcon,
    DistanceC,
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
          name: 'McDonald/\'s Rozvadov',
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
};

</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';
@import '@/style/main.scss';
.Restaurants {
  @include pageStyle;

  .main {
    position: relative;
    overflow: hidden;
    .mainImage, video {
      @include mainBg;
    }
    .textBlock {
      @include mainTextBlock;
      .path {
        @include alignPath;
        a {
          text-decoration: none;
          cursor: pointer;
        }
        span {
          @include pathText;
        }
      }
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
  }

  .pageItems {
    padding: 40px;
    .preTitle {
      color: var(--color-gold);
      font-family: var(--font-text-reg);
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 150%;
      text-transform: uppercase;
    }
    .title {
      color: var(--color-black);
      font-family: var(--font-text-reg);
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      text-transform: uppercase;
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
          color: var(--color-black);
          font-family: var(--font-text-reg);
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          text-transform: uppercase;
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
              // color: var(--color-black);
              // font-family: var(--font-text-reg);
              // font-size: 14px;
              // font-style: normal;
              // font-weight: 400;
              // line-height: 150%;
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
        .cafeDescription{
            ul{
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

  .cardsWrapper {
    margin-bottom: 60px;
    padding-inline: 30px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    justify-items: center;
    gap: 20px;

    @media (min-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    .card {
      background: var(--color-white);
      max-width: fit-content;
      width: 100%;
      display: flex;
      flex-direction: column;
      .bottomSide {
        padding: 16px;
        .title {
          margin: 16px 0 10px;
          // color: var(--color-black);
          // font-family: var(--font-text-reg);
          // font-size: 24px;
          // font-style: normal;
          // font-weight: 500;
          // line-height: 130%;
          // text-transform: uppercase;
          @include text(var(--color-black), 24px, uppercase, 500);
        }
        ul {
          list-style-type: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          li {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 10px;
            .option {
              // color: var(--color-black);
              // font-family: var(--font-text-reg);
              // font-size: 14px;
              // font-style: normal;
              // font-weight: 400;
              // line-height: 150%;
              @include text(var(--color-black), 14px, unset, 400);
            }
          }
        }
      }
    }
  }
}
</style>
