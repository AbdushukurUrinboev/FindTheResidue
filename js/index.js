function xisoblash(){
    let birinchi = document.getElementById("birinchi").value;
    
    let result;


    if (birinchi % 3===0){
        result = "Fizz"
        }else if (birinchi % 5===0) {
            result = "Buzz"        
        }else {
        result = "Boshqa sonni kiriting"         
        }









    return document.getElementById("result").value = result;
}