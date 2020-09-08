<template>
  <div class="signup">
    <h1 id="heading">Welcome back</h1>
    <!-- <h1 id="subheading">Please choose a plan</h1>
    <PlansBoxesSelectable v-on:changeSelectedPlan="updatePlan($event)" />

    <h1 id="heading">We're almost done</h1>-->
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

        this.$emit("loggedInUser", response.data);
        this.$router.push({ name: 'Account', params: { userId: userID } });
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
.signup {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 10%;
  font-size:calc(30px + 1vw);
}
#subheading {
  margin-top: 10px;
 font-size:calc(14px + 0.5vw);
  color: #8595a8;
  font-weight: 300;
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


@media screen and (max-width: 1150px) {

  #heading {
    margin-top: 20%;
  }

}

@media screen and (max-width: 700px){
  #heading {
    margin-top: 30%;
  }
  #subheading{
    padding: 0 5%;
  }
}
</style>
