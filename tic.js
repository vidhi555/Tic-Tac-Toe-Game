function myfunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById('b1').value;
    b2=document.getElementById('b2').value;
    b3=document.getElementById('b3').value;
    b4=document.getElementById('b4').value;
    b5=document.getElementById('b5').value;
    b6=document.getElementById('b6').value;
    b7=document.getElementById('b7').value;
    b8=document.getElementById('b8').value;
    b9=document.getElementById('b9').value;
   
    var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
    b1btn=document.getElementById('b1');
    b2btn=document.getElementById('b2');
    b3btn=document.getElementById('b3');
    b4btn=document.getElementById('b4');
    b5btn=document.getElementById('b5');
    b6btn=document.getElementById('b6');
    b7btn=document.getElementById('b7');
    b8btn=document.getElementById('b8');
    b9btn=document.getElementById('b9');

    if((b1 == 'X' || b1 == 'x') && (b2 == 'X' || b2 == 'x') && (b3 == 'X' || b3 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
       
    }
    else if((b4 == 'X' || b4 == 'x') && (b5 == 'X' || b5 == 'x') && (b6 == 'X' || b6 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    else if((b7 == 'X' || b7 == 'x') && (b8 == 'X' || b8 == 'x') && (b9 == 'X' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b1 == 'X' || b1 == 'x') && (b4 == 'X' || b4 == 'x') && (b7 == 'X' || b7 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b7btn.style.color = "red";
        b1btn.style.color = "red";
        b4btn.style.color = "red";

        b8btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b9btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b2 == 'X' || b2 == 'x') && (b5 == 'X' || b5 == 'x') && (b8 == 'X' || b8 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
    }
    else if((b3 == 'X' || b3 == 'x') && (b6 == 'X' || b6 == 'x') && (b9 == 'X' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b8btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b7btn.disabled = true;
    }
    else if((b1 == 'X' || b1 == 'x') && (b5 == 'X' || b5 == 'x') && (b9 == 'X' || b9 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b7btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b3 == 'X' || b3 == 'x') && (b5 == 'X' || b5 == 'x') && (b7 == 'X' || b7 == 'x')){
        document.getElementById('print').innerHTML = "Player X is Winner!!!!👍🏆";
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    // starts O checking-----------------
    else if((b1 == 'O' || b1 == 'o') && (b2 == 'O' || b2 == 'o') && (b3 == 'O' || b3 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b1btn.style.color = "red";
        b2btn.style.color = "red";
        b3btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
       
    }
    else if((b4 == 'O' || b4 == 'o') && (b5 == 'O' || b5 == 'o') && (b6 == 'O' || b6 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b4btn.style.color = "red";
        b5btn.style.color = "red";
        b6btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
        b7btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }
    else if((b7 == 'O' || b7 == 'o') && (b8 == 'O' || b8 == 'o') && (b9 == 'O' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b7btn.style.color = "red";
        b8btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b1 == 'O' || b1 == 'o') && (b4 == 'O' || b4 == 'o') && (b7 == 'O' || b7 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b7btn.style.color = "red";
        b1btn.style.color = "red";
        b4btn.style.color = "red";

        b8btn.disabled = true;
        b5btn.disabled = true;
        b6btn.disabled = true;
        b9btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b2 == 'O' || b2 == 'o') && (b5 == 'O' || b5 == 'o') && (b8 == 'O' || b8 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b2btn.style.color = "red";
        b5btn.style.color = "red";
        b8btn.style.color = "red";

        b1btn.disabled = true;
        b3btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b7btn.disabled = true;
        b9btn.disabled = true;
    }
    else if((b3 == 'O' || b3 == 'o') && (b6 == 'O' || b6 == 'o') && (b9 == 'O' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b3btn.style.color = "red";
        b6btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b5btn.disabled = true;
        b8btn.disabled = true;
        b1btn.disabled = true;
        b2btn.disabled = true;
        b7btn.disabled = true;
    }
    else if((b1 == 'O' || b1 == 'o') && (b5 == 'O' || b5 == 'o') && (b9 == 'O' || b9 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b1btn.style.color = "red";
        b5btn.style.color = "red";
        b9btn.style.color = "red";

        b4btn.disabled = true;
        b7btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b2btn.disabled = true;
        b3btn.disabled = true;
    }
    else if((b3 == 'O' || b3 == 'o') && (b5 == 'O' || b5 == 'o') && (b7 == 'O' || b7 == 'o')){
        document.getElementById('print').innerHTML = "Player O is Winner!!!!👍🏆";
        b3btn.style.color = "red";
        b5btn.style.color = "red";
        b7btn.style.color = "red";

        b1btn.disabled = true;
        b2btn.disabled = true;
        b4btn.disabled = true;
        b6btn.disabled = true;
        b8btn.disabled = true;
        b9btn.disabled = true;
    }

    else if((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')){
            document.getElementById("print").innerHTML = "Match Tie!!!🤷‍♂️🥱,<br>Restart the game please!!🌟";
    }
    else{
        if(flag == 1){
            document.getElementById('print').innerHTML = "Player X Turn!!!-->(X)";
        }else{
            document.getElementById('print').innerHTML = "Player O Turn!!! -->(O)";
        }
    }
}
function myfunc_2(){
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = "";
}
flag = 1;
function myfunc_3(){
    if(flag == 1){
        document.getElementById('b1').value = "X";
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b1').value = "O";
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}
function myfunc_4(){
    if(flag == 1){
        document.getElementById('b2').value = "X";
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b2').value = "O";
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}
function myfunc_5(){
    if(flag == 1){
        document.getElementById('b3').value = "X";
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b3').value = "O";
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}
function myfunc_6(){
    if(flag == 1){
        document.getElementById('b4').value = "X";
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b4').value = "O";
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}
function myfunc_7(){
    if(flag == 1){
        document.getElementById('b5').value = "X";
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b5').value = "O";
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}
function myfunc_8(){
    if(flag == 1){
        document.getElementById('b6').value = "X";
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b6').value = "O";
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}
function myfunc_9(){
    if(flag == 1){
        document.getElementById('b7').value = "X";
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b7').value = "O";
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}
function myfunc_10(){
    if(flag == 1){
        document.getElementById('b8').value = "X";
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b8').value = "O";
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}
function myfunc_11(){
    if(flag == 1){
        document.getElementById('b9').value = "X";
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else{
        document.getElementById('b9').value = "O";
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}