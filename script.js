var question=[
   {
      qu:'1. Which type of JavaScript language is ___',
      a:'Object-Oriented',
      b:'Object-Based',
      c:'Assembly-language',
      d:'High-level',
      correct:'b'
   },
   {
      qu:'2. Which one of the following also known as Conditional Expression:',
      a:'Alternative to if-else',
      b:'Switch statement',
      c:'If-then-else statement',
      d:'immediate if',
      correct:'d'
   },
   {
      qu:'3. In JavaScript, what is a block of statement?',
      a:'Conditional block',
      b:'block that combines a number of statements into a single compound statement',
      c:'both conditional block and a single statement',
      d:'block that contains a single statementimmediate',
      correct:'b'
   },
   {
      qu:'4. When interpreter encounters an empty statements, what it will do:',
      a:'Shows a warning',
      b:'Prompts to complete the statement',
      c:'Throws an error',
      d:'Ignores the statements',
      correct:'d'
   },
   {
      qu:'5. The "function" and " var" are known as:',
      a:'Keywords',
      b:'Data types',
      c:'Declaration statements',
      d:'Prototypes',
      correct:'d'
   }

]

var ques=document.getElementById('quest');
var a_text=document.getElementById('a-text')
var b_text=document.getElementById('b-text')
var c_text=document.getElementById('c-text')
var d_text=document.getElementById('d-text');
var winnerTag=document.getElementById('winner-tag');
var quizShowContainer=document.getElementById('quiz-question-container');
var counter,scoreCounter;
counter=0;
scoreCounter=0;

submit();

function submit(){
   ques.style.color='white'
   ques.innerHTML=question[counter].qu;
   a_text.innerHTML=question[counter].a;
   b_text.innerHTML=question[counter].b;
   c_text.innerHTML=question[counter].c;
   d_text.innerHTML=question[counter].d;

}
document.getElementById('submit').addEventListener('click',()=>{
      var falsecount=0;
     for(var i=0;i<document.getElementsByTagName('input').length;i++){
        if(document.getElementsByTagName('input')[i].checked===false){
           falsecount++;
        }
     }
     falsecount===4?ques.style.color='red':checkForAnswer()
     function checkForAnswer(){
      if(document.querySelector('input[type=radio]:checked').value===question[counter].correct){
         scoreCounter++;
      }
      counter++;
      if(counter===question.length){
         console.log(scoreCounter)
         quizShowContainer.style.display='none';
         winnerTag.style.display='block';
         winnerTag.innerHTML='you have scored '+scoreCounter+'/5'
      }
      else
      {
         for(var i=0;i<document.getElementsByTagName('input').length;i++){
            document.getElementsByTagName('input')[i].checked=false
         }
         submit();
      }
     } 
})

