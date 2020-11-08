function apply(){
    
    let newWidth = document.querySelector("#border_width").value + "px";
    let color1 = document.querySelector("#border_color").value;
    let color2 = document.querySelector("#background_color").value;

    document.getElementById("text").style.backgroundColor = color2;
    document.getElementById("text").style.borderColor = color1;
    document.getElementById("text").style.borderWidth = newWidth;

    //alert(newWidth + color1 + color2 + " called");

}