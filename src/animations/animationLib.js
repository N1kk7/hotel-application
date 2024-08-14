import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// export const animateTitleLetters = (animatedTitle, pageBlock) => {
//   gsap.set(animatedTitle.querySelectorAll('.letter'), {
//     y: 100,
//     opacity: 0,
//   });

//   gsap.to(animatedTitle.querySelectorAll('.letter'), {
//     y: 0,
//     opacity: 1,
//     duration: 0.5,
//     stagger: 0.1,
//     ease: 'power2.out',
//     scrollTrigger: {
//       trigger: pageBlock,
//       start: 'top center',
//     },
//   });
// };

// export const animateMainImage = (mainImageBg, mainDiv) => {
//   gsap.from(mainImageBg, {
//     scale: 1.2,
//     scrollTrigger: {
//       trigger: mainDiv,
//       start: 'top top',
//       end: 'bottom top',
//       scrub: true,
//     },
//     ease: 'none',
//   });
// };

// export const animateTextBlock = (textBlock) => {
//   gsap.from(textBlock, {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.2,
//     ease: 'power3.out',
//   });
// };

// export const animatePageBlock = (pageBlock) => {
//   gsap.from(pageBlock.querySelectorAll('h1, h2'), {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     delay: 0.6,
//     ease: 'power3.out',
//   });
// };

// export const animateBlockWrapper = (blockWrapper) => {
//   gsap.from(blockWrapper.querySelectorAll('.item'), {
//     opacity: 0,
//     y: 50,
//     duration: 1,
//     stagger: 0.2,
//     ease: 'power3.out',
//   });
// };

// /////////

// animation for mainDiv
export const animateMainDiv = (mainDiv) => {
  gsap.from(mainDiv, {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: 'power3.out',
  });
};
export const animateTextBlockHeaders = (textBlock) => {
  if (textBlock) {
    gsap.from(textBlock.querySelectorAll('h1'), {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }
};

export const hideMainTittle = (textBlock, mainDiv) => {
  gsap.to(textBlock, {
    scrollTrigger: {
      trigger: mainDiv,
      start: '150 ',
      scrub: true,
    },
    ease: 'none',
    left: '-100%',
  });
};

export const animateMainBgScale = (mainImageBg, mainDiv) => {
  gsap.from(mainImageBg, {
    scale: 1.2,
    scrollTrigger: {
      trigger: mainDiv, // Изменяем триггер на основной контейнер
      start: 'top top', // Начало анимации
      end: 'bottom top', // Конец анимации
      scrub: true, // Связь анимации с прокруткой
    },
    ease: 'none',
  });
};

// mainDiv.value.scrollIntoView({ behavior: 'smooth', block: 'start' });

// gsap.set(animatedTitle.value.querySelectorAll('.letter'), {
//   y: 100, // Начальное смещение вверх
//   opacity: 0, // Начальная прозрачность
// });

// // Анимация падения букв
// gsap.to(animatedTitle.value.querySelectorAll('.letter'), {
//   y: 0, // Конечное положение (на месте)
//   opacity: 1, // Конечная видимость
//   duration: 0.5, // Длительность анимации
//   stagger: 0.1, // Задержка между анимацией каждой буквы
//   ease: 'power2.out', // Плавное движение
//   scrollTrigger: {
//     trigger: pageBlock.value, // Блок, при прокрутке до которого начинается анимация
//     start: 'top center', // Начало анимации, когда блок появляется в центре экрана
//     // toggleActions: 'play none none none', // Анимация запускается один раз
//   },
// });
// gsap.from(mainImageBg.value, {
//   scale: 1.2,
//   scrollTrigger: {
//     trigger: mainDiv.value, // Изменяем триггер на основной контейнер
//     start: 'top top', // Начало анимации
//     end: 'bottom top', // Конец анимации
//     scrub: true, // Связь анимации с прокруткой
//   },
//   ease: 'none',
// });

// gsap.to(textBlock.value, {
//   scrollTrigger: {
//     trigger: mainDiv.value,
//     start: '150 ',
//     scrub: true,
//   },
//   ease: 'none',
//   left: '-100%',

// });

// // Анимация элементов в pageBlock
// gsap.from(pageBlock.value.querySelectorAll('h1, h2'), {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   delay: 0.6,
//   ease: 'power3.out',
// });

// // Анимация элементов в blockWrapper
// gsap.from(blockWrapper.value.querySelectorAll('.item'), {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.2,
//   ease: 'power3.out',
// });

// // Анимация mainDiv
// gsap.from(mainDiv.value, {
//   opacity: 0,
//   y: -50,
//   duration: 1,
//   ease: 'power3.out',
// });

// // Анимация заголовков в textBlock
// gsap.from(textBlock.value.querySelectorAll('h1'), {
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.2,
//   ease: 'power3.out',
// });

// const smoothScroll = (targetY, duration) => {
//   const startY = window.scrollY;
//   const distance = targetY - startY;
//   let startTime = null;

//   const animation = (currentTime) => {
//     if (startTime === null) startTime = currentTime;
//     const timeElapsed = currentTime - startTime;
//     const progress = Math.min(timeElapsed / duration, 1);
//     const ease = 1 - (1 - progress) ** 3; // cubic easing

//     window.scrollTo(0, startY + distance * ease);

//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   };

//   requestAnimationFrame(animation);
// };
