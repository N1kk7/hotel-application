<!-- <template>
    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <img src="../assets/images/mainLogo.png" alt="King's Palace" />
        </div>
        <div class="footer-sections">
          <div class="footer-section">
            <h3>King's Palace</h3>
            <ul>
              <li><a href="#">Rooms & Prices</a></li>
              <li><a href="#">Wellness</a></li>
              <li><a href="#">Restaurants</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Info</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Transport</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3>Need Any Help?</h3>
            <p>📞 +420 778 888 878</p> -->
            <!-- <div class="social-icons">
                <a href="#"><i class="fab fa-whatsapp"></i></a>
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#">
                    <SvgIcon name="youtube" size="medium"/>
                </a>
            </div> -->
            <!-- <div class="social-icons">
                <a href="#" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i>
                <span class="sr-only">WhatsApp</span>
                </a>
                <a href="#" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
                <span class="sr-only">Facebook</span>
                </a>
                <a href="#" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
                <span class="sr-only">Instagram</span>
                </a>
                <a href="#" aria-label="YouTube">
                <i class="fab fa-youtube"></i> -->
                <!-- <span class="sr-only">YouTube</span> -->
                 <!-- <SvgIcon name="youtube" size="medium"/>
                </a>
            </div>
            <div class="language-select">
              <a href="#">Deutsch</a>
            </div>
          </div>
        </div> -->
        <!-- <div class="footer-bottom">
          <p>&copy; 2024 King's Palace, Rozvadov. All rights reserved</p>
          <p>Vestar Group a.s., IČO: 26362686, společnost zapsaná u Krajského soudu v Plzni,
            oddíl B, vložka 1079, sídlo Rozvadov 7, 348 06 Rozvadov, Czech Republic</p>
          <ul>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Terms & Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </template> -->

<!-- <script>
import SvgIcon from './SvgIcon.vue';

export default {
  name: 'FooterComponent',
  data() {

  },
  components: {
    SvgIcon,

  },
};
</script> -->
<!--
  <style lang="scss" scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 20px 0;

    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      .footer-logo {
        img {
          width: 100px;
          margin-bottom: 20px;
        }
      }

      .footer-sections {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin-bottom: 20px;

        .footer-section {
          text-align: center;

          h3 {
            color: #d4af37;
          }

          ul {
            list-style: none;
            padding: 0;

            li {
              margin: 5px 0;

              a {
                color: #fff;
                text-decoration: none;

                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }

      .social-icons {
        a {
          margin: 0 5px;
          color: #d4af37;
          font-size: 24px;
        }
      }

      .language-select {
        margin-top: 10px;

        a {
          color: #d4af37;
          text-decoration: none;
        }
      }

      .footer-bottom {
        text-align: center;
        font-size: 12px;
        border-top: 1px solid #d4af37;
        padding-top: 10px;

        ul {
          list-style: none;
          padding: 0;
          display: flex;
          justify-content: center;

          li {
            margin: 0 10px;

            a {
              color: #d4af37;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
  </style> -->
  <template>
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
            <div class="footerColumn">
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
            // color: #d4af37;
            // text-decoration: none;
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
