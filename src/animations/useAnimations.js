// src/animations/useAnimations.js
import { ref, onMounted, nextTick } from 'vue';
import {
  // animateTitleLetters,
  // animateMainImage,
  // animateTextBlock,
  // animatePageBlock,
  // animateBlockWrapper,
  animateMainDiv,
  animateTextBlockHeaders,
  hideMainTittle,
  animateMainBgScale,
} from '@/animations/animationLib';

const useAnimations = () => {
  const mainDiv = ref(null);
  const textBlock = ref(null);
  const pageBlock = ref(null);
  const blockWrapper = ref(null);
  const mainImageBg = ref(null);
  const animatedTitle = ref(null);

  onMounted(async () => {
    await nextTick();
    animateMainDiv(mainDiv.value);
    hideMainTittle(textBlock.value, mainDiv.value);
    // animateTitleLetters(animatedTitle.value, pageBlock.value);
    animateTextBlockHeaders(textBlock.value); // Добавляем анимацию заголовков
    animateMainBgScale(mainImageBg.value, mainDiv.value);

    // animateMainImage(mainImageBg.value, mainDiv.value);
    // animateTextBlock(textBlock.value);
    // animatePageBlock(pageBlock.value);
    // animateBlockWrapper(blockWrapper.value);
    // if (mainDiv.value) {
    //   gsap.to(mainDiv.value, {
    //     opacity: 1, y: 0, duration: 1, ease: 'power3.out',
    //   });
    // } else {
    //   console.warn('mainDiv is not initialized');
    // }
  });

  return {
    mainDiv,
    textBlock,
    pageBlock,
    blockWrapper,
    mainImageBg,
    animatedTitle,
  };
};

export default useAnimations;
