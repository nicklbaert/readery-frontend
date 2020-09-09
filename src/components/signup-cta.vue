<template>
  <div class="signup-cta">
    <h1 id="heading">Get started today</h1>
    <h1 id="subheading">Sign up and get your first book for free</h1>
    <div id="action-buttons">
          <router-link to="/signup" id="get-started-button">Sign up for free</router-link>
        </div>
  </div>
</template>

<script>
export default {
  name: "Signup-CTA",
  components: {}
};
</script>

<style scoped>
.signup-cta{
  margin: 15% 0;
  padding: 0 15%;
}
#heading {
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
}
#subheading {
  margin-top: 10px;
  font-weight: 300;
  font-size:calc(20px + 0.3vw);
  color: #454D57;
}
#action-buttons {
  margin-top: 3%;
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
#action-buttons a {
  margin: 0 1em;
}
#get-started-button {
  background-color: #40caff;
  padding: 15px 30px;
  color: #fff;
  text-decoration: none;
  transition: 0.2s ease-in;
}
#get-started-button:hover {
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
@media screen and (max-width: 1280px) {
  .signup-cta {
    padding: 0 10%;
    
  }
  
}
@media screen and (max-width: 700px) {
  .signup-cta{
    margin: 20% 0 30% 0;
  }
#subheading {
  margin-top: 5%;
}
#action-buttons {
  margin-top: 8%;
}
}

</style>
