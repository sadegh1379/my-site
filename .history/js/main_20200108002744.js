

// show my phone



document.querySelector('.menulink').addEventListener('click' , bfc)
function bfc(e){
    e.preventDefault();
    alert("hello");
}


// send button form
let form = document.getElementById('form');


form.addEventListener('submit' , send);
function send(e){
    console.log(name  , email , email);
    e.preventDefault();
    alert("ارسال شد")
}