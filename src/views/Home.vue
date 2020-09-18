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
              class="get-started-icon"
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
        />
      </div>
    </div>

    <div id="quality-section">
      <div id="quality-heading">
        <h1 id="quality-heading-title" class="heading subtitle">
          Adapted to
          <span class="highlighted-reverse">your</span> interests
        </h1>
        <div id="quality-heading-subtitle" class="text">Personalized. Easy. Effective.</div>
      </div>
      <div id="qualities">
        <div id="quality-1" class="quality">
          <div class="quality-icon">
            <img src="../assets/icons-new/qualities/pricing.png" alt="Flexible Pricing" />
          </div>
          <div class="quality-text">Flexible Pricing</div>
        </div>
        <div id="quality-2" class="quality">
          <div class="quality-icon">
            <img src="../assets/icons-new/qualities/custom.png" alt="Highly customizable" />
          </div>
          <div class="quality-text">Highly customizable</div>
        </div>
        <div id="quality-3" class="quality">
          <div class="quality-icon">
            <img src="../assets/icons-new/qualities/cancel.png" alt="Cancel any time" />
          </div>
          <div class="quality-text">Cancel any time</div>
        </div>
      </div>
    </div>

    <div id="benefits-section">
      <div class="benefit">
        <div class="benefit-img">
          <img src="../assets/img-new/landingpage/reading.png" alt="Man reading on a couch" />
        </div>
        <div class="benefit-content">
          <h1 class="heading subtitle benefit-title">Start reading on a regular basis</h1>
          <h3 class="text benefit-text">
            Getting a new book each month sparks the motivation to read more to
            make it a regular habit
          </h3>
          <router-link to="/plans" class="benefit-link" href="#">
            How it works
            <svg
              class="benefit-link-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="13.503"
              height="13.616"
              viewBox="0 0 13.503 23.616"
            >
              <path
                id="Icon_ionic-ios-arrow-forward"
                data-name="Icon ionic-ios-arrow-forward"
                d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                transform="translate(-11.246 -6.196)"
                fill="#0294ff"
              />
            </svg>
          </router-link>
        </div>
      </div>
      <div class="benefit" id="benefit-2">
        <div class="benefit-content">
          <h1 class="heading subtitle benefit-title">
            Stop searching
            for the right books.
          </h1>
          <h3
            class="text benefit-text"
          >By using our service, you get a personalized reading plan based on recommendations of the most successful people on the planet.</h3>
          <router-link to="/about" class="benefit-link" href="#">
            Learn more
            <svg
              class="benefit-link-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="13.503"
              height="13.616"
              viewBox="0 0 13.503 23.616"
            >
              <path
                id="Icon_ionic-ios-arrow-forward"
                data-name="Icon ionic-ios-arrow-forward"
                d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                transform="translate(-11.246 -6.196)"
                fill="#0294ff"
              />
            </svg>
          </router-link>
        </div>
        <div class="benefit-img">
          <img src="../assets/img-new/landingpage/search.png" alt="Man reading on a couch" />
        </div>
      </div>
      <div class="benefit">
        <div class="benefit-img">
          <img src="../assets/img-new/landingpage/money.png" alt="Man reading on a couch" />
        </div>
        <div class="benefit-content">
          <h1 class="heading subtitle benefit-title">Save money</h1>
          <h3
            class="text benefit-text"
          >Your first book is free, after that you can choose the pricing model that fits your needs best</h3>
          <router-link to="/plans" class="benefit-link" href="#">
            Explore pricing
            <svg
              class="benefit-link-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="13.503"
              height="13.616"
              viewBox="0 0 13.503 23.616"
            >
              <path
                id="Icon_ionic-ios-arrow-forward"
                data-name="Icon ionic-ios-arrow-forward"
                d="M20.679,18,11.742,9.07a1.681,1.681,0,0,1,0-2.384,1.7,1.7,0,0,1,2.391,0L24.258,16.8a1.685,1.685,0,0,1,.049,2.327L14.14,29.32a1.688,1.688,0,0,1-2.391-2.384Z"
                transform="translate(-11.246 -6.196)"
                fill="#0294ff"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>

    <div id="demo-section">
      <div id="demo-heading">
        <h1 id="demo-heading-title" class="heading subtitle">
          Get your own
          <span class="highlighted-reverse">smart</span> reading plan
        </h1>
        <div id="demo-heading-subtitle" class="text">So you can focus on the actual reading.</div>
      </div>
      <div id="demo-img">
        <div
          class="preview-background"
          :class="{previewBackgroundActive: showDemoPreview}"
        ></div>
        <img
          src="../assets/img-new/landingpage/plan-demo.png"
          :class="{preview: showDemoPreview}"
          alt="Reading Plan Demo"
        />
      </div>
    </div>

    <SignupCTA />
    <Footer />
  </div>
</template>

<script>
import SignupCTA from "../components/signup-cta.vue";
import Footer from "../components/footer.vue";

export default {
  name: "Home",
  data() {
    return {
      showDemoPreview: false
    };
  },
  components: {
    SignupCTA,
    Footer
  },
  methods: {
    toggleDemoPreview() {
      if (this.showDemoPreview === false) {
        this.showDemoPreview = true;
      } else {
        this.showDemoPreview = false;
      }
    }
  }
};
</script>

<style scoped>
#home {
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

/*Quality section */

#quality-section {
  padding: 0 45px;
  position: relative;
  max-width: 960px;
  margin: 0 auto 144px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#quality-heading {
  margin-bottom: 96px;
}
#quality-heading-title {
  margin-bottom: 32px;
}
#quality-heading-subtitle {
  text-align: center;
}

#qualities {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.quality {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.quality:not(:last-child) {
  margin-right: 44px;
}
.quality-icon img {
  width: 65px;
  height: auto;
  margin-right: 24px;
}

/*Benefits section */

#benefits-section {
  padding: 0 45px;
  position: relative;
  max-width: 1236px;
  margin: 0 auto 144px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

.benefit {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.benefit:not(:last-child) {
  margin-bottom: 144px;
}

.benefit-img {
  display: flex;
  align-items: center;
  justify-content: center;
}

.benefit-img img {
  height: 550px;
  width: 550px;
  border-radius: 1000px;
}

.benefit-content {
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  text-align: left;
}

.benefit-title {
  margin-bottom: 32px;
}

.benefit-text {
  margin-bottom: 48px;
}

.benefit-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  text-decoration: none;
  color: #0294ff;
  font-weight: 500;
  font-size: 16px;
  line-height: 13px;
}

.benefit-link-icon {
  margin-left: 18px;
  transition: 0.2s ease-in;
}

.benefit-link:hover .benefit-link-icon {
  transition: 0.2s ease-out;
  margin-left: 22px;
}

/*Demo Section */

#demo-section {
  padding: 0 45px;
  position: relative;
  max-width: 960px;
  margin: 0 auto 144px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#demo-heading {
  margin-bottom: 96px;
}
#demo-heading-title {
  margin-bottom: 32px;
}
#demo-heading-subtitle {
  text-align: center;
}

#demo-img img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 60px 0 rgb(133, 149, 168, 0.3);
  transition: 0.2s ease-out;
}
#demo-img img:hover {
  transform: scale(1.02);
  transition: 0.2s ease-in;
}

.preview-background {
  display: none;
}

.previewBackgroundActive {
  display: block;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9000;
  background-color: #00006d;
  opacity: 0.5;
}

.preview {
  border-radius: 10px;
  position: fixed;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10000;
  max-width: 1300px;
  height: auto;
  transition: 0.2s ease-in;
}

@media screen and (max-width: 1200px) {
  /*Centered Mobile Mode */

  /*Landing section */
  #landing-page {
    flex-direction: column;
    width: 100%;
    padding: 0 45px;
  }

  #landing-page-left {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-width: 704px;
    margin: 0 auto 100px auto;
  }

  .title {
    text-align: center;
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

  /*benefits section */
  .benefit {
    flex-direction: column;
  }
  #benefit-2 {
    flex-direction: column-reverse;
  }

  .benefit-img {
    margin: 0 auto 72px auto;
  }

  .benefit-content {
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }

  .benefit-title {
    margin-bottom: 32px;
  }

  .benefit-text {
    margin-bottom: 48px;
    text-align: center;
  }

  #qualities {
    flex-wrap: wrap;
    justify-content: space-evenly;
    max-width: 700px;
  }
  .quality {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }
  .quality:last-child {
    margin-top: 48px;
  }
}

@media screen and (max-width: 700px) {
  .quality {
    margin: 20px 0;
  }
  #qualities {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 285px;
  }

  .quality:last-child {
    margin: 20px 0;
  }
}

@media screen and (max-width: 600px) {
  /*Centered Mobile Mode */
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
  .benefit-img img {
    width: 100%;
    height: auto;
  }
  .benefit-title {
    margin-bottom: 32px;
  }

  .benefit-text {
    margin-bottom: 48px;
    line-height: 2;
  }
}
</style>
