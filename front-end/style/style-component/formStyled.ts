import styled from "styled-components";
export const FormStyled = styled.div`
.form-container {
  margin: 0px auto;
  width: 1700px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: 10px;
  height: 950px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
/* @media only screen and (max-width: 960px){
  .form-container{
    width: auto;
    grid-template-columns: auto;
    height: 1000px;
  }
  .form-content-right{
    border-radius: 0;
  }
  .form-content-left{
    border-radius: 0;
  }
} */
.text-top{
  display:flex;
  justify-content:center;
}
.form-group{
    margin-top:250px;
}
.close-btn {
  position: absolute;
  top: 2%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
}
.close-btn:hover{
  color:#ff3639;
  transform: scale(1.3);
  transition: all 0.2s linear;
}
.form-content-left {
  background: linear-gradient(
    90deg,
    #39374e 0%,
    #3b3a52 100%
  );
  border-radius: 10px 0 0 10px;
  position: relative;
}

.form-img {
  width: 80%;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-img-2 {
  width: 60%;
  height: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-success {
  text-align: center;
  font-size: 24px;
  margin-top: 80px;
  color: #fff;
}

.form-content-right {
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  border-radius: 0 10px 10px 0;
  position: relative;
}

.form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.form h1 {
  font-size: 1.3rem;
  text-align: start;
  width: 80%;
  margin-bottom: 1rem;
  color: #fff;
}

.form-inputs {
  margin-bottom: 0.5rem;
  width: 80%;
}

.form-inputs p {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #f00e0e;
}

.form-label {
  display: inline-block;
  font-size: 0.8rem;
  margin-bottom: 6px;
  color: #fff;
}

.form-input {
  display: block;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
  height: 40px;
  width: 100%;
  border: none;
}

.form-input::placeholder {
  color: #595959;
  font-size: 12px;
}
.form-input-aria {
  display: block;
  padding-left: 10px;
  padding-top: 10px;
  outline: none;
  border-radius: 2px;
  height: 100px;
  width: 100%;
  border: none;
}

.form-input-aria::placeholder {
  color: #595959;
  font-size: 12px;
}

.form-input-btn {
  width: 80%;
  height: 50px;
  margin-top: 10px;
  border-radius: 2px;
  background: linear-gradient(
    90deg,
    rgb(39, 176, 255) 0%,
    rgb(0, 232, 236) 100%
  );
  outline: none;
  border: none;
  color: #fff;
  font-size: 1rem;
}

.form-input-btn:hover {
  cursor: pointer;
  background: linear-gradient(
    90deg,
    rgb(39, 143, 255) 0%,
    rgb(12, 99, 250) 100%
  );
  transition: all 0.4s ease-out;
}

.form-input-login {
  font-size: 1rem;
  margin-top: 10px;
  color: #fff;
  width: 80%;
  text-align: center;
}

.form-input-login a {
  text-decoration: none;
  color: #27cdff;
  font-weight: 600;
}

`;