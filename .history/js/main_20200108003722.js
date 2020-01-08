

// show my phone



document.querySelector('.menulink').addEventListener('click' , bfc)
function bfc(e){
    e.preventDefault();
    alert("hello");
}


// send button form
let form = document.getElementById('form');
let formList = [];

form.addEventListener('submit' , send);
function send(e){
    let name = document.getElementById('form-name').value;
    let phone = document.getElementById('form-email').value;
    let email = document.getElementById('form-phone').value;
    let email = document.getElementById('form-phone').value;

    
    formList = [...formList , {name:name, phone:phone , email:email}];
    console.log(formList);


    e.preventDefault();
    alert("ارسال شد")
}