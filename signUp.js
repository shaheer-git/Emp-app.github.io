// if (!sessionStorage.getItem('username')) {
//     location.href='index.html'
// }
    let regiUserName = document.getElementById('full-name');
    let regiPhoneNumber = document.getElementById('phone-number');
    let regiEmail = document.getElementById('signup-email');
    let regiPassword = document.getElementById('signup-password');
    let regiRepeatPassword = document.getElementById('repeat-password');
    let signupForm = document.querySelector('#signup-form');
    let encodeUsername;
    let encodePassword;
    let encodePhonenumber;
    function signup() {
    if (regiPassword.value === regiRepeatPassword.value) {
        encodeUsername = btoa(regiEmail.value);
        encodePassword = btoa(regiPassword.value);
        encodePhonenumber = btoa(regiPhoneNumber.value);
        localStorage.setItem("username",encodeUsername)
        localStorage.setItem("password",encodePassword)
        localStorage.setItem("phonenumber",encodePhonenumber)
        sessionStorage.setItem('username',encodeUsername)
        document.getElementById('alert-msg-sucess').style.display = 'block';
        setTimeout(() => {
            document.getElementById('alert-msg-sucess').style.display = 'none';
            
            location.href='index.html'
        }, 2000)
    }else{
        document.getElementById('alert-msg-fail').style.display = 'block';
        document.getElementById('msg-fail').innerText="Password not maching"
        setTimeout(() => {
        document.getElementById('alert-msg-fail').style.display = 'none';

        }, 2000)        // alert('passwor not matching')
    }
     
}
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    signup();
})