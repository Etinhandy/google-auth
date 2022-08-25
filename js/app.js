'use strict';
const signUpMail = document.querySelector('#signUpemail');
const signUpPassword = document.querySelector('.password');
const btnSignUp = document.querySelector('.btn-sign-up');


//usersDataBase
let usersDataBase = [];

// validate form session

function validate () {
    let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let userMail = signUpMail.value;
    let userPassword = signUpPassword.value;
     if (userMail === '' || userPassword.length === 0) {
        alert('check email or password again');
     }else {
        alert('you have successfully registered');
     }
        
};

//Regular expression
// function validate(e) {
//     e.preventDefault();
 
//     let userName = signUpForm.username.value;
//     let userEmail = signUpForm.email.value;
//     let userPassword = signUpForm.password.value
//     let confirmPassword = signUpForm.confirmPassword.value

//     //Error codes
//     let usernameError = document.querySelector('.username-error')
//     let confirmPasswordError = document.querySelector('.confirmPassword-error')
//     let emailError = document.querySelector('.email-error')
//     let conFirmPasswordError = () => {
//         confirmPasswordError.innerText = "Passwords don't match"
//         confirmPasswordError.style.visibility = 'visible'
//         signUpForm.confirmPassword.style.border = "1px solid #ED1C24"  
//     }

//     usersDB = localStorage.getItem('dataBase');
//     usersDB = JSON.parse(usersDB);

//     if(usersDB === null) {
//         usersDB = []

//         if(userPassword !== confirmPassword) {
//             conFirmPasswordError()
//        } else {
//             let newUser = {
//                 username: userName,
//                 email: userEmail,
//                 password: userPassword
//             }
//             saveUser(newUser)   
//         }
//     } else {
//         usersDB.forEach((user)=> {
//             //if(!(emailRegExp.test(userEmail)) {
//     //         alert("Email input not valid")
//         //  emailError.innerText = "Email already exists"
//     //      } else
//             if(user.username === userName) {
//                 usernameError.style.visibility = 'visible'
//                 signUpForm.username.style.border = "1px solid #ED1C24"  
//             } else if(user.email === userEmail) {
//                 // alert("Email already exists")
//                 emailError.innerText = "Email already exists"
//                 emailError.style.visibility = 'visible'
//                 signUpForm.email.style.border = "1px solid #ED1C24"  
//             } else if(userPassword !== confirmPassword) {
//                 conFirmPasswordError()
//             } else {
//                 let newUser = {
//                                 username: userName,
//                                 email: userEmail,
//                                 password: userPassword
//                     }
//                     saveUser(newUser)
//             } 
//         }) 
//     }
// }







btnSignUp.addEventListener('click', validate);