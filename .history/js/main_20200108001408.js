

// show my phone



document.querySelector('.menulink').addEventListener('click' , bfc)
function bfc(e){
    e.preventDefault();
    alert("hello");
}


// send button
let button = document.getElementById('send');
button.addEventListener('submit' , send);
function send(){
    alert("ارسال شد");
}