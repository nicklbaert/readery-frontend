<template>
  <div class="signup-form">
    <div class="row" id="name-wrapper">
      <div id="first-name-wrapper" class="field">
        <label for id="first-name-label">First name</label>
        <input type="text" id="first-name" />
      </div>
      <div id="last-name-wrapper" class="field">
        <label for id="last-name-label">Last name</label>
        <input type="text" id="last-name" />
      </div>
    </div>
    <div class="row" id="email-wrapper">
      <div class="field">
        <label for id="email-label">Email</label>
        <input type="text" id="email" />
      </div>
    </div>
    <div class="row" id="address-wrapper">
      <div class="field">
        <label for id="address-label">Shipping address</label>
        <input type="text" id="address" />
      </div>
    </div>
    <div class="row" id="payment-wrapper">
      <div class="field">
        <label for id="payment-label">Payment Option</label>
        <input type="text" id="payment" />
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
