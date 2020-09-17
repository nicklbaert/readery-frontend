<template>
  <div class="about">
    <div id="steps-section">
      <div class="step">
        <div class="step-img" id="step-img-1"></div>
        <div class="step-content">
          <div class="step-no" id="step-no-1">Step 1</div>
          <h1 class="heading subtitle step-title">
            Select topics you
            are interested in
          </h1>
          <h3 class="text step-text">
            Select from over 20 different categories,
            which ones you would like to learn about.
          </h3>
        </div>
      </div>
      <div class="step">
        <div class="step-content">
          <div class="step-no" id="step-no-2">Step 2</div>
          <h1 class="heading subtitle step-title">
            Lean back and
            watch us work
          </h1>
          <h3
            class="text step-text"
          >Readery plots out your reading journey by selecting the best books for your your preferences.</h3>
        </div>
        <div class="step-img" id="step-img-2"></div>
      </div>
      <div class="step">
        <div class="step-img" id="step-img-3"></div>
        <div class="step-content">
          <div class="step-no" id="step-no-3">Step 3</div>
          <h1 class="heading subtitle step-title">
            Get a new book every
            Month
          </h1>
          <h3
            class="text step-text"
          >Grab a cup of coffee and start learning. When you’re finished with your book, the next one is already waiting to be shipped to your doorstep.</h3>
        </div>
      </div>
    </div>
    <SignUpCTA />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import SignUpCTA from "../components/signup-cta.vue";
export default {
  name: "About",
  components: {
    Footer,
    SignUpCTA
  }
};
</script>

<style scoped>
.about {
  width: 100%;
  height: 100%;
}
#steps-section {
  padding: 0 45px;
  position: relative;
  max-width: 1236px;
  margin: 90px auto 144px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.step {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.step:not(:last-child) {
  margin-bottom: 144px;
}

.step-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 550px;
  width: 550px;
  border-radius: 1000px;
  background-size: 150%;
  background-position-y: center;
}
#step-img-1 {
  background-image: url("../assets/img-new/about/interests.png");
}
#step-img-2 {
  background-image: url("../assets/img-new/about/plan.png");
}
#step-img-3 {
  background-image: url("../assets/img-new/about/delivery.png");
  background-position: center;
  background-size: cover;
}

.step-content {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
}

.step-no {
  font-size: 25px;
  font-weight: 500;
  color: #0294ff;
  margin-bottom: 32px;
}

#step-no-2 {
  color: #fb9c22;
}

.step-title {
  margin-bottom: 32px;
}

.step-text {
  margin-bottom: 48px;
}
</style>
