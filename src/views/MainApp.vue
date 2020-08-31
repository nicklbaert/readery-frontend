<template>
  <div class="wrapper">
    <h1 id="heading">
      Reinvent
      <br />the way you read
    </h1>
  </div>
</template>

<script>
export default {
  name: "MainApp",
  components: {},
  data() {
    return {
      documents: []
    };
  }
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 10%;
  font-size: 60px;
  font-weight: 700;
}
</style>
