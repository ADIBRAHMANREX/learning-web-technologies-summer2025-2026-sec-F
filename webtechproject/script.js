document.getElementById("facebook-btn").onclick = () => window.open("https://facebook.com");
document.getElementById("facebook-btn").onclick = () => window.open("https://facebook.com");
document.getElementById("idonate").onclick = function () {
    window.location.href = "index2.html";
};
document.getElementById("home").onclick = function () {
    window.location.href = "project1_1.html";
};


let openBtn = document.getElementById("openPopup");
let popUp = document.getElementById("popup");
let closeBtn = document.getElementById("closePopup");

openBtn.onclick = function(){
    popUp.style.display = "block";
}

closeBtn.onclick = function(){
    popUp.style.display = "none";
}

// close popup if clicked outside
window.onclick = function(e){
    if(e.target == popUp){
        popUp.style.display = "none";
    }
}
