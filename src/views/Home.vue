<template>
  <div class="home">
    <h1 id="heading">
      One book can change
      <br />your life forever
    </h1>
    <h2 id="subheading">
      Start your reading journey today with readery.
      <br />Select your interests and we'll take care of the rest.
    </h2>
    <div id="action-buttons">
      <a href="#" id="learn-more-button">Learn More</a>
      <a href="#" id="get-started-button">Get Started</a>
    </div>
    <div id="image-1-wrapper">
      <h2 id="newsletter-heading">Want 30% off?</h2>
      <h3 id="newsletter-subheading">join our newsletter and get 30% off on all plans</h3>
      <div id="newsletter-input-wrapper">
        <input type="text" placeholder="Enter your E-Mail address" id="newsletter-input" />
        <button id="newsletter-send">Send</button>
      </div>
    </div>
    <div class="step" id="step-1">
      <div class="step-content" id="step-content-1">
        <h4 class="step-number">STEP 1</h4>
        <h2 class="step-heading">
          You tell us what you
          are interested in
        </h2>
        <h3 class="step-subheading">
          Select from over 50 different categories,
          which ones you like the most
        </h3>
      </div>
      <div class="step-image" id="step-image-1"></div>
    </div>
    <div class="step" id="step-2">
      <div class="step-content" id="step-content-2">
        <h4 class="step-number">STEP 2</h4>
        <h2 class="step-heading">
          Lean back and
          let us do the rest
        </h2>
        <h3 class="step-subheading">
          Readery plots out your reading journey
          by selecting the best books for your
          preferences
        </h3>
      </div>
      <div class="step-image" id="step-image-2"></div>
    </div>
    <div class="step" id="step-3">
      <div class="step-content" id="step-content-3">
        <h4 class="step-number">STEP 3</h4>
        <h2 class="step-heading">
          We send you a new
          book each month
        </h2>
        <h3 class="step-subheading">
          Lean back and start learning. When you're
          finished, the next book is already waiting to
          be shipped to your doorstep
        </h3>
      </div>
      <div class="step-image" id="step-image-3"></div>
    </div>
    <div class="step" id="step-4">
      <div class="step-content" id="step-content-4">
        <h4 class="step-number">STEP 4</h4>
        <h2 class="step-heading">You are in full control</h2>
        <h3
          class="step-subheading"
        >Skip a month, swap out a book you've already read or cancel your subscription at any time online</h3>
      </div>
      <div class="step-image" id="step-image-4"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  name: "Home",
  components: {
    Footer
  }
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 10%;
  font-size: 80px;
}
#subheading {
  margin-top: 3%;
  font-weight: 300;
}
#action-buttons {
  margin-top: 3%;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#action-buttons a {
  margin: 0 1em;
}
#learn-more-button {
  background-color: #fff;
  padding: 15px 30px;
  color: #1b1f23;
  text-decoration: none;
  box-shadow: inset 0px 0px 0px 2px #1b1f23;
  transition: 0.2s ease-in;
}
#learn-more-button:hover {
  transition: 0.2s ease-out;
}
#get-started-button {
  background-color: #40caff;
  padding: 15px 30px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s ease-in;
}
#get-started-button:hover {
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#image-1-wrapper {
  margin-top: 5%;
  width: 100%;
  height: 500px;
  background-image: url("../assets/images/man-window-reading.png");
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
#newsletter-heading {
  font-size: 50px;
}
#newsletter-subheading {
  margin-top: 0.5%;
  font-weight: 300;
  font-size: 20px;
}
#newsletter-input-wrapper {
  margin-top: 2%;
  width: 40vw;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#newsletter-input-wrapper input {
  height: 100%;
  border: none;
  width: 75%;
  font-family: "Cera Pro", Helvetica, sans-serif;
  font-size: 16px;
  padding: 0 15px;
  font-weight: 300;
  outline: none;
}
#newsletter-input-wrapper input:focus {
  border: none;
  outline: none;
}
#newsletter-input-wrapper button {
  height: 100%;
  border: none;
  padding: 0;
  width: 20%;
  background-color: #40caff;
  color: #fff;
  font-family: "Cera Pro", Helvetica, sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: 0.2s ease-in;
}
#newsletter-input-wrapper button:hover {
  border: none;
  outline: none;
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#newsletter-input-wrapper button:focus {
  border: none;
  outline: none;
}

.step {
  margin: 10% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15%;
  flex-wrap: wrap;
}
.step-content {
  width: 40%;
}
.step-heading {
  margin-top: 2%;
  font-size: 50px;
  text-align: left;
}
.step-subheading {
  margin-top: 5%;
  font-size: 20px;
  text-align: left;
  font-weight: 300;
}

.step-number {
  text-align: left;
  font-weight: 700;
  color: #aab7c6;
  font-size: 20px;
}
.step-image {
  height: 400px;
  width: 55%;
  background-position: center;
}
#step-2,
#step-4 {
  flex-direction: row-reverse;
}
#step-image-1 {
  background-image: url("../assets/images/interest-demo.png");
}
#step-image-2 {
  background-image: url("../assets/images/man-chill.png");
}
#step-image-3 {
  background-image: url("../assets/images/plan-demo.png");
}
#step-image-4 {
  background-image: url("../assets/images/girl-laptop-2.png");
}
</style>
