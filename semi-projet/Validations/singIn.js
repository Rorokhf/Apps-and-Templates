const signupBtn=document.getElementById('signup-btn');
    let userName=document.getElementById('name');
    let email=document.getElementById('email');
    let password=document.getElementById('password');

    signupBtn.addEventListener('click', () =>{
        let user={
            userName: userName.value,
            email :   email.value,
            password:  password.value
        }
        localStorage.setItem('userInfo',JSON.stringify(user));
        window.location.href('/Validations/login.html');
    })
    
    
