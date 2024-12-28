let counter=0
let value= document.querySelector('.value') 
    // console.log(value);
// value=counter


function btnadd(){

    
    counter++
    value.innerHTML = counter
    console.log(counter);
    if(counter>0){
        value.style.color = 'green'
    }else if(counter==0){
        value.style.color = 'black'
    }
    
}

function btnreset(){
    
    counter=0
    value.innerHTML = counter
    console.log(counter);
    if(counter==0){
        value.style.color = 'black'
    }
}

function btnless(){
    
    counter--
    value.innerHTML = counter
    console.log(counter);
    if(counter==0){
        value.style.color = 'black'
    }else if(counter<0){
        value.style.color = 'red'
    }
}


