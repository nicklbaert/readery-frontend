<template>
  <div class="plans-boxes">
    <div class="plan-box" id="plan-student">
      <h3 class="plan-title" id="student-title">Student</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="70.681"
        height="57.83"
        viewBox="0 0 70.681 57.83"
      >
        <path
          id="Icon_metro-school"
          data-name="Icon metro-school"
          d="M16.707,39.133V51.984L39.2,64.257,61.686,51.984V39.133L39.2,51.406ZM39.2,6.427,3.856,25.7,39.2,44.98,68.112,29.205v22.2h6.426V25.7L39.2,6.427Z"
          transform="translate(-3.856 -6.427)"
          fill="#d0dbe8"
        />
      </svg>
      <div class="price-container" id="price-student">
        <h3 class="price" id="price-student">14$</h3>
        <h3 class="price-rate">per month</h3>
      </div>
    </div>
    <div class="plan-box" id="plan-standard">
      <h3 class="plan-title" id="standard-title">Standard</h3>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="83.318"
        height="58.201"
        viewBox="0 0 83.318 58.201"
      >
        <path
          id="Icon_metro-books"
          data-name="Icon metro-books"
          d="M19.547,8.571H5A2.432,2.432,0,0,0,2.571,11V64.347A2.432,2.432,0,0,0,5,66.772h14.55a2.432,2.432,0,0,0,2.425-2.425V11a2.432,2.432,0,0,0-2.425-2.425Zm-2.425,14.55h-9.7v-4.85h9.7v4.85ZM43.8,8.571H29.247A2.432,2.432,0,0,0,26.822,11V64.347a2.432,2.432,0,0,0,2.425,2.425H43.8a2.432,2.432,0,0,0,2.425-2.425V11A2.432,2.432,0,0,0,43.8,8.571Zm-2.425,14.55h-9.7v-4.85h9.7Zm19.18-10.8L47.558,18.868a2.432,2.432,0,0,0-1.074,3.257L68.307,65.438a2.432,2.432,0,0,0,3.257,1.074l12.994-6.547a2.432,2.432,0,0,0,1.074-3.257L63.808,13.4a2.432,2.432,0,0,0-3.257-1.075ZM72.9,64.347a2.425,2.425,0,1,1-2.425-2.425A2.425,2.425,0,0,1,72.9,64.347Z"
          transform="translate(-2.571 -8.571)"
          fill="#d0dbe8"
        />
      </svg>
      <div class="price-container" id="price-standard">
        <h3 class="price" id="price-standard">18$</h3>
        <h3 class="price-rate">per month</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PlansBoxes",
  components: {}
};
</script>

<style scoped>
.plans-boxes {
  padding: 0 15%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
}
.plan-box {
  margin: 5% 1%;
  padding: 20px;
  height: 250px;
  width: 250px;
  min-width: 250px;
  min-height: 250px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 15px 0 rgba(17, 17, 20, 0.1);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
.plan-title {
  color: #40caff;
  font-weight: 500;
  font-size: 20px;
}
.price {
  font-size: 30px;
  font-weight: 500;
}
.price-rate {
  margin-top: 5px;
  text-decoration: none;
  color: #d0dbe8;
  font-weight: 400;
  font-size: 14px;
}
</style>
