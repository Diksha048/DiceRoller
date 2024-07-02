/* JS CODE*/

const diceimg = document.getElementById("dice");

function diceroll()
{
    const max = 7
    const min = 1

    const randomnumber = Math.floor(Math.random() * (max - min)) + min;

    if(randomnumber == 1)
        {
            diceimg.src = "./img/1.png";
        }
    else if (randomnumber == 2)  
        {
            diceimg.src = "./img/2.png";
        }
        else if (randomnumber == 3)  
            {
                diceimg.src = "./img/3.png";
            }  
        else if (randomnumber == 4)  
            {
                diceimg.src = "./img/4.png";
            }  
            else if (randomnumber == 5)  
                {
                    diceimg.src = "./img/5.png";
                }  
            else
                {
                    diceimg.src = "./img/6.png";
                }
}