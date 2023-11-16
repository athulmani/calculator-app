//1.display number i text box

function displayNumber(num) {
    result.value+=num
    
}




//2.clear text box
function clearBox() {
    result.value=''
    
}


//3.evaluate expression

function evaluateExp() {
    // exp=result.value
    // output=eval(exp)
    // result.value=output

    //or

    result.value=eval(result.value)  ////in a single line
    
}



//4.removelast item from text box

function removeLast() {
    result.value=result.value.slice(0,-1)
    
}