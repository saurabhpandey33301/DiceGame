let player1 = "player1";
let player2 = "player2";

function editNames(){
    player1 = prompt("change Player1 Name");
    player2 = prompt("change Player2 Name");
    if(player1.lenght<1||player2.length<1){
        alert("please enter a valid name!");
        return;
    }
    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;

}
function DiceRoll(){
      let diceNum1 = document.querySelector(".img1");
      let diceNum2 = document.querySelector(".img2");

      diceNum1.setAttribute("src","image/dice.gif");
      diceNum2.setAttribute("src","image/dice.gif");

      let result = document.querySelector('h1');
      setTimeout( () => {
        let randomNum1 = Math.floor(Math.random()*6)+1;
        let randomNum2 = Math.floor(Math.random()*6)+1;
        
        diceNum1.setAttribute("src",'image/dice'+randomNum1+'.png');
        diceNum2.setAttribute("src",'image/dice'+randomNum2+'.png');
        
        if(randomNum1==randomNum2){
            result.innerHTML = "Draw!";
        }
        else if(randomNum1<randomNum2){
            result.innerHTML = (player2+"WINS!");
        }
        else{
            result.innerHTML = (player1+"WINS!");
        }
    
    },2500);

 }