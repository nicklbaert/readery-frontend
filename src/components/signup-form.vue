<template>
  <div class="signup-form">
    <div class="row" id="name-wrapper">
      <div id="first-name-wrapper" class="field">
        <label for id="first-name-label">First name</label>
        <input v-model="first_name" type="text" id="first-name" placeholder="John" />
      </div>
      <div id="last-name-wrapper" class="field">
        <label for id="last-name-label">Last name</label>
        <input v-model="last_name" type="text" id="last-name" placeholder="Doe" />
      </div>
    </div>
    <div class="row" id="email-wrapper">
      <div class="field">
        <label for id="email-label">Email</label>
        <input v-model="email" type="text" id="email" placeholder="johndoe@gmail.com" />
      </div>
    </div>
    <div class="row" id="country-wrapper">
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
    </div>
    <button @click="finishSignup()">Finish</button>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  components: {},
  methods: {
    finishSignup() {
      var customer = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        address: this.address,
        country: this.country,
        payment: this.payment
      };
      this.$emit("changeCustomerObject", customer);
    }
  },
  data() {
    return {
      first_name: null,
      last_name: null,
      email: null,
      address: null,
      country: null,
      payment: null
    };
  }
};
</script>

<style scoped>
.signup-form {
  margin: 5% 0;
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
  margin: 1% 2%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  height: 50px;
  border: none;
  padding: 0 15px;
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f6fc;
  font-family: "Cera Pro", Helvetica, sans-serif;
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
#country {
  height: 50px;
  border: none;
  padding: 0 15px;
  width: 100%;
  background-color: #f1f6fc;
  font-family: "Cera Pro", Helvetica, sans-serif;
  font-size: 16px;
  font-weight: 300;
  outline: none;
}
#country option {
  padding: 10px;

  border-top: 1px solid #777;
  font-weight: 300;
}
label {
  font-size: 14px;
  line-height: 40px;
}
@media screen and (max-width: 1000px) {
  .row {
    width: 90%;
  }
}
</style>
