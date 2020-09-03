<template>
  <div class="wrapper">
    <h1 id="heading">
      {{$route.params.userId}}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Account",
  components: {},
  data() {
    return {
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
