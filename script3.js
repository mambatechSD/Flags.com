const player = document.getElementById("player");
const mybutton = document.getElementById("mybutton");
const result = document.getElementById("result");


const res = ["GREEN WINS!", "RED WINS!", "DRAW/TIE WINS!","Place Your Bet NOW!!"];
const min = 1;
const max = 10;

let randomNum;

const opponent = document.getElementById("opponent");
const mini = 1;
const maxi = 10;
let randomNum2;

//balance
var bala = 100;
let bal = document.getElementById("bal");


//chosing
let choice = document.getElementById('choice');
let chosen = ["RED","GREEN","DRAW","RED,GREEN OR DRAW"];
let loads = ["READY?"," 3s 2 GO!!"]
let score;
let fund = ["stake higher than balance!!", " "];

//playing
function roll(){
    randomNum = Math.floor(Math.random() * max)+ min;
    player.textContent = randomNum;

    randomNum2 = Math.floor(Math.random() * max)+ min;
    opponent.textContent = randomNum2;

    if(randomNum > randomNum2){
        result.textContent = res[1];
        setTimeout('ready()', 3000);
        setTimeout('ready2()', 9000);
        setTimeout('ready3()', 12000);
    }else if(randomNum < randomNum2 ){
        result.textContent = res[0];
        setTimeout('ready()', 3000);
        setTimeout('ready2()', 9000);
        setTimeout('ready3()', 12000);
    }else if(randomNum == randomNum2){
        result.textContent = res[2];
        setTimeout('ready()', 3000);
        setTimeout('ready2()', 9000);
        setTimeout('ready3()', 12000);
       }

       //betting conditions or payment terms
        
       let bet = document.getElementById("bet").value
       var wn = bet *1 
       
       if(bet > bala){
        nofunds.textContent = fund[0];
       }else if(randomNum > randomNum2 && score == 1 && bet <= bala && bala > 0 ){
        bal.textContent = bala += wn;
        nofunds.textContent = fund[1]; 
       }else if(randomNum < randomNum2 && score == 2 && bet <= bala && bala > 0 ){
        bal.textContent = bala += wn;
        nofunds.textContent = fund[1];
       }else if(randomNum == randomNum2 && score == 3 && bet <= bala && bala > 0 ){
        bal.textContent = bala += wn * 5;
        nofunds.textContent = fund[1];
       }
       else if(!!score == 1 || !!score == 2 || !!score == 3 || !!score == 4){
        bal.textContent = bala -= bet;
        nofunds.textContent = fund[1];
       }

      


       
}

function balminus(){
    bala == 0;
}

setInterval('roll()', 15000);

function ready(){
    result.textContent = res[3];   
}
function ready2(){
    opponent.textContent = loads[0] ; 
    player.textContent = loads[0];  
}

function ready3(){
    opponent.textContent = loads[1] ; 
    player.textContent = loads[1];  
}


function balance(){
    bal.textContent = bala;
    
   }

//choosing
function red(){
choice.textContent = chosen[0];
 score = 1;
}

function GREEN(){
   choice.textContent = chosen[1];
   score = 2
   }

   function DRAW(){
      choice.textContent = chosen[2];
      score = 3
      }
   function END(){
    bet = document.getElementById("bet").value=0;
    choice.textContent = chosen[3];
      score = 4
   }   
   //stake section
   function plus(){
    bet = document.getElementById("bet").value++;
   }
   function minus(){
    bet = document.getElementById("bet").value-=1;
    if(bet <= 0 ){
        bet = document.getElementById("bet").value=0;  
    }
   }

   function five(){
    bet = document.getElementById("bet").value=5;
      
   } 
   function ten(){
    bet = document.getElementById("bet").value=10;
      
   } 
   function twenty(){
    bet = document.getElementById("bet").value=20;
      
   } 
   function thirty(){
    bet = document.getElementById("bet").value=30;
      
   } 



