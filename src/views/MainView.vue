<template>
    <div class="Page kingsPalace">
      <div class="main">
        <!-- <img src="../assets/images/home-page/main.png"
         alt="Header Image" class="mainImage" /> -->
        <!-- <video src="../assets/images/home-page/Kings-Main.mp4"></video> -->
        <video
      controls
      autoplay
      loop
      muted
      poster="../assets/images/home-page/main.png"
    >
      <source src="../assets/images/home-page/Kings-Main.mp4" type="video/mp4" />
      <!-- <source src="path/to/video.webm" type="video/webm" /> -->
      Your browser does not support the video tag.
    </video>
        <div class="textBlock">
            <p>Rozvadov 7, Entrance 2, 348 06 Rozvadov, Plzeňský kraj, Czech Republic</p>
            <h1>WELCOME TO</h1>
            <h1>KING'S PALACE</h1>
        </div>
      </div>
    <section class="mobileCheckAvailable">
        <PrimaryButton buttonText="check availability" />
        <SvgIcon name="showAround" size="large" stroke="D7B154"/>
    </section>

    <section class="hotelDescription">
        <div class="container">
            <h2>
            King’s Palace Rozvadov, Czech Republic
        </h2>
        <div class="description">
            <p>
                Experience comfort and luxury where every
                moment becomes an unforgettable experience.
            </p>
            <p>
                We offer rooms in various categories, ranging from 2* to 5*.
            </p>
        </div>
        <div class="underLine"></div>
        </div>
    </section>

    <section class="rooms">
    <div class="topRooms">
        <h2>KING'S PALACE ROOM</h2>
        <div class="buttons">
            <button id="leftBtn">
                <SvgIcon name="whiteArrow" size="medium"/>
            </button>
            <button id="rightBtn">
                <SvgIcon name="goldArrow" size="medium"/>
            </button>
        </div>

    </div>
    <div class="roomCards">
        <div class="roomCard" v-for="room in rooms" :key="room.id">
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
    </div>
    </section>

      <section class="sleepLikeAKing">
        <div class="topBlock">
            <span class="accomodation">
                ACCOMMODATIONS
            </span>
            <h4>
                SLEEP LIKE A KING
            </h4>
        </div>
        <div class="items">
            <div class="rightItem">
                <div class="buttons">
                <button id="leftBtn">
                    <SvgIcon name="whiteArrow" size="medium"/>
                </button>
                <button id="rightBtn">
                    <SvgIcon name="goldArrow" size="medium"/>
                </button>
            </div>
            <div class="title">
                <h2>
                    Luxury 5-star
                </h2>
            </div>
            <p class="description">
                Choose the bed that suits you best,
                from a Comfort bed to a spacious King size double bed.
                Rest like a true King!
            </p>
            <PrimaryButton buttonText="CHECK AVAILABILITY"/>

            </div>
            <div class="leftItem">
                <img src="../assets/images/home-page/room5s.png" alt="Luxury Room" />

            </div>
        </div>
      </section>

      <section class="relaxLikeAKing">
        <div class="topBlock">
            <span class="accomodation">
                Relax
            </span>
            <h4>
                RELAX LIKE A KING
            </h4>
        </div>
        <div class="items">
            <div class="leftItem">
                <img src="../assets/images/home-page/welness.png" alt="welness" />

            </div>
            <div class="rightItem">
                <div class="buttons">
                <button id="leftBtn">
                    <SvgIcon name="whiteArrow" size="medium"/>
                </button>
                <button id="rightBtn">
                    <SvgIcon name="goldArrow" size="medium"/>
                </button>
            </div>
            <div class="title">
                <h2>
                    Welness
                </h2>
            </div>
            <p class="description">
                Take time out of your routine to restore energy to your body,
                mind and spirit at our wellness center.
            </p>
            <PrimaryButton buttonText="CHECK AVAILABILITY"/>

            </div>
        </div>
      </section>
      <section class="eatLikeAKing">
        <div class="topBlock">
            <span class="accomodation">
                RESTAURANT & BUFFET
            </span>
            <h4>
                Eat like a king
            </h4>
        </div>
      </section>

      <section class="visualTour">
            <img src="../assets/images/home-page/tour.png" alt="tour">
            <div class="sectionItems">
                <div class="description">
                    <h2 class="colorText">
                        visual tour
                    </h2>
                    <h2>
                        dIscover KING'S palace
                    </h2>
                </div>
            <Additional3 buttonText="3D TOUR"/>
            </div>
      </section>

      <section class="instagram">
        <div class="topBlock">
            <h2>VISIT OUR INSTAGRAM</h2>
            <span>
                And be inspired to relax like a King.
            </span>
        </div>
        <div class="instagramGallery">
          <img v-for="image in instagramImages" :src="image" :alt="`Instagram Image ${image}`"
          :key="image" />
        </div>
      </section>

      <section class="map">
        <img src="../assets/images/home-page/map.png" alt="Map" />
        <div class="contactPopup">
            <div class="item">
                <div class="avatar">
                    <img src="../assets/images/home-page/person.png" alt="person">
                    <div class="onlinePin"></div>
                </div>
                <span>
                    We can help you with any questions or information
                </span>
            </div>
            <div class="item">
                <div class="mail">
                    <SvgIcon name="envelope" size="medium"/>
                    <span>
                        stay@kings-palace.com
                    </span>
                </div>
                <PrimaryButton buttonText="contact"/>
            </div>
        </div>
      </section>
    </div>
  </template>

<script>
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
// import { Swiper, SwiperSlide } from 'swiper/vue';
import SvgIcon from '../components/SvgIcon.vue';
import TertiaryButton from '../components/Buttons/TertiaryButton.vue';
import Additional3 from '../components/Buttons/Additional3.vue';

// import 'swiper/swiper.min.css';
// import 'swiper/modules/pagination.min.css';

// import '../style/style.css';

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
      ],
      restaurants: [
        {
          id: 1,
          name: 'Restaurant Name 1',
          description: 'Description of the restaurant',
          image: '@/assets/restaurant1.jpg',
        },
        {
          id: 2,
          name: 'Restaurant Name 2',
          description: 'Description of the restaurant',
          image: '@/assets/restaurant2.jpg',
        },
        {
          id: 3,
          name: 'Restaurant Name 3',
          description: 'Description of the restaurant',
          image: '@/assets/restaurant3.jpg',
        },
      ],
      instagramImages: [
        './ig1.png',
        './ig2.png',
        './ig3.png',
      ],
    };
  },
  components: {
    PrimaryButton,
    TertiaryButton,
    SvgIcon,
    Additional3,
    // Swiper,
    // SwiperSlide,
  },

};
</script>

  <style lang="scss" scoped>
  @import '@/style/mixins.scss';
  @import '@/style/main.scss';
  .kingsPalace {
    @include pageStyle;

    .main {
        position: relative;
      .mainImage, video{
       @include mainBg;
      }
      .textBlock{
        @include mainTextBlock;

        p{
            white-space: nowrap;
            @include text(var(--color-white), 16px, uppercase, 400);
        }
        h1{
            @include mainTitle;
        }
      }
    }
    .mobileCheckAvailable{
        display: none;
    }
    .hotelDescription{
        margin: 66px 0 80px;
        h2{
            @include text(var(--color-black), clamp(28px, 5vw, 40px), uppercase, 500);
            text-align: center;

        }
        .description{
            margin: 40px 0;
            p{
            @include text(var(--color-black), clamp(16px,3vw,20px), none, 400);
            }
        }
        .underLine{
            width: 20vw;
            height: 1px;
            background: #3F3F3F;
            margin: 20px auto;
        }
    }
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
      .sleepLikeAKing, .relaxLikeAKing, .eatLikeAKing{
        background: var(--color-white);
        .topBlock{
            display: flex;
            align-items: center;
            flex-direction: column;
            padding-top: 80px;
            gap: 12px;
            .accomodation{
                @include text(var(--color-gold), 14px, uppercase, 500);
            }
            h4{
                @include text(var(--color-black), 48px, uppercase, 500);
            }
        }
        .items{
            display: flex;
            align-items: center;
            justify-content: center;
            padding-block: 60px;
            gap: 40px;
            .rightItem{
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;
                padding-left: 60px;
                .buttons{
                    #leftBtn{
                        transform: rotate(180deg)
                    }
                }
                .title{
                    @include text(var(--color-black), 40px, uppercase, 500);
                }
                .description{
                    @include text(#3F3F3F, 20px, unset, 400);
                }
                .PrimaryButton{
                    margin-top: 60px;
                }
            }
            .leftItem{
                display: flex;
                justify-content: flex-end;
                position: relative;
            }
        }
      }
      .relaxLikeAKing{
        .items{
            .rightItem{
                padding-left: 0;
                padding-right: 20px;
            }
        }
      }
    }

    .visualTour{
        position: relative;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .sectionItems{
            position: absolute;
            bottom: 15%;
            left: 10%;
            .description{
                padding-bottom: 40px;

                .colorText{
                    color: var(--color-gold);
                }
                h2{
                    @include text(var(--color-white), 60px, uppercase, 500);
                }
            }
        }
    }
    .instagram{
        margin-bottom: 80px;
        .topBlock{
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            gap: 24px;
            margin-block: 80px;
            h2{
                @include text(var(--color-black), 48px, uppercase, 500);
            }
            span{
                @include text(#3F3F3F, 20px, unset, 400);
            }
        }
        .instagramGallery{
            padding-inline: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            img{
                width: clamp(100px, 30vw, 400px);
            }
        }
    }
    .map{
        position: relative;
        margin-bottom: 80px;
        display: flex;
        justify-content: center;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .contactPopup{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 80vw;
            background: var(--color-white);
            padding: 40px;
            position: absolute;
            bottom: -20px;
            .item{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 5px;
                .avatar{
                    position: relative;
                    width: fit-content;
                    margin-right: 35px;
                    img{
                        width: 64px;
                        height: 64px;
                        border-radius: 50%;
                    }
                    .onlinePin{
                        width: 10px;
                        height: 10px;
                        background: green;
                        border-radius: 50%;
                        position: absolute;
                        bottom: 10px;
                        right: 5px;
                    }
                }
                .mail{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                }
                span{
                    @include text(#3F3F3F, 20px, unset, 400);
                }
            }
        }
    }

    .booking, .rooms,
    .eatLikeAKing {
      padding: 20px;
      text-align: center;

      .bookingForm {
        input[type="date"] {
          margin: 0 10px;
          padding: 10px;
          border: 1px solid #ccc;
        }

        button {
          padding: 10px 20px;
          border: none;
          background-color: #000;
          color: #fff;
          cursor: pointer;
        }
      }

      .roomCards, .restaurantCards, .instagramGallery {
        display: flex;
        justify-content: space-around;
        gap: 10px;

        .roomCard, .restaurantCard {
          width: 30%;
        //   padding: 10px;
          border: 1px solid #ccc;

          img {
            width: 100%;
            height: auto;
          }
        }

        .instagramGallery img {
          width: 30%;
          height: auto;
          padding: 5px;
        }
      }
    }

  @media screen and (max-width: 1440px) {
    .kingsPalace{
        .main{
            .textBlock{
                max-width: 55vw;
            }
        }
    }
  }

  @media screen and (max-width: 1024px) {
    .kingsPalace{
        .main{
            .textBlock{
                max-width: 70vw;
                p{
                    white-space: pre-wrap;
                }
            }
        }
        .mobileCheckAvailable{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-inline: 20px;
            margin: 14px 0;
            gap: 20px;
            .PrimaryButton{
                width: -webkit-fill-available
            }
        }
    }
  }
  @media screen and (max-width: 450px) {
    .kingsPalace{
        .hotelDescription{
            margin: 40px 0 60px;
            .underLine{
                width: 80vw;
            }
        }
    }
  }
  </style>
