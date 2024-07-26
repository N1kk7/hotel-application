<template>
    <div class="Contact">
        <div class="main">
            <img
                src="../assets/images/contact/mainBg.png"
                alt="Header Image" class="mainImage"
            />
            <div class="textBlock">
                <div class="path">
                    <router-link to="/">
                        <span>
                            Homepage
                        </span>
                    </router-link>
                    <SvgIcon name="arrowRight" size="medium"/>
                    <router-link to="/relax">
                        <span>
                            contact
                        </span>
                    </router-link>
                </div>
                <h1>
                    Contact us
                </h1>
            <PrimaryButton buttonText="contact"/>
            </div>
        </div>
        <div class="infoBlock">
            <div class="infoCard openingCard">
                <h3>
                    Opening hours
                </h3>
                <ul>
                    <li>
                        <SvgIcon name="location" size="small"/>
                        <div class="openingDescription">
                            <span>
                                King's Palace, Rozvadov 7, Entrance 2, Rozvadov,
                                Plzeňský kraj, Czech Republic
                            </span>
                        </div>
                    </li>
                </ul>

            </div>
            <div class="infoCard contactCard">
                <h3>
                    reservation
                </h3>
                <ul>
                    <li>
                        <SvgIcon name="envelope" size="small"/>
                        <span>
                            stay@kings-palace.com
                        </span>
                    </li>
                    <li>
                        <SvgIcon name="phone" size="small"/>
                        <span>
                            +420 604 689 933
                        </span>
                    </li>
                    <li>
                        <SvgIcon name="whatsup" size="small"/>
                        <SvgIcon name="telegram" size="small"/>
                        <SvgIcon name="viber" size="small"/>

                    </li>
                </ul>
            </div>
        </div>
        <div class="map">
            <h3>Map</h3>

            <div class="topBlock">
                <div class="title">
                    <h2>
                        Rooms
                    </h2>
                    <h2>
                        RESERVATION
                    </h2>
                </div>
                <div class="topInfo">
                    <span>
                        Opening hours: 08:00 - 16:00
                    </span>
                    <AdditionalBtn buttonText="open in google maps"/>
                </div>
            </div>
            <div class="mapImg">
                <img src="../assets/images/contact/map.png" alt="map">
            </div>
        </div>
        <div class="journeyPlan">
            <h2>
                PLAN YOUR JOURNEY
            </h2>
            <div class="items">
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="car" size="medium"/>
                    </div>
                    <h3>
                        BY CAR
                    </h3>
                    <p>
                        From Prague: 90 min via D5/E50; from Munich: take A9,
                        A93 and then A6 to D5/E50.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="airplane" size="medium"/>
                    </div>
                    <h3>
                        BY PLANE
                    </h3>
                    <p>
                        Take a flight to Prague, Nuremberg or Munich,
                        and then travel by car or with King's shuttle.
                    </p>
                </div>
                <div class="item">
                    <div class="icon">
                        <SvgIcon name="train" size="medium"/>
                    </div>
                    <h3>
                        BY TRAIN
                    </h3>
                    <p>
                        Travel to Planá, Stříbro, Mariánské Lázně,
                        Weiden or Wernberg and further on with King's shuttle.
                    </p>
                </div>
            </div>
        </div>
        <div class="transferBlock">
            <img src="../assets/images/contact/transfer.png" alt="transfer">
            <div class="transferInfo">
                <div class="title">
                    <h2>
                        KING'S TRANSPORT
                    </h2>
                    <h2 class="colorText">
                        SERVICE
                    </h2>
                    <p>
                        Convenient transportation to and from the King's
                        Palace for travelers from European countries
                    </p>
                </div>
                <div class="contacts">
                    <h3>
                        reservation
                    </h3>
                    <ul>
                        <li>
                            <SvgIcon name="envelope" size="small"/>
                            <span>
                                stay@kings-palace.com
                            </span>
                        </li>
                        <li>
                            <SvgIcon name="phone" size="small"/>
                            <span>
                                +420 777 281 804
                            </span>
                        </li>
                        <li>
                            <SvgIcon name="whatsup" size="medium"/>
                            <SvgIcon name="viber" size="medium"/>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

</template>

<script>
import SvgIcon from '@/components/SvgIcon.vue';
import PrimaryButton from '@/components/Buttons/PrimaryButton.vue';
import AdditionalBtn from '@/components/Buttons/AdditionalBtn.vue';

export default {
  name: 'MassagesView',
  components: {
    SvgIcon,
    PrimaryButton,
    AdditionalBtn,
  },
};
</script>

<style scoped lang="scss">
.Contact {
  width: 100%;
  height: fit-content;
  background: var(--color-light);

  .main {
    position: relative;

    .mainImage {
      width: 100%;
      height: 100%;
      min-height: 100vh;
      object-fit: cover;
    }

    .textBlock {
      position: absolute;
      bottom: 10%;
      left: 10%;
      max-width: 90vw;
      display: flex;
      flex-direction: column;
      gap: 16px;

      .path {
        display: flex;
        justify-content: flex-start;
        gap: 10px;
        align-items: center;

        a {
          text-decoration: none;
          cursor: pointer;
        }

        span {
          color: var(--color-white);
          text-align: center;
          font-family: var(--font-text-reg);
          font-size: 14px;
          font-weight: 500;
          line-height: 150%;
          text-transform: uppercase;
        }
      }

      h1 {
        color: var(--color-white);
        font-family: var(--font-grot-reg);
        font-size: clamp(30px, 8vw, 60px);
        font-weight: 420;
        line-height: 100%;
        text-transform: uppercase;
      }

      .description {
        color: var(--color-white);
        font-family: var(--font-text-reg);
        font-size: 18px;
        line-height: 150%;
      }

      .PrimaryButton {
        max-width: 180px;
      }
    }
  }

  .map,
  .journeyPlan,
  .transferBlock {
    margin: 40px;
    padding: 40px;
    background: var(--color-white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

//   .infoBlock {
//     display: flex;
//     flex-direction: column;
//     gap: 20px;

//     .infoCard {
//       padding: 20px;

//       h3 {
//         font-size: 24px;
//       }

//       ul {
//         padding: 0;
//         list-style-type: none;
//         gap: 15px;

//         li {
//           display: flex;
//           align-items: center;
//           gap: 10px;

//           span {
//             font-size: 18px;
//           }
//         }
//       }
//     }
//   }
.infoBlock {
    display: flex;
    // flex-direction: column;
    gap: 30px;
    padding: 20px;

    .infoCard {
      padding: 20px;
      border-bottom: 1px solid var(--color-light-grey);
    background: var(--color-white);
    border-radius: 10px;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

      &:last-child {
        border-bottom: none;
      }

      h3 {
        color: var(--color-black);
        font-family: var(--font-text-reg);
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 130%;
        text-transform: uppercase;
        margin-bottom: 10px;
      }

      ul {
        padding: 0;
        margin: 0;
        list-style-type: none;
        align-items: flex-start;
        display: flex;
        flex-direction: column;
        gap: 15px;

        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          .openingDescription {
            display: flex;
            flex-direction: column;
            gap: 5px;
            align-items: flex-start;
          }

          .timeAvailable {
            color: var(--color-grey);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }

          span {
            color: var(--color-black);
            font-family: var(--font-text-reg);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
          }
        }
      }
    }
  }

  .map {
    padding: 20px;
    display: flex;
    flex-direction: column;
    position: relative;

    h3 {
      color: var(--color-gold);
      font-size: 14px;
    }

    .topBlock {

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    position: absolute;
    top: 5vw;
    left: 0;
    width: -webkit-fill-available;
    margin: 0 auto;
    padding: 0 20px;

      h2 {
        font-size: 32px;
      }

      .topInfo {
        display: flex;
        flex-direction: column;
        gap: 10px;

        span {
          font-size: 18px;
        }
      }
    }

    .mapImg {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .journeyPlan {
    h2 {
      font-size: 32px;
      font-family: var(--font-text-reg);
      font-weight: 500;
    }

    .items {
      display: flex;
      justify-content: space-between;
      margin-block: 20px;
      gap: 20px;

      .item {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .icon {
          svg {
            border: 1px solid var(--color-gold);
            border-radius: 50%;
            padding: 10px;
          }
        }

        h3 {
          font-size: 24px;
          font-family: var(--font-text-reg);
          font-weight: 500;
        }

        p {
          font-size: 18px;
          font-family: var(--font-text-reg);
          font-weight: 400;

        }
      }
    }
  }

  .transferBlock {
    display: flex;
    flex-direction: column;
    gap: 20px;

    img {
      width: 100%;
      height: auto;
    }

    .transferInfo {
      h2 {
        font-size: 32px;
      }

      p,
      span {
        font-size: 18px;
      }
    }
  }

  @media (max-width: 768px) {
    .textBlock {
      left: 5%;
    }

    .infoBlock,
    .map,
    .journeyPlan,
    .transferBlock {
      margin: 20px;
      padding: 20px;
    }

    h1,
    h2,
    h3 {
      font-size: 90%;
    }

    p,
    span {
      font-size: 90%;
    }
  }

  @media (max-width: 480px) {
    .textBlock {
      max-width: 90vw;
      left: 5%;
    }

    h1 {
      font-size: 8vw;
    }

    .infoBlock,
    .map,
    .journeyPlan,
    .transferBlock {
      margin: 10px;
      padding: 10px;
    }

    h1,
    h2,
    h3,
    p,
    span {
      font-size: 80%;
    }

    .mainImage,
    .transferBlock img {
      width: 100%;
      height: auto;
    }
  }
}
</style>
