<template>
  <div class="Header" ref="headerHeight">
    <div
      :class="{ headerWrapper: true, hideHeader: showHeader }"
      :style="{marginTop: headerMarginTop ? '20px' : '0'}"
      @mouseleave="hideHoverList"
      @blur="hideHoverList"
    >
      <div :class="{ topWrapper: true, burgerActive: isBurgerMenu }">
        <div class="leftSide">
          <router-link to="/">
            <div class="logo">
              <img alt="logo" src="../assets/images/mainLogo.png" />
            </div>
          </router-link>
          <ul class="navList">
            <li>
              <router-link to="/rooms">
                <span> Rooms & Prices </span>
              </router-link>
            </li>
            <li class="hoverLi" @mouseover="showHoverList" @focus="showHoverList">
              <router-link to="/relax">
                <span> Relax </span>
              </router-link>
            </li>
            <li>
              <router-link to="/restaurants">
                <span> RESTAURANTs </span>
              </router-link>
            </li>
            <li>
              <router-link to="/contacts">
                <span> contact </span>
              </router-link>
            </li>
            <li>
              <router-link to="/golf">
                <span> Golf </span>
              </router-link>
            </li>
            <li>
              <router-link to="/premium-services">
                <span> Premium Services </span>
              </router-link>
            </li>
            <li>
              <router-link to="/king-palace">
                <span> King Palace </span>
              </router-link>
            </li>
          </ul>
        </div>
        <div class="rightSide">
          <div class="langBtn">
            <SvgIcon name="language" size="medium" stroke="#D7B154" />

            <span> deutsch </span>
            <SvgIcon name="arrowDown" size="small" stroke="white" />
          </div>

          <SecondaryButton buttonText="Booking" />

          <div class="burgerIcon" @click="burgerMenu" aria-hidden="true">
            <SvgIcon v-if="isBurgerMenu" name="closeBurger" size="medium" />
            <SvgIcon v-else name="burgerMenu" size="medium" />
          </div>
        </div>
      </div>
      <div :class="{ hoverList: true, activeHoverList: isHoverListVisible }">
        <ul>
          <li>
            <router-link to="/relax/wellness">
              <span> wellness </span>
            </router-link>
          </li>
          <li>
            <router-link to="/relax/gym">
              <span> gym </span>
            </router-link>
          </li>
          <li>
            <router-link to="/relax/massages">
              <span> massage </span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="burgerMenu" v-if="isBurgerMenu">
      <div class="navList">
        <ul>
          <li @click="burgerMenu" @keydown="none">
            <router-link to="/rooms">
              <span> Rooms & Prices </span>
            </router-link>
          </li>
          <li @click="subList" @keydown="none">
            <span> Relax </span>
            <SvgIcon name="arrowDown" size="small" stroke="white" />
          </li>
          <li v-if="isActiveSublist" :class="{ subList: true, subListActive: isActiveSublist }">
            <ul>
              <li @click="burgerMenu" @keydown="none">
                <router-link to="/relax">
                  <span> Relax </span>
                </router-link>
              </li>
              <li @click="burgerMenu" @keydown="none">
                <router-link to="/relax/gym">
                  <span> GYM </span>
                </router-link>
              </li>
              <li @click="burgerMenu" @keydown="none">
                <router-link to="/relax/wellness">
                  <span> WELLNESS </span>
                </router-link>
              </li>
              <li @click="burgerMenu" @keydown="none">
                <router-link to="/relax/massages">
                  <span> MASSAGES & TREATMENTS </span>
                </router-link>
              </li>
            </ul>
          </li>
          <li @click="burgerMenu" @keydown="none">
            <router-link to="/restaurants">
                <span> RESTAURANTs </span>
            </router-link>
          </li>
          <li @click="burgerMenu" @keydown="none">
            <router-link to="/contacts">
                <span> cONTACT </span>
            </router-link>
          </li>
          <li @click="burgerMenu" @keydown="none">
            <router-link to="/golf">
                <span> Golf </span>
            </router-link>
          </li>
          <li @click="burgerMenu" @keydown="none">
              <router-link to="/premium-services">
                <span> Premium Services </span>
              </router-link>
            </li>
            <li @click="burgerMenu" @keydown="none">
              <router-link to="/king-palace">
                <span> King Palace </span>
              </router-link>
            </li>
        </ul>
      </div>
      <div class="bottomMenu">
        <span class="phoneNumber"> +420 605 000 888 </span>
        <span class="location">
          KING’S PALACE, Rozvadov 7, 2. ENTRANCE 2, 348 06 Rozvadov, Czech Republic
        </span>
        <div class="btn">
          <PrimaryButton buttonText="CHECK AVAILABILITY" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SecondaryButton from './Buttons/SecondaryButton.vue';
import SvgIcon from './SvgIcon.vue';
import PrimaryButton from './Buttons/PrimaryButton.vue';

export default defineComponent({
  name: 'HeaderC',
  data() {
    return {
      isBurgerMenu: false,
      isActiveSublist: false,
      isHoverListVisible: false,
      scrollPosition: 0,
      lastScrollPosition: 0,
      showHeader: false,
      headerMarginTop: true,
    };
  },
  created() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  },
  methods: {
    burgerMenu() {
      this.isBurgerMenu = !this.isBurgerMenu;
      document.body.style.overflow = this.isBurgerMenu ? 'hidden' : '';
    },
    subList() {
      this.isActiveSublist = !this.isActiveSublist;
    },
    showHoverList() {
      this.isHoverListVisible = true;
    },
    hideHoverList() {
      setTimeout(() => {
        this.isHoverListVisible = false;
      }, 1000);
    },
    onScroll() {
      const currentScrollPosition = window.scrollY || document.documentElement.scrollTop;
      const scrollMain = this.$refs.headerHeight;
      if (currentScrollPosition < this.lastScrollPosition) {
        this.showHeader = false;
      } else if (currentScrollPosition >= scrollMain.clientHeight) {
        this.showHeader = true;
      }
      if (currentScrollPosition === 0) {
        this.headerMarginTop = true;
      } else {
        this.headerMarginTop = false;
      }
      // currentScrollPosition === 0 ? (this.headerMarginTop = true)
      // : (this.headerMarginTop = false);
      this.lastScrollPosition = currentScrollPosition;
      this.scrollPosition = currentScrollPosition;
    },
  },
  components: {
    SvgIcon,
    SecondaryButton,
    PrimaryButton,
  },
});
</script>

<style scoped lang="scss">
@import '@/style/mixins.scss';

.Header {
  z-index: 5;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .headerWrapper {
    position: fixed;
    margin-inline: 20px;
    width: -webkit-fill-available;
    transition: all ease 0.5s;
    top: 0;
    z-index: 10;
    .topWrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: -webkit-fill-available;
      background: var(--color-black);
      padding: 10px;

      .leftSide {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .logo {
          img {
            // width: 110px;
            width: clamp(75px, 10vw, 110px);
            position: absolute;
            top: 0;
          }
        }
        .navList {
          list-style-type: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 142px;
          gap: 24px;
          li {
            a {
              text-decoration: none;
            }
            cursor: pointer;
            span {
              @include text(var(--color-white), clamp(12px, 1vw, 16px), uppercase, 500);
            }
          }
        }
      }
      .rightSide {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        gap: clamp(0px, 1vw, 14px);
        .langBtn {
          display: flex;
          align-items: center;
          cursor: pointer;
          svg {
            width: clamp(20px, 4vw, 100%);
          }
          span {
            @include text(var(--color-white), clamp(11px, 3vw, 14px), uppercase, 500);
            margin: 0 4px 0 6px;
          }
          .SecondaryButton {
            border: 1px solid transparent;
          }
          .SecondaryButton:hover {
            border: 1px solid #d7b154;
          }
        }
        .burgerIcon {
          display: none;
        }
      }
    }
    .hoverList {
      background: var(--color-black);
      position: relative;
      bottom: 1px;
      border-top: 2px solid black;
      z-index: -1;
      background: var(--color-black);
      position: relative;
      bottom: 65px;
      border-top: 2px solid black;
      z-index: -1;
      height: auto;
      transition: all ease 0.3s;
      ul {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        gap: 50px;
        align-items: center;
        list-style-type: none;
        padding: 10px;
        li {
          a {
            text-decoration: none;
          }
          span {
            @include text(var(--color-white), clamp(12px, 1vw, 16px), uppercase, 500);
          }
        }
      }
    }
    .activeHoverList {
      bottom: 1px;
      transition: all ease 0.3s;
    }
  }
  .hideHeader {
    top: -200px;
    transition: all ease 1.3s;
  }
  .burgerMenu {
    display: none;
  }
}
@media screen and (max-width: 1440px) {
  .Header {
    .headerWrapper {
      transition: all ease 0.2s;
    }
    .burgerActive {
      margin: 0;
      padding: 20px;
      transition: all ease 0.2s;
    }
  }
}
@media screen and (max-width: 1250px) {
  .Header {
    .headerWrapper {
      .topWrapper {
        .leftSide {
          .navList {
            display: none;
          }
        }
        .rightSide {
          .SecondaryButton {
            display: none;
          }
          .burgerIcon {
            display: block;
            cursor: pointer;
          }
        }
      }
      .hoverList {
        display: none;
      }
    }
    .burgerMenu {
      position: fixed;
      top: 0;
      left: 0;
      background: var(--color-black);
      width: 100%;
      height: 100%;
      z-index: 5;
      padding-top: clamp(90px, 20vw, 150px);
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow-y: scroll;
      .navList {
        padding: 20px;
        ul {
          display: flex;
          flex-direction: column;
          // gap: 24px;
          gap: clamp(12px, 5vw, 24px);
          li {
            list-style-type: none;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            cursor: pointer;
            a{
              text-decoration: none;
            }
            span {
              @include text(var(--color-white), clamp(14px, 2vw, 22px), uppercase, 500);
            }
          }
          .subList {
            height: 0px;
            overflow: hidden;
            transition: all ease 0.5s;
            padding-left: 20px;
          }
          .subListActive {
            height: auto;
            overflow: visible;
            transition: all ease 0.5s;
          }
        }
      }
      .bottomMenu {
        display: flex;
        flex-direction: column;
        gap: 15px;
        span {
          padding-left: 40px;
          @include text(var(--color-white), 10px, uppercase, 500);
          text-align: left;
          max-width: 80vw;
        }
      }
      .btn {
        margin: 0 auto;
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .Header{
    .headerWrapper{
      margin-inline: 0;
      .topWrapper{
        background: rgba(0, 0, 0, 0.9);
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .Header {
    .headerWrapper {
      .topWrapper {
        .rightSide {
          .langBtn {
            justify-content: flex-end;
          }
        }
      }
      .leftSide {
        .logo {
          img {
            width: clamp(65px, 20vw, 110px);
          }
        }
      }
    }
    .burgerMenu {
      opacity: 0.95;
    }
    .burgerActive {
      margin: 0;
      opacity: 0.95;
    }
  }
}
</style>
