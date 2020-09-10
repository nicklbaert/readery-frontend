/* eslint-disable prettier/prettier */
<template>
  <div class="login-form">
    <div class="row" id="email-wrapper">
      <div class="field">
        <label for id="email-label">Email</label>
        <input v-model="email" type="text" id="email" placeholder="johndoe@gmail.com" />
        <span v-bind:class="{ showError: emailError !== null}" class="error">{{emailError}}</span>
      </div>
    </div>
    <div class="row" id="password-wrapper">
      <div id="password-01-wrapper" class="field">
        <label for id="password-01-label">Password</label>
        <input v-model="password" type="password" id="password" />
        <span v-bind:class="{ showError: passwordError !== null }" class="error">{{passwordError}}</span>
      </div>
    </div>
    <button type="submit" id="finish-button" @click="finishLogin()">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  components: {},
  methods: {
    finishLogin() {
      if (this.validateForm()) {
        var customer = {
          email: this.email,
          password: this.password
        };
        this.$emit("finishLogin", customer);
      } else {
        console.log("Something went wrong");
      }
    },
    validateForm() {
    
       this.emailError = null;
       this.passwordError = null;

      if (this.email !== null && this.email !== "") {
            if (this.password !== null && this.password !== "") {
              console.log("All fine, ma man");
              return true;
            } else {
              this.passwordError = "Please enter the password";
            }
          } else {
            this.emailError = "Plase enter your email";
          }
      return false;
    }
  },
  data() {
    return {
      email: null,
      password: null,
      emailError: null,
      passwordError: null,
    };
  }
};
</script>

<style scoped>
.login-form {
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.row {
  width: 40%;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.field {
  margin: 0% 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: 110px;
}
.field p {
  color: #8595a8;
  font-size: 12px;
  font-weight: 300;
  margin-top: 10px;
  text-align: left;
}


input {
  margin-top: 10px;
  height: 50px;
  border: none;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f6fc;
  font-family: cera-pro;
  font-size: 16px;
  font-weight: 300;
  outline: none;
}
input::placeholder {
  color: #c3ccd8;
}
input:focus {
  border: none;
  outline: none;
}

#password{
  letter-spacing: 3px;
}

label {
  font-size: 14px;
}
.error {
  display: none;
  color: #ff5d73;
  transition: 0.2s ease-in;
}
.showError {
  display: block;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  line-height: 30px;
  transition: 0.2s ease-out;
}
#finish-button {
  margin-top: 3%;
  background-color: #40caff;
  padding: 15px 50px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: 0.2s ease-in;
  border: none;
  font-family: cera-pro;
  outline: none;
}
#finish-button:hover {
  border: none;
  outline: none;
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#finish-button:focus {
  border: none;
  outline: none;
}
@media screen and (max-width: 1400px) {
  .row {
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .row {
    width: 90%;
  }
}

@media screen and (max-width: 700px){
  #name-wrapper, #password-wrapper, #email-wrapper{
    flex-direction: column;
  }
  #first-name-wrapper {
  width: 100%;
  
}
#last-name-wrapper {
  width: 100%;

}
.signup-form {
  margin: 10% 0 20% 0;
}
}
</style>
