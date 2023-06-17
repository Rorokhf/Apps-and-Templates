const loginBtn=document.getElementById('login-btn');
    let emailUser=document.getElementById('email');
    let passwordUser=document.getElementById('password');

   let userInfo= localStorage.setItem('userInfo',JSON.stringify(user))
    loginBtn.addEventListener("click", ()=>{
        if(emailUser == userInfo.email)
        {
            if(passwordUser == userInfo.password)
            {
                swal("Welcome Back", "", "success");
                window.location.href('/bashboard/index.html');
            }
            else
            {
                swal("Ooops!", "There is something wrong", "warning");
            }
        }
        else{
            swal("Ooops!", "invalid details", "warning");
        }
        
    })

   