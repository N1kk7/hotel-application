<template>
    <div class="bookingForm">
            <div class="container">
                <div class="topBtn">
                    <span>
                        hide
                    </span>
                    <button>
                        <SvgIcon name="closeBtn" size="small"/>

                    </button>

                </div>
                <div class="bookingWrapper">
                    <div class="item checkIn">
                        <div class="title">
                            <h3>
                                Check in - Check out
                            </h3>
                        </div>
                        <div class="form">
                            <div class="option">
                                <SvgIcon name="dateIcon" size="small"/>
                                <span>
                                    Choose dates
                                </span>
                            </div>
                            <button>

                                <SvgIcon name="arrowDownBtn" size="small"/>

                            </button>
                        </div>

                    </div>
                    <div class="item guests">
                        <div class="title">
                            <h3>
                            Guests
                            </h3>
                        </div>
                        <div class="form">
                            <div class="option">
                                <SvgIcon name="guestsIcon" size="small"/>
                                <span>
                                    number of guests
                                </span>
                            </div>
                            <button>
                                <SvgIcon name="arrowDownBtn" size="small"/>

                            </button>
                        </div>
                    </div>
                    <div class="promo">
                        <div class="title">
                            <h3>
                                Promo
                            </h3>
                        </div>
                        <TetriaryButton buttonText="Promo code"/>

                    </div>
                    <SecondaryButton buttonText="check rates"/>
                </div>
            </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import SvgIcon from './SvgIcon.vue';
import SecondaryButton from './Buttons/SecondaryButton.vue';
import TetriaryButton from './Buttons/TertiaryButton.vue';

export default defineComponent({
  name: 'BookingComponent',
  data() {

  },
  methods() {

  },
  components: {
    TetriaryButton,
    SecondaryButton,
    SvgIcon,

  },
});
</script>

<style scoped lang="scss">
.bookingForm {
  position: relative;
  padding: 50px 60px;
  background: #FFF;

  .container {
    width: 90vw;
    margin: 0 auto;

    .topBtn {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 8px;

      span {
        color: #171717;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */
        text-transform: uppercase;
      }
    }

    .bookingWrapper {
      display: grid;
      grid-template-columns: 1fr 1fr auto auto;
      gap: 20px;
      align-items: end;

      .item, .promo {
        text-align: start;

        .form {
          padding: 13px 16px;
          border: 1px solid rgba(23, 23, 23, 0.10);
          background: #FFF;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .option {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 16px;
          }
        }
      }

      .title {
        h3 {
          color: #171717;
          font-family: "HvDTrial Brandon Text", sans-serif;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
          text-transform: uppercase;
        }
      }

      .form {
        display: flex;
        align-items: center;
        justify-content: flex-start;
      }
    }
  }
}

</style>
