import styled from "styled-components";
export const HomeStyled = styled.div`
  .home__hero-section {
    color: #fff;
    padding: 150px 0;
  }
  .home__hero-row {
    align-items: center;
  }
  .row {
    display: flex;
    margin-right: -15px;
    margin-bottom: -15px;
    margin-left: -15px;
    flex-wrap: wrap;
    align-content: stretch;
  }
  .col {
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;
  }
  .home__hero-text-warpper {
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
  }
  .top-line {
    color: #ff3639;
    font-size: 20px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .heading {
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #fff;
  }
  .dark {
    color: #3b3a52;
  }
  .darkBg {
    background-color: #3b3a50;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1009%26quot%3b)' fill='none'%3e%3cpath d='M584.597%2c353.132C601.148%2c353.655%2c616.563%2c344.17%2c624.572%2c329.676C632.336%2c315.624%2c630.014%2c298.906%2c622.357%2c284.796C614.267%2c269.888%2c601.559%2c256.126%2c584.597%2c256.015C567.494%2c255.903%2c553.652%2c269.014%2c545.97%2c284.295C539.058%2c298.045%2c541.239%2c313.86%2c548.77%2c327.281C556.494%2c341.046%2c568.821%2c352.634%2c584.597%2c353.132' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1314.203%2c340.562C1345.119%2c340.265%2c1361.158%2c306.818%2c1375.401%2c279.377C1388.128%2c254.857%2c1397.841%2c227.576%2c1385.738%2c202.743C1372.172%2c174.909%2c1345.167%2c153.753%2c1314.203%2c153.813C1283.324%2c153.873%2c1256.936%2c175.391%2c1243.145%2c203.019C1230.709%2c227.935%2c1238.15%2c255.834%2c1250.931%2c280.574C1265.228%2c308.248%2c1283.055%2c340.862%2c1314.203%2c340.562' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M721.354%2c311.702C773.006%2c308.881%2c801.426%2c256.493%2c824.712%2c210.302C845.024%2c170.01%2c857.823%2c123.934%2c835.892%2c84.5C813.436%2c44.121%2c767.539%2c23.175%2c721.354%2c24.452C677.326%2c25.669%2c640.764%2c53.279%2c617.284%2c90.544C591.788%2c131.009%2c576.032%2c179.498%2c596.396%2c222.773C619.726%2c272.352%2c666.642%2c314.69%2c721.354%2c311.702' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1199.8323238648586 445.3847132545385L1313.152292668251 482.2046030952592 1349.9721825089719 368.88463429186675 1236.6522137055792 332.06474445114605z' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M1108.4054066534381 255.60612351538697L1009.5270273054792 377.7107530149756 1131.631656805068 476.58913236293455 1230.5100361530267 354.48450286334594z' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M216.94988262510563 478.43821882590413L213.61185385134587 382.8495813948587 118.02321642030047 386.1876101686185 121.36124519406023 481.77624759966386z' fill='rgba(255%2c 54%2c 57%2c 0.17)' class='triangle-float2'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1009'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }
  .home__hero-subtitle {
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
  }
  .home__hero-wrapper {
    max-width: 555px;
  }
  .home__hero-img {
    max-width: 95%;
    padding-right: 0;
    margin: 0 0 0 10px;
  }
  img {
    border: 0;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }
  @media screen and (max-width: 991px) {
    .container {
      padding-right: 30px;
      padding-left: 30px;
    }
  }
  @media screen and (max-width: 768px) {
    .home__hero-text-wrapper {
      padding-bottom: 65px;
    }
    .col {
      max-width: 100%;
      flex-basis: 100%;
    }
  }
`;
