<template>
  <div class="contact">
    <h1 id="heading">Get in touch</h1>
    <!-- <h1 id="subheading">Please choose a plan</h1>
    <PlansBoxesSelectable v-on:changeSelectedPlan="updatePlan($event)" />

    <h1 id="heading">We're almost done</h1>-->
    <h1 id="subheading">Please send us a message about your inquiry</h1>

    <ContactForm v-on:send="send($event)" />


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
import ContactForm from "../components/contact-form.vue";
import { HalfCircleSpinner } from 'epic-spinners';

export default {
  name: "Login",
  components: {
    Footer,
    /* PlansBoxesSelectable, */
    ContactForm,
    HalfCircleSpinner
  },
  data() {
    return {
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

  }
};
</script>

<style scoped>
.contact {
  height: 100%;
  width: 100%;
}

#heading {
  margin-top: 150px;
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
  padding: 0 5%;
}
#subheading {
  margin-top: 10px;
  padding: 0 5%;
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
