<template>
    <div class="Modal">
        <div class="ModalWrapper">
            <div class="ModalTop">
                <div class="tittle">
                    <h2>Registration</h2>
                </div>
            </div>
            <div class="ProgressBar">
                <div class="progress"></div>
                <div class="progress"></div>
                <div class="progress"></div>
                <div class="progress"></div>
            </div>
            <div class="ModalContent">
                <div class="section">
                    <div class="tittle">
                        <h3>Registration</h3>
                    </div>
                    <div class="input">
                        <label for="name">
                            Name
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                required
                            />
                        </label>
                    </div>
                    <div class="input">
                        <label for="email">
                            Email
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                        </label>
                    </div>
                    <div class="input">
                        <label for="phone">
                            Phone
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone"
                                required
                            />
                        </label>
                    </div>
                    <div class="input">
                        <label for="password">
                            Password
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div class="buttonGroup">
                <TertiaryButton buttonText="Back"/>
                <TertiaryButton buttonText="Next"/>

            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from 'vue';
import TertiaryButton from '../Buttons/TertiaryButton.vue';
// import SecondaryButton from '../Buttons/SecondaryButton.vue';
// import PrimaryButton from '../Buttons/PrimaryButton.vue';

export default {
  name: 'RegistrationModal',
  components: {
    TertiaryButton,
    // SecondaryButton,
    // PrimaryButton,
  },
  setup() {
    onMounted(() => {
      document.body.style.overflow = 'hidden';
    });
    onBeforeUnmount(() => {
      document.body.style.overflow = 'auto';
    });
    return {

    };
  },
};
</script>

<style lang="scss" scoped>
// @import '../style/main.scss';
    @import '@/style/mixins.scss';

    .Modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 9999;

        .ModalWrapper {
            position: relative;
            width: 100%;
            max-width: 70%;
            background-color: var(--color-white);
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
            background: rgba(255, 255, 255, 0.15);
            border: 1px solid var(--color-gold);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(255, 255, 255, 0.15);
                backdrop-filter: blur(10px);
                z-index: -1;
            }
            .ModalTop{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 120px;
                border-radius: 10px 10px 0 0;
                background-position-y: 60%;
                background-repeat: no-repeat;
                background-size: cover;
                background-image: url('../../assets/images/king-palace/mainBg.png');
                filter: sepia(0.7);
            }
            .ProgressBar{
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 100%;
                height: 5px;
                gap: 5px;
                .progress{
                    width: 100%;
                    height: 5px;
                    background-color: var(--color-gold);
                }
            }
            .ModalContent{
                width: 100%;
                height: 100%;
                display: flex;
                padding: 20px 40px;
                justify-content: center;
                align-items: center;
                &::before{
                    content: '';
                    position: absolute;
                    top: 10%;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-image: url('../../assets/images/transparentLogo.png');
                    background-repeat: no-repeat;
                    background-position: center;
                    background-blend-mode: luminosity;
                    background-size: clamp(150px, 85%, 400px);
                    z-index: -1;
                    opacity: 0.1;
                }
                .section{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 80%;
                    gap: 20px;
                    .input{
                        width: 80%;
                    }
                    input{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 50px;
                        margin-top: 5px;
                        padding: 0 10px;
                        border: 1px solid var(--color-gold);
                        border-radius: 4px;
                        background: rgba(255, 255, 255, 0.15);
                        &:focus{
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>
