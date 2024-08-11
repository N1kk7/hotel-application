declare module 'locomotive-scroll' {
    export interface LocomotiveScrollOptions {
      el: HTMLElement;
      smooth: boolean;
      [key: string]: any;
    };
  
    export default class LocomotiveScroll {
      constructor(options: LocomotiveScrollOptions);
      on(event: string, callback: (args: any) => void): void;
      update(): void;
      destroy(): void;
      scrollTo(target: string | HTMLElement | number, options?: any): void;
    };
  };
  