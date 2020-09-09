<template>
  <div class="signup">
    <h1 id="heading">Let's set you up</h1>
    <h1 id="subheading">To start off, please select up to 10 topics that interest you</h1>
    <div id="topics-wrapper">
      <div id="topic-grid">
        <div
          class="topic-wrapper"
          v-for="(item, index) in items"
          :key="index"
          @click="handleSelectedItem(item)"
          v-bind:class="{selected: selectedItems.includes(item)}"
        >
          <span class="topic">{{item}}</span>
        </div>
      </div>
    </div>
    <h1 id="heading">On to the next step</h1>
    <!-- <h1 id="subheading">Please choose a plan</h1>
    <PlansBoxesSelectable v-on:changeSelectedPlan="updatePlan($event)" />

    <h1 id="heading">We're almost done</h1>-->
    <h1 id="subheading">Fill out this form to create an account</h1>

    <SignupForm v-on:finishSignup="finishSignup($event)" />
<div id="error-message">
      <span v-bind:class="{ showError: (signUpError !== null) }" class="error">{{signUpError}}</span>
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
import SignupForm from "../components/signup-form.vue";
import axios from 'axios';
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: "Signup",
  components: {
    Footer,
    /* PlansBoxesSelectable, */
    SignupForm,
    HalfCircleSpinner
  },
  data() {
    return {
      loadSpinner: false,
      customer: null,
      selectedPlan: null,
      selectedItems: [],
      signUpError: null,
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
    handleSelectedItem(item) {
      if (this.selectedItems.includes(item)) {
        this.selectedItems = this.removeItem(this.selectedItems, item);
        console.log(this.selectedItems.toString());
      } else {
        this.selectedItems.push(item);
        console.log(this.selectedItems.toString());
      }
    },
    removeItem(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },

  
    updatePlan(plan) {
      this.selectedPlan = plan;
    },
    finishSignup(customer) {
      this.loadSpinner = true;
      this.customer = customer;
      var userObject = Object.assign({}, this.customer);
      userObject.interests = this.selectedItems;
      userObject.time_joined = Date.now();


      console.log("Creating user: "+JSON.stringify(userObject));

      axios.post("https://readery-backend.herokuapp.com/api/auth/signup", userObject)
    .then(response => {
      this.loadSpinner = false;

      if(response.data.error !== undefined && response.data.error !== null){
        //Error
        console.log("An error occured: "+response.data.error.toString());
        this.signUpError = response.data.error;
      }else{
        //Login user
        var userID = response.data._id;
        var jwt = response.data.access_token;
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
#topics-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#topic-grid {
  margin: 5% 0 5% 0;
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.topic-wrapper {
  width: 150px;
  padding: 2% 5%;
  margin: 2%;
  border-radius: 5px;
  background-color: #f1f6fc;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s ease-out;
  cursor: pointer;
}
.topic{
  font-size: 16px;
}
.topic-wrapper:hover {
  transform: scale(1.08);
  transition: 0.1s ease-out;
  background-color: rgb(70, 204, 255);
  color: white;
}

.selected {
  transform: scale(1.08);
  background-color: rgb(70, 204, 255);
  color: white;
}
#error-message{
  margin: 2% 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.error {
  display: none;
  color: #ff5d73;
}
.showError {
  display: block;
  font-size: 14px;
  font-weight: 400;
  text-align: left;
  line-height: 30px;
  transition: 0.2s ease-out;
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

@media screen and (max-width: 1570px) {
  #topic-grid {
    width: 70%;
  }
}

@media screen and (max-width: 1150px) {
  #topic-grid {
    width: 90%;
  }
  #heading {
    margin-top: 20%;
  }
  .topic-wrapper {
  width: 100px;
}
}

@media screen and (max-width: 700px){
  #heading {
    margin-top: 30%;
  }
  #subheading{
    padding: 0 5%;
  }
   .topic-wrapper {
  width: 100%;
  height: 70px;
}
.topic{
  font-size: 18px;
}
}
</style>
