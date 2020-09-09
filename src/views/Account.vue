<template>
  <div class="wrapper">
    <h1 id="heading">
      Hi, {{first_name}}
    </h1>
    <div id="party-emoji">
      <img src="../assets/images/icons/party_emoji.png" alt="PARTEEEY">
    </div>
    <h1 class="subheading" id="subheading1">
      Thank you for signing up. You are one of the first people to join readery, 
      which is why we want to give something back.
    </h1>
     <h1 class="subheading" id="subheading2">
     Our services are currently <span id="in_dev_link">still in development</span>, hence we are not yet able to start shipping books. 
     However, we appreciate you signing up so early and want to give you a free book in exchange for your trust. 
     Tap the button below to get notified via email once you can claim your free book.
    </h1>
    <button type="submit" id="notify-button" @click="notifyUser()">Notify me</button>
    <h1 class="subheading" id="subheading3">
     Sincerely, <br>
     Niclas (CEO)
    </h1>
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
        this.$router.push({path: "/login"});
      }

      //this.loadSpinner = false;

      this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;


    })
    .catch(e => {
      console.log("User creation request Error: "+e.toString());
    })
  },
};
</script>

<style scoped>
.wrapper {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 150px;
  font-size:calc(30px + 1.5vw);
  font-weight: 500;
}
#party-emoji{
  margin-top: 10px;
}
#party-emoji img{
  width: 120px;
}

.subheading {
 font-size:calc(14px + 0.3vw);
  color: #8595a8;
  font-weight: 300;
  line-height: 30px;
}

#subheading1{
padding: 0 30%;
  margin-top: 10px;
}
#subheading2{
padding: 0 25%;
  margin-top: 50px;
}

#notify-button {
  cursor: pointer;
  margin-top: 50px;
  background-color: #40caff;
  padding: 15px 50px;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  transition: 0.2s ease-in;
  border: none;
  font-family: cera-pro;
  outline: none;
}
#notify-button:hover {
  border: none;
  outline: none;
  background-color: #1ab5f1;
  transition: 0.2s ease-out;
}
#notify-button:focus {
  border: none;
  outline: none;
}

#subheading3{
  margin-top: 50px;
  margin-bottom: 10%;
}
#in_dev_link{
  color: #46CCFF;
}

@media screen and (max-width: 700px){
  
  #subheading1{
padding: 0 5%;
}
#subheading2{
padding: 0 5%;
}
  
}



@media screen and (max-width: 700px){
  #subheading1{
padding: 0 5%;
}
#subheading2{
padding: 0 5%;
}
  
}
</style>
