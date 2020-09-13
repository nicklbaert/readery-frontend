/* eslint-disable prettier/prettier */
<template>
  <div id="newsletter-wrapper">
      <h3 id="newsletter-heading">Sign up to our newsletter</h3>
      <div id="newsletter-field">
        <input v-model="email" type="email" placeholder="Enter your E-Mail" id="newsletter-input" />
        <button id="newsletter-send" @click="signupSubscriber()">Send</button>
      </div>
      <span
        v-bind:class="{ showErrorEmail: emailError !== null }"
        class="error-email"
      >{{emailError}}</span>
      <div id="success-message">
        <span
          v-bind:class="{ showSuccessMessage: (successMessage!== null) }"
          class="success-message"
        >{{successMessage}}</span>
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
    </div>
</template>

<script>
import axios from "axios";
import { HalfCircleSpinner } from "epic-spinners";

export default {
  name: "Newsletter",
  components: {
    HalfCircleSpinner
  },
  data() {
    return {
      email: null,
      emailError: null,
      successMessage: null,
      loadSpinner: false
    };
  },
  methods: {
    signupSubscriber() {
      //Check if currently loading
      if (this.loadSpinner === false) {
        this.emailError = null;
        this.successMessage = null;

        this.email = this.email.toString().toLowerCase();

        if (this.validateEmail(this.email)) {
          //send request to sign up

          const subscriber = {
            email: this.email,
            time_joined: Date.now()
          };

          this.loadSpinner = true;

          axios
            .post(
              "https://readery-backend.herokuapp.com/api/newsletter/signup",
              subscriber
            )
            .then(response => {
              this.loadSpinner = false;

              if (
                response.data.error !== undefined &&
                response.data.error !== null
              ) {
                //Error
                console.log(
                  "An error occured: " + response.data.error.toString()
                );
                this.emailError = response.data.error;
              } else {
                //Login user
                this.successMessage =
                  this.email + " was added to our subscriber list. Thank you!";
                this.email = "";
              }
            })
            .catch(e => {
              console.log("User creation request Error: " + e.toString());
            });
        } else {
          this.emailError = "Please enter a valid email";
        }
      }
    },
    validateEmail(email) {
      if (email !== null && email !== "") {
        if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>

<style scoped>
#newsletter-wrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
#newsletter-heading {
  font-size: 20px;
  font-weight: 500;
}

#newsletter-field {
  margin: 2% 0 0 0;
  height: 60px;
  width: 100%;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#newsletter-field input {
  height: 100%;
  border: none;
  width: 70%;
  font-family: cera-pro;
  font-size: 16px;
  padding: 0 15px;
  font-weight: 300;
  outline: none;
}
#newsletter-field input:focus {
  border: none;
  outline: none;
}
#newsletter-field button {
  height: 100%;
  border: none;
  padding: 0;
  width: 25%;
  background-color: #40caff;
  color: #fff;
  font-family: cera-pro;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in;
}
#newsletter-field button:hover {
  border: none;
  outline: none;
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#newsletter-field button:focus {
  border: none;
  outline: none;
}

#spinner-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.spinner {
  display: none;
}
.loadingSpinner {
  display: block;
}

.error-email {
  display: none;
  color: #ff5d73;
  transition: 0.2s ease-in;
}
.showErrorEmail {
  display: block;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  transition: 0.2s ease-out;
  margin-top: 10px;
}

#success-message {
  width: 100%;
}
.success-message {
  display: none;
  color: #1b1f23;
}
.showSuccessMessage {
  display: block;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  margin-top: 10px;
  transition: 0.2s ease-out;
}
@media screen and (max-width: 1280px) {
  #newsletter-field {
    width: 100%;
    min-width: 0px;
  }
  #newsletter-field input {
    width: 70%;
    font-family: cera-pro;
    font-size: 16px;
    padding: 0 15px;
    font-weight: 300;
    outline: none;
  }

  #newsletter-field button {
    height: 100%;
    padding: 0 10%;
    min-width: 100px;
  }
  
}

@media screen and (max-width: 600px){
    #newsletter-field {
  height: 100px;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid red;
}
#newsletter-field input{
    width: 100%;
    height: 90px;
    box-sizing: border-box;
}
#newsletter-field button{
    width: 100%;
}
}
</style>
