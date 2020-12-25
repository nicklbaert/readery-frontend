<template>
  <div id="home">
    <div id="landingpage-background">
    <div id="landing-page">
      <div id="landing-page-left" class="landing-page-part">
        <h1 class="heading title">
          Listen to <br>
          what <span id="you">you</span> love
        </h1>
        <h3 id="landingpage-subtext">
          with Pyro - The new music app for parties
        </h3>
        <div class="action-buttons">
          <a id="get-started" class="action-button" href="https://apps.apple.com/us/app/id1526986732" target="_blank">
            <img src="../assets_2/icons/apple-logo-white.png" alt="" class="action-button-img">
          </a>
          <a id="get-started" class="action-button" href="https://play.google.com/store/apps/details?id=com.pyro.app" target="_blank">
            <img src="../assets_2/icons/play-store-logo.png" alt="" class="action-button-img">
          </a>
        </div>
      </div>
    </div>
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
  },
};
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/*Landing Page */

#landingpage-background{
  background-image: url("../assets_2/images/landingpage-bg.png");
}

#landing-page {
  padding: 100px 45px 86px 45px;
  position: relative;
  height: 100vh;
  max-width: 1532px;
  margin: 0px auto 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}


#landingpage-subtext {
  margin: 32px 0 64px 0;
  color: #fff;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
}
#you{
  color: #AFFF23;
}
.action-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
}
.action-button-img{
  height: 25px;
}


#get-started {
  text-decoration: none;
  width: 180px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  border: 2px solid #34404b;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  border-radius: 100px;
  font-size: 16px;
  transition: 0.2s ease-out;
  cursor: pointer;
}
#get-started:hover {
  background-color: #34404b;
  transition: 0.2s ease-out;
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



@media screen and (max-width: 1200px) {
  /*Centered Mobile Mode */

  /*Landing section */
  #landing-page {
    flex-direction: column;
    width: 100%;
    padding: 120px 45px 0 45px;
  }

  #landing-page-left {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 704px;
    margin: 0 auto 0px auto;
  }

  .title {
    font-size: 72px;
    line-height: 1.2;
  }

  .subtitle {
    text-align: center;
  }

  #landingpage-subtext {
    margin: 48px 0;
    text-align: center;
  }

  #landing-page-right {
    position: initial;
    margin: auto 0;
    height: auto;
  }

  #landing-page-right img {
    width: 100%;
    max-width: 800px;
  }

  
}


@media screen and (max-width: 600px) {
  /*Centered Mobile Mode */
  .title{
    font-size: 60px;
  }
  .action-buttons {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  #learn-more {
    margin: 32px 0 0 0;
    height: 50px;
    width: 100%;
  }
  #get-started {
    width: 100%;
    height: 50px;
  }
}
</style>
