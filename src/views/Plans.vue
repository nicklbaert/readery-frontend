<template>
  <div class="plans">
    <h1 id="heading">
      Invest in yourself
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
    <SignUpCTA/>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import PlansBoxes from "../components/plans-boxes.vue";
import SignUpCTA from "../components/signup-cta.vue";

export default {
  name: "Plans",
  components: {
    PlansBoxes,
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
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
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
