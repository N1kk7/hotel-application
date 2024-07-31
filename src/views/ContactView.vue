<template>
    <div class="Page Contact">
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
                    <h2 class="colorText">
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
            <div class="mobileLocation">
                <div class="location">
                    <h3>
                        PILSEN
                    </h3>
                    <span>
                        Distance: — 45 MIN
                    </span>
                </div>
                <div class="location">
                    <h3>
                        nuremberg
                    </h3>
                    <span>
                        Distance: — 1,5 hours
                    </span>
                </div>
                <div class="location">
                    <h3>
                        prague
                    </h3>
                    <span>
                        Distance: — 1,5 hours
                    </span>
                </div>
                <div class="location">
                    <h3>
                        MUNICH
                    </h3>
                    <span>
                        Distance: — 2 hours
                    </span>
                </div>
                <div class="location">
                    <h3>
                        stuttgart
                    </h3>
                    <span>
                        Distance: — 3,5 hours
                    </span>
                </div>
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
                <img src="../assets/images/contact/transfer.png" alt="transfer">

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
@import '@/style/mixins.scss';
@import '@/style/main.scss';
.Contact {
    @include pageStyle;

  .main {
    position: relative;

    .mainImage {
        @include mainBg;
    }

    .textBlock {
    @include mainTextBlock;

      .path {
        @include alignPath;

        //!!!!!!!!!!!!!!!!!!!!!!

        a {
          text-decoration: none;
          cursor: pointer;
        }
        //!!!!!!!!!!!!!!!!!!!!!!

        span {
          @include pathText;
        }
      }

      h1 {
        @include mainTitle;
      }

      .PrimaryButton {
        max-width: 180px;
      }
    }
  }
//   @media (max-width: 768px) {
//     .main {
//         .mainImage{
//             min-height: 50vh;
//         }
//     }
//   }

  .map,
  .journeyPlan,
  .transferBlock {
    margin: 40px;
    padding: 40px;
    background: var(--color-white);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

.infoBlock {
    display: flex;
    gap: 30px;
    margin: 40px;

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
        @include text(var(--color-black), 24px, uppercase, 500);
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
            @include text(var(--color-black), 16px, unset, 400);
          }
        }
      }
    }
  }
  @media (max-width: 768px) {
    .infoBlock{
        flex-direction: column-reverse;
        gap: 20px;
        margin: 20px;
        .infoCard{
            max-width: -webkit-fill-available;
            width: unset;
        }
    }
  }

  .map {
    padding: clamp(30px, 5vw, 60px);
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    h3 {
      color: var(--color-gold);
      text-transform: uppercase;
      font-size: 14px;
    }

    .topBlock {

        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        position: absolute;
        top: clamp(50px, 7vw, 100px);
        left: 0;
        width: -webkit-fill-available;
        margin: 0 auto;
        padding: 0 clamp(30px, 5vw, 60px);

      h2 {
        font-size: 32px;
        font-family: var(--font-text-reg);
        font-weight: 700;
        margin: 0;
      }
      .colorText{
          color: var(--color-gold);
      }

      .topInfo {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 20px;

        span {
          font-size: 18px;
          font-family: var(--font-text-reg);
          font-weight: 400;
        }
      }
      @media (max-width: 768px) {
            position: relative;
            top: unset;
            left: unset;
            width: 100%;
            margin: 0;
            padding: 0;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 0 20px;
            .topInfo{
                align-items: flex-start;
                width: -webkit-fill-available;
                button{
                    width: -webkit-fill-available;
                }
            }
        }
    }

    .mapImg {
        text-align: center;
        @media (max-width: 768px) {
            display: none;
        }
      img {
        width: 60%;
        height: auto;
      }
    }
    .mobileLocation{
        display: none;
        @media (max-width: 768px) {
            display: block;
        }
    }
  }

  .journeyPlan {
    padding: clamp(30px, 5vw, 60px);
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    h2 {
      font-size: 32px;
      font-family: var(--font-text-reg);
      font-weight: 700;
    }

    .items {
      display: flex;
      justify-content: space-between;
      margin: 60px 0 20px;
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
        @include text(var(--color-black), 24px, unset, 700);
        }

        p {
          @include text(#3F3F3F, 16px, unset, 400);
          max-width: 80%;

        }
      }
    }
    @media (max-width: 450px) {
        .items{
            margin-block: 20px;
            flex-direction: column;
            .item{
                p{
                    max-width: 100%;
                }
            }
        }
    }
  }

  .transferBlock {
    display: flex;
    justify-content: space-between;
    padding: clamp(30px, 5vw, 60px);
    gap: 40px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

    img {
        flex: 1 1 50%;
        max-width: 50%;
        height: auto;
        object-fit: cover;
    }

    .transferInfo {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      h2 {
        font-size: clamp(28px, 5vw, 40px);
        font-family: var(--font-text-reg);
        font-weight: 700;
        color: var(--color-black);
      }
      .colorText {
        color: var(--color-gold);
      }

      p{
          @include text(#3F3F3F, clamp(16px, 2vw, 20px), unset, 200);
          max-width: 80%;
          margin-top: 40px;
      }
      p,
      span {
        font-size: 18px;
      }
      img{
        display: none;
      }
      h3{
        display: none;
      }
      @media (min-width: 1024px) {
        h3{
            display: block;
            @include text(var(--color-gold), 14px, uppercase, 500);
            margin-bottom: 30px;
      }
      }
      ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 20px;
        li{
            display: flex;
            align-items: center;
            gap: 10px;
        }
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      img{
          display: none;
      }
      .transferInfo{
            p{
                max-width: 100%;
                margin-top: 20px;
            }
          img{
              display: block;
              width: 100%;
              height: auto;
              object-fit: cover;
              flex: 1 1 100%;
              margin-block: 30px;
              max-width: 100%;
          }
      }
    }
  }

  @media (max-width: 768px) {
    .textBlock {
      left: 5%;
    }
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
