let zvukGong = new Audio();
zvukGong.src = "./Res/gong.mp3";

let callButton = document.getElementById("callButton");
callButton.onclick = function(){
    zvukGong.volume = 0.2;
    zvukGong.play();
}

