<template>
  <div id="signup-cta-wrapper">
    <div id="signup-cta">
      <div id="signup-cta-content">
        <h1 class="heading subtitle cta-title">
          Sign up and get your 
          personal reading plan for free
        </h1>
        <h3
          class="text cta-text"
        >Take action now and sign up to claim our offer for early supporters.</h3>
      </div>
      <div id="signup-cta-button">
        <a id="get-started" class="action-button" @click="handleSignupClick()">
          <svg
            class="get-started-icon"
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
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup-CTA",
  components: {},
  methods:{
    handleSignupClick(){
      console.log("click");
      this.$emit("event", "get_started_click");
    }
  },
};
</script>

<style scoped>
#signup-cta-wrapper {
  padding: 0 45px;
  position: relative;
  max-width: 1332px;
  margin: 0 auto 96px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
#signup-cta {
  padding: 104px 96px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 56px;
  background-image: url("../assets/img-new/pattern.svg");
  background-position-x: 50%;
  background-position-y: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-color: #e0f7ff;
}

#signup-cta-content {
  max-width: 400px;
}

.cta-title {
  margin-bottom: 32px;
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

@media screen and (max-width: 1370px) {
  /*Slightly less padding */
#signup-cta {
  padding: 64px 48px;
}
  
}

@media screen and (max-width: 1020px) {
  /*Centered Mobile Mode */

  .subtitle {
    text-align: center;
  }

  #signup-cta-wrapper {
    padding: 0 45px;
    position: relative;
    max-width: 1332px;
    margin: 0 auto 144px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
  }
  #signup-cta {
    padding: 0px 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    background-image: none;
    background-color: initial;
  }

  .cta-title {
    margin-bottom: 48px;
  }
  .cta-text {
    text-align: center;
    margin-bottom: 48px;
  }
}

@media screen and (max-width: 600px) {
  .subtitle {
    text-align: center;
  }

  #signup-cta-wrapper {
    padding: 0 45px;
    width: 100%;
  }
  #signup-cta {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    background-image: none;
    background-color: initial;
    min-width: unset;
  }
  #signup-cta-button{
    width: 100%;
  }
  #get-started {

  width: 100%;
  height: 50px;
  margin: 0;
  
}
}
</style>
