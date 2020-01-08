

// show my phone

document.querySelector('.menulink').addEventListener('click' , bfc)
function bfc(e){
    e.preventDefault();
    alert("hello");
}


// send button form
let form = document.getElementById('form');
let formList = [];

// get local storage
function returnLocalStorage(value){
  return  window.getLocalStorage.getItem(value)? JSON.parse(window.localStorage.getItem(value)) : [];

    
}
form.addEventListener('submit' , send);
function send(e){
    let name = document.getElementById('form-name').value;
    let phone = document.getElementById('form-email').value;
    let email = document.getElementById('form-phone').value;
    let comment = document.getElementById('form-comment').value;
    
    
    formList = [...formList , {name:name, phone:phone , email:email , comment:comment}];
    window.localStorage.setItem("formList" , JSON.stringify(formList));
    console.log(formList);


    e.preventDefault();
    alert("با موفقیت ارسال شد ");
    

    // clear inputs

    name = ''
    email = ''
    phone = ''
    comment = ''
}

function clearInputs(){
  let name = document.getElementById('form-name').value;
  let phone = document.getElementById('form-email').value;
  let email = document.getElementById('form-phone').value;
  let comment = document.getElementById('form-comment').value;
}