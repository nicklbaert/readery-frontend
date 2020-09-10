<template>
  <div class="signup">
    <span
      class="topics-error"
      v-bind:class="{ showTopicError: (selectedItemsError !== null) }"
    >{{selectedItemsError}}</span>

    <h1 id="heading">Let's set you up</h1>
    <h1 id="subheading">To start off, please select up to 5 topics that interest you</h1>

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

    <div id="next-indicator">
      <span>Create Account</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34.204"
        height="35.093"
        viewBox="0 0 34.204 35.093"
      >
        <path
          id="Icon_awesome-arrow-down"
          data-name="Icon awesome-arrow-down"
          d="M32.31,17.171l1.739,1.739a1.872,1.872,0,0,1,0,2.655L18.831,36.79a1.872,1.872,0,0,1-2.655,0L.949,21.564a1.872,1.872,0,0,1,0-2.655l1.739-1.739a1.882,1.882,0,0,1,2.686.031l8.991,9.438V4.13a1.875,1.875,0,0,1,1.88-1.88h2.506a1.875,1.875,0,0,1,1.88,1.88V26.64L29.623,17.2a1.868,1.868,0,0,1,2.686-.031Z"
          transform="translate(-0.397 -2.25)"
          fill="#46ccff"
        />
      </svg>
    </div>

    <h1 id="heading">On to the next step</h1>
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
        class="spinner"
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
import axios from "axios";
import { HalfCircleSpinner } from "epic-spinners";

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
      selectedItemsError: null,
      signUpError: null,
      items: [
        "Business",
        "Finance",
        "Design",
        "Graphic Design",
        "Marketing",
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
        "Fantasy",
        "Biographies",
        "Humor",
        "Motivational",
        "Love",
        "Acting",
        "Photography",
        "Music"
      ]
    };
  },
  methods: {
    handleSelectedItem(item) {
      this.selectedItemsError = null;
      if (this.selectedItems.includes(item)) {
        this.selectedItems = this.removeItem(this.selectedItems, item);
        console.log(this.selectedItems.toString());
      } else {
        if (this.selectedItems.length < 5) {
          this.selectedItems.push(item);
          console.log(this.selectedItems.toString());
        } else {
          this.selectedItemsError = "You can only select a maximum of 5 topics";
        }
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

      console.log("Creating user: " + JSON.stringify(userObject));

      axios
        .post(
          "https://readery-backend.herokuapp.com/api/auth/signup",
          userObject
        )
        .then(response => {
          this.loadSpinner = false;

          if (
            response.data.error !== undefined &&
            response.data.error !== null
          ) {
            //Error
            console.log("An error occured: " + response.data.error.toString());
            this.signUpError = response.data.error;
          } else {
            //Login user
            var userID = response.data._id;
            var jwt = response.data.access_token;
            this.$router.push({
              name: "Account",
              params: { userId: userID, access_token: jwt }
            });
          }
        })
        .catch(e => {
          console.log("User creation request Error: " + e.toString());
        });
    }
  }
};
</script>

<style scoped>
.signup {
  height: 100%;
  width: 100%;
}

.topics-error {
  margin: 0 auto;
  position: fixed;
  bottom: -50px;
  right: 0;
  left: 0;
  border-radius: 100px;
  width: 400px;
  height: 50px;
  line-height: 50px;
  background-color: #ff5d73;
  color: #fff;
  display: none;
}
.showTopicError {
  display: block;
  animation-name: error-notification;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
}
@keyframes error-notification {
  0% {
    bottom: -50px;
  }
  10% {
    bottom: 40px;
  }
  15% {
    bottom: 30px;
  }
  85% {
    bottom: 30px;
  }
  90% {
    bottom: 40px;
  }
  100% {
    bottom: -50px;
  }
}

#heading {
  margin-top: 150px;
  font-size: calc(30px + 1.5vw);
  font-weight: 500;
}
#subheading {
  margin-top: 10px;
  font-weight: 300;
  font-size: calc(20px + 0.2vw);
  color: #8595a8;
  padding: 0 5%;
}

#topics-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#topic-grid {
  margin: 5% 0 2% 0;
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
  transition: 0.1s ease-in;
  cursor: pointer;
}
.topic {
  font-size: 16px;
}
/*.topic-wrapper:hover {
  transform: scale(1.08);
  transition: 0.1s ease-out;
  background-color: rgb(70, 204, 255);
  color: white;
}*/
.selected {
  transform: scale(1.08);
  transition: 0.1s ease-out;
  background-color: rgb(70, 204, 255);
  color: white;
}

#next-indicator {
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#next-indicator span {
  line-height: 60px;
  font-size: 20px;
  font-weight: 500;
  color: rgb(70, 204, 255);
}

#error-message {
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
#spinner-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5%;
}

.spinner {
  display: none;
}
.loadingSpinner {
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
  .topic-wrapper {
    width: 100px;
  }
}

@media screen and (max-width: 700px) {
  #subheading {
    padding: 0 5%;
  }
  .topic-wrapper {
    width: 100%;
    height: 70px;
  }
  /*.topic-wrapper:hover{
    background-color: #f1f6fc;
    color: #1b1f23;
    transform: scale(1);
  }*/
  .topics-error {
  width: 90%;
}
  .topic {
    font-size: 18px;
  }
}
</style>
