var y = Math.floor(Math.random() * 10 + 1);
var guess = 1;

playername = localStorage.getItem("player_name");

function submit(){
    var x = document.getElementById("guessField").value;
    if(x > 10)
    {
        guess++;
        alert("can you read?");
    }


else if(x == y)
{
    alert("CONGRATS "+playername+" YOU GUESS IT IN "+guess+ " GUESS, TRY HARDER LOL");
guess = 1;
}

else if(x == y & guess == 1)
{
    alert("Wow dam, you're really good, "+playername)
}

else if(x > y)

{
    guess++;
    alert("Too big");
}
else if(x < y)
{
    guess++;
    alert("Too small");

}
}



function playAgain(){
    y = Math.floor(Math.random()* 10+1);
    guess=1;
    document.getElementById("guessField").innerHTML = " ";

    
}