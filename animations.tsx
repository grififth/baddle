const slideInLeft = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const slideInRightDelay = {
  initial: {
    x: 40,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
  },
};

const fadeFromBelow = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
};

export { slideInLeft, fadeFromBelow, slideInRightDelay };
