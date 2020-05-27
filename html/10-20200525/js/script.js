function turnOn(){
    document.getElementById('bubble').src='./pic_bulbon.gif';
}
function turnOff(){
    document.getElementById('bubble').src='./pic_bulboff.gif'
}
function turnOnOff(){
    var Anhelement = document.getElementById("bubble");
    console.log(Anhelement.src);
    if (Anhelement.src == "http://127.0.0.1:5501/js/pic_bulboff.gif"){
        console.log(8);
        Anhelement.src = "pic_bulbon.gif";

    }
    else {
        console.log(9);
        Anhelement.src = "pic_bulboff.gif";

    }
}