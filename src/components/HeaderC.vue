<template>
    <div class="Header">
        <div
            class='headerWrapper' @mouseleave="hideHoverList" @focusout="hideHoverList">
            <div :class="{'topWrapper': true, 'burgerActive': isBurgerMenu}">
                <div class="leftSide">
                <router-link to="/">
                    <div class="logo">
                        <img alt="logo" src="../assets/images/mainLogo.png"/>
                    </div>
                </router-link>
                <ul class="navList">
                    <li>
                        <router-link to="/rooms">
                            <span>
                                Rooms & Prices
                            </span>
                        </router-link>
                    </li>
                    <li class="hoverLi"
                    @click="showHoverList"
                    @keydown="none"
                    >
                        <router-link to="/relax">
                            <span>
                                Relax
                            </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/restaurants">
                            <span>
                                RESTAURANTs
                            </span>
                        </router-link>

                    </li>
                    <li>
                        <router-link to="/contacts">
                            <span>
                                contact
                            </span>
                        </router-link>
                    </li>
                    <!-- <li>
                        <router-link to="/visual-tour">
                            <span>
                                3D tour
                            </span>
                        </router-link>
                    </li> -->
                    <li>
                        <router-link to="/golf">
                            <span>
                                Golf
                            </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/premium-services">
                            <span>
                                Premium Services
                            </span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/king-palace">
                            <span>
                                King Palace
                            </span>
                        </router-link>
                    </li>
                </ul>
                </div>
                <div class="rightSide">
                    <div class="langBtn">
                        <SvgIcon name="language" size="medium" stroke="#D7B154"/>

                        <span>
                            deutsch
                        </span>
                        <SvgIcon name="arrowDown" size="small" stroke="white"/>

                    </div>

                    <SecondaryButton buttonText="Booking"/>

                    <div  class="burgerIcon" @click="burgerMenu" aria-hidden="true">
                        <SvgIcon v-if="!isBurgerMenu" name="closeBurger" size="medium"/>
                        <SvgIcon v-else name="burgerMenu" size="medium"/>]
                    </div>

                </div>
            </div>
            <div
            :class="{'hoverList': true, 'activeHoverList' : isHoverListVisible}"
            >
            <ul>
                <li>
                    <router-link to="/relax/wellness">
                        <span>
                            wellness
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/relax/gym">
                        <span>
                            gym
                        </span>
                    </router-link>
                </li>
                <li>
                    <router-link to="/relax/massages">
                        <span>
                            massage
                        </span>
                    </router-link>

                </li>
            </ul>
        </div>
        </div>
        <div class="burgerMenu" v-if="isBurgerMenu">
            <div class="navList">
                <ul>
                    <li>
                        <span>
                            Rooms & Prices
                        </span>
                    </li>
                    <li @click="subList" @keydown="none" >
                        <span>
                            Wellness
                        </span>
                        <SvgIcon name="arrowDown" size="small" stroke="white"/>
                    </li>
                    <li
                        v-if="isActiveSublist"
                        :class="{'subList': true, 'subListActive': isActiveSublist}">
                        <ul>
                                <li>
                            <router-link to="/gym">

                                    <span>
                                        GYM
                                    </span>
                            </router-link>

                                </li>
                                <li>
                                    <router-link to="/wellness">
                                        <span>
                                            WELLNESS
                                        </span>
                                    </router-link>

                                </li>
                                <li>
                                    <router-link to="/massages">
                                        <span>
                                            MASSAGES & TREATMENTS
                                        </span>
                                    </router-link>
                                </li>
                        </ul>
                    </li>
                    <li>
                        <span>
                            RESTAURANTs
                        </span>
                    </li>
                    <li>
                        <span>
                            cONTACT
                        </span>
                    </li>
                    <!-- <li>
                        <span>
                            3D tour
                        </span>
                    </li> -->
                    <li>
                        <span>
                            Golf
                        </span>
                    </li>
                    <li>
                        <span>
                            King Palace
                        </span>
                    </li>
                </ul>
            </div>
            <div class="bottomMenu">
                <span class="phoneNumber">
                    +420 605 000 888
                </span>
                <span class="location">
                    KING’S PALACE, Rozvadov 7, 2. ENTRANCE 2,
                    348 06 Rozvadov, Czech Republic
                </span>
                <div class="btn">
                    <PrimaryButton buttonText="CHECK AVAILABILITY"/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
// import { router-link } from 'vue-router'
import SecondaryButton from './Buttons/SecondaryButton.vue';
// import TetriaryButton from './Buttons/TertiaryButton.vue';
import SvgIcon from './SvgIcon.vue';
import PrimaryButton from './Buttons/PrimaryButton.vue';

export default defineComponent({
  name: 'HeaderC',
  data() {
    return {
      isBurgerMenu: false,
      isActiveSublist: false,
      isHoverListVisible: false,

    };
  },
  methods: {
    burgerMenu() {
      this.isBurgerMenu = !this.isBurgerMenu;
      document.body.style.overflow = this.isBurgerMenu ? 'hidden' : '';
      console.log('hover-click');
    },
    subList() {
      this.isActiveSublist = !this.isActiveSublist;
      console.log(this.isActiveSublist);
    },
    showHoverList() {
      this.isHoverListVisible = true;
    },
    hideHoverList() {
      setTimeout(() => {
        this.isHoverListVisible = false;
      }, 1000);
    },

  },
  components: {
    SvgIcon,
    SecondaryButton,
    PrimaryButton,
    // TetriaryButton,
  },
});
</script>

<style scoped lang="scss">
    .Header{
        // position: relative;
        z-index: 5;
        position: absolute;
        width: 100%;
        height: 100%;
        .headerWrapper{
            position: relative;
                z-index: 10;
            .topWrapper{
                display: flex;
                align-items: center;
                justify-content: space-between;
                // position: relative;
                width: -webkit-fill-available;
                background: var(--color-black);
                padding: 10px;

                .leftSide{
            display: flex;
            justify-content: flex-start;
            align-items: center;
                .logo{
                    img{
                        width: 110px;
                        position: absolute;
                        top: 0;
                    }

                }
                .navList{
                    list-style-type: none;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding-left: 142px;
                    gap: 24px;
                    li{
                        a{
                            text-decoration: none;
                        }
                        cursor: pointer;
                        span{
                            color: #FFF;
                            font-family: var(--font-text-reg);
                            font-size: clamp(12px, 1vw, 16px);
                            font-style: normal;
                            font-weight: 500;
                            line-height: 150%; /* 21px */
                            text-transform: uppercase;
                        }
                    }
                }
                }
                .rightSide{
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                    gap: 14px;
                    .langBtn{
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                        span{
                            color: #FFF;
                            font-family: var(--font-text-reg);
                            font-size: 14px;
                            font-style: normal;
                            font-weight: 500;
                            line-height: 120%; /* 16.8px */
                            text-transform: uppercase;
                            margin: 0 4px 0 6px;
                        }
                        .SecondaryButton{
                            border: 1px solid transparent;
                        }
                        .SecondaryButton:hover{
                            border: 1px solid #D7B154;
                        }
                    }
                    .burgerIcon{
                        display: none;
                    }
                }
            }
            .hoverList{
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
                ul{
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    gap: 50px;
                    align-items: center;
                    list-style-type: none;
                    padding: 10px;
                    li{
                        // cursor: pointer;
                        a{
                            text-decoration: none;
                        }
                        span{
                            color: #FFF;
                            font-family: var(--font-text-reg);
                            font-size: clamp(12px, 1vw, 16px);
                            font-style: normal;
                            font-weight: 500;
                            line-height: 150%; /* 21px */
                            text-transform: uppercase;
                        }
                    }

                }
            }
            .activeHoverList{
                bottom: 1px;
                transition: all ease 0.3s;

            }
        }
        .burgerMenu{
            display: none;
        }
    }
    @media screen and (max-width: 1440px) {
        .Header{
            .headerWrapper{
                margin: 20px;
                transition: all ease 0.2s;

            }
            .burgerActive{
                margin: 0;
                padding: 20px;
                transition: all ease 0.2s;

            }
        }
    }
    @media screen and (max-width: 1250px) {
        .Header{
            .headerWrapper{
                .leftSide{
                    .navList{
                        display: none;
                    }
                }
                .rightSide{
                    .SecondaryButton{
                        display: none;
                    }
                    .burgerIcon{
                        display: block;
                        cursor: pointer;
                    }
                }
            }
            .burgerMenu{
                position: absolute;
                background: var(--color-black);
                width: 100%;
                height: -webkit-fill-available;
                z-index: 5;
                padding: 50px 0 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .navList{
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap: 24px;
                        li{
                            list-style-type: none;
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            cursor: pointer;
                            span{
                                color: #FFF;
                                font-family: var(--font-text-reg);
                                font-size: clamp(14px, 2vw, 22px);
                                font-style: normal;
                                font-weight: 500;
                                line-height: 120%; /* 16.8px */
                                text-transform: uppercase;
                            }

                        }
                        .subList{
                            height: 0px;
                            overflow: hidden;
                            transition: all ease 0.5s;
                        }
                        .subListActive{
                            height: auto;
                            overflow: visible;
                            transition: all ease 0.5s;

                        }
                    }
                }
                .bottomMenu{
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                    span{
                        padding-left: 50px;
                        color: #FFF;
                        font-family: var(--font-text-reg);
                        font-size: 14px;
                        font-style: normal;
                        font-weight: 500;
                        line-height: 120%; /* 16.8px */
                        text-transform: uppercase;
                        text-align: left;
                        max-width: 80vw;
                    }
                }
            }
        }
    }
    @media screen and (max-width: 450px) {
        .Header{
            .headerWrapper{
                margin: 10px;
                .leftSide{
                    .logo{
                        img{
                            width: clamp(65px, 20vw, 110px);
                        }
                    }
                }
            }
            .burgerMenu{
                opacity: 0.95;
            }
            .burgerActive{
                margin: 0;
                opacity: 0.95;
            }
        }
    }
</style>
