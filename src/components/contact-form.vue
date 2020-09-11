<template>
      <form
        @submit.prevent="handleSubmit"
        name="contact"
        netlify-honeypot="bot-field"
        method="POST"
        data-netlify="true"
        id="form-wrapper"
      >
       <input type="hidden" name="form-name" value="contact" />



        <div id="email-wrapper" class="row">
          <div class="field">
            <label for="email" id="email-label">Email adress</label>
          <input
            v-model="form.email"
            
            class="form-control"
            name="email"
            id="email-field"
          />
          <span v-bind:class="{ showError: emailError !== null}" class="error">{{emailError}}</span>
          </div>
        </div>
        <div id="message-wrapper" class="row">
         <div class="field">
            <label for="message" id="message-label">Message</label>
          <textarea
            v-model="form.message"
            type="text"
            class="form-control"
            name="message"
            id="message-field"
            rows="10"
          />
          <span v-bind:class="{ showError: messageError !== null}" class="error">{{messageError}}</span>
         </div>
        </div>
        <button type="submit" id="send-button">Send</button>
        <span v-bind:class="{ showSuccess: successMessage !== null}" class="success">{{successMessage}}</span>
        <div id="spinner-wrapper">
    <HalfCircleSpinner
    :animation-duration="1000"
    :size="30"
    color="rgb(70, 204, 255)"
    class = "spinner"
    v-bind:class="{loadingSpinner: loadSpinner}"
  />
  </div>
      </form>

</template>

<script>
import { HalfCircleSpinner } from 'epic-spinners';
export default {
  name: "ContactForm",
  components:{
    HalfCircleSpinner
  },
  data: () => ({
    loadSpinner : false,
    emailError : null,
    messageError : null,
    successMessage: null,
    form: {
      email: "",
      message: ""
    }
  }),
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    validateEmail(email){
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
      }
      return false;
    },
    validateForm() {
    
       this.emailError = null;
       this.messageError = null;

      if (this.form.email !== null && this.form.email !== "") {
            if (this.form.message !== null && this.form.message !== "") {
              if(this.validateEmail(this.form.email)){
                console.log("All fine, ma man");
                return true;
              }else{
                this.emailError = "Please enter a valid email";
              }
            } else {
              this.messageError = "Please enter a message";
            }
          } else {
            this.emailError = "Plase enter your email";
          }
      return false;
    },
    handleSubmit() {
      if(this.validateForm()){
        this.loadSpinner = true;
        fetch("/", {
        method: "post",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form
        })
      })
        .then(() => {
          this.loadSpinner = false;
          this.form.email = "";
          this.form.message = "";
          console.log("success");
          this.successMessage = "Your message was sent! Thank you.";
        })
        .catch(e => {
          console.log(e);
        });
      }
    }
  }
};
</script>

<style scoped>

#form-wrapper{
  width: 100%;
  margin: 5% 0 5% 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.row {
  width: 40%;
  padding: 15px 15px;
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
label {
  font-size: 14px;
}
textarea {
  padding: 15px 15px;
  margin-top: 10px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  background-color: #f1f6fc;
  font-family: cera-pro;
  font-size: 16px;
  font-weight: 300;
  outline: none;
  min-height: 100px;
  max-height: 300px;
  resize: vertical;
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

.success {
  display: none;
  color: #40caff;
  transition: 0.2s ease-in;
}
.showSuccess {
  display: block;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 80px;
  transition: 0.2s ease-out;
}

#email-field:focus + #email-label {
  color: #1dc9ff;
  transition: 0.2s ease-out;
}
#message-field:focus + #message-label {
  color: #1dc9ff;
  transition: 0.2s ease-out;
}


#send-button {
  margin-top: 5%;
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
#send-button:hover {
  border: none;
  outline: none;
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#send-button:focus {
  border: none;
  outline: none;
}


#spinner-wrapper{
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin: 5% 0;
}

.spinner{
  display: none;
}
.loadingSpinner{
  display: block;
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

</style>
