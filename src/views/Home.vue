<template>
  <div class="home">
    <div id="landing-page">
      <video autoplay muted loop id="background-video" poster="../assets/videos/video-poster.png">
        <source src="../assets/videos/readery-landingpage-video_whiter.mp4" type="video/mp4" />Your browser does not support HTML5 video.
      </video>
      <div id="landingpage-content">
        <h1 id="heading">
          Make reading a regular habit
        </h1>
        <h2 id="subheading">The book subscription based on your goals and interests.</h2>
        <div id="action-buttons">
          <router-link to="/signup" id="get-started-button">Sign up for free</router-link>
        </div>
      </div>
      <div class="scroll-downs">
          <div class="mousey">
            <div class="scroller"></div>
            <div class="mouse-caption"><span>scroll down</span></div>
          </div>
        </div>
    </div>
    <div class="step" id="step-1">
      <div class="step-content" id="step-content-1">
        <h4 class="step-number">STEP 1</h4>
        <h2 class="step-heading">You tell us what you are interested in</h2>
        <h3 class="step-subheading">
          Select from over 50 different categories, which ones you like the
          most. Wether you want to learn about entrepreneurship or just want to
          dive into the world of vampire love stories, we got you covered.
        </h3>
        <div id="step-1-cta" class="step-cta">
          <router-link to="/signup">Get started &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-1"></div>
    </div>
    <div class="step" id="step-2">
      <div class="step-content" id="step-content-2">
        <h4 class="step-number">STEP 2</h4>
        <h2 class="step-heading">Lean back and watch us work</h2>
        <h3 class="step-subheading">
          Readery plots out your reading journey by selecting the best books for
          your your preferences.
        </h3>
        <div id="step-2-cta" class="step-cta">
          <router-link to="/about">How we choose your books &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-2"></div>
    </div>
    <div class="step" id="step-3">
      <div class="step-content" id="step-content-3">
        <h4 class="step-number">STEP 3</h4>
        <h2 class="step-heading">We send you a new book each month</h2>
        <h3 class="step-subheading">
          Grab a cup of coffee and start learning. When you're finished with your book, the next one is
          already waiting to be shipped to your doorstep.
        </h3>
        <div id="step-3-cta" class="step-cta">
          <router-link to="/about">Find out how it works &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-3"></div>
    </div>
    <div class="step" id="step-4">
      <div class="step-content" id="step-content-4">
        <h4 class="step-number">STEP 4</h4>
        <h2 class="step-heading">You are in full control</h2>
        <h3 class="step-subheading">
          Skip a month, swap out a book you've already read or cancel your
          subscription at any time online with our configuration tool
        </h3>
        <div id="step-4-cta" class="step-cta">
          <router-link to="/signup">Start your reading journey &rarr;</router-link>
        </div>
      </div>
      <div class="step-image" id="step-image-4"></div>
    </div>

    <SignUpCTA/>

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import SignUpCTA from "../components/signup-cta.vue";

export default {
  name: "Home",
  components: {
    Footer,
    SignUpCTA
  },
};
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
}
#landingpage-content {
  position: absolute;
  width: 90%;
}
#landing-page {
  height: 100vh;
  width: 100%;
  display: flex;
  z-index: 1000;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
#background-video {
  /* position: absolute;
  right: 0;
  top: 0;
  height: 100vh; */
  height: 100%;
  width: 177.77777778vh; /* 100 * 16 / 9 */
  min-width: 100%;
  min-height: 56.25vw; /* 100 * 9 / 16 */
}
#heading {
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
}
#subheading {
  margin-top: 2%;
  font-weight: 300;
  font-size:calc(20px + 0.3vw);
  color: #454D57;
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

/*Mouse animation*/ 
.scroll-downs {
  position: absolute;
  width: 100px;
  height: 80px;
  right: 0;
  left: 0;
  bottom: 40px;
  margin: 5% auto 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.mousey {
  width: 3px;
  padding: 10px 10px;
  height: 20px;
  border: 2px solid #1b1f23;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}
.mouse-caption{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  width: 100%;
}
.scroller {
  width: 3px;
  height: 10px;
  border-radius: 25%;
  background-color: #1b1f23;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15,.41,.69,.94);
  animation-iteration-count: infinite;
}
@keyframes scroll {
  0% { opacity: 0; }
  10% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(15px); opacity: 0;}
}


.step {
  margin: 10% 0;
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
#step-2,
#step-4 {
  flex-direction: row-reverse;
}
#step-image-1 {
  background-image: url("../assets/images/photos/interest-demo-2.png");
}
#step-image-2 {
  background-image: url("../assets/images/photos/man-chill.png");
}
#step-image-3 {
  background-image: url("../assets/images/photos/plan-demo.png");
}
#step-image-4 {
  background-image: url("../assets/images/photos/girl-laptop-2.png");
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

@media screen and (max-width: 400px) {
  #subheading {
  margin-top: 8%;
}
#action-buttons {
  margin-top: 8%;
}
}
</style>
