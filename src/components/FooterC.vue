  <template>
    <div class="desktopFooterLinks">
        <div class="linksContainer">
          <router-link to="/restaurants">
            <div class="link">
              <img src="@/assets/images/footer/footer-dine.png" alt="link-img">
              <div class="card">
                <div class="description">
                  <span>
                    restaurant & buffet
                  </span>
                </div>
                <div class="tittle">
                  <h2>
                    Dine
                  </h2>
                  <span>
                    Like a king
                  </span>
                </div>
              </div>
            </div>
          </router-link>
          <router-link to="/relax">
            <div class="link">
              <img src="@/assets/images/footer/footer-wellness.png" alt="link-img">
              <div class="card">
                <div class="description">
                  <span>
                    wellness
                  </span>
                </div>
                <div class="tittle">
                  <h2>
                    Relax
                  </h2>
                  <span>
                    Like a king

                  </span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/contacts">
            <div class="link">
              <img src="@/assets/images/footer/footer-contact.png" alt="link-img">
              <div class="card">
                <div class="description">
                  <span>
                    need help ?
                  </span>
                </div>
                <div class="tittle">
                  <h2>
                    Contact
                  </h2>
                  <span>
                    King's Resort
                  </span>
                </div>
              </div>
            </div>
          </router-link>

          <router-link to="/rooms">
            <div class="link">
              <img src="@/assets/images/footer/footer-sleep.png" alt="link-img">
              <div class="card">
                <div class="description">
                  <span>
                    hotel
                  </span>
                </div>
                <div class="tittle">
                  <h2>
                    Sleep
                  </h2>
                  <span>
                    Like a king
                  </span>
                </div>
              </div>
            </div>
          </router-link>

        </div>
      </div>
    <footer class="footer">
      <div class="container">
        <div class="footerTop">
          <div class="footerLogo">
            <img src="../assets/images/mainLogo.png" alt="King's Palace" />
          </div>
          <div class="footerLinks">
            <div class="footerColumn">
              <h3 class="footerTitle">King's Palace</h3>
              <ul>
                <li><a href="#">Rooms & Prices</a></li>
                <li><a href="#">Wellness</a></li>
                <li><a href="#">Restaurants</a></li>
              </ul>
            </div>
            <div class="footerColumn">
              <h3 class="footerTitle">Info</h3>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Transport</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="footerColumn columnCard">
              <!-- <div class="cardWrapper"> -->
                <div class="logo">
                  <img src="../assets/images/mainLogo.png" alt="King's Palace" />
                </div>
                <div class="items">
                  <h3 class="footerTitle">Need Any Help?</h3>
              <div class="phoneWrapper">
                <SvgIcon name="phone" size="small" stroke="none"/>
                <p class="footerPhone">+420 778 888 878</p>
              </div>
              <div class="socialIcons">
                <a href="#" aria-label="WhatsApp"><SvgIcon name="whatsup" size="medium"
                    stroke="none"/></a>
                <a href="#" aria-label="Facebook"><SvgIcon name="facebook" size="medium"
                    stroke="none"/></a>
                <a href="#" aria-label="Instagram"><SvgIcon name="instagram" size="medium"
                    stroke="none"/></a>
                <a href="#" aria-label="YouTube"><SvgIcon name="twitter" size="medium"
                    stroke="none"/></a>
                <a href="#" aria-label="YouTube"><SvgIcon name="youtube" size="medium"
                    stroke="none"/></a>
              </div>
              <div class="languageSelect">
                <SvgIcon name="language" size="medium" stroke="#d4af37"/>
                <a href="#">Deutsch</a>
                <SvgIcon name="arrowDown" size="medium" />

              </div>
                </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
        <div class="footerBottom">
            <div class="betweenItems">
                <p>&copy; 2024 King's Palace, Rozvadov. All rights reserved</p>
                <ul class="footerBottomLinks">
                    <li><a href="#">Cookies</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>

            </div>
            <p>Vestar Group a.s., IČO: 26362686, společnost zapsaná u Krajského soudu v
                Plzni, oddíl B, vložka 1079, sídlo Rozvadov 7, 348 06 Rozvadov,
                Czech Republic
            </p>
        </div>
      </div>
      <button class="scrollTop" @click="scrollToTop" aria-label="Scroll to top">
        <!-- <i class="fas fa-arrow-up"></i> -->
         <SvgIcon name="arrowTop" size="micro" />
      </button>
    </footer>
  </template>

<script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'FooterComponent',
  components: {
    SvgIcon,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  },
};
</script>

  <style lang="scss" scoped>
@import "@/style/mixins.scss";

  .desktopFooterLinks{
    .linksContainer{
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      a{
        flex: 1;

        .link{
        flex: 1;
        position: relative;
        min-height: 300px;
        transition: all ease 0.3s;
        img{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: all ease 0.3s;
        }
        .card{
          width: -webkit-fill-available;
          height: -webkit-fill-available;
          position: absolute;
          padding: 15px;
          top: 0;
          left: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          transform: scale(1);
          transition: all ease 0.5s;
          // background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%);
          background: rgba(0, 0, 0, 0.5) ;
          .description{
            @include text(var(--color-white), 14px, uppercase, 600);
          }
          .tittle{
            text-align: center;
            margin-bottom: 25px;
            h2{
              font-size: clamp(22px, 5vw, 40px);
              font-family: var(--font-family-grot-bold);
              text-transform: uppercase;
              color: #fff;
            }
            span{
              @include text(var(--color-gold), 14px, uppercase, 600);
            }

          }

        }
      }
      @media (min-width: 1024px) {
        .link:hover{
          z-index: 10;
          img{
            transform: scale(1.06);
            transition: all ease 0.3s;
          }
          .card{
            // background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%);
            background: rgba(0, 0, 0, 0.3);
            transform: scale(1.06);
            transition: all ease 0.5s;
          }
        }
      }
      }
    }
  }
  .footer {
    background-color: #000;
    color: #fff;
    padding: 20px 0;
    font-family: 'Arial', sans-serif;
    position: relative;
    width: 100%;
    max-width: inherit;
    margin-top: auto;

    .container {
      width: 100%;
      max-width: -webkit-fill-available;
      margin: 0 auto;
      padding: 0 20px;
      overflow: hidden;
    }

    .footerTop {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border-bottom: 1px solid rgba(255, 255, 255, 0.15);
      padding-bottom: 20px;
      margin-bottom: 20px;

      .footerLogo {
        position: absolute;
        top: 0;

        img {
          width: 100px;
        }
      }

      .footerLinks {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        margin-top: 50px;

        .footerColumn {
          margin: 0 20px;

          .footerTitle {
            color: #d4af37;
            margin-bottom: 10px;
            text-align: left;
                color: rgba(215, 177, 84, 0.66);
                font-family: var(--font-text-reg);
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 150%; /* 24px */
                text-transform: uppercase;
          }
          .phoneWrapper{
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 5px;
            cursor: pointer;
            margin-bottom: 10px;

          }

          ul {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding: 0;

            li {
              margin-bottom: 5px;

              a {
                color: #fff;
                text-decoration: none;
                font-family: var(--font-text-reg);
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 24px */
                text-transform: uppercase;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }

          .socialIcons {
            margin-bottom: 10px;
            a {
              margin-right: 10px;
              color: #d4af37;
              font-size: 20px;

              &:hover {
                color: #fff;
              }
            }
          }

          .languageSelect{
            color: #d4af37;
            text-decoration: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            gap: 10px;

            a{
                color: var(--color-white);
                // font-family: "HvDTrial Brandon Text";
                font-family: var(--font-text-reg);
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 21px */
                text-transform: uppercase;
                text-decoration: none;
            }

            &:hover {
              text-decoration: underline;
            }
          }
        }
        .columnCard{
          // background-color: #1c1c1c;
          // border-radius: 3px;
          // padding: 10px;
          // display: grid;
          // justify-content: center;
          // align-items: flex-start;
          // display: flex;
          // vertical-align: top;
          position: relative;
          // top: 50px;
          padding: 0 32px 16px;
          // border-radius: 50%;
          border-radius: 57% 25%;

          // height: 300px;

          background-color: #0f0f0f;
    // display: table;
    width: 250px;
          // .cardWrapper{
            // display: inline-block;
            // vertical-align: top;
            // flex-grow: 1;
            // grid-area: 1/1;
            // transform: translateY(-25%);
            // position: relative;
            // width: 100%;
            // position: absolute;
            // left: 50%;
            // transform: translateX(-50%);
            // padding: 0 32px 16px;

            // width: inherit;
            // top: -50px;
            .logo{
            text-align: center;
            position: relative;
            top: -50px;
            img{
              border-radius: 50%;
              border: 10px solid black;
              background: black;
            // transform: translateY(-50%)

              }
            }
            .items{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              transform: translateY(-25%);
            }
          }
        // }
      }
    }

    .footerBottom {
      text-align: center;
      font-size: 12px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      .betweenItems{
        display: flex;
        justify-content: space-between;
        align-items: center;
        .footerBottomLinks {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: center;

        li {
          margin: 0 10px;

          a {
            color: var(--color-gold);
            font-family: var(--font-text-reg);
            opacity: 0.5;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 21px */
            text-decoration-line: underline;
            text-transform: uppercase;
            transition: all ease 0.2s;

            &:hover {
            //   text-decoration: underline;
                opacity: 1;
                transition: all ease 0.2s;
            }
          }
        }
      }
      }

      p {
        color: rgba(255, 255, 255, 0.40);
        font-family: var(--font-text-reg);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 21px */
      }

    }

    .scrollTop {
      position: absolute;
      top: -10px;
      right: 20px;
      background-color: #d4af37;
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all ease 0.2s;
        svg{
            fill: white;
            stroke: white;
        }

      i {
        font-size: 20px;
      }

      &:hover {
        background-color: #f6eccf ;
        border: 1px solid #d4af37;
        transition: all ease 0.2s;

        svg{
            fill: #d4af37;
            stroke: #d4af37;
        }
      }
    }
  }
  </style>
