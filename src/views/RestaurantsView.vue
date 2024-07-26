<template>
    <div class="Restaurants">
        <div class="main">
            <!-- <img
                src="../assets/images/restaurants/mainBg.png"
                alt="Header Image" class="mainImage"
            /> -->
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
<!--
<style scoped lang="scss">
    .Restaurants{
        width: 100%;
        height: fit-content;
        background: var(--color-light);
        .main{
           position: relative;
           .mainImage{
            width: 100%;
            height: 100%;
            min-height: 100vh;
            object-fit: cover;
            }
            .textBlock{
                position: absolute;
                bottom: 15%;
                max-width: 40vw;
                left: 10%;
                display: flex;
                flex-direction: column;
                gap: 16px;
                .path{
                    display: flex;
                    justify-content: flex-start;
                    gap: 10px;
                    align-items: center;
                    position: relative;
                    z-index: 5;
                    a{
                        text-decoration: none;
                        cursor: pointer;
                    }
                    span{
                        color: var(--color-white);
                        text-align: center;
                        font-family: var(--font-text-reg);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 150%; /* 21px */
                        text-transform: uppercase;
                    }
                }
                .colorTitle{
                    color: var(--color-gold);
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
                .description{
                    color: var(--color-white);
                    font-family: var(--font-text-reg);
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 150%; /* 30px */
                }
            }
        }
        .pageItems{
            padding: 60px;

            .preTitle{
                color: var(--color-gold);
            font-family: var(--font-text-reg);
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 150%; /* 21px */
            text-transform: uppercase;
            }
            .title{
                color: var(--color-black);
                font-family: var(--font-text-reg);
                font-size: 40px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 48px */
                text-transform: uppercase;
            }
            .sliderWrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                background: var(--color-white);
                padding-left: 40px;
                margin-top: 20px;
                .cafeDescription{
                    .cafeName{
                        color: var(--color-black);
                        font-family: var(--font-text-reg);
                        font-size: 28px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 130%; /* 36.4px */
                        text-transform: uppercase;
                    }
                    ul{
                        display: flex;
                        flex-direction: column;
                        margin-top: 20px;
                        padding: 0;
                        gap: 15px;
                        li{
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            gap: 10px;
                            .option{
                                color: var(--color-black);
                                font-family: var(--font-text-reg);
                                font-size: 15.972px;
                                font-style: normal;
                                font-weight: 400;
                                line-height: 150%; /* 23.957px */
                            }
                        }
                    }
                }
            }
        }
        .cardsWrapper{
            margin-bottom: 100px;
            padding-inline: 60px;
            display: grid;
            // grid-template-columns: repeat(3, 1fr);
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            justify-items: center;
            gap: 40px;

            @media (min-width: 1200px) {
                grid-template-columns: repeat(3, 1fr);
            }
            .card{
                background: var(--color-white);
                max-width: fit-content;
                width: 100%;
                display: flex;
                flex-direction: column;
                .bottomSide{
                    padding: 23px;
                    .title{
                            margin: 24px 0 20px;
                            color: var(--color-black);
                            font-family: var(--font-text-reg);
                            font-size: 27.95px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 130%; /* 36.335px */
                            text-transform: uppercase;
                        }
                        ul{
                            list-style-type: none;
                            padding: 0;
                            display: flex;
                            flex-direction: column;
                            gap: 10px;
                            li{
                                display: flex;
                                align-items: center;
                                justify-content: flex-start;
                                gap: 10px;
                                .option{
                                    color: var(--color-black);
                                    font-family: var(--font-text-reg);
                                    font-size: 15.972px;
                                    font-style: normal;
                                    font-weight: 400;
                                    line-height: 150%; /* 23.957px */
                                }
                            }
                        }
                }

            }
        }
    }
</style> -->
<style scoped lang="scss">
.Restaurants {
  width: 100%;
  height: fit-content;
  background: var(--color-light);

  .main {
    position: relative;
    overflow: hidden;
    .mainImage, video {
      width: 100%;
      height: 100%;
      min-height: 60vh;
      object-fit: cover;
    }
    .textBlock {
      position: absolute;
      bottom: 10%;
      max-width: 80vw;
      left: 5%;
      display: flex;
      flex-direction: column;
      gap: 16px;
      .path {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;
        position: relative;
        z-index: 4;
        a {
          text-decoration: none;
          cursor: pointer;
        }
        span {
          color: var(--color-white);
          text-align: center;
          font-family: var(--font-text-reg);
          font-size: 12px;
          font-style: normal;
          font-weight: 500;
          line-height: 150%;
          text-transform: uppercase;
        }
      }
      .colorTitle {
        color: var(--color-gold);
      }
      h1 {
        color: var(--color-white);
        font-family: var(--font-grot-reg);
        font-size: clamp(30px, 5vw, 50px);
        font-style: normal;
        font-weight: 420;
        line-height: 100%;
        text-transform: uppercase;
      }
      .description {
        color: var(--color-white);
        font-family: var(--font-text-reg);
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%;
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
              color: var(--color-black);
              font-family: var(--font-text-reg);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
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
          color: var(--color-black);
          font-family: var(--font-text-reg);
          font-size: 24px;
          font-style: normal;
          font-weight: 500;
          line-height: 130%;
          text-transform: uppercase;
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
              color: var(--color-black);
              font-family: var(--font-text-reg);
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            }
          }
        }
      }
    }
  }
}
</style>
