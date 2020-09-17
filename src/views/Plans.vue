<template>
  <div class="plans">
    <div id="heading-section">
      <div id="plans-heading">
        <h1 id="plans-heading-title" class="heading subtitle">Explore our pricing</h1>
      </div>
      <div id="plans-heading-subtitle" class="text">A small investment with unlimited possible gains</div>
    </div>
    <PlansBoxes id="plans" />

    <div id="benefits-section">
      <div class="benefit">
        <div class="benefit-img" id="benefit-img-1"></div>
        <div class="benefit-content">
          <h1 class="heading subtitle benefit-title">Student Discounts</h1>
          <h3
            class="text benefit-text"
          >You are a student and currently enrolled in an educational institution? Check out our offer for students.</h3>
          <router-link to="/students" class="benefit-link" href="#">
            Explore offers
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
          <h1 class="heading subtitle benefit-title">Cancel at any time</h1>
          <h3
            class="text benefit-text"
          >Our flexible pricing model allows you to cancel your subscription at any time.</h3>
          <router-link to="/terms" class="benefit-link" href="#">
            Read terms
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
        <div class="benefit-img" id="benefit-img-2"></div>
      </div>
    </div>

    <SignUpCTA />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import PlansBoxes from "../components/plans-boxes.vue";
import SignUpCTA from "../components/signup-cta.vue";

export default {
  name: "Plans",
  components: {
    PlansBoxes,
    Footer,
    SignUpCTA
  }
};
</script>

<style scoped>
.plans {
  height: 100%;
  width: 100%;
}
#heading-section {
  padding: 0px 45px 90px 45px;
  position: relative;
  max-width: 960px;
  margin: 0 auto 22px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#plans-heading {
  margin-bottom: 30px;
}
#plans-heading-title {
  margin-bottom: 0px;
}
#plans-heading-subtitle {
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
  height: 550px;
  width: 550px;
  border-radius: 1000px;
  background-size: 130%;
  background-position-x: center;
}
#benefit-img-1 {
  background-image: url("../assets/img-new/pricing/student.png");
}
#benefit-img-2 {
  background-image: url("../assets/img-new/pricing/cancel.png");
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

@media screen and (max-width: 1200px) {
  /*Centered Mobile Mode */

  /*Landing section */
  .title {
    text-align: center;
  }

  .subtitle {
    text-align: center;
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
}

</style>
