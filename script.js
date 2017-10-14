
//Set variables based on the HTML element id's
let un = document.querySelector('#un')
let pw = document.querySelector('#pw')
let cpw = document.querySelector('#cpw')
let submit = document.querySelector('#submit')

alert("Welcome")
  
  submit.addEventListener("click", function () {
  if (check1() == true) {
    if (checkLength() == true) {
      alert("Your Username and password is set")
    }
    else{
      alert("check your username or password")
    }
  }
});
/*function to check password*/
function check1(form) {
if (pw.value == cpw.value) {
    return(true)
  }
  else {
    alert("Error type your Password again")/*displays error message*/
  }

}
/*function to check length*/
function checkLength(form) {

  if (un.value.length >= 8) {
    return(true)
  }
  else {
    alert("Your Username must be at least 8 characters long. Try again.")
    checkLength.addEventListener('click', (e) => {checkLengthFunction(); e.preventDefault()
     })
  }
}
