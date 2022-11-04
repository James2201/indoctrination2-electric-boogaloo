//USER LOGIN / SIGNUP                                          
 
let memeber = loadmember();
 
// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
 
// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);
 
function signUpHandler() {
  let includes = false;
  let username = document.getElementById("inputusername").value;
  let password = document.getElementById("inputpassword").value;
  for (let i = 0; i < memeber.length; i++){
    if (memeber[i].username === username){
        includes === true
        alert("identity already in database");
    } else if (includes === false){
      memeber.push(newmember(username, password));
      alert("Sucessful Indoctrination");
    }
  }
  savemember();
} 
 
// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);
 
function signInHandler() {
  let index = false;
  let inputusername = document.getElementById("signinusername").value;
  let inputpassword = document.getElementById("signinpassword").value;
  for (let i = 0; i < memeber.length; i++){
    if (memeber[i].username === inputusername && memeber[i].password === inputpassword){
      alert("Welcome");
      index = true;
    } else if (index === false){
      alert("no")
    }
  }
  console.log(memeber);
} 
 
//SUPPORT FUNCTIONS
 
function newmember(memberusername, memberpassword){
  return {
    username: memberusername,
    password: memberpassword,
    
  }
} 
 
//STORAGE FUNCTIONS 
 
function savemember(){
  localStorage.setItem("members", JSON.stringify(memeber));
} 
  
function loadmember(){
  let memberstr = localStorage.getItem("members");
  return JSON.parse(memberstr) ?? [];
} 