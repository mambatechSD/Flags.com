const letter = document.getElementById('score');
const test = document.getElementById('test');
var score = 0;
var min =1;
var max = 20;
var num = Math.floor(Math.random()*max)+ min; 



function hey(){
    score +=Math.floor(1);
    letter.innerHTML = score;
   

    if(score === num){
         
        test.innerHTML = "it works";
        clearInterval(count)
        letter.innerHTML = score = 0;
        setInterval('hey()',1000);
        }
      
}
count = setInterval("hey()", 1000);




console.log(num);
var count;

