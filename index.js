
// dark = () => {
//     document.body.style.backgroundColor = "black"
//     document.body.style.color = "white"
//     document.getElementById('light').style.display = "block"
//     document.getElementById('dark').style.display = "none"
// }
// light = () => {
//     document.body.style.backgroundColor = "white"
//     document.body.style.color = "black"
//     document.getElementById('light').style.display = "none"
//     document.getElementById('dark').style.display = "block"
// }
addEventListener('load', ()=>{
    debugger;
    
})
let decodePassword;
let decodeUsername;
if(localStorage.getItem('username')){
     decodeUsername = atob(localStorage.getItem('username'));
     decodePassword = atob(localStorage.getItem('password'));
}
let emailField = document.querySelector('#login-email');
let passField = document.querySelector('#login-password');
let loginForm = document.querySelector('#login-form');
function login() {
    if (decodeUsername === undefined && decodePassword === undefined) {
        document.getElementById('ac-not-found').style.display = 'block'
        setTimeout(() => {
            document.getElementById('ac-not-found').style.display = 'none'

        }, 2000)
    } else if (emailField.value == decodeUsername && passField.value == decodePassword) {
        sessionStorage.setItem("username", btoa(decodeUsername));
        location.href = "home.html"


    } else if (!emailField.value==decodeUsername && !passField.value==decodePassword) {
        document.getElementById('ac-not-found').style.display = 'block'
        setTimeout(() => {
            document.getElementById('ac-not-found').style.display = 'none'

        }, 2000)
        emailField.style.border = "2px solid red";
        passField.style.border = "2px solid red";
    }
    else if (passField.value==decodePassword) {
        emailField.style.border = "2px solid red";
        passField.style.border = "2px solid ";

    }
    else if (emailField.value==decodeUsername) {
        emailField.style.border = "2px solid ";
        passField.style.border = "2px solid red";

    }
}
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login();
})
