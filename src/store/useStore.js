import { defineStore } from 'pinia';

const useMainStore = defineStore('main', {
  state: () => ({
    count: 0,
    mainHeight: 0,
    fullName: 'ololo',
  }),
  actions: {
    increment() {
      // console.log('increment');
      this.count += 1;
      // console.log(this.count);
    },
    decrement() {
      // console.log('decrement');
      this.count -= 1;
      // console.log(this.count);
    },
    getFullName(name) {
      this.fullName = name;
    },
    setMainHeight(height) {
      this.mainHeight = height;
      // console.log(height, 'from store');
    },
  },
});
export default useMainStore;
