<template>
  <div class="login">
    <h1 id="heading">Welcome back</h1>
    
    <h1 id="subheading">Please enter your login credentials</h1>

    <LoginForm v-on:finishLogin="finishLogin($event)" />

    <div id="error-message">
      <span v-bind:class="{ showError: (loginError !== null) }" class="error">{{loginError}}</span>
    </div>

  <div id="spinner-wrapper">
    <HalfCircleSpinner
    :animation-duration="1000"
    :size="30"
    color="rgb(70, 204, 255)"
    class = "spinner"
    v-bind:class="{loadingSpinner: loadSpinner}"
  />
  </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
/* import PlansBoxesSelectable from "../components/plans-boxes-selectable.vue"; */
import LoginForm from "../components/login-form.vue";
import axios from 'axios';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: "Login",
  components: {
    Footer,
    /* PlansBoxesSelectable, */
    LoginForm,
    HalfCircleSpinner
  },
  data() {
    return {
      loadSpinner: false,
      customer: null,
      selectedPlan: null,
      selectedItems: [],
      loginError: null,
      items: [
        "Business",
        "Finance",
        "Technology",
        "Sports",
        "Travel",
        "Sci - Fi",
        "Entepreneurship",
        "Psychology",
        "Physics",
        "Health",
        "Cooking",
        "Biology",
        "Chemistry",
        "Biographies",
        "Humor",
        "Motivational"
      ]
    };
  },
  methods: {

    finishLogin(customer) {
      this.loadSpinner = true;
      this.customer = customer;
      var userObject = Object.assign({}, this.customer);

      console.log("Logging in: "+JSON.stringify(userObject));

     axios.post("https://readery-backend.herokuapp.com/api/auth/login", userObject)
    .then(response => {
      this.loadSpinner = false;

      if(response.data.error !== undefined && response.data.error !== null){
        //Error
        console.log("An error occured: "+response.data.error.toString());
        this.loginError = response.data.error;
      }else{
        //Login user
        console.log("User logged in: " + response.data)
        var userID = response.data._id;
        var jwt = response.data.access_token;

        this.$emit("loggedInUser", response.data);
        this.$router.push({ name: "Account", params: { userId: userID, access_token: jwt } });
      }

      
    })
    .catch(e => {
      console.log("User creation request Error: "+e.toString());
    })
    }
  }
};
</script>

<style scoped>
.login {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 150px;
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
}
#subheading {
  margin-top: 10px;
  font-weight: 300;
  font-size:calc(20px + 0.2vw);
  color: #8595A8;
    padding: 0 5%;
}


#spinner-wrapper{
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

.spinner{
  display: none;
}
.loadingSpinner{
  display: block;
}


@media screen and (max-width: 700px){
  #subheading{
    padding: 0 5%;
  }
}
</style>
