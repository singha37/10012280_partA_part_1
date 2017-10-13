
//Set variables based on the HTML element id's
let un = document.querySelector('#un')
let pw = document.querySelector('#pw')
let cpw = document.querySelector('#cpw')
let submit = document.querySelector('#submit')

submit.addEventListener("click", function () {
  if (check1() == true) {
    if (checkLength() == true) {
      alert("Your Userrname and password is sent")
    }
  }
})

/*function to check userid & password*/
function check1() {

  if (pw.value == cpw.value) {
    return true;
  }
  else {
    alert("Error type your Password again")/*displays error message*/
  }

}
/*function to check userid & password*/
function checkLength(form) {

  if (un.value.length <= 8) {
    alert('Your Username must be at least ' + minlength + ' characters long. Try again.');
  }
  else {
    return false;
  }

}
//Event Listener