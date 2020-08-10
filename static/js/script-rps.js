let tab = ["https://img.icons8.com/emoji/180/000000/rock-emoji.png", "https://img.icons8.com/doodle/180/000000/toilet-paper--v1.png", "https://img.icons8.com/color/180/000000/scissors.png"];
let running = True

function result(humanChoice, botChoice)
{
    if (humanChoice == botChoice)
    {
        return 0;
    }
    else if ((humanChoice == 0 && botChoice == 2) || (humanChoice == 1 && botChoice == 0) || (humanChoice == 2 && botChoice == 1))
    {
        return 1;
    }
    else
    {
        return -1;
    }

    
}

function showResult(humanChoice, to_print, botChoice)
{

    document.getElementById("text").innerHTML = to_print;
    document.getElementById("humanChoice").innerHTML = "";
    document.getElementById("botChoice").innerHTML = "";

    let humanImg = document.getElementById(humanChoice).cloneNode(true);
    let botImg = document.getElementById(botChoice).cloneNode(true);

    document.getElementById("humanChoice").appendChild(humanImg);
    document.getElementById("botChoice").appendChild(botImg);

    
}

function game(humanChoice)
{
    botChoice = Math.floor(Math.random()*3);
    console.log(botChoice);

    let res = result(humanChoice, botChoice);
    let to_print = "";

    if (res == -1)
    {
        to_print = "You lost";
    }
    else if (res == 0)
    {
        to_print = "Tie";
    }
    else
    {
        to_print = "You won";
    }
    showResult(humanChoice, to_print, botChoice);

}