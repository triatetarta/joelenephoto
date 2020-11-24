const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const loaderVariants = {
  from: {
    y: '0%',
  },
  to: {
    y: '-100%',
    transition: {
      duration: 0.1,
      when: 'afterChildren',
      staggerDirection: -1,
      staggerChildren: 0.3,
      ease: 'easeOut',
    },
  },
};

export const childVariants = {
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'backIn',
    },
  },
};

export const pageAnimation = {
  from: {
    opacity: 0,
    x: -300,
  },
  to: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      when: 'beforeChildren',
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

export const firstName = {
  from: {
    y: '0%',
  },
  to: {
    y: '0%',
    transition: {
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
};

export const lastName = {
  from: {
    y: '0%',
  },
  to: {
    zIndex: 4,
    y: '0%',
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.06,
      staggerDirection: 1,
    },
  },
};

export const letter = {
  from: {
    y: '100%',
  },
  to: {
    y: '0%',
    transition: { duration: 0.8, ...transition },
  },
};

export const maskReveal = {
  from: {
    height: '0%',
  },
  to: {
    height: '100%',

    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const imageReveal = {
  from: {
    y: '100%',
  },
  to: {
    y: '0%',
    transition: {
      delay: 1,
      duration: 0.4,
    },
  },
};

export const maskReveal1 = {
  from: {
    width: '0%',
  },
  to: {
    width: '100%',

    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const imageReveal1 = {
  from: {
    x: '100%',
  },
  to: {
    x: '0%',
    transition: {
      delay: 1,
      duration: 0.4,
    },
  },
};

export const maskReveal2 = {
  from: {
    height: '0%',
  },
  to: {
    height: '100%',

    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const imageReveal2 = {
  from: {
    y: '100%',
  },
  to: {
    y: '0%',
    transition: {
      delay: 1,
      duration: 0.4,
    },
  },
};

export const maskReveal3 = {
  from: {
    height: '0%',
  },
  to: {
    height: '100%',

    transition: {
      delay: 1,
      duration: 1,
    },
  },
};

export const imageReveal3 = {
  from: {
    y: '100%',
  },
  to: {
    y: '0%',
    transition: {
      delay: 1,
      duration: 0.4,
    },
  },
};

export const buttonVariants = {
  hover: {
    scale: 1.1,
    rotate: 5,
    skewX: 2,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
  },
};

export const slider = {
  from: { y: '130%' },
  to: {
    y: '-100%',
    transition: { ease: 'easeOut', duration: 1 },
  },
};

export const sliderContainer = {
  from: { opacity: 1 },
  to: { opacity: 1, transition: { staggerChildren: 0.05, ease: 'easeOut' } },
};

export const aboutTextContainer = {
  from: { opacity: 1 },
  to: { opacity: 1, transition: { staggerChildren: 0.2, ease: 'easeOut' } },
};

export const aboutText = {
  from: {
    y: '100%',
  },
  to: {
    y: '0%',
    transition: {
      duration: 0.6,
    },
  },
};

export const fadeIn = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 0.9,
    },
  },
};

export const menuFade = {
  from: {
    opacity: 0,
    x: '100%',
  },
  to: {
    opacity: 1,
    x: '0%',
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: {
      duration: 0.3,
    },
  },
};

export const beautyKylie = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 1.6,
      staggerChildren: 0.025,
      staggerDirection: -1,
      yoyo: Infinity,
      ease: [0.76, -0.16, 0.45, 0.83],
    },
  },
};

export const repeatGallery = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.045,
      yoyo: Infinity,
      ease: [0.36, 0.09, 0.19, 1.03],
    },
  },
};
