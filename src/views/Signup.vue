<template>
  <div class="home">
    <h1 id="heading">Let's set you up</h1>
    <h1 id="subheading">To start off, please select up to 10 topics that interest you</h1>
    <div id="topics-wrapper">
      <div id="topic-grid">
        <div class="topic-wrapper">
          <span>Business</span>
        </div>
        <div class="topic-wrapper">
          <span>Finance</span>
        </div>
        <div class="topic-wrapper">
          <span>Technology</span>
        </div>
        <div class="topic-wrapper">
          <span>Sports</span>
        </div>
        <div class="topic-wrapper">
          <span>Travel</span>
        </div>
        <div class="topic-wrapper">
          <span>Sci-Fi</span>
        </div>
        <div class="topic-wrapper">
          <span>Entepreneurship</span>
        </div>
        <div class="topic-wrapper">
          <span>Psychology</span>
        </div>
        <div class="topic-wrapper">
          <span>Physics</span>
        </div>
        <div class="topic-wrapper">
          <span>Business</span>
        </div>
        <div class="topic-wrapper">
          <span>Finance</span>
        </div>
        <div class="topic-wrapper">
          <span>Technology</span>
        </div>
        <div class="topic-wrapper">
          <span>Sports</span>
        </div>
        <div class="topic-wrapper">
          <span>Travel</span>
        </div>
        <div class="topic-wrapper">
          <span>Sci-Fi</span>
        </div>
        <div class="topic-wrapper">
          <span>Entepreneurship</span>
        </div>
        <div class="topic-wrapper">
          <span>Psychology</span>
        </div>
        <div class="topic-wrapper">
          <span>Physics</span>
        </div>
        <div class="topic-wrapper">
          <span>Sci-Fi</span>
        </div>
        <div class="topic-wrapper">
          <span>Entepreneurship</span>
        </div>
        <div class="topic-wrapper">
          <span>Psychology</span>
        </div>
      </div>
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
  margin-top: 5%;
  font-size: 50px;
}
#subheading {
  margin-top: 10px;
  font-size: 25px;
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
  margin: 5% 0 20% 0;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.topic-wrapper {
  flex: 1;
  padding: 2% 3%;
  margin: 2%;
  border-radius: 5px;
  background-color: #f1f6fc;
  transition: 0.1s ease-out;
  cursor: pointer;
}
.topic-wrapper:hover {
  transform: scale(1.08);
  transition: 0.1s ease-out;
  background-color: rgb(70, 204, 255);
  /*  box-shadow: 0 2px 20px 0 rgba(70, 204, 255, 1); */
  color: white;
}
</style>
