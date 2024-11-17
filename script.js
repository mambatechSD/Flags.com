const player = document.getElementById("player");
const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");

var inc = 2;

const res = ["GREEN WINS!", "RED WINS!", "DRAW/TIE WINS!"];
const min = 1;
const max = 10;

let randomNum;

const opponent = document.getElementById("opponent");
const mini = 1;
const maxi = 10;
let randomNum2;




var bala = 100;
let bal = document.getElementById("bal");

//funds issue
let nofunds = document.getElementById("nofunds");

 function roll(){
    randomNum = Math.floor(Math.random() * max)+ min;
    player.textContent = randomNum;

    randomNum2 = Math.floor(Math.random() * max)+ min;
    opponent.textContent = randomNum2;

    if (randomNum > randomNum2 && choice == chosen[0] ){
        
       result.textContent = res[1];
       }else if(randomNum < randomNum2){
        result.textContent = res[0];
       }else if(randomNum == randomNum2){
        result.textContent = res[2];
       }

       let bet = document.getElementById("bet").value;
       var multiplier = 2;
       var wn = bet *1 

       if (randomNum < randomNum2 && bala > 0){
          bal.textContent = bala += wn;
       }else if(randomNum > randomNum2 && bala > 0){
        bal.textContent = bala -= bet;     
       }else if(randomNum == randomNum2){
         result.textContent = res[2];
        }
       else{
         var funds= "STAKE NOT ENOUGH ";
         nofunds.textContent = funds;

       }

       
}
      

function balance(){
    
    
    bal.textContent = bala;
    
   }

   setInterval('roll()', 5000);

   //buttons for new development
let choice = document.getElementById('choice');
let chosen = ["RED","GREEN","DRAW"];

function red(){
choice.textContent = chosen[0];
}

function GREEN(){
   choice.textContent = chosen[1];
   }

   function DRAW(){
      choice.textContent = chosen[2];
      }



   


   
   

   
    













