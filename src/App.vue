<template>
  <div class="app" :class="{ no_scroll: this.bodyScroll() }">
    <div id="nav">
      <div id="logo">
        <router-link to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="80.307" height="51.79" viewBox="0 0 150.307 51.79">
  <path id="Union_2" data-name="Union 2" d="M13733.145,8287.763V8280.9c3.429,0,5.042-1.077,6.123-4.065l-9.75-23.364h8.084l5.438,14.989,4.6-14.989h7.838l-8.374,23.759c-2.607,7.4-6.675,10.559-12.96,10.558Q13733.653,8287.788,13733.145,8287.763Zm-67.364-3.37a18.289,18.289,0,0,1-13.067-8.7,21.189,21.189,0,0,1-2.674-8.721,19.275,19.275,0,0,1,6.452-15.745,13.75,13.75,0,0,0,1.435,13.826,2.117,2.117,0,0,0,.405.461,1.587,1.587,0,0,0,1.728.321,1.493,1.493,0,0,0,.946-1.351,2.286,2.286,0,0,0-.219-.89,21.563,21.563,0,0,1,6.321-24.033,17.656,17.656,0,0,1,6.615-3.567,13.748,13.748,0,0,0,2.3,15.451c1.7,1.7,3.727,2.86,5.479,4.481a22.833,22.833,0,0,1,2.054,2.213l-.136.027a13.061,13.061,0,0,1,2.161,3.377l.351.7a16.063,16.063,0,0,1-4.049,17.826,18.61,18.61,0,0,1-12.792,4.534A25.945,25.945,0,0,1,13665.78,8284.393Zm108.562-18.675a12.983,12.983,0,1,1,12.984,12.933A12.838,12.838,0,0,1,13774.342,8265.718Zm7.349,0a5.635,5.635,0,1,0,5.636-5.78A5.494,5.494,0,0,0,13781.69,8265.718Zm-78.138,12.247v-34.291h12.98a11.759,11.759,0,1,1,0,23.513h-5.143s.135,5.476-2.358,8.313a6.9,6.9,0,0,1-5.135,2.48A3.288,3.288,0,0,1,13703.553,8277.965Zm7.838-18.128h5.143a4.416,4.416,0,0,0,0-8.817h-5.143Zm46.783-6.365h7.35v4.356c.98-3.279,4.264-4.849,7.35-4.849v8.33c-3.037-.492-7.35.733-7.35,5.583,0,0,.721,5.274-1.156,8.173s-6.193,2.9-6.193,2.9Z" transform="translate(-13650 -8235.998)" fill="#afff23"/>
</svg>
        </router-link>
      </div>

      <div class="links" v-bind:class="{ nav_open: this.showNav }">
        <div class="links-left">
          <router-link to="/about" class="link highlighted">
            <span @click="closeNav()">Terms of Service</span>
          </router-link>
          <router-link to="/plans" class="link highlighted">
            <span @click="closeNav()">Privacy Policy</span>
          </router-link>
        
        </div>
        <div class="links-right">
          <a href="https://pyro.page.link/q9Ku" target="_blank" id="signup-button">
            <span @click="closeNav()">Download Pyro</span>
          </a>
        </div>
      </div>
      <div
        href="#"
        class="nav-icon"
        @click="openNav()"
        v-bind:class="{ nav_icon_opened: this.showNav }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 191 152"
        >
          <g
            id="Group_43"
            data-name="Group 43"
            transform="translate(-1948 -4244)"
          >
            <rect
              id="Rectangle_56"
              data-name="Rectangle 56"
              width="191"
              height="29"
              rx="14.5"
              transform="translate(1948 4244)"
              fill="#fff"
            />
            <rect
              id="Rectangle_57"
              data-name="Rectangle 57"
              width="148"
              height="29"
              rx="14.5"
              transform="translate(1991 4306)"
              fill="#fff"
            />
            <rect
              id="Rectangle_58"
              data-name="Rectangle 58"
              width="96"
              height="29"
              rx="14.5"
              transform="translate(2043 4367)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
      <div
        class="nav-close-icon"
        @click="closeNav()"
        v-bind:class="{ nav_icon_close_opened: this.showNav }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 173.282 173.282"
        >
          <g
            id="Group_43"
            data-name="Group 43"
            transform="translate(-1956.718 -4482)"
          >
            <rect
              id="Rectangle_59"
              data-name="Rectangle 59"
              width="212.754"
              height="32.303"
              rx="16.151"
              transform="translate(1979.56 4482) rotate(45)"
              fill="#fff"
            />
            <rect
              id="Rectangle_60"
              data-name="Rectangle 60"
              width="212.754"
              height="32.303"
              rx="16.152"
              transform="translate(2130 4504.841) rotate(135)"
              fill="#fff"
            />
          </g>
        </svg>
      </div>
    </div>
    <router-view id="router-view" v-on:event="handleEvent($event)" />

   

    
  </div>
</template>
<script>


export default {
  name: "App",
  components: {
  },
  methods: {
    
    
    
    //Prevent body from being scrollable in certain cases
    bodyScroll() {
      if (this.showNav) {
        return true;
      } 
      return false;
    },
    
    //Open and close Navigation in mobile view
    openNav() {
      this.showNav = true;
      console.log("Nav open");
    },
    closeNav() {
      this.showNav = false;
      console.log("Nav closed");
    },
    

    
    
   
    
  },
  data() {
    return {
      showNav: false,
    };
  }
};

</script>
<style>
* {
  margin: 0;
  padding: 0;
  text-align: left;
  font-family: "Cera Pro";
}
body {
  background-color: #13191F;
}

@font-face {
  font-family: "cera-pro";
  src: url("./assets/fonts/cera-light.otf");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: "cera-pro";
  src: url("./assets/fonts/cera-medium.otf");
  font-style: normal;
  font-weight: 400;
}
@font-face {
  font-family: "cera-pro";
  src: url("./assets/fonts/cera-bold.otf");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "cera-pro";
  src: url("./assets/fonts/cera-black.otf");
  font-style: normal;
  font-weight: 900;
}

.app {
  font-family: cera-pro;
  margin: 0;
  padding: 0;
  color: #fff;
  overflow-x: hidden;
}
#router-view {
  width: 100%;
  height: 100%;
}

.heading {
  font-family: "Cera Pro", serif;
  text-align: center;
  font-size: 90px;
}

.subtitle {
  font-size: 38px;
  line-height: 1.5;
  text-align: center;
}
.no_scroll {
  height: 100vh;
  overflow-y: hidden;
}
.text {
  color: #4c5d77;
  font-weight: 300;
  font-family: "cera-pro";
  font-size: 24px;
  line-height: 1.5;
  text-align: left;
}

.highlighted {
  position: relative;
  cursor: pointer;
}
.highlighted:hover {
  color: #AFFF23;
  transition: 0.2s ease-in-out;
}

.highlighted-reverse {
  color: #AFFF23;
  position: relative;
  cursor: pointer;
}

#nav {
  padding: 45px 45px;
  position: absolute;
  z-index: 10000;
  top: 0;
  right: 0;
  left: 0;
  max-width: 1332px;
  margin: 0 auto 24px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

#logo {
  margin-top: 3px;
}

.nav-icon {
  display: none;
  cursor: pointer;
}

.nav-close-icon {
  display: none;
  cursor: pointer;
}

.links {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 5%;
}

.links-left {
  height: 100%;
  display: flex;
  align-items: center;
}

.links-left a {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  margin: 0 40px;
  transition: 0.1s ease-in;
}

.links-left a:hover {
  color: #AFFF23;
  transition: 0.1s ease-out;
}

.links-left a.router-link-exact-active,
.links-right a.router-link-exact-active {
  color: #AFFF23;
}

.links-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.links-right a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  margin: 0;
}
.links-right a:hover {
  color: #AFFF23;
  transition: 0.1s ease-out;
}
#login-button {
  margin-right: 50px;
  display: flex;
  align-items: center;
}

#login-button svg {
  margin-left: 20px;
}

#signup-button {
  margin: 0;
  background-color: #AFFF23;
  padding: 15px 40px;
  color: #06090C;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  border-radius: 100px;
  cursor: pointer;
}
#signup-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px 0 rgb(175, 255, 35, 0.5);
  transition: 0.2s ease-out;
}
#signup-button a.router-link-exact-active {
  color: #fff;
}



@media screen and (max-width: 1020px) {
  .nav-icon {
    display: block;
  }

  .nav_icon_opened {
    display: none;
  }

  .nav_icon_close_opened {
    display: block;
  }

  .links {
    padding: 45px 45px 80px 45px;
    width: 100vw;
    height: calc(100vh - 100px);
    min-height: 300px;
    position: absolute;
    z-index: 100000;
    box-sizing: border-box;
    top: 120px;
    right: 0;
    transform: translateX(100%);
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    transition: 0.2s ease-in;
    background-color: #21272D;
  }
  .links-left {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: initial;
  }

  .links-left a {
    margin: 40px 0px 40px 0;
    font-size: 30px;
    text-align: left;
    color: #fff;
    font-family: "Cera Pro", serif;
  }

  .links-right {
    width: 100%;
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0;
  }

  .links-right a {
    text-decoration: none;
    width: 100%;
    margin: 50px 0;
    padding: 0;
  }

  .nav_open {
    transform: translateX(0);
    transition: 0.2s ease-out;
  }

  #login-button {
    width: 100%;
    padding: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    margin: 0;
  }

  #login-button a {
    text-align: center;
    display: flex;
    justify-content: center;
  }

  #signup-button {
    width: 100%;
    padding: 18px 0;
    margin: 30px 0;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  #signup-button:hover {
    background-color: #0486e5;
    transform: none;
    box-shadow: none;
  }

  .title {
    font-size: 38px;
    line-height: 1.5;
  }

  .subtitle {
    font-size: 30px;
    line-height: 1.5;
    text-align: left;
  }

  .text {
    color: #4c5d77;
    font-weight: 300;
    font-family: "cera-pro";
    font-size: 22px;
    line-height: 1.5;
    text-align: left;
  }
}

@media screen and (max-width: 600px) {
  #nav {
    padding: 45px 25px;
  }
  .links {
    padding: 45px 25px 60px 25px;
  }
  .title {
    font-size: 38px;
    line-height: 1.5;
  }

  .subtitle {
    font-size: 24px;
    line-height: 1.5;
    text-align: left;
  }

  .text {
    color: #4c5d77;
    font-weight: 300;
    font-family: "cera-pro";
    font-size: 20px;
    line-height: 1.5;
    text-align: left;
  }
  .links-left a {
    margin: 30px 0px 30px 0;
    font-size: 20px;
    text-align: left;
    color: #fff;
    font-family: "Merriweather", serif;
  }
  .popup_signup_wrapper {
    padding: 0px;
  }
  .popup_login_wrapper {
    padding: 0px;
  }
}

@media screen and (max-height: 400px) {
}
</style>
