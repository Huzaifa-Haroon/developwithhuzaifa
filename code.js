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


// custom cursor

const cursor = document.querySelector('.custom-cursor');
const callCursorP = document.querySelector('.call-cursor-for-p');
const callCursorH1 = document.querySelector('.call-cursor-for-h1');

callCursorP.addEventListener('mouseover' , function(){
  cursor.style.transform = 'scale(6)';
})
callCursorP.addEventListener('mouseleave' , function(){
  cursor.style.transform = 'scale(0)';
})
callCursorH1.addEventListener('mouseover' , function(){
  cursor.style.transform = 'scale(6)';
})
callCursorH1.addEventListener('mouseleave' , function(){
  cursor.style.transform = 'scale(0)';
})

document.addEventListener('mousemove' , (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
})
