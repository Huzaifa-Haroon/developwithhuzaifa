// faq script 

// questions
let question_1 = document.querySelector('.question-1');
let question_2 = document.querySelector('.question-2');
let question_3 = document.querySelector('.question-3');

// answers
let answer_1 = document.querySelector('.answer-1');
let answer_2 = document.querySelector('.answer-2');
let answer_3 = document.querySelector('.answer-3');

question_1.addEventListener('click', function(){
  $(answer_1).slideToggle();
  // to hide other aswers
  $(answer_2).slideUp();
  $(answer_3).slideUp();
  // slide down 

})
question_2.addEventListener('click', function(){
  $(answer_2).slideToggle();
   // to hide other aswers
   $(answer_1).slideUp();
   $(answer_3).slideUp();
})
question_3.addEventListener('click', function(){
  $(answer_3).slideToggle();
   // to hide other aswers
   $(answer_2).slideUp();
   $(answer_1).slideUp();
})
