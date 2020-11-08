let currentImg = 1;
function updateDisplay() {
    if(currentImg === 1){
        document.getElementById("myImg").src = "picture1.jpg";
    }
    else if(currentImg === 2){
        document.getElementById("myImg").src = "picture2.jpg";
    }
    else if(currentImg === 3){
        document.getElementById("myImg").src = "picture3.jpg";
    }
    else if(currentImg === 4){
        document.getElementById("myImg").src = "picture4.jpg";
    }
    else{
        document.getElementById("myImg").src = "picture5.jpg";
    }
}

function prev() {
    if(currentImg === 1){
        currentImg = 5;
    }
    else{
        currentImg--;
    }
    updateDisplay();
}

function next() {
    if(currentImg === 5){
        currentImg = 1;
    }
    else{
        currentImg++;
    }
    updateDisplay();
}