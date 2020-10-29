
import Gamma from "./gamma/gamma";
import styled from "styled-components";
const GammaDisplay = () => {
    const GammaStyled = styled.div`
    * {
  box-sizing: border-box;
}

html,
body,
div,
#root {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow: hidden;
}

#root {
  overflow: auto;
}

body,div {
  position: fixed;
  overflow: hidden;
  overscroll-behavior-y: none;
  font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  color: black;
  background: white;
}
 
    

    `
    return (
        <GammaStyled>
            <Gamma />
        </GammaStyled>
    )
}
export default GammaDisplay;