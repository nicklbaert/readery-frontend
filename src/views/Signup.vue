<template>
  <div class="signup">
    <h1 id="heading">Let's set you up</h1>
    <h1 id="subheading">To start off, please select up to 10 topics that interest you</h1>
    <div id="topics-wrapper">
      <div id="topic-grid">
        <div
          class="topic-wrapper"
          v-for="(item, index) in items"
          :key="index"
          @click="handleSelectedItem(item)"
          v-bind:class="{selected: selectedItems.includes(item)}"
        >
          <span class="topic">{{item}}</span>
        </div>
      </div>
    </div>
    <h1 id="heading">On to the next step</h1>
    <h1 id="subheading">Please choose a plan</h1>
    <PlansBoxesSelectable />

    <h1 id="heading">We're almost done</h1>
    <h1 id="subheading">Fill out this form and you are ready to go</h1>

    <SignupForm />

    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import PlansBoxesSelectable from "../components/plans-boxes-selectable.vue";
import SignupForm from "../components/signup-form.vue";
export default {
  name: "Home",
  components: {
    Footer,
    PlansBoxesSelectable,
    SignupForm
  },
  data() {
    return {
      selectedItems: [],
      items: [
        "Business",
        "Finance",
        "Technology",
        "Sports",
        "Travel",
        "Sci - Fi",
        "Entepreneurship",
        "Psychology",
        "Physics",
        "Health",
        "Cooking",
        "Biology",
        "Chemistry",
        "Biographies",
        "Humor",
        "Motivational"
      ]
    };
  },
  methods: {
    handleSelectedItem(item) {
      if (this.selectedItems.includes(item)) {
        this.selectedItems = this.removeItemOnce(this.selectedItems, item);
        console.log(this.selectedItems.toString());
      } else {
        this.selectedItems.push(item);
        console.log(this.selectedItems.toString());
      }
    },
    removeItemOnce(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    },

    removeItemAll(arr, value) {
      var i = 0;
      while (i < arr.length) {
        if (arr[i] === value) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      return arr;
    }
  }
};
</script>

<style scoped>
.signup {
  height: 100%;
  width: 100%;
}
#heading {
  margin-top: 5%;
  font-size: 50px;
}
#subheading {
  margin-top: 10px;
  font-size: 25px;
  color: #8595a8;
  font-weight: 300;
}
#topics-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#topic-grid {
  margin: 5% 0 5% 0;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.topic-wrapper {
  /* flex: 1; */
  padding: 2% 5%;
  margin: 2%;
  border-radius: 5px;
  background-color: #f1f6fc;
  transition: 0.1s ease-out;
  cursor: pointer;
}
.topic-wrapper:hover {
  transform: scale(1.08);
  transition: 0.1s ease-out;
  background-color: rgb(70, 204, 255);
  color: white;
}

.selected {
  transform: scale(1.08);
  background-color: rgb(70, 204, 255);
  color: white;
}

@media screen and (max-width: 1000px) {
  .topic-wrapper {
    width: 100px;
  }
  #topic-grid {
    width: 100%;
  }
  #heading {
    margin-top: 15%;
  }
}
</style>
