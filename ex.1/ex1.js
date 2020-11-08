function Validate(){
    let txt = document.querySelector("#pass1").value;
    let txt2 = document.querySelector("#pass2").value;

    //alert(txt + txt2 + "I am here");
    if(txt.length < 8){
        alert("Sorry, your password must be 8 or more characters");
    }
    else {
        if(txt != txt2){
            alert("Sorry! The passwords do not match!");
        }
        else{
            alert("The passwords matched!");
        }
    }

}