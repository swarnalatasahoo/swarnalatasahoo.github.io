//

const name = document.getElementById('name');
const mobileNumber = document.getElementById("mobileNumber");
const email = document.getElementById('email');
const gender = document.registration-form;
const returnDate = document.getElementById("returnDate");
const returnTime = document.getElementById("returnTime");
const oneWay = document.getElementById("oneWay");
const roundTrip = document.getElementById("roundTrip");
const airLine = document.getElementById("airLine");
const seat = document.getElementById("seat");



//function for form verification
function formValidation() {
  
    // checking name length
    if (name.value.length < 2 || name.value.length < 20) {
      alert("Name length should be more than 2 and less than 21");
      name.focus();
      return false;

    }
    else{

    }
    // checkingmobile number
  if (!mobileNumber.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    phoneNumber.focus();
    return false;
  }
  else{

  }
  
  // checking email
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  else{

  }
  // checking flight
  if (airLine.value === "") {
    alert("Please select your flight!")
    return false;
  }
  else{

  }
  // checking seat
  if (seat.value === "") {
    alert("Please select your seat type!")
    return false;
  }
  else{alert("Thanks for choosing the seat type!")
  return true;

  }
  


