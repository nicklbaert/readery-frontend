<template>
  <div id="home">
    <div id="landing-page">
      <div id="landing-page-left" class="landing-page-part">
        <h1 class="heading title">
          Get the right
          books for your personal growth.
        </h1>
        <h3 class="text" id="landingpage-subtext">
          Start your reading journey today with our revolutionary book
          subscription service.
        </h3>
        <div class="action-buttons">
          <router-link id="get-started" to="/signup" class="action-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.503"
              height="18.616"
              viewBox="0 0 13.503 23.616"
            >
              <path
                id="Icon_ionic-ios-arrow-forward"
                data-name="Icon ionic-ios-arrow-forward"
                d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                transform="translate(-11.246 -6.196)"
                fill="#ffffff"
              />
            </svg>
            <span>Get started</span>
          </router-link>
          <router-link id="learn-more" to="/about">Learn more</router-link>
        </div>
      </div>
      <div id="landing-page-right" class="landing-page-part">
        <img
          id="landingpage-illustration"
          src="../assets/img-new/landingpage/landingpage-illustration.svg"
          alt="Illustration"
          width="900"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style scoped>
#home {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#landing-page {
  padding: 93px 45px;
  position: relative;
  max-width: 1332px;
  margin: 20px auto 0 auto;
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
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
#learn-more {
  margin-left: 32px;
  width: 220px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0294ff;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  border: 2px solid #d0dbe8;
  border-radius: 100px;
  text-decoration: none;
  transition: 0.2s ease-in;
  font-size: 20px;
}
#learn-more:hover {
  transition: 0.2s ease-out;
  border: 2px solid #0294ff;
}

#get-started span {
  margin-left: 20px;
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
}
#get-started:hover {
  background-color: #018cf2;
  transition: 0.2s ease-out;
}
#get-started a.router-link-exact-active {
  color: #fff;
}

#landing-page-right {
  position: absolute;
  margin: auto 0;
  right: calc(40% - 800px);
}

@media screen and (max-width: 1200px) {
  /*Centered Mobile Mode */
}
</style>
