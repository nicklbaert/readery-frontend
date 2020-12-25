<template>
  <div class="footer">
    <div class="footer-row">
      <div class="footer-col">
        <div id="logo">
          <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="80.307" height="30.79" viewBox="0 0 150.307 51.79">
  <path id="Union_2" data-name="Union 2" d="M13733.145,8287.763V8280.9c3.429,0,5.042-1.077,6.123-4.065l-9.75-23.364h8.084l5.438,14.989,4.6-14.989h7.838l-8.374,23.759c-2.607,7.4-6.675,10.559-12.96,10.558Q13733.653,8287.788,13733.145,8287.763Zm-67.364-3.37a18.289,18.289,0,0,1-13.067-8.7,21.189,21.189,0,0,1-2.674-8.721,19.275,19.275,0,0,1,6.452-15.745,13.75,13.75,0,0,0,1.435,13.826,2.117,2.117,0,0,0,.405.461,1.587,1.587,0,0,0,1.728.321,1.493,1.493,0,0,0,.946-1.351,2.286,2.286,0,0,0-.219-.89,21.563,21.563,0,0,1,6.321-24.033,17.656,17.656,0,0,1,6.615-3.567,13.748,13.748,0,0,0,2.3,15.451c1.7,1.7,3.727,2.86,5.479,4.481a22.833,22.833,0,0,1,2.054,2.213l-.136.027a13.061,13.061,0,0,1,2.161,3.377l.351.7a16.063,16.063,0,0,1-4.049,17.826,18.61,18.61,0,0,1-12.792,4.534A25.945,25.945,0,0,1,13665.78,8284.393Zm108.562-18.675a12.983,12.983,0,1,1,12.984,12.933A12.838,12.838,0,0,1,13774.342,8265.718Zm7.349,0a5.635,5.635,0,1,0,5.636-5.78A5.494,5.494,0,0,0,13781.69,8265.718Zm-78.138,12.247v-34.291h12.98a11.759,11.759,0,1,1,0,23.513h-5.143s.135,5.476-2.358,8.313a6.9,6.9,0,0,1-5.135,2.48A3.288,3.288,0,0,1,13703.553,8277.965Zm7.838-18.128h5.143a4.416,4.416,0,0,0,0-8.817h-5.143Zm46.783-6.365h7.35v4.356c.98-3.279,4.264-4.849,7.35-4.849v8.33c-3.037-.492-7.35.733-7.35,5.583,0,0,.721,5.274-1.156,8.173s-6.193,2.9-6.193,2.9Z" transform="translate(-13650 -8235.998)" fill="#afff23"/>
</svg>
          </router-link>
        </div>
        <div id="copyright">© Pyro 2020</div>
      </div>
      <div class="footer-col" id="footer-col-links">
        
      <div class="footer-col-links">
        <router-link to="/about" class="link highlighted">Terms of Service</router-link>
        <router-link to="/plans" class="link highlighted">Privacy Policy</router-link>
        <router-link to="/faq" class="link highlighted">Imprint</router-link>
      </div>
      </div>
      <div class="footer-col">
        <div class="social">
          <a href="#" class="social-icon">
            <img src="../assets_2/icons/instagram.svg" width="20" height="20" />
          </a>
          <a  href="#" class="social-icon">
            <img src="../assets_2/icons/twitter.svg" width="20" height="20" />
          </a>
        
        </div>
        <div id="created">Built with love in Karlsruhe, Germany</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Footer",
  components: {},
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
.footer {
  padding: 0 45px;
  position: relative;
  max-width: 1236px;
  margin: 0 auto 40px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-row {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}
.footer-col {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  min-width: 100px;
}
#footer-col-links{
  flex-direction: row;
}

.footer-col-links{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  box-sizing: border-box;
  height: 100%;
  min-width: 150px;
}
.footer-col-links:first-child{
  margin-right: 144px;
}

.footer-col:not(:last-child){
  margin-right: 40px;
}

/*Column 1 */
#logo {
  margin-bottom: 32px;
}
#copyright {
  color: #4c5d77;
  font-weight: 400;
  font-size: 14px;
}

/*Column 2 + 3 */
.footer-col a {
  font-size: 16px;
  line-height: 1.5;
  text-decoration: none;
  color: #4c5d77;
}
.footer-col a:hover {
  color: #AFFF23;
}
.footer-col a:not(:last-child) {
  margin-bottom: 24px;
}

/*Column 4 */
.footer-col:last-child {
  align-items: flex-end;
}
.social {
  display: flex;
  margin-bottom: 35px;
}
.social-icon {
  cursor: pointer;
  border: 2px solid #d8e8ee;
  border-radius: 100px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: 0.1s ease-out;
}
.social-icon:hover {
  border: 2px solid #AFFF23;
  transition: 0.1s ease-in;
}

.social-icon:not(:last-child) {
  margin-right: 25px;
}
#created {
  color: #AFFF23;
  font-size: 14px;
}

@media screen and (max-width: 980px) {
  #logo {
  margin-bottom: 16px;
}
.footer-col:last-child {
  align-items: flex-start;
}
.social {
  margin-bottom: 14px;
}
}
@media screen and (max-width: 600px){
.footer {
  padding: 0 24px;
}
.footer-col {
  padding: 24px 0;
  width: 100%;
}

#footer-col-links{
  width: 100%;
  justify-content: space-between;
}

.footer-col-links{
  padding: 24px 0;
  height: 100%;
  margin: 0;

}
.footer-col-links:first-child{
  margin-right: 0;
}

}
</style>
