<template>
  <div class="signup-form">
    <div class="row" id="name-wrapper">
      <div id="first-name-wrapper" class="field">
        <label for id="first-name-label">First name</label>
        <input type="text" id="first-name" placeholder="John" />
      </div>
      <div id="last-name-wrapper" class="field">
        <label for id="last-name-label">Last name</label>
        <input type="text" id="last-name" placeholder="Doe" />
      </div>
    </div>
    <div class="row" id="email-wrapper">
      <div class="field">
        <label for id="email-label">Email</label>
        <input type="text" id="email" placeholder="johndoe@gmail.com" />
      </div>
    </div>
    <div class="row" id="address-wrapper">
      <div class="field">
        <label for id="address-label">Shipping address</label>
        <input
          type="text"
          id="address"
          ref="autocomplete"
          placeholder="2066 Crist Drive Los Altos, CA 94024"
        />
      </div>
    </div>
    <div class="row" id="payment-wrapper">
      <div class="field">
        <label for id="payment-label">Payment</label>
        <input type="text" id="payment" placeholder="Select a payment option" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignupForm",
  components: {},
  methods: {},
  data() {
    return {};
  },
  mounted() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.$refs.autocomplete,
      { types: ["geocode"] }
    );
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
  color: #8595a8;
}
input:focus {
  border: none;
  outline: none;
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
