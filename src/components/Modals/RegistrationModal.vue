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
                    <div class="typeEnter" v-if="logInState">
                        <div class="input">
                            <label for="email">
                                Email
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
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="ololo"
                                    maxlength="40"
                                    required
                                    v-model="password"
                                    class="passwordInput"
                                />
                                <span v-if="!password && !isFocused" class="passwordPlaceholder">
                                    ••••••••
                                </span>
                            </label>
                        </div>

                    </div>
                    <div class="typeEnter" v-else>
                        <div class="input">
                        <label for="firstName">
                            First Name
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
                                Last Name
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
                                Email
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
                                Password
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    v-model="password"
                                    class="passwordInput"

                                />
                                <span v-if="!password && !isFocused" class="passwordPlaceholder">
                                    ••••••••
                                </span>
                            </label>
                        </div>
                        <div class="input">
                            <label for="phone">
                                Phone
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+_ (___) ___-__-__"
                                    required
                                    v-model="phone"
                                />
                            </label>
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
import { onMounted, onBeforeUnmount, ref } from 'vue';
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
    const firstName = ref('');
    const lastName = ref('');
    const phone = ref('');
    const email = ref('');
    const password = ref('');
    const modalStore = useModalStore();

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
        console.log(data);
      } catch (e) {
        console.log(e, 'from error');
      }
      email.value = '';
      password.value = '';
    };

    const registrationHandler = async () => {
      try {
        // http://localhost:4444/auth/register
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

    return {
      choiceEnter,
      logInState,
      logInHandler,
      registrationHandler,
      firstName,
      lastName,
      phone,
      email,
      password,
      closeModal,
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
                transition: transform 0.5s ease-in-out;
                // transition: background-position 0.5s ease-in-out;
                z-index: 10;
    //             position: absolute;
    // height: -webkit-fill-available;
    // left: 0%;
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
                // flex-direction: row;

                .ModalTop {
                transform: translateX(-100%);
                background-position-x: 0%;

                }

                .ModalContent {
                transform: translateX(100%);
                }
            }

        }
    }
</style>
