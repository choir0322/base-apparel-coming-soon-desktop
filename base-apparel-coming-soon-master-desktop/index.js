let emailInput = document.querySelector('.emailInput');
emailInput.style.color = "#C2A3A3";

let validEmails = ['@gmail.com','@yahoo.com','@naver.com','@bing.com'];
let arrowBtn = document.querySelector('.arrow');

arrowBtn.addEventListener('click', checkEmailInput);

function checkEmailInput () {
        let userEmailInput = document.querySelector('.emailInput').value;
        let atIndex = -1;
        let userEmailType = "";
        for(let i=0; i<userEmailInput.length; i++){
            if(userEmailInput[i] === "@" && atIndex === -1){
                atIndex = i;
            }else{
                continue;
            }
            if(atIndex !== -1){
                for(let j=atIndex; j<userEmailInput.length; j++){
                    userEmailType += userEmailInput[j];
                }
                break;
            }
        }
        let pass = 0;
        validEmails.forEach( function (email) {
            if(userEmailType === email){
                pass = 1;
            }
        })
        if(pass === 0){
            let errorIcon = document.querySelector('.errorIcon');
            let errorMessage = document.querySelector('.errorMessage');
            errorIcon.style.visibility = "visible";
            errorMessage.style.visibility = "visible";
        }
}