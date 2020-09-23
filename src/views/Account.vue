<template>
  <div class="account">
    <div id="landing-page">
      <div id="landing-page-left" class="landing-page-part">
        <h1 class="heading title">
          Welcome.
        </h1>
        <h3 class="text" id="landingpage-subtext">
          Start your reading journey today with our revolutionary book
          subscription service.
        </h3>
        <div class="action-buttons">

          <router-link id="learn-more" to="/">
          Logout
          </router-link>
        </div>
      </div>
      <div id="landing-page-right" class="landing-page-part">
        <img
          id="landingpage-illustration"
          src="../assets/img-new/account/work-in-progress-illu.svg"
          alt="Illustration"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from 'axios';
import Footer from "../components/footer.vue";
export default {
  name: "Account",
  components: {
    Footer
  },
  methods: {
    notifyUser(){
      //add user email to notification list
    }
  },
  data() {
    return {
      first_name: "Loading",
      last_name: "Jobs",
    };
  },
  beforeMount(){
    var userId = this.$route.params.userId;
    var access_token = this.$route.params.access_token;

    console.log("Fetching data from user...");
    console.log(access_token);
      axios.get("https://readery-backend.herokuapp.com/api/user/"+userId, {headers: {"Authorization": access_token}})
    .then(response => {
      console.log("User Data Fetch Response"+JSON.stringify(response.data));

      if(response.data.error === "Invalid token"){
        this.$router.push({path: "/"});
      }

      //this.loadSpinner = false;

      /*this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;*/


    })
    .catch(e => {
      console.log("User creation request Error: "+e.toString());
    })
  },
};
</script>

<style scoped>
.account{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
/*Landing Page */

#landing-page {
  padding: 93px 45px;
  position: relative;
  max-width: 1332px;
  margin: 20px auto 150px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#landing-page-left {
  max-width: 576px;
}

#landingpage-subtext {
  margin: 48px 0;
}
.action-buttons {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#learn-more {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0294ff;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  text-decoration: none;
  transition: 0.2s ease-out;
  font-size: 20px;
}
#learn-more:hover {
  transition: 0.2s ease-in;
  border: 2px solid #0294ff;
}

#get-started span {
  margin-left: 20px;
}
.get-started-icon {
  transition: 0.2s ease-out;
}

#get-started {
  text-decoration: none;
  width: 220px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: #0294ff;
  color: #fff;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  border-radius: 100px;
  font-size: 20px;
  transition: 0.2s ease-out;
  cursor: pointer;
}
#get-started:hover {
  background-color: #018cf2;
  transition: 0.2s ease-out;
}
#get-started:hover .get-started-icon {
  transform: translateX(3px);
  transition: 0.2s ease-in;
}
#get-started a.router-link-exact-active {
  color: #fff;
}

#landing-page-right {
  position: absolute;
  margin: auto 0;
  z-index: -100;
  right: calc(40% - 800px);
}
#landing-page-right img {
  width: 900px;
}
</style>
