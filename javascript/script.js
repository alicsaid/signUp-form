let conditionsFName = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsLName = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsJMBG = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsBDate = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsEmail = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsPass = false; // a bool variable, ON/OFF switch if all conditions are met
let conditionsPass2 = false; // a bool variable, ON/OFF switch if all conditions are met

function formCheck() {
  // a function to check if all conditions for input fields are met

  let fname = document.getElementById("fname").value; // get the data from the fname input

  if (fname[0] == fname[0].toUpperCase() && fname.length != 0) {
    // checking if the first letter of the fname is upper letter
    console.log("fname valid!");
    conditionsFName = true;
  } else {
    console.log("fname invalid!");
    conditionsFName = false;
    document.getElementById("fname").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "FName: The length of the entered text must be greater than zero and the first letter must be capitalized!"
    ); // alert to tell the user what is wrong
  }

  let lname = document.getElementById("lname").value; // get the data from the lname input

  if (lname[0] == lname[0].toUpperCase() && lname.length != 0) {
    // checking if the first letter of the fname is upper letter
    console.log("lname valid!");
    conditionsLName = true;
  } else {
    console.log("lname invalid!");
    conditionsLName = false;
    document.getElementById("lname").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "LName: The length of the entered text must be greater than zero and the first letter must be capitalized!"
    ); // alert to tell the user what is wrong
  }

  let jmbg = document.getElementById("jmbg").value; // get the data from the jmbg input
  let jmbgCopy = jmbg; // copy of jmbg to use it for making an array
  let jmbgArray = []; // an array
  let bool = false; // a bool variable, ON/OFF switch if all conditions are met

  for (let i = 0; i < 13; i++) {
    // for loop to make an array from users input
    x = jmbgCopy.substr(jmbgCopy.length - 1); // get the last character of users input
    jmbgArray.push(x); // push the last charachter of users input to the array
    jmbgCopy = jmbgCopy.slice(0, -1); // remove last pushed characther from the users input
  }

  let jmbgArrayLength = jmbgArray.length; // length of an array

  for (let i = 0; i < jmbgArrayLength; i++) {
    // for loop to check that all entered numbers are actually numbers
    if (!isNaN(jmbgArray[i]) || jmbgArray[i] < 1 || jmbgArray[i] > 9) {
      // checking if a number is actually number and if its between 0-9
      bool = true;
    } else {
      bool = false;
      break;
    }
  }

  if (jmbg.length == 13 && bool == true && fname.length != 0) {
    //checking if a jmbg is 13 digits long and if other condition is met
    console.log("jmbg valid!");
    conditionsJMBG = true;
  } else {
    console.log("jmbg invalid!");
    conditionsJMBG = false;
    document.getElementById("jmbg").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "The entered JMBG must consists of only numbers from 0 to 9 and there must be exactly 13 of them!"
    ); // alert to tell the user what is wrong
  }

  let bday = document.getElementById("bdate").value; // get the data from the bdate input

  if (bday > 16) {
    // if user is older than 16, he can access the system
    console.log("bdate valid!");
    conditionsBDate = true;
  } else {
    console.log("bday invalid!");
    conditionsBDate = false;
    document.getElementById("bdate").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert("You must be over 16 years old!"); // alert to tell the user what is wrong
  }

  const allowedEmailDomain = ["gmail.com", "hotmail.com", "pmf.unsa.ba"]; // an array of allowed email domains
  const email = document.getElementById("email").value; // the email user entered

  if (allowedEmailDomain.includes(email.split("@")[1])) {
    // checking whether the user has entered a valid email
    console.log("email valid!");
    conditionsEmail = true;
  } else {
    console.log("email invalid!");
    conditionsEmail = false;
    document.getElementById("email").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "The email entered must contain the @ sign and must be gmail.com, hotmail.com or pmf.unsa.ba!"
    ); // alert to tell the user what is wrong
  }

  let password = document.getElementById("password").value; // get the data from the password input
  let passLength = password.length; // length of a password
  let passCopy = password; // copy of a password
  let passArray = []; // an array
  let passBoolA = false; // a bool variable, ON/OFF switch if all conditions are met
  let passBoolN = false; // a bool variable, ON/OFF switch if all conditions are met

  for (let i = 0; i < passLength; i++) {
    // for loop to make an array from users input
    x = passCopy.substr(passCopy.length - 1); //get the last character of users input
    passArray.push(x); // push the last charachter of users input to the array
    passCopy = passCopy.slice(0, -1); // remove last pushed characther from the users input
  }

  let passArrayLength = passArray.length; // length of an password array

  for (let i = 0; i < passArrayLength; i++) {
    // for loop to check if password contains a number
    if (!isNaN(passArray[i])) {
      passBoolN = true;
      break;
    } else {
      passBoolN = false;
    }
  }

  let regExp = /[a-zA-Z]/g; // english alphabet letters
  let testString = password; // testing string

  if (regExp.test(testString)) {
    //checking if password contains a letter
    passBoolA = true;
  } else {
    passBoolA = false;
  }

  if (passLength == 10 && passBoolA == true && passBoolN == true) {
    // checking if password is 10 charachers long and if other conditions are met
    console.log("password valid!");
    conditionsPass = true;
  } else {
    console.log("password invalid!");
    conditionsPass = false;
    document.getElementById("password").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "The password must contain 10 characters, of which at least one must be a number and at least one must be a letter!"
    ); // alert to tell the user what is wrong
  }

  let password2 = document.getElementById("password2").value; // get the data from the password2 input

  if (password2 == password && password2.length != 0) {
    // checking if the entered password is the same as password entered above and not empty
    console.log("password2 valid!");
    conditionsPass2 = true;
  } else {
    console.log("password2 invalid!");
    conditionsPass2 = false;
    document.getElementById("password2").style.backgroundColor = "red"; // change the background of box if input is incorrect
    alert(
      "The password entered must be the same as the one entered in the previous field!"
    ); // alert to tell the user what is wrong
  }

  if (
    conditionsFName == true &&
    conditionsLName == true &&
    conditionsJMBG == true &&
    conditionsBDate == true &&
    conditionsEmail == true &&
    conditionsPass == true &&
    conditionsPass2 == true
  ) {
    let form = document.getElementById("form"); // get the from
    let h1 = document.getElementById("greet"); // get the h1

    form.style.display = "none"; // remove the from from the screen
    h1.style.visibility = "visible"; // change the h1 visibility from hidden to visible
    h1.style.height = "80vh"; // make the h1 box height to a 80vh
    h1.style.textAlign = "center"; // center the greeting text
    h1.style.paddingTop = "200px"; // move the greeting from the top for 200px

    h1.innerHTML = fname + " " + lname + ", dobrodošli na WebProgramiranje!"; // concatenate the greeting and display it into html
  }
}
