<template>
  <div class="wrapper">
    <h1 id="heading">
      Welcome, {{first_name}}
    </h1>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Account",
  components: {},
  data() {
    return {
      first_name: "Loading",
      last_name: "Jobs",
    };
  },
  mounted(){
    var userId = this.$route.params.userId;
      axios.get("https://readery-backend.herokuapp.com/user/"+userId)
    .then(response => {
      console.log("User data request response: "+JSON.stringify(response));
      console.log("User data successfully fetched");
      //this.loadSpinner = false;

      this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;


    })
    .catch(e => {
      console.log("User creation request Error: "+e.toString());
    })
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
