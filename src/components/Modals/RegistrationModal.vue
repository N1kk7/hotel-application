<template>
    <div class="Modal">
        <div class="ModalWrapper">
            <div class="ModalTop">
                <div class="closeBtn">
                    <SvgIcon
                        name="closeBurger"
                        size="small"
                        @click="closeModal"
                    />
                </div>
            </div>
            <div class="ModalContent">
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
                                    placeholder="Email"
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
                                    placeholder="Password"
                                    maxlength="40"
                                    required
                                    v-model="password"
                                />
                            </label>
                        </div>

                    </div>
                    <div class="typeEnter" v-else>
                        <div class="input">
                        <label for="name">
                            First Name
                            <input
                                type="text"
                                name="name"
                                placeholder="First Name"
                                required
                                v-model="firstName"
                            />
                        </label>
                        </div>
                        <div class="input">
                            <label for="name">
                                Last Name
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Last Name"
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
                                    placeholder="Email"
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
                                    v-model="phone"
                                />
                            </label>
                        </div>
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
    //   console.log('click');
      modalStore.registerModal = (false);
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
            width: clamp(290px, 90vw, 2000px);
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
                border-bottom: 1px solid var(--color-gold);
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
                }
            }
            .ModalContent{
                width: 100%;
                height: 100%;
                display: flex;
                padding: 20px clamp(5px, 4vw, 40px);
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
                    width: 100%;
                    .ChoiceEnter{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        .item{
                            border-bottom: 2px solid transparent;
                            padding: 15px;
                        }
                        button{
                            @include text(var(--color-white), clamp(12px, 2vw, 18px), unset, 600);

                        }
                        .itemActive{
                            border-bottom: 2px solid var(--color-gold);
                            button{
                                color: var(--color-gold);

                            }
                        }

                    }
                    .typeEnter{
                        display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;
                    width: 100%;
                    gap: 20px;
                    }
                    .input{
                        width: clamp(280px, 100%, 800px);
                        // width: 80%;;
                        @include text(var(--color-gold), clamp(12px, 2vw, 18px), unset, 600);
                    }
                    input{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: clamp(280px, 100%, 800px);
                        margin: 0 auto;
                        height: 50px;
                        margin-top: 5px;
                        padding: 0 10px;
                        border: 1px solid var(--color-gold);
                        border-radius: 4px;
                        background: rgba(255, 255, 255, 0.35);
                        @include text(var(--color-white), clamp(12px, 2vw, 18px), unset, 600);
                        &:focus{
                            outline: none;
                        }
                        &::placeholder{
                            @include text(var(--color-white), clamp(12px, 2vw, 18px), unset, 400);
                        }
                    }
                }
            }
            .buttonGroup{
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 20px 0 30px;
                gap: 20px;
                button{
                    background: rgba(255, 255, 255, 0.35) !important;
                    border: 1px solid var(--color-gold) !important;
                    span{
                        font-weight: 700 !important;
                    }

                }
            }
        }
    }
</style>
