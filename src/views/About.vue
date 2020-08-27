<template>
  <div class="about">
    <h1 id="heading">Plans</h1>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  name: "About",
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
  font-size: 60px;
}
</style>
