<template>
    <div class="Modal">
        <div class="ModalWrapper"
        :class="{ 'row-reverse': logInState, 'row': !logInState }"
        >
            <div class="closeBtn">
        <!-- :style="{flexDirection: logInState ? 'row-reverse' : 'row'}" -->

                    <SvgIcon
                        name="closeBurger"
                        size="small"
                        @click="closeModal"
                    />
                </div>
            <div
                class="ModalTop"
            ></div>
            <div class="ModalContent">
                <!-- :style="{
                    backgroundPositionX: logInState ? '80%' : '0%'
                    }" -->
                <div class="section">
                    <div class="ChoiceEnter">
                            <div class="item" :class="{itemActive: logInState}">
                                <button @click="choiceEnter('login')">
                                    Log in
                                </button>
                            </div>
                            <div class="item" :class="{itemActive: !logInState}">
                                <button @click="choiceEnter('registration')">
                                    Registration
                                </button>

                            </div>
                    </div>
                    <div class="contentWrapper">
                        <div
                        ref="logInContent"
                        class="typeEnter"
                        v-if="logInState"
                    >
                        <div class="input">
                            <label for="email">
                                <span class="labelName">
                                    Email
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@gmail.com"
                                    maxlength="40"
                                    required
                                    v-model="email"
                                />
                            </label>
                        </div>
                        <div class="input">
                            <label for="password">
                                <span class="labelName">
                                    Password
                                </span>
                                <input
                                    :type="hiddenPassword ? 'text' : 'password'"
                                    name="password"
                                    :placeholder="hiddenPassword ? '123456' : '••••••••'"
                                    maxlength="20"
                                    required
                                    v-model="password"
                                    class="passwordInput"
                                />
                                <div class="hiddenPass">
                                    <SvgIcon
                                        v-if="hiddenPassword"
                                        name="open-eye"
                                        size="medium"
                                        strokeWidth="1"
                                        @click="toggleEye"
                                    />
                                    <SvgIcon
                                        v-else
                                        name="close-eye"
                                        size="medium"
                                        strokeWidth="1"
                                        @click="toggleEye"
                                    />
                                </div>
                            </label>
                        </div>

                        </div>
                        <div
                            ref="registerContent"
                            class="typeEnter"
                            v-else
                        >
                            <div class="input">
                            <label for="firstName">
                                <span class="labelName">
                                First Name
                                </span>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="Paul"
                                    required
                                    v-model="firstName"
                                />
                            </label>
                            </div>
                            <div class="input">
                                <label for="lastName">
                                    <span class="labelName">
                                        Last Name
                                    </span>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Walker"
                                        required
                                        v-model="lastName"
                                    />
                                </label>
                            </div>
                            <div class="input">
                                <label for="email">
                                    <span class="labelName">
                                        Email
                                    </span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="example@gmail.com"
                                        required
                                        v-model="email"
                                    />
                                </label>
                            </div>
                            <div class="input">
                                <label for="password">
                                    <span class="labelName">
                                        Password
                                    </span>
                                    <input
                                        :type="hiddenPassword ? 'text' : 'password'"
                                        name="password"
                                        :placeholder="hiddenPassword ? '123456' : '••••••••'"
                                        maxlength="20"
                                        required
                                        v-model="password"
                                        class="passwordInput"

                                    />
                                    <div class="hiddenPass">
                                        <SvgIcon
                                            v-if="hiddenPassword"
                                            name="open-eye"
                                            size="medium"
                                            strokeWidth="1"
                                            @click="toggleEye"
                                        />
                                        <SvgIcon
                                            v-else
                                            name="close-eye"
                                            size="medium"
                                            strokeWidth="1"
                                            @click="toggleEye"
                                        />
                                    </div>
                                </label>
                            </div>
                            <div class="input">
                                <label for="phone">
                                    <span class="labelName">
                                        Phone
                                    </span>
                                    <input
                                        type="number"
                                        name="phone"
                                        maxlength="12"
                                        placeholder="+_ (___) ___-__-__"
                                        required
                                        v-model="phone"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="buttonGroup">
                        <TertiaryButton
                            v-if="!logInState"
                            buttonText="Registration"
                            textColor="var(--color-gold)"
                            @click="registrationHandler"
                        />
                        <TertiaryButton
                            v-else
                            buttonText="Log in"
                            textColor="var(--color-gold)"
                            @click="logInHandler"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
  onMounted, onBeforeUnmount, ref, watch, nextTick, inject,
} from 'vue';
import gsap from 'gsap';
import useModalStore from '@/store/useModalStore';
import TertiaryButton from '../Buttons/TertiaryButton.vue';
import SvgIcon from '../SvgIcon.vue';

export default {
  name: 'RegistrationModal',
  components: {
    TertiaryButton,
    SvgIcon,
  },
  setup() {
    const logInState = ref(true);
    const logInContent = ref(null);
    const registerContent = ref(null);
    const firstName = ref('');
    const lastName = ref('');
    const phone = ref('');
    const email = ref('');
    const password = ref('');
    const hiddenPassword = ref(true);
    const modalStore = useModalStore();

    const showToast = inject('showToast');

    const toggleEye = () => {
      hiddenPassword.value = !hiddenPassword.value;
    };

    onMounted(() => {
      document.body.style.overflow = 'hidden';
    });
    onBeforeUnmount(() => {
      document.body.style.overflow = 'auto';
    });

    const choiceEnter = (value) => {
      logInState.value = value === 'login';
    };

    const logInHandler = async () => {
      try {
        const response = await fetch('https://secret-eyrie-79076-8d2c9b054b1f.herokuapp.com/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });
        const data = await response.json();
        showToast('Toast is working', 'error');
        console.log(data);
      } catch (e) {
        console.log(e, 'from error');
        showToast('ololo', 'error');
      }
      email.value = '';
      password.value = '';
    };

    const registrationHandler = async () => {
      try {
        const response = await fetch('https://secret-eyrie-79076-8d2c9b054b1f.herokuapp.com/api/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            phoneNumber: phone.value,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (e) {
        console.log(e, 'from error');
      }
      firstName.value = '';
      lastName.value = '';
      phone.value = '';
      email.value = '';
      password.value = '';
    };

    const closeModal = () => {
      modalStore.setRegisterModal(false);
    };

    const toggleContent = async () => {
      await nextTick();

      const logInHeight = logInContent.value ? logInContent.value.scrollHeight : 0;
      const registerHeight = registerContent.value ? registerContent.value.scrollHeight : 0;

      if (logInState.value) {
        // Переход к логину
        gsap.set(registerContent.value, {
          height: registerHeight,
        });
        gsap.to(registerContent.value, { height: 0, duration: 0.5, ease: 'power2.out' });

        gsap.set(logInContent.value, { height: 0 });
        gsap.to(logInContent.value, { height: logInHeight, duration: 0.5, ease: 'power2.out' });
      } else {
        gsap.set(logInContent.value, {
          height: logInHeight,
        });
        gsap.to(logInContent.value, { height: 0, duration: 0.5, ease: 'power2.out' });

        gsap.set(registerContent.value, { height: 0 });
        gsap.to(registerContent.value, {
          height: registerHeight, duration: 0.5, ease: 'power2.out',
        });
      }
    };

    watch(logInState, toggleContent);

    return {
      choiceEnter,
      logInState,
      logInContent,
      registerContent,
      logInHandler,
      registrationHandler,
      firstName,
      lastName,
      phone,
      email,
      password,
      closeModal,
      toggleContent,
      hiddenPassword,
      toggleEye,
    };
  },
};
</script>

<style lang="scss" scoped>
    @import '@/style/mixins.scss';

    .Modal{
        @include modalBlock;
        .ModalWrapper{
            display: flex;
            justify-content: space-between;
            // flex-direction: unset;
            min-height: 70vh;
            position: relative;
            transition: flex-direction 0.5s ease-in-out;
            .closeBtn{
                position: absolute;
                top: 10px;
                right: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--color-white);
                border-radius: 50%;
                border: 1px solid var(--color-white);
                cursor: pointer;
                z-index: 20;
            }
            .ModalTop{
                height: auto;
                width: 50%;
                z-index: 10;
                transition: transform 0.5s ease-in-out, background-position-x 0.7s ease-in-out;
                filter: sepia(0.05);
                @media (max-width: 1024px) {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    filter: brightness(0.4);
                }
            }
            .ModalContent{
                width: 50%;
                height: auto;
                position: relative;
                transition: transform 0.5s ease-in-out;
                &::before{
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                }
                .section{
                    input{
                        font-size: 16px;
                    }
                }
                .hiddenPass{
                    width: fit-content;
                    height: 45px;
                    position: absolute;
                    bottom: 0;
                    left: 90%;
                    transform: translateX(-50%);
                    display: flex;
                    justify-content: right;
                    align-items: center;
                    padding-right: 20px;
                    svg{
                        z-index: 10;
                    }
                    @media (max-width: 375px) {
                        &{
                            height: 40px;
                            padding-right: 15px;
                        }
                        svg{
                            width: clamp(25px, 2vw, 30px);
                        }
                    }
                }
                @media (max-width: 1024px) {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 10;
                    .section{
                        overflow: visible;
                        input{
                            color: var(--color-white);
                            font-weight: 200;
                            background: transparent;
                            backdrop-filter: blur(5px);
                            letter-spacing: 0.1em;
                            &::placeholder{
                                color: var(--color-white);
                                font-weight: 200;
                                letter-spacing: 0.1em;
                            }
                        }
                    }
                }
            }
            &.row-reverse,
            &.row{
                flex-direction: row-reverse;
            }
            &.row-reverse {
                .ModalTop {
                transform: translateX(0%);
                background-position-x: 80%;
                }

                .ModalContent {
                transform: translateX(0%);
                }
            }

            &.row {

                .ModalTop {
                    transform: translateX(-100%);
                    background-position-x: 0%;
                    @media screen and (max-width: 1024px) {
                        transform: translateX(0%);
                    }

                }

                .ModalContent {
                    transform: translateX(100%);
                        @media screen and (max-width: 1024px) {
                            transform: translateX(0%);
                        }
                    }
            }

        }
    }
    .contentWrapper {
        overflow: hidden;
    }
    .typeEnter {
        transition: height 0.5s ease;
    }
</style>
