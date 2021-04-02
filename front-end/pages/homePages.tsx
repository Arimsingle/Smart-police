import { PageDisplay } from "../components/home/PageDisplay";
import {
  HomeDataOne,
  HomeDataTwo,
  HomeDataThree,
} from "../components/home/HomeDatas";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
const Section_Styled = styled.div`
  section {
    height: 100vh;
  }
`;
const Home: any = () => {
  const props = useSpring({ scroll: 100, from: { scroll: 0 } });
  return (
    <Section_Styled>
      <animated.div scrollTop={props.scroll}>
        <section>
          <PageDisplay {...HomeDataOne} />
        </section>
        <section>
          <PageDisplay {...HomeDataTwo} />
        </section>
        <section>
          <PageDisplay {...HomeDataThree} />
        </section>
      </animated.div>
    </Section_Styled>
  );
};
export default Home;
