<template>
  <div class="plans">
    <h1 id="heading">
      We want to be
      <br />part of your story
    </h1>
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
            Your first book only costs $9.99, after that it's $14.99 per month -
            even if the book costs more than that.
          </h3>
        </div>
      </div>
    </div>
    <h1 id="subheading">You are in full control</h1>
    <h1 id="sub-subheading">With our online configuration tool</h1>
    <div id="screenshot">
      <img src="../assets/images/photos/tool-screenshot.png" alt />
    </div>
    <div class="step" id="step-1">
      <div class="step-content" id="step-content-1">
        <h2 class="step-heading">You are a slow reader?</h2>
        <h3
          class="step-subheading"
        >Skip a month whenever you like and you won't get charged anything.</h3>
      </div>
      <div class="step-image" id="step-image-1"></div>
    </div>
    <div class="step" id="step-2">
      <div class="step-content" id="step-content-2">
        <h2 class="step-heading">You already read the book?</h2>
        <h3 class="step-subheading">You can always choose to generate a new best pick for the month.</h3>
      </div>
      <div class="step-image" id="step-image-2"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  name: "Plans",
  components: {
    Footer
  }
};
</script>

<style scoped>
.about {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 10%;
  font-size: 60px;
  font-weight: 700;
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
#subheading {
  margin-top: 5%;
  font-size: 50px;
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
  background-image: url("../assets/images/photos/man-nature.png");
}
#step-image-2 {
  background-image: url("../assets/images/photos/books-pile.png");
}

@media screen and (max-width: 1280px) {
  #benefits {
    padding: 0 5%;
  }
  .step {
    padding: 0 5%;
  }
  .step-content {
    width: 100%;
  }
  .step-image {
    width: 100%;
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
@media screen and (max-width: 1250px) {
  #benefits {
    flex-wrap: wrap;
  }
  .benefit-wrapper {
    width: 100%;
  }
  .benefit-image {
    height: 400px;
  }
}
</style>
