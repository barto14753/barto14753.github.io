let tab = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let players = ["O", "X"];
let actual_player = 0;
let running = true;


function have_winner()
{
    console.log("checking");

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

    return false


}

function pressed(id)
{
    if (tab[id-1] === -1 && running)
    {
        element = document.createTextNode(players[actual_player]);
        document.getElementById(id).appendChild(element);
        tab[id-1] = actual_player;
        

        if(have_winner())
        {
            running = false;
            document.getElementById("winner").innerHTML = "Winner: " + players[actual_player];
        }
        else
        {
            document.getElementById("winner").innerHTML = "Move: " + players[actual_player];
        }

        actual_player = (actual_player + 1) % 2;

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

}
