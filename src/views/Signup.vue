<template>
  <div class="home">
    <h1 id="heading">Let's set you up</h1>
    <div id="topic-grid">
      <table>
        <tr>
          <td>Entepreneurship</td>
          <td>Success</td>
          <td>Finance</td>
        </tr>
        <tr>
          <td>Business</td>
          <td>Psychology</td>
          <td>Startup</td>
        </tr>
        <tr>
          <td>Law</td>
          <td>Science-Fiction</td>
          <td>Astrophysics</td>
        </tr>
        <tr>
          <td>Physics</td>
          <td>Software</td>
          <td>Programming</td>
        </tr>
      </table>
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
#topic-grid {
  margin: 5% 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#topic-grid table {
  width: 50%;
  text-align: left;
  font-weight: 300;
  font-size: 18px;
}
</style>
