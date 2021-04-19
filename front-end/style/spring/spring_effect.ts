import { useSpring } from "react-spring";
////////////////////////////////////TEXT////////////////////////////////
export const TextAnimation = (
  fisrt: number,
  second: number,
  third: number,
  delay: number
) => {
  const props = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: `translateX(-${second}%)` });
      await next({ opacity: 1, transform: `translateX(${third}%)` });
    },
    from: { opacity: 0, transform: `translateX(${fisrt}%)` },
    delay: delay,
  });
  return props;
};

export const funcPropsFullName = () => {
  const propsFullName = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1000,
  });
  return propsFullName;
};

export const funcPropsPhone = () => {
  const propsPhone = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1100,
  });
  return propsPhone;
};

export const funcPropsEmail = () => {
  const propsEmail = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1200,
  });
  return propsEmail;
};
export const funcPropsFacebook = () => {
  const propsFacebook = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1300,
  });
  return propsFacebook;
};

export const funcPropsInstagram = () => {
  const propsInstagram = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1400,
  });
  return propsInstagram;
};

export const funcPropsGithub = () => {
  const propsGithub = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: "translateX(-2%)" });
      await next({ opacity: 1, transform: "translateX(0%)" });
    },
    from: { opacity: 0, transform: "translateX(100%)" },
    delay: 1500,
  });
  return propsGithub;
};
////////////////////////////////////TEXT////////////////////////////////

////////////////////////////////////ICON////////////////////////////////
export const FuncArrowAnimation = (
  fisrt: number,
  second: number,
  third: number,
  delay: number
) => {
  const props = useSpring({
    to: async (next) => {
      await next({ opacity: 0.8, transform: `translateY(-${second}%)` });
      await next({
        opacity: 1,
        transform: `translateY(${third}%)`,
        transitionTimingFunction: "ease-in-out",
      });
    },
    from: { opacity: 0, transform: `translateY(${fisrt}%)` },
    delay: delay,
  });
  return props;
};
////////////////////////////////////ICON////////////////////////////////
