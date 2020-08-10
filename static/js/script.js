let tab = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let players = ["O", "X"];
let actual_player = 0;
let running = true;


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
            return true;
        }
        else if (tab[3*i] != -1 && tab[3*i] == tab[3*i + 1] && tab[3*i + 1] == tab[3*i + 2])
        {
            return true;
        }
    }
    if (tab[0] != -1 && tab[0] == tab[4] && tab[4] == tab[8])
    {
        return true;
    }
    else if (tab[2] != -1 && tab[2] == tab[4] && tab[4] == tab[6])
    {
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
            console.log("HERE: " + tab[i] + " " + i);
            return false;
        }
    }
    return true;
}

function pressed(id)
{
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

function delete_square(id)
{
    document.getElementById(id).innerHTML = "";
}

function restart()
{
    running = true
    
    for (let i=0; i<9; i++)
    {
        tab[i] = -1;
        delete_square(i+1);
    }
    document.getElementById("winner").innerHTML = "Move: O";
    reset_color();

}

function to_rps()
{
    window.location.href = "https://barto14753.github.io/rps";
}
