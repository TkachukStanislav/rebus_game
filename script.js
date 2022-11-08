let input1 = document.getElementById('task1'),
res = document.getElementById('result'),
 button = document.getElementById('button'),
 counter = 0;

button.addEventListener('click', 
 function (){
    if(input1.value == 'Github'){
        counter++
        button.setAttribute("disabled", "true")
        res++
     }
     else{
        alert('false')
     }
    
 }
)

