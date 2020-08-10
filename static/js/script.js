let tab = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let players = ["O", "X"];
let actual_player = 0;
let running = true;


function show_winner(id1, id2, id3)
{
    console.log(id1+1, id2+1, id3+1);
    document.getElementById(id1+1).style.color = "red";
    document.getElementById(id2+1).style.color = "red";
    document.getElementById(id3+1).style.color = "red";
}

function bot_move()
{
    let chosen = Math.floor(Math.random()*9);
    while (tab[chosen] != -1)
    {
        chosen++;
        chosen = chosen % 9;
    }
    element = document.createTextNode("X");
    document.getElementById(chosen+1).appendChild(element);
    tab[chosen] = 1;

}

function have_winner()
{
    for(let i=0; i<3; i++)
    {
        if (tab[i] != -1 && tab[i] == tab[i+3] && tab[i+3] == tab[i+6])
        {
            show_winner(i, i+3, i+6);
            return true;
        }
        else if (tab[3*i] != -1 && tab[3*i] == tab[3*i + 1] && tab[3*i + 1] == tab[3*i + 2])
        {
            show_winner(3*i, 3*i+1, 3*i+2);
            return true;
        }
    }
    if (tab[0] != -1 && tab[0] == tab[4] && tab[4] == tab[8])
    {
        show_winner(0, 4, 8);
        return true;
    }
    else if (tab[2] != -1 && tab[2] == tab[4] && tab[4] == tab[6])
    {
        show_winner(2, 4, 6);
        return true;
    }

    return false;


}

function tie()
{
    for (let i=0; i<9; i++)
    {
        if (tab[i] == -1)
        {
            return false;
        }
    }
    return true;
}

function pressed(id)
{
    console.log("Running", running);
    if (tab[id-1] === -1 && running)
    {
        element = document.createTextNode("O");
        document.getElementById(id).appendChild(element);
        tab[id-1] = 0;
        

        if(have_winner())
        {
            running = false;
            document.getElementById("winner").innerHTML = "Winner: You";
            return;
        }
        else if (tie())
        {
            running = false;
            document.getElementById("winner").innerHTML = "Tie";
            return;
        }
        else
        {
            document.getElementById("winner").innerHTML = "Move: Bot";
        }

        bot_move();
        setTimeout(() => {  bot_move; }, 2000);

        if(have_winner())
        {
            running = false;
            document.getElementById("winner").innerHTML = "Winner: Bot";
        }
        else if (tie())
        {
            running = false;
            document.getElementById("winner").innerHTML = "Tie";
        }
        else
        {
            document.getElementById("winner").innerHTML = "Move: You";
        }

    }
}

function reset_square(id)
{
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).style.color = "white";
}

function restart()
{
    running = true
    
    for (let i=0; i<9; i++)
    {
        tab[i] = -1;
        reset_square(i+1);
    }
    document.getElementById("winner").innerHTML = "Move: O";

}

function to_rps()
{
    window.location.href = "https://barto14753.github.io/rps";
}
