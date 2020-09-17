<template>
  <div id="app">
    <div id="nav">
      <div id="logo">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="162.851"
            height="26"
            viewBox="0 0 162.851 28.497"
            id="logo"
          >
            <g id="Gruppe_182" data-name="Gruppe 182" transform="translate(-261.643 -84.971)">
              <path
                id="Pfad_1920"
                data-name="Pfad 1920"
                d="M13.2,3.135h5.414l-4.69-8.09a7.262,7.262,0,0,0,4.061-6.39A7.537,7.537,0,0,0,10.434-18.9H1.62V3.135H6.656v-7.24H9.049ZM6.656-14.178h3.777a2.668,2.668,0,0,1,2.518,2.833,2.668,2.668,0,0,1-2.518,2.833H6.656Zm17.6,11.332H35.427a9.15,9.15,0,0,0,.189-1.889,7.947,7.947,0,0,0-8-8.31,8.07,8.07,0,0,0-8.373,8.31c0,4.69,3.337,8.31,8.719,8.31A7.987,7.987,0,0,0,34.829.333L31.052-1.839a4.11,4.11,0,0,1-3.022,1.2C26.3-.643,24.851-1.209,24.253-2.846Zm-.094-3.526a3.249,3.249,0,0,1,3.431-2.487,3.24,3.24,0,0,1,3.337,2.487Zm25.4-6.233v1.479a5.912,5.912,0,0,0-4.69-1.92c-4.124,0-7.523,3.62-7.523,8.31s3.4,8.31,7.523,8.31a5.912,5.912,0,0,0,4.69-1.92V3.135h4.722V-12.6ZM45.815-.895a3.594,3.594,0,0,1-3.746-3.84,3.594,3.594,0,0,1,3.746-3.84,3.594,3.594,0,0,1,3.746,3.84A3.594,3.594,0,0,1,45.815-.895ZM69.172-18.9v7.775a5.912,5.912,0,0,0-4.69-1.92c-4.124,0-7.523,3.62-7.523,8.31s3.4,8.31,7.523,8.31a5.912,5.912,0,0,0,4.69-1.92V3.135h4.722V-18.9ZM65.426-.895a3.594,3.594,0,0,1-3.746-3.84,3.594,3.594,0,0,1,3.746-3.84,3.594,3.594,0,0,1,3.746,3.84A3.594,3.594,0,0,1,65.426-.895ZM81.574-2.846H92.749a9.15,9.15,0,0,0,.189-1.889,7.947,7.947,0,0,0-8-8.31,8.07,8.07,0,0,0-8.373,8.31c0,4.69,3.337,8.31,8.719,8.31A7.987,7.987,0,0,0,92.151.333L88.373-1.839a4.11,4.11,0,0,1-3.022,1.2C83.62-.643,82.172-1.209,81.574-2.846ZM81.48-6.372a3.249,3.249,0,0,1,3.431-2.487,3.24,3.24,0,0,1,3.337,2.487ZM100.335-9.8v-2.8H95.613V3.135h4.722V-3.979c0-3.116,2.77-3.9,4.722-3.588v-5.351A4.727,4.727,0,0,0,100.335-9.8Zm17.155-2.8-2.959,9.632L111.037-12.6h-5.194l6.264,15.015c-.693,1.92-1.731,2.613-3.935,2.613V9.43c4.407.22,7.208-1.763,8.971-6.768L122.527-12.6Z"
                transform="translate(301.967 104.021)"
                fill="#00006D"
              />
              <path
                id="Icon_metro-books"
                data-name="Icon metro-books"
                d="M9.056,8.571H3.5a.929.929,0,0,0-.926.926v20.38A.929.929,0,0,0,3.5,30.8H9.056a.929.929,0,0,0,.926-.926V9.5a.929.929,0,0,0-.926-.926Zm9.264,0H12.762a.929.929,0,0,0-.926.926v20.38a.929.929,0,0,0,.926.926H18.32a.929.929,0,0,0,.926-.926V9.5a.929.929,0,0,0-.926-.926ZM24.72,10l-4.964,2.5a.929.929,0,0,0-.41,1.244l8.337,16.546a.929.929,0,0,0,1.244.41l4.964-2.5a.929.929,0,0,0,.41-1.244L25.964,10.414A.929.929,0,0,0,24.72,10Zm4.716,19.874a.926.926,0,1,1-.926-.926A.926.926,0,0,1,29.436,29.878Z"
                transform="translate(259.071 76.4)"
                fill="#0294ff"
              />
            </g>
          </svg>
        </router-link>
      </div>

      <div class="links" v-bind:class="{nav_open: this.showNav}">
        <div class="links-left">
          <router-link @click="closeNav()" to="/about" class="link highlighted">How it works</router-link>
          <router-link @click="closeNav()" to="/plans" class="link highlighted">Pricing</router-link>
          <router-link @click="closeNav()" to="/faq" class="link highlighted">FAQ</router-link>
        </div>
        <div class="links-right">
          <a href="#" @click="closeNav()" id="login-button" class="link">
            <span class="highlighted">Login</span>
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
                fill="#0294ff"
              />
            </svg>
          </a>
          <a href="#" @click="closeNav()" id="signup-button">Early Access</a>
        </div>
      </div>
      <div
        href="#"
        class="nav-icon"
        @click="openNav()"
        v-bind:class="{nav_icon_opened: this.showNav}"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 191 152">
          <g id="Group_43" data-name="Group 43" transform="translate(-1948 -4244)">
            <rect
              id="Rectangle_56"
              data-name="Rectangle 56"
              width="191"
              height="29"
              rx="14.5"
              transform="translate(1948 4244)"
              fill="#1B1F23"
            />
            <rect
              id="Rectangle_57"
              data-name="Rectangle 57"
              width="148"
              height="29"
              rx="14.5"
              transform="translate(1991 4306)"
              fill="#1B1F23"
            />
            <rect
              id="Rectangle_58"
              data-name="Rectangle 58"
              width="96"
              height="29"
              rx="14.5"
              transform="translate(2043 4367)"
              fill="#1B1F23"
            />
          </g>
        </svg>
      </div>
      <div
        class="nav-close-icon"
        @click="closeNav()"
        v-bind:class="{nav_icon_close_opened: this.showNav}"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 173.282 173.282"
        >
          <g id="Group_43" data-name="Group 43" transform="translate(-1956.718 -4482)">
            <rect
              id="Rectangle_59"
              data-name="Rectangle 59"
              width="212.754"
              height="32.303"
              rx="16.151"
              transform="translate(1979.56 4482) rotate(45)"
              fill="#1b1f23"
            />
            <rect
              id="Rectangle_60"
              data-name="Rectangle 60"
              width="212.754"
              height="32.303"
              rx="16.152"
              transform="translate(2130 4504.841) rotate(135)"
              fill="#1b1f23"
            />
          </g>
        </svg>
      </div>
    </div>
    <router-view id="router-view" v-on:loggedInUser="setUserData($event)" />
  </div>
</template>
<script>
export default {
  name: "App",
  methods: {
    openNav() {
      this.showNav = true;
      console.log("Nav open");
    },
    closeNav() {
      this.showNav = false;
      console.log("Nav closed");
    },
    setUserData(data) {
      this.userData = data;
      console.log("This user is now logged in");
      console.log(data);
    }
  },
  data() {
    return {
      showNav: false,
      userData: null
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  text-align: left;
}
body {
  background-color: #f8fbfd;
  overflow-x: hidden;
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

#app {
  font-family: cera-pro;
  margin: 0;
  padding: 0;
  color: #00006d;
}
#router-view {
  width: 100%;
  height: 100%;
}

.heading {
  font-family: "Merriweather", serif;
}
.title {
  font-size: 52px;
  line-height: 1.5;
}

.subtitle {
  font-size: 38px;
  line-height: 1.5;
  text-align: left;
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
.highlighted::before {
  content: "";
  position: absolute;
  width: 0%;
  height: 1px;
  bottom: -1px;
  background-color: #0294ff;
  transition: all 0.1s ease-in-out 0s;
}
.highlighted:hover::before {
  width: 100%;
  transition: all 0.1s ease-in-out 0s;
}

.highlighted-reverse {
  color: #0294ff;
  position: relative;
  cursor: pointer;
}
.highlighted-reverse::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: -5px;
  left: 0;
  background-color: #0294ff;
  opacity: 1;
  transition: all 0.2s ease-in-out 0s;
}
.highlighted-reverse:hover::before {
  opacity: 0;
  transition: all 0.2s ease-in-out 0s;
}

#nav {
  padding: 45px 45px;
  position: relative;
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
  color: #4c5d77;
  font-size: 16px;
  margin: 0 40px;
  transition: 0.1s ease-in;
}

.links-left a:hover {
  color: #0294ff;
  transition: 0.1s ease-out;
}

.links-left a.router-link-exact-active,
.links-right a.router-link-exact-active {
  color: #0294ff;
}

.links-right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.links-right a {
  text-decoration: none;
  color: #4c5d77;
  font-size: 16px;
  margin: 0;
}
.links-right a:hover {
  color: #0294ff;
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
  background-color: #0294ff;
  padding: 18px 40px;
  color: #fff;
  transition: 0.2s ease-in;
  word-wrap: none;
  overflow-wrap: initial;
  border-radius: 100px;
  cursor: pointer;
}
#signup-button:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 10px 0 rgb(2, 148, 255, 0.5);
  transition: 0.2s ease-out;
}
#signup-button a.router-link-exact-active {
  color: #fff;
}

@media screen and (max-width: 1100px) {
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
    padding: 0 45px 80px 45px;
    width: 100vw;
    height: calc(100vh - 120px);
    position: fixed;
    z-index: 100000;
    box-sizing: border-box;
    top: 120px;
    right: 0;
    transform: translateX(100%);
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    transition: 0.2s ease-in;
    background-color: #f8fbfd;
    /*-webkit-box-shadow: 0px 0px 40px -2px rgba(133, 149, 168, 1);
    -moz-box-shadow: 0px 0px 40px -2px rgba(133, 149, 168, 1);
    box-shadow: 0px 0px 40px -2px rgba(133, 149, 168, 1);*/
  }
  .links-left {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  .links-left a {
    margin: 40px 0px 40px 0;
    font-size: 30px;
    text-align: left;
    color: #00006d;
    font-family: "Merriweather", serif;
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
    padding: 15px 0;
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
    padding: 0 25px 80px 25px;
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

}
</style>
