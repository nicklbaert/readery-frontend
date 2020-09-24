<template>
  <div class="popup-login">
    <div id="left">
      <div class="login-heading-wrapper">
        <div class="login-heading">Glad to have you back.</div>
      <div class="login-subheading">Log in using your email and password.</div>
      </div>
      <div class="login-form">
        <div class="form-field-wrapper" id="email-wrapper">
          <label>Email</label>
          <div class="form-field">
            <input v-model="email" />
            <svg
              class="field-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="19.26"
              height="15.18"
              viewBox="0 0 19.26 15.18"
            >
              <g
                id="Icon_feather-mail"
                data-name="Icon feather-mail"
                transform="translate(1.393 1)"
              >
                <path
                  id="Path_1923"
                  data-name="Path 1923"
                  d="M4.647,6h13.18a1.652,1.652,0,0,1,1.647,1.647v9.885a1.652,1.652,0,0,1-1.647,1.647H4.647A1.652,1.652,0,0,1,3,17.532V7.647A1.652,1.652,0,0,1,4.647,6Z"
                  transform="translate(-3 -6)"
                  fill="none"
                  stroke="#8595a8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_1924"
                  data-name="Path 1924"
                  d="M19.475,9l-8.237,5.766L3,9"
                  transform="translate(-3 -7.353)"
                  fill="none"
                  stroke="#8595a8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <span :class="{ showError: emailError !== null}" class="error">{{emailError}}</span>
        </div>
        <div class="form-field-wrapper" id="password-wrapper">
          <label>Password</label>
          <div class="form-field">
            <input v-model="password" type="password" />
            <svg
              class="field-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="18.582"
              height="21.532"
              viewBox="0 0 18.582 21.532"
            >
              <g id="Icon_feather-lock" data-name="Icon feather-lock" transform="translate(1 1)">
                <path
                  id="Path_1925"
                  data-name="Path 1925"
                  d="M6.342,16.5h12.9a1.9,1.9,0,0,1,1.842,1.953V25.29a1.9,1.9,0,0,1-1.842,1.953H6.342A1.9,1.9,0,0,1,4.5,25.29V18.453A1.9,1.9,0,0,1,6.342,16.5Z"
                  transform="translate(-4.5 -7.71)"
                  fill="none"
                  stroke="#8595a8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
                <path
                  id="Path_1926"
                  data-name="Path 1926"
                  d="M10.5,11.79V7.883A4.751,4.751,0,0,1,15.106,3a4.751,4.751,0,0,1,4.606,4.883V11.79"
                  transform="translate(-6.815 -3)"
                  fill="none"
                  stroke="#8595a8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </g>
            </svg>
          </div>
          <span :class="{ showError: passwordError !== null }" class="error">{{passwordError}}</span>
        </div>
        <button class="login-button" @click="initializeLogin()">Login</button>
        <span :class="{ showError: (loginError !== null) }" class="error login-error">{{loginError}}</span>
        <div id="spinner-wrapper">
          <HalfCircleSpinner
            :animation-duration="1000"
            :size="30"
            color="#0294ff"
            class="spinner"
            :class="{loadingSpinner: loadSpinner}"
          />
        </div>
        <div id="close-button-mobile" @click="closeLogin()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17.389"
            height="17.389"
            viewBox="0 0 17.389 17.389"
          >
            <path
              id="Path_1928"
              data-name="Path 1928"
              d="M14.116,16.827,8.694,11.405,3.272,16.827A1.917,1.917,0,0,1,.562,14.116L5.984,8.694.562,3.272A1.917,1.917,0,0,1,3.273.562L8.695,5.983,14.116.562a1.917,1.917,0,0,1,2.711,2.711L11.405,8.694l5.422,5.422a1.917,1.917,0,1,1-2.711,2.711Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </div>
      <div class="help">
        <!--<div class="forgot-password">
          <router-link to="/password_reset">Forgot password?</router-link>
        </div>-->
        <div class="signup">
          Don't have an account?
          <a href="#" id="signup-link" @click="goToSignup()">
            <span class="highlighted">Sign Up</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.503"
              height="13.616"
              viewBox="0 0 13.503 23.616"
            >
              <path
                id="Icon_ionic-ios-arrow-forward"
                data-name="Icon ionic-ios-arrow-forward"
                d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                transform="translate(-11.246 -6.196)"
                fill="#0294ff"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div id="right">
      <img src="../assets/img-new/forms/login-illu.png" alt />
      <div id="close-button" @click="closeLogin()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.389"
          height="17.389"
          viewBox="0 0 17.389 17.389"
        >
          <path
            id="Path_1928"
            data-name="Path 1928"
            d="M14.116,16.827,8.694,11.405,3.272,16.827A1.917,1.917,0,0,1,.562,14.116L5.984,8.694.562,3.272A1.917,1.917,0,0,1,3.273.562L8.695,5.983,14.116.562a1.917,1.917,0,0,1,2.711,2.711L11.405,8.694l5.422,5.422a1.917,1.917,0,1,1-2.711,2.711Z"
            fill="#0294ff"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { HalfCircleSpinner } from "epic-spinners";
export default {
  name: "Popup-Login",
  components: {
    HalfCircleSpinner
  },
  data() {
    return {
      email: null,
      password: null,
      emailError: null,
      passwordError: null,
      loadSpinner: false,
      loginError: null,
      customer: null
    };
  },
  methods: {
    closeLogin() {
      this.$emit("event", "close");
    },
    goToSignup(){
      this.$emit("event", "go_to_signup");
    },
    initializeLogin() {
      this.loginError = null;
      this.passwordError = null;
      this.emailError = null;
      console.log("Initializing...");
      if (this.validateForm()) {
        console.log("Entries valid.");
        this.finishLogin();
      } else {
        console.log("Something went wrong");
      }
    },
    finishLogin() {
      console.log("Sending request...");
      console.log("Email: " + this.email);
      console.log("Password: " + this.password);

      var customer = {
        email: this.email,
        password: this.password
      };

      this.loadSpinner = true;
      this.customer = customer;
      var userObject = Object.assign({}, this.customer);

      console.log("Logging in: " + JSON.stringify(userObject));

      axios
        .post(
          "https://readery-backend.herokuapp.com/api/auth/login",
          userObject
        )
        .then(response => {
          this.loadSpinner = false;

          if (
            response.data.error !== undefined &&
            response.data.error !== null
          ) {
            //Error
            console.log("An error occured: " + response.data.error.toString());
            this.loginError = response.data.error;
          } else {
            //Login user
            console.log("User logged in: " + response.data);
            var userID = response.data._id;
            var jwt = response.data.access_token;

            this.$emit("event", { userData: response.data });

            this.$router.push({
              name: "Account",
              params: { userId: userID, access_token: jwt }
            });
          }
        })
        .catch(e => {
          console.log("Login request Error: " + e.toString());
        });
    },
    validateForm() {
      this.emailError = null;
      this.passwordError = null;

      if (this.email !== null && this.email !== "") {
        if (this.password !== null && this.password !== "") {
          if (this.validateEmail(this.email)) {
            if (this.password.length >= 6) {
              console.log("All fine, ma man");
              return true;
            } else {
              this.passwordError = "Your password can't be that short";
            }
          } else {
            this.emailError = "Please enter a valid email";
          }
        } else {
          this.passwordError = "Please enter the password";
        }
      } else {
        this.emailError = "Please enter your email";
      }
      return false;
    },
    validateEmail(email) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style scoped>
.popup-login {
  position: fixed;
  margin: auto;
  top:90px;
  left:90px;
  right: 90px;
  bottom: 90px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 38px;
  min-height: 650px;
  max-width: 1200px;
}
#left {
  padding: 45px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.login-heading-wrapper{
  width: 100%;
}
.login-heading {
  font-size: 25px;
  margin-bottom: 16px;
  width: 100%;
  text-align: left;
}
.login-subheading {
  font-size: 15px;
  font-weight: 400;
  color: #8595a8;
  width: 100%;
  text-align: left;
}
.login-form{
  width: 100%;
}
.form-field-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  margin-bottom: 8px;
}
.form-field {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.form-field-wrapper label {
  font-size: 12px;
  margin-bottom: 8px;
}
.field-icon {
  position: absolute;
  padding: 20px;
}
.field-icon path {
  transition: 0.25s ease-out;
}
.form-field input {
  width: 100%;
  box-sizing: border-box;
  padding: 12px 20px 12px 55px;
  outline: none;
  border-radius: 100px;
  border: 2px solid #d0dbe8;
  transition: 0.25s ease-out;
  font-family: "cera-pro";
  color: #00006d;
  font-size: 16px;
  font-weight: 400;
}
.form-field input[type="password"] {
  letter-spacing: 4px;
}
.form-field input:focus {
  outline: none;
  border: 2px solid #0294ff;
  transition: 0.25s ease-in;
}

.form-field input:focus + .field-icon path {
  transition: 0.25s ease-in;
  stroke: #0294ff;
}

.error {
  visibility: hidden;
  color: #ff5d73;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 30px;
  transition: 0.2s ease-in;
  height: 30px;
  line-height: 30px;
}
.showError {
  visibility: visible;
  transition: 0.2s ease-out;
}
.login-error {
  line-height: 30px;
  height: 30px;
  text-align: center;
  width: 100%;
  display: block;
}

.login-button {
  outline: none;
  border: none;
  width: 100%;
  height: 50px;
  border-radius: 100px;
  text-align: center;
  color: white;
  font-family: "cera-pro";
  font-size: 16px;
  font-weight: 400;
  background-color: #0294ff;
  margin-bottom: 20px;
}

#spinner-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner {
  display: none;
}
.loadingSpinner {
  display: block;
}

.help{
  font-size: 12px;
  width: 100%;
}
.forgot-password{
  margin-bottom: 10px;
}
.forgot-password a{
  color: #0294ff;
  cursor: pointer;
  text-decoration: none;
}
.signup{
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  font-weight: 400;
  color: #8595a8;
}
#signup-link {
  margin-left: 20px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #00006d;
}
#signup-link svg {
  margin-left: 20px;
}



#right {
  height: 100%;
  position: relative;
}
#right img {
  height: 100%;
  width: auto;
}
#close-button {
  position: absolute;
  top: 25px;
  right: 25px;
  background-color: #fff;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

#close-button-mobile {
  display: none;
}

/*@media screen and (max-width: 1200px) {*/
  .popup-login {
    flex-direction: column;
    align-items: center;
    padding: 0 45px;
    max-width: 500px;
    height: 400px;

  }
  #left {
    width: 100%;
    height: initial;
    position: relative;
    z-index: 50;
    height: 100%;
    min-width:initial;

  }
  #right {
    display: none;
  }
  #close-button-mobile {
    background-color: #0294FF;
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    border-radius: 50px;
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
/*}*/

@media screen and (max-width: 600px) {
  .popup-login {
    padding: 24px;
    border-radius: 0px;
    top:0;
    right:0;
    left:0;
    bottom:0;
    height: initial;
  }
  #close-button-mobile {
    top: 10px;
    right: 48px;
  }
}
</style>
