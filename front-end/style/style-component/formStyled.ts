import styled from "styled-components";
export const FormStyled = styled.div`

.form-container {
  margin: 0px auto;
  margin-top: 80px;
  width: 140vh;
  position: relative;
  border-radius:10px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.form-container-signup {
  margin: 0px auto;
  margin-top: 40px;
  width: 140vh;
  position: relative;
  border-radius:10px;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
} 
.text-top{
  display:flex;
  justify-content:center;
  
}
.form-group{
    margin-top:250px;
}
.close-btn {
  position: absolute;
  top: 9%;
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
.close-btn-signin {
  position: absolute;
  top: 3.6%;
  right: 3%;
  font-size: 1.5rem;
  z-index: 1;
  color: #fff;
  cursor: pointer;
}
.close-btn-signin:hover{
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
.form-content-right-signup {
  background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
  border-radius:0px 10px 10px 0px;
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
  margin-bottom: 0rem;
  width: 80%;
  
}

.form-inputs span {
  font-size: 0.8rem;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
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

@media screen and (max-width:768px){
  .form-content-left{
    display: none;
  }
  .form-content-right-signup, .form-content-right{
    border-radius:0px;
  }
  .form-container-signup {
    margin: 0px auto;
    width: 56vh;
    position: relative;
    height: 110vh;
    display: grid;
    grid-template-columns: auto;
  } 
  .form{
    width: 90%;
  }
  .form-container {
    margin: 0px auto;
    width: 56vh;
    position: relative;
    height: 110vh;
    display: grid;
    grid-template-columns: auto;
  } 
  .form{
    width: 90%;
  }
  .close-btn-signin, .close-btn{
    top: 2%;
  }
}

`;