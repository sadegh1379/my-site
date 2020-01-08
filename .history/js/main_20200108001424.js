

// show my phone



document.querySelector('.menulink').addEventListener('click' , bfc)
function bfc(e){
    e.preventDefault();
    alert("hello");
}


// send button
let form = document.getElementById('snd');
form.addEventListener('submit' , send);
function send(){
    alert("ارسال شد");
}