<template>
  <div class="account">
    <div id="heading-section">
      <div id="plans-heading">
        <h1 id="plans-heading-title" class="heading subtitle">Welcome to Readery.</h1>
      </div>
    </div>
    <div id="illustration-section">
      <img id="illustration" src="../assets/img-new/account/couch.svg" alt="Illustration" />
    </div>
    <div id="letter-section">
      <div class="letter-part" id="letter-part-01">
        Thank you for signing up. You are one of the first people to join readery,
        which is why we want to give something back.
      </div>
      <div class="letter-part" id="letter-part-02">
        Our services are currently
        <span id="in_dev_link">still in development</span>, hence we are not yet able to start shipping books.
        However, we appreciate you signing up so early and want to give you a free book in exchange for your trust.
        You will be notified via email once we are ready and you can claim your free book.
      </div>
      <div class="letter-part" id="letter-part-03">
        Sincerely,
        <br />Niclas (CEO)
      </div>
      <router-link to="/" href="#" id="logout-button" class="link" @click="handleLogoutClick()">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21">
          <g
            id="Icon_feather-log-out"
            data-name="Icon feather-log-out"
            transform="translate(1.5 1.5)"
          >
            <path
              id="Path_1281"
              data-name="Path 1281"
              d="M4.5,22.5h4a2,2,0,0,0,2-2V6.5a2,2,0,0,0-2-2h-4"
              transform="translate(7.5 -4.5)"
              fill="none"
              stroke="#0294ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_1282"
              data-name="Path 1282"
              d="M29,20.5l-5-5,5-5"
              transform="translate(-24 -6.5)"
              fill="none"
              stroke="#0294ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_1283"
              data-name="Path 1283"
              d="M13.5,18h12"
              transform="translate(-13.5 -9)"
              fill="none"
              stroke="#0294ff"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </g>
        </svg>
        <span class="highlighted">Logout</span>
      </router-link>
    </div>
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import Footer from "../components/footer.vue";
export default {
  name: "Account",
  components: {
    Footer
  },
  methods: {
    handleLogoutClick(){
      this.$emit("event", "logout");
    }
  },
  data() {
    return {
      first_name: "Loading",
      last_name: "Jobs"
    };
  },
beforeMount() {
    var userId = this.$route.params.userId;
    var access_token = this.$route.params.access_token;

    console.log("Fetching data from user...");
    console.log(access_token);
    axios
      .get("https://readery-backend.herokuapp.com/api/user/" + userId, {
        headers: { Authorization: access_token }
      })
      .then(response => {
        console.log("User Data Fetch Response" + JSON.stringify(response.data));

        if (response.data.error === "Invalid token") {
          this.$router.push({ path: "/" });
        }

        //this.loadSpinner = false;

        /*this.first_name = response.data.first_name;
      this.last_name = response.data.last_name;*/
      })
      .catch(e => {
        console.log("User creation request Error: " + e.toString());
      });
  }
};
</script>

<style scoped>
.account {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#heading-section {
  padding: 0px 45px 0px 45px;
  position: relative;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 62px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#plans-heading {
  margin-bottom: 0px;
}
#plans-heading-title {
  margin-bottom: 0px;
}
#plans-heading-subtitle {
  text-align: center;
}
#letter-section {
  padding: 0px 45px 300px 45px;
  position: relative;
  max-width: 600px;
  margin: 0 auto 22px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.letter-part {
  font-size: 18px;
  color: #4c5d77;
  font-weight: 300;
  text-align: center;
  margin-bottom: 24px;
  line-height: 1.5;
}
#letter-part-03 {
  margin-bottom: 48px;
}
#illustration-section {
  padding: 0px 45px 0px 45px;
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  margin-bottom: 62px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#illustration {
  width: 100%;
}

#logout-button {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #0294ff;
}

#logout-button svg {
  margin-right: 20px;
}
@media screen and (max-width: 1200px) {
  /*Centered Mobile Mode */

  /*Landing section */
  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
  }
}
@media screen and (max-width: 600px) {
  #letter-section {
    padding: 0px 24px 90px 24px;
    width: 100%;
  }
  .letter-part {
    font-size: 16px;
  }
}
</style>
