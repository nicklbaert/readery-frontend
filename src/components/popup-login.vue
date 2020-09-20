<template>
  <div class="popup-login">
    <form id="login-form">
      <div class="login-heading">Login</div>
      <div class="login-subheading">Log in using your email and password.</div>
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
            <g id="Icon_feather-mail" data-name="Icon feather-mail" transform="translate(1.393 1)">
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
          <input v-model="password" type="password"/>
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
      <div id="error-message">
        <span v-bind:class="{ showError: (loginError !== null) }" class="error">{{loginError}}</span>
      </div>
      <div id="spinner-wrapper">
        <HalfCircleSpinner
          :animation-duration="1000"
          :size="30"
          color="rgb(70, 204, 255)"
          class="spinner"
          v-bind:class="{loadingSpinner: loadSpinner}"
        />
      </div>
    </form>
    <div id="login-illustration">
      <img src="../assets/img-new/forms/login-illu.png" alt />
    </div>
    <div id="close-button">
      <img src="../assets/icons-new/forms/Close Login.png" alt />
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
    initializeLogin() {
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

            this.$emit("loggedInUser", response.data);
            this.$router.push({
              name: "Account",
              params: { userId: userID, access_token: jwt }
            });
          }
        })
        .catch(e => {
          console.log("User creation request Error: " + e.toString());
        });
    },
    validateForm() {
      this.emailError = null;
      this.passwordError = null;

      if (this.email !== null && this.email !== "") {
        if (this.password !== null && this.password !== "") {
          if (this.validateEmail(this.email)) {
            if (this.password.length > 6) {
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
        this.emailError = "Plase enter your email";
      }
      return false;
    },
    validateEmail(email){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
      }
      return false;
    },
  }
};
</script>

<style scoped>
.popup-login {
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 100%;
  width: 100%;
  border-radius: 38px;
}
#login-form {
  padding: 45px;
  width: 400px;
}
.login-heading {
  font-size: 25px;
  margin-bottom: 48px;
}
.login-subheading {
  font-size: 15px;
  font-weight: 400;
  color: #8595a8;
  margin-bottom: 32px;
}
.form-field-wrapper {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 24px;
}
#password-wrapper {
  margin-bottom: 48px;
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
}
.showError {
  visibility: visible;
  transition: 0.2s ease-out;
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
}

#spinner-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

.spinner {
  display: none;
}
.loadingSpinner {
  display: block;
}

#login-illustration {
  height: 100%;
}
#login-illustration img {
  height: 100%;
  width: auto;
}
#close-button {
  position: absolute;
  top: 30px;
  right: 30px;
  background-color: #fff;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
#close-button img {
  height: 50px;
  width: 50px;
}
</style>
