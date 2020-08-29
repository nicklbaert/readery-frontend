<template>
  <div class="plans-boxes-selectable">
    <div
      class="plan-box"
      v-for="(plan,index) in plans"
      :key="index"
      @click="handleSelectedPlan(plan)"
      v-bind:class="{selected: (selectedPlan === plan)}"
    >
      <h3 class="plan-title">{{ plan.name }}</h3>
      <img :src="getIconUrl(plan)" />
      <div class="price-container">
        <h3 class="price">{{ plan.price }}$</h3>
        <h3 class="price-rate">per month</h3>
      </div>
    </div>
  </div>
</template>

<script>
const school_icon_white = require("../assets/images/icons/school-icon-white.png");
const school_icon_grey = require("../assets/images/icons/school-icon-grey.png");
const books_icon_white = require("../assets/images/icons/books-icon-white.png");
const books_icon_grey = require("../assets/images/icons/books-icon-grey.png");

export default {
  name: "PlansBoxesSelectable",
  components: {},
  methods: {
    getIconUrl(plan) {
      if (plan.name === "Student") {
        if (this.selectedPlan === plan) {
          return school_icon_white;
        } else {
          return school_icon_grey;
        }
      } else {
        if (this.selectedPlan === plan) {
          return books_icon_white;
        } else {
          return books_icon_grey;
        }
      }
    },
    handleSelectedPlan(plan) {
      this.selectedPlan = plan;
      this.$emit("changeSelectedPlan", plan);
    }
  },
  data() {
    return {
      selectedPlan: null,
      plans: [
        {
          name: "Student",
          price: "14",
          plan_id: 1,
          icon: "../assets/images/icons/school-icon-blue.png"
        },
        {
          name: "Standard",
          price: "18",
          plan_id: 2,
          icon: "../assets/images/icons/books-icon-blue.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
.plans-boxes-selectable {
  margin-top: 5%;
  padding: 0 15%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.plan-box {
  margin: 0 1% 5% 1%;
  padding: 20px;
  height: 250px;
  width: 250px;
  min-width: 250px;
  min-height: 250px;
  border-radius: 10px;
  background-color: #f1f6fc;
  /* box-shadow: 0 4px 15px 0 rgba(17, 17, 20, 0.1); */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  transition: 0.2s ease-out;
  cursor: pointer;
}
.plan-box img {
  width: 100px;
}
.selected {
  transform: scale(1.03);
  background-color: #40caff;
  box-shadow: 0 4px 15px 0 rgb(70, 204, 255, 0.8);
  transition: 0.2s ease-out;
}
.selected .plan-title {
  color: #fff;
  font-weight: 500;
  font-size: 20px;
}
.selected .price {
  color: #fff;
}
.selected .price-rate {
  color: #fff;
}
.plan-title {
  color: #40caff;
  font-weight: 500;
  font-size: 20px;
}
.price {
  font-size: 30px;
  font-weight: 500;
  color: #8595a8;
}
.price-rate {
  margin-top: 5px;
  text-decoration: none;
  color: #8595a8;
  font-weight: 400;
  font-size: 14px;
}
</style>
