<template>
  <div class="plans">
    <h1 id="heading">
      Invest in yourself
    </h1>
    <h1 id="subheading">Start your reading journey with our flexible pricing model</h1>
    <PlansBoxes id="plans"/>
    <div class="step" id="step-1">
      <div class="step-content" id="step-content-1">
        <h2 class="step-heading">Student Discounts</h2>
        <h3 class="step-subheading">
          You are a student and currently enrolled in an educational institution? 
          Check out our offer for students.
        </h3>
        <div id="step-1-cta" class="step-cta">
          <router-link to="/students">Explore student options &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-1"></div>
    </div>
    <div class="step" id="step-2">
      <div class="step-content" id="step-content-2">
        <h2 class="step-heading">Invest in yourself</h2>
        <h3 class="step-subheading">
          With our fixed pricing model, you pay the same amount every month. 
          Even if the book would otherwise cost more.
        </h3>
      </div>
      <div class="step-image" id="step-image-2"></div>
    </div>
    <div class="step" id="step-3">
      <div class="step-content" id="step-content-3">
        <h2 class="step-heading">You are in full control</h2>
        <h3 class="step-subheading">
          Skip a month, swap out a book you've already read or cancel your
          subscription at any time online with our configuration tool
        </h3>
        <div id="step-3-cta" class="step-cta">
          <router-link to="/about" class="link">See how it works &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-3"></div>
    </div>
    
    <SignUpCTA/>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import PlansBoxes from "../components/plans-boxes.vue";
import SignUpCTA from "../components/signup-cta.vue";

export default {
  name: "Plans",
  components: {
    PlansBoxes,
    Footer,
    SignUpCTA
  }
};
</script>

<style scoped>
.about {
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

/*PLAN INFO SECTION */
.step {
  margin: 5% 0 10% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  flex-wrap: wrap-reverse;
}

.step-content {
  width: 45%;
  min-height: 400px;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.step-heading {
  margin-top: 2%;
  font-size: 30px;
  color: #454d57;
  font-weight: 400;
  text-align: left;
}
.step-subheading {
  margin-top: 5%;
  font-size: 20px;
  color: #8595a8;
  text-align: left;
  font-weight: 300;
  line-height: 30px;
}

.step-number {
  text-align: left;
  font-weight: 700;
  color: #aab7c6;
  font-size: 20px;
}
.step-image {
  height: 400px;
  width: 45%;
  min-width: 400px;
  background-position: center;
  background-size: cover;
}
#step-2 {
  flex-direction: row-reverse;
}
#step-image-1 {
  background-image: url("../assets/images/photos/student.png");
}
#step-image-2 {
  background-image: url("../assets/images/photos/invest.png");
}
#step-image-3 {
  background-image: url("../assets/images/photos/control.png");
}

.step-cta {
  margin-top: 5%;
  text-align: left;
  position: relative;
}
.step-cta a {
  text-decoration: none;
  text-align: left;
  color: #40caff;
  font-size: 20px;
  font-weight: 500;
}
.step-cta:after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 0;
  width: 0;
  bottom: -5px;
  background: #40caff;
  height: 3px;
  border-radius: 50px;
  transition-property: width;
  transition-duration: 0.2s;
  transition-timing-function: ease-out;
}
.step-cta:hover:after,
.step-cta:focus:after,
.step-cta:active:after {
  left: 0;
  right: auto;
  width: 100%;
}

@media screen and (max-width: 1250px) {
  #plans{

    margin: 10% 0 15% 0;

  }
  .step {
    padding: 0 5%;
  }

  .step-content {
    width: 100%;
    min-width: 0px;
  }
  .step-image {
    width: 100%;
    min-width: 0px;
  }
  .step-heading {
    margin-top: 5%;
    font-size: 30px;
    color: #454d57;
    font-weight: 400;
    text-align: left;
  }
  .step-subheading {
    margin-top: 2%;
    font-size: 20px;
    color: #8595a8;
    text-align: left;
    font-weight: 300;
    line-height: 30px;
  }
}
</style>
