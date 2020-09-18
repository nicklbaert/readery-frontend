<template>
  <div class="faq">
    <div id="heading-section">
      <div id="plans-heading">
        <h1 id="plans-heading-title" class="heading subtitle">Frequently Asked Questions</h1>
      </div>
      <div id="plans-heading-subtitle" class="text">Find out what other people wanted to know</div>
    </div>

    <div id="questions-section">
      <div
        class="question"
        v-for="(question, index) in questions"
        :key="index"
      >
        <div class="question-main" 
        :class="{ openQuestionMain: (openQuestions.includes(question))}"
        @click="toggleQuestion(question)"
        >
          <h1 class="question-title">{{questions[index].question}}</h1>
          <svg
            class="question-arrow"
            :class="{ openQuestionArrow: (openQuestions.includes(question))}"
            xmlns="http://www.w3.org/2000/svg"
            width="10"
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
        </div>
        <div
          class="question-content"
          :class="{ openQuestionContent: (openQuestions.includes(question))}"
        >{{questions[index].answer}}</div>
      </div>
    </div>

    <SignUpCTA />
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
import SignUpCTA from "../components/signup-cta.vue";

export default {
  name: "FAQ",
  components: {
    Footer,
    SignUpCTA
  },
  methods: {
    toggleQuestion(question) {
      if (this.openQuestions.includes(question)) {
        this.openQuestions = this.removeItem(this.openQuestions, question);
        console.log(this.openQuestions.toString());
      } else {
        this.openQuestions.push(question);
        console.log(this.openQuestions.toString());
      }
    },
    removeItem(arr, value) {
      var index = arr.indexOf(value);
      if (index > -1) {
        arr.splice(index, 1);
      }
      return arr;
    }
  },
  data() {
    return {
      openQuestions: [],
      questions: [
        {
          question: "1. Is it possible to skip months?",
          answer:
            "Absolutely. If you are feeling like you want to take a break or are just a slow reader, you can skip a month with our online configuration tool."
        },
        {
          question: "2. What if I already read a book from my plan?",
          answer:
            "We offer various configuration options to customize your experience. One of them involves generating a new best pick for the month with just one click. Just tap on the three dots at the top right corner of this months pick and select 'Get other book'."
        },
        {
          question: "3. Do you offer discounts for students?",
          answer:
            "Totally! We offer discounts of up to 10% to students or people enrolled in an educational institution. For more information, please go to the pricing section of our website."
        },
        {
          question: "4. Where can I get my free reading plan?",
          answer:
            "To get your personalized reading plan, you just have to sign up, select your interests and you're ready to go."
        },
        {
          question: "5. Why should I buy books from you instead of just doing it the old-fashioned way?",
          answer:
            "Surely, scrolling through books on Amazon to find your next read does the job for most people. However, if you want to get ahead of your peers, grow your knowledge and develop your personality, you need to approach your book choice more carefully. This is where readery comes in. We plot out your reading journey based on recommendations of experts and send you a new book each month, so that you can focus on the reading."
        }
      ]
    };
  }
};
</script>

<style scoped>
.faq {
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
  text-align: center;
}

/*Questions section */
#questions-section {
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

.question {
  width: 100%;
  padding: 30px 0 0px 0;
  border-bottom: 1px solid #D0DBE8;
}

.question:first-child {
  border-top: 1px solid #D0DBE8;
}

.question-main {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 30px;
  cursor: pointer;
}

.question-title {
  font-size: 20px;
  font-weight: 400;
  line-height: 1.5;
  max-width: 700px;
}
.question-arrow {
    width: 20px;
    margin: 6px 0 0 20px;
  transform: rotate(90deg);
  transition: 0.3s ease-out;
}
.openQuestionArrow{
    transform: rotate(270deg);
    transition: 0.3s ease-out;
}
.question-content {
  color: #4c5d77;
  font-weight: 300;
  line-height: 1.5;
  box-sizing:inherit;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s, overflow 0s, margin-bottom 1s;
}

.openQuestionContent {
  max-height: 250px;
  margin-bottom: 30px;
  overflow: auto;
  transition: max-height 0.7s, overflow 0.7s 0.7s, margin-bottom 0.5s;
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
}

@media screen and (max-width: 600px) {
  /*Centered Mobile Mode */
  .question-title {
  font-size: 16px;
}
#questions-section {
  padding: 0px 24px 90px 24px;
}
}
</style>
