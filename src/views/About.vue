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
  margin-top: 5%;
  font-size: 80px;
}
#benefits {
  margin: 2% 0 5% 0;
  padding: 0 15%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.benefit-wrapper {
  margin: 5% 2%;
  width: 380px;
  min-width: 350px;
  text-align: left;
}
.benefit-image {
  width: 100%;
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
</style>
