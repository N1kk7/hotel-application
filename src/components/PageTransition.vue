  <!-- <template>
    <div class="bgWrapper" v-if="isVisible">
      <div
        ref="bg1"
        class="fixed top-0 bottom-0 right-full h-screen z-10 bg-[#112d2a]"
        style="background-color: var(--color-light);"
      ></div>
      <div
        ref="bg2"
        class="fixed top-0 bottom-0 right-full h-screen z-20 bg-[#173c3c]"
        style="background-color: var(--color-gold)"
      ></div>
      <div
        ref="bg3"
        class="fixed top-0 bottom-0 right-full h-screen z-30 bg-[#1b4747]"
        style="background-color: var(--color-black);"
      >
        <img
          ref="refImg"
          src="@/assets/images/mainLogo.png" alt="logo"
          />
      </div>
    </div>
  </template> -->

<!-- <script>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

export default {
  setup() {
    const isVisible = ref(false);
    const bg1 = ref(null);
    const bg2 = ref(null);
    const bg3 = ref(null);
    const refImg = ref(null);

    const playTransition = () => {
      nextTick(() => {
        const timeline = gsap.timeline({
          onComplete: () => {
            isVisible.value = false; // Скрыть компонент после завершения анимации
          },
        });

        // timeline
        //   .set([bg1.value, bg2.value, bg3.value], { right: '100%', width: '100vw' })
        //   .to(bg1.value, {
        //     right: '0%',
        //     // width: '0%',
        //     duration: 0.8,
        //     ease: 'power3.inOut',
        //   })
        //   .to(
        //     bg2.value,
        //     {
        //       right: '0%',
        //       // width: '0%',
        //       duration: 0.8,
        //       ease: 'power3.inOut',
        //     },
        //     '-=0.4',
        //   )
        //   .to(
        //     bg3.value,
        //     {
        //       right: '0%',
        //       // width: '0%',
        //       duration: 0.8,
        //       ease: 'power3.inOut',
        //     },
        //     '-=0.4',
        //   );
        timeline
          .set([bg1.value, bg2.value, bg3.value], { right: '100%', width: '100vw' })
          .to(bg1.value, {
            right: '0%',
            duration: 0.8,
            ease: 'power3.inOut',
          })
          .to(
            bg2.value,
            {
              right: '0%',
              duration: 0.8,
              ease: 'power3.inOut',
            },
            '-=0.4',
          )
          .to(
            bg3.value,
            {
              right: '0%',
              duration: 0.8,
              ease: 'power3.inOut',
            },
            '-=0.4',
          )
          .to(refImg.value, {
            duration: 0.5, scale: 1.3, ease: 'power3.inOut',
          })
          .to(refImg.value, {
            duration: 0.3, rotate: 10, ease: 'power3.inOut',
          })
          .to(refImg.value, {
            duration: 0.3, rotate: -10, ease: 'power3.inOut',
          })
          .to(refImg.value, {
            duration: 0.4, rotate: 1, ease: 'power3.inOut',
          })
          .to(refImg.value, {
            duration: 0.5, scale: 1, ease: 'power3.inOut',
          })
          .to(bg3.value, {
            right: '100%',
            duration: 0.8,
            ease: 'power3.inOut',
          })
          .to(
            bg2.value,
            {
              right: '100%',
              duration: 0.8,
              ease: 'power3.inOut',
            },
            '-=0.4',
          )
          .to(
            bg1.value,
            {
              right: '100%',
              duration: 0.8,
              ease: 'power3.inOut',
            },
            '-=0.4',
          );
      });
    };

    onMounted(() => {
      isVisible.value = true;
      nextTick(() => {
        if (bg1.value && bg2.value && bg3.value) {
          playTransition();
          // запускаем анимацию
        } else {
          console.error('Refs are not attached');
        }
      });
      // isVisible.value = true;
      // playTransition();
    });

    return {
      bg1, bg2, bg3, isVisible, refImg,
    };
  },
};
</script> -->

<!-- <style scoped lang="scss">
.fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100%;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    // border: 1px solid var(color-gold);
    // border-radius: 10px;
    // padding: 20px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50% -50%);
    animation: logoAnimate 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  }
}
.top-0 {
  top: 0;
}
.bottom-0 {
  bottom: 0;
}
.right-full {
  right: 100%;
}
.h-screen {
  height: 100vh;
}
.z-30 {
  z-index: 30;
}
.z-20 {
  z-index: 20;
}
.z-10 {
  z-index: 10;
}

// @keyframes logoAnimate {
//   0% {
//     // transform: rotate(0deg);
//     transform: scale(1.5);
//   }
//   // 25% {
//   //   // transform: rotate(90deg);
//   //   transform: scale(1);
//   // }
//   50% {
//     // transform: rotate(180deg);
//     transform: scale(1);

//   }
//   // 75% {
//   //   // transform: rotate(270deg);
//   // }
//   100% {
//     // transform: rotate(360deg);
//     transform: scale(1.5);
//   }
// }

</style> -->

<template>
  <div class="bgWrapper" v-if="isVisible">
    <div
      ref="bg1"
      class="fixed top-0 bottom-0 right-full h-screen z-10 bg-[#112d2a]"
      style="background-color: var(--color-light);"
    ></div>
    <div
      ref="bg2"
      class="fixed top-0 bottom-0 right-full h-screen z-20 bg-[#173c3c]"
      style="background-color: var(--color-gold)"
    ></div>
    <div
      ref="bg3"
      class="mainBg fixed top-0 bottom-0 right-full h-screen z-30 bg-[#1b4747]"
      style="background-color: var(--color-black);"
    >
      <div
        ref="transparentLogo"
        class="logoBg"
        ></div>
      <img
        ref="refImg"
        src="@/assets/images/mainLogo.png" alt="logo"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue';
import { gsap } from 'gsap';

export default {
  setup() {
    const isVisible = ref(false);
    const bg1 = ref(null);
    const bg2 = ref(null);
    const bg3 = ref(null);
    const refImg = ref(null);
    const transparentLogo = ref(null);

    const playTransition = () => {
      nextTick(() => {
        const timeline = gsap.timeline({
          onComplete: () => {
            isVisible.value = false;
          },
        });

        timeline
          .set([bg1.value, bg2.value, bg3.value], { right: '100%', width: '100vw' })
          .to(bg1.value, {
            right: '0%',
            duration: 0.5,
            ease: 'power2.inOut',
          })
          .to(
            bg2.value,
            {
              right: '0%',
              duration: 0.5,
              ease: 'power2.inOut',
            },
            '-=0.3',
          )
          .to(
            bg3.value,
            {
              right: '0%',
              duration: 0.5,
              ease: 'power2.inOut',
            },
            '-=0.3',
          )
          .to(
            transparentLogo.value,
            {
              duration: 1.7,
              opacity: 0,
              ease: 'power2.inOut',
              scale: 1,
            },
            'start',
          )
          .to(
            refImg.value,
            {
              duration: 0.4, scale: 1.3, ease: 'power2.inOut',
            },
            'start',
          )
          .to(refImg.value, {
            duration: 0.2, rotate: 10, ease: 'power2.inOut',
          }, '>')
          .to(refImg.value, {
            duration: 0.2, rotate: -10, ease: 'power2.inOut',
          }, '>')
          .to(refImg.value, {
            duration: 0.2, rotate: 1, ease: 'power2.inOut',
          }, '>')
          .to(refImg.value, {
            duration: 0.2, scale: 1, ease: 'power2.inOut',
          }, '>')
          .to(bg3.value, {
            right: '100%',
            duration: 0.5,
            ease: 'power2.inOut',
          })
          .to(
            bg2.value,
            {
              right: '100%',
              duration: 0.5,
              ease: 'power2.inOut',
            },
            '-=0.3',
          )
          .to(
            bg1.value,
            {
              right: '100%',
              duration: 0.5,
              ease: 'power2.inOut',
            },
            '-=0.3',
          );
      });
    };

    onMounted(() => {
      isVisible.value = true;
      nextTick(() => {
        if (bg1.value && bg2.value && bg3.value) {
          playTransition();
        } else {
          console.error('Refs are not attached');
        }
      });
    });

    return {
      bg1, bg2, bg3, isVisible, refImg, transparentLogo,
    };
  },
};
</script>

<style scoped lang="scss">
.fixed {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100%;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    animation: logoAnimate 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
  }
}
.logoBg{
  background-image: url('@/assets/images/transparentLogo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.1;
  transform: scale(0.8);
}
.top-0 {
  top: 0;
}
.bottom-0 {
  bottom: 0;
}
.right-full {
  right: 100%;
}
.h-screen {
  height: 100vh;
}
.z-30 {
  z-index: 30;
}
.z-20 {
  z-index: 20;
}
.z-10 {
  z-index: 10;
}
</style>
