<template>
  <div class="plans">
    <h1 id="heading">
      We want to be
      <br />part of your story
    </h1>
    <h1 id="subheading">Our goal is to make it easier for you to learn from books.</h1>
    <div id="benefits">
      <div class="benefit-wrapper" id="benefit-1">
        <div class="benefit-image" id="benefit-image-1"></div>
        <div class="benefit">
          <h2 class="benefit-heading">Start learning</h2>
          <h3 class="benefit-content">
            Getting a new book each month sparks the motivation to read more and
            to make it a regular habit
          </h3>
        </div>
      </div>
      <div class="benefit-wrapper" id="benefit-2">
        <div class="benefit-image" id="benefit-image-2"></div>
        <div class="benefit">
          <h2 class="benefit-heading">Stop searching</h2>
          <h3 class="benefit-content">
            By using our service, you get a personalized reading plan based on
            recomendations of the most influencial people on the planet.
          </h3>
        </div>
      </div>
      <div class="benefit-wrapper" id="benefit-3">
        <div class="benefit-image" id="benefit-image-3"></div>
        <div class="benefit">
          <h2 class="benefit-heading">Save money</h2>
          <h3 class="benefit-content">
            Our pricing model is based on a fixed monthly rate - even if the book
            would otherwise cost more than that.
          </h3>
        </div>
      </div>
    </div>
    <h1 id="heading">You are in full control</h1>
    <h1 id="subheading">With our online configuration tool</h1>
    <div id="screenshot">
      <img src="../assets/images/photos/tool-screenshot.png" alt />
    </div>
    <div class="step" id="step-1">
      <div class="step-content" id="step-content-1">
        <h2 class="step-heading">
          Book selections from
          true game-changers
        </h2>
        <h3 class="step-subheading">
          Readery selects your next book based on recommendations of
          the most the successful people on the planet including Elon Musk,
          Jeff Bezos and more.
        </h3>
      </div>
      <div class="step-image" id="step-image-1"></div>
    </div>
    <SignUpCTA />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import SignUpCTA from "../components/signup-cta.vue";
export default {
  name: "Plans",
  components: {
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
  font-size: calc(30px + 1.5vw);
  font-weight: 500;
  padding: 0 5%;
}

#subheading {
  margin-top: 10px;
  font-weight: 300;
  font-size: calc(20px + 0.2vw);
  color: #8595a8;
  padding: 0 5%;
}

#benefits {
  margin: 2% 0 5% 0;
  padding: 0 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
.benefit-wrapper {
  margin: 5% 2%;
  width: 380px;
  min-width: 250px;
  text-align: left;
}
.benefit-image {
  height: 300px;
  background-position: center;
  background-size: cover;
}
#benefit-image-1 {
  background-image: url("../assets/images/photos/benefit-1.png");
}
#benefit-image-2 {
  background-image: url("../assets/images/photos/benefit-2.png");
}
#benefit-image-3 {
  background-image: url("../assets/images/photos/benefit-3.png");
}
.benefit-heading {
  margin-top: 8%;
  font-size: 25px;
  color: #454d57;
  font-weight: 400;
}
.benefit-content {
  margin-top: 5%;
  font-size: 16px;
  color: #8595a8;
  font-weight: 300;
  line-height: 30px;
}

#sub-subheading {
  margin-top: 10px;
  font-size: 25px;
  color: #8595a8;
  font-weight: 300;
}
#screenshot {
  width: 100%;
  margin: 5% 0;
}
#screenshot img {
  width: 60%;
  box-shadow: 0 10px 30px 0 rgba(52, 52, 66, 0.1);
  border-radius: 10px;
  transition: 0.3s ease-out;
}
#screenshot img:hover {
  transition: 0.3s ease-out;
  transform: scale(1.03);
  box-shadow: 0 10px 100px 0 rgba(52, 52, 66, 0.2);
}

/*INFO SECTION */
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

#step-image-1 {
  background-image: url("../assets/images/photos/business.png");
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
  #benefits {
    flex-wrap: wrap;
    padding: 0 5%;
  }
  .benefit-wrapper {
    width: 100%;
  }
  .benefit-image {
    height: 400px;
  }

  #screenshot {
    width: 100%;
    margin: 5% 0 20% 0;
  }
  #screenshot img {
    width: 90%;
  }
  #screenshot img:hover {
    transform: scale(1);
    box-shadow: 0 10px 30px 0 rgba(52, 52, 66, 0.1);
  }

  .step {
    padding: 0 5%;
    margin: 30% 0;
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
