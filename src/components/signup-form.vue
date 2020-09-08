/* eslint-disable prettier/prettier */
<template>
  <div class="signup-form">
    <div class="row" id="name-wrapper">
      <div id="first-name-wrapper" class="field">
        <label for id="first-name-label">First name</label>
        <input v-model="first_name" type="text" id="first-name" placeholder="John" />
        <span v-bind:class="{ showError: error_first_name !== null }" class="error">{{error_first_name}}</span>
      </div>
      <div id="last-name-wrapper" class="field">
        <label for id="last-name-label">Last name</label>
        <input v-model="last_name" type="text" id="last-name" placeholder="Doe" />
        <span v-bind:class="{ showError: error_last_name !== null }" class="error">{{error_last_name}}</span>
      </div>
    </div>
    <div class="row" id="email-wrapper">
      <div class="field">
        <label for id="email-label">Email</label>
        <input v-model="email" type="text" id="email" placeholder="johndoe@gmail.com" />
        <span v-bind:class="{ showError: error_email !== null }" class="error">{{error_email}}</span>
      </div>
    </div>
    <div class="row" id="password-wrapper">
      <div id="password-wrapper" class="field">
        <label for id="password-01-label">Password</label>
        <input v-model="password" type="text" id="password" />
        <span v-bind:class="{ showError: error_password !== null }" class="error">{{error_password}}</span>
        <span class="password-rules">
          The password must <br>
          - be at least 6 characters long <br>
          - contain both numbers and regular letters <br>
          - contain symbols, like #, ! or _
        </span>
      </div>
      <div id="password-confirm-wrapper" class="field">
        <label for id="password-confirm-label">Confirm password</label>
        <input v-model="password_confirm" type="text" id="password-confirm" required />
        <span
          v-bind:class="{ showError: error_password_confirm !== null }"
          class="error">
          {{error_password_confirm}}
          </span>
      </div>
    </div>
    <!-- <div class="row" id="country-wrapper">
      <div class="field">
        <label for id="country-label">Country</label>
        <select name="countries" id="country" v-model="country">
          <option value="Germany">Germany</option>
        </select>
        <p>
          Since we are just starting out as a company, we are currently only
          able to ship to Germany. Thank you for understanding.
        </p>
      </div>
    </div>
    <div class="row" id="address-wrapper">
      <div class="field">
        <label for id="address-label">Shipping address</label>
        <input
          type="text"
          id="address"
          ref="autocomplete"
          v-model="address"
          placeholder="Erika-Mann-Straße 33, 80636 München"
        />
      </div>
    </div>
    <div class="row" id="payment-wrapper">
      <div class="field">
        <label for id="payment-label">Payment</label>
        <input v-model="payment" type="text" id="payment" placeholder="Select a payment option" />
      </div>
    </div>-->
    <button type="submit" id="finish-button" @click="finishSignup()">Finish</button>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  components: {},
  methods: {
    finishSignup() {
      if (this.validateForm()) {
        var customer = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
          /* address: this.address,
        country: this.country,
        payment: this.payment */
        };
        this.$emit("finishSignup", customer);
      } else {
        console.log("Something went wrong");
      }
    },
    validateForm() {

      this.error_first_name = null;
      this.error_last_name = null;
      this.error_email = null;
      this.error_password = null;
      this.error_password_confirm = null;

      if (this.first_name !== null && this.first_name !== "") {
        if (this.last_name !== null && this.last_name !== "") {
          if (this.email !== null && this.email !== "") {
            if (this.password !== null && this.password !== "") {
              if (
                this.password_confirm !== null &&
                this.password_confirm !== ""
              ) {
                this.showPasswordConfirmError = false;
                if (this.password === this.password_confirm) {
                  if(this.validateEmail(this.email)){
                    return true;
                  }
                  else{
                    this.error_email= "Please enter a valid email";
                  }
                 
                } else {
                  this.error_password_confirm = "Your passwords do not match"
                }
              } else {
                this.error_password_confirm = "Please re-enter your password";
              }
            } else {
              this.error_password = "Please choose a password";
            }
          } else {
            this.error_email = "Please enter your email adress"
          }
        } else {
          this.error_last_name = "Please enter your last name";
        }
      } else {
        this.error_first_name = "Please enter your first name";
      }
      return false;
    },
    validateEmail(email){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
      }
      return false;
    }
 },
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      password: null,
      password_confirm: null,

      error_first_name: null,
      error_last_name: null,
      error_email: null,
      error_password: null,
      error_password_confirm: null
      
      /* address: null,
      country: null, 
      payment: null*/
    };
  }
};
</script>

<style scoped>
.signup-form {
  margin: 5% 0 0 0;
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

#password-wrapper, #password-confirm-wrapper{
  height: 180px;
}

.field p {
  color: #8595a8;
  font-size: 12px;
  font-weight: 300;
  margin-top: 10px;
  text-align: left;
}

#first-name-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#last-name-wrapper {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
/* #country {
  height: 50px;
  border: none;
  padding: 0 15px;
  width: 100%;
  background-color: #f1f6fc;
  font-family: cera-pro;
  font-size: 16px;
  font-weight: 300;
  outline: none;
}
#country option {
  padding: 10px;

  border-top: 1px solid #777;
  font-weight: 300;
} */
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
.password-rules{
  margin-top: 10px;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  line-height: 20px;
  color: #8595a8;
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
