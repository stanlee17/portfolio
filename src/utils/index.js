import { scroller } from 'react-scroll';

export const pageScroller = (to, offset) => {
  scroller.scrollTo(to, {
    smooth: true,
    spy: true,
    offset,
    duration: 0,
  });
};
