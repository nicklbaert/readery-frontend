<template>
  <div class="plans">
    <h1 id="heading">
      For starters
      <br />& for hustlers
    </h1>
    <PlansBoxes />
    <div id="plan-info">
      <h3>Included</h3>
      <p>
        - Custom reading plan for your individual needs and interests
        <br />- Automatic shipping of one new book each month
        <br />- All to a fixed monthly price
        <br />- Full control and access to our online configuration tool
        <br />
      </p>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import PlansBoxes from "../components/plans-boxes.vue";
export default {
  name: "Plans",
  components: {
    PlansBoxes,
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
#plan-info {
  padding: 0 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 20px;
}
#plan-info p {
  color: #b4b9bf;
  margin: 2% 0 5% 0;
  font-size: 16px;
  text-align: left;
  font-weight: 300;
  line-height: 30px;
}
</style>
