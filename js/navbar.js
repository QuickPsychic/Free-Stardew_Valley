let exists = document.querySelector('#search_prod');
if(exists)
    document.querySelector('#search_prod').addEventListener('input', searchByName);


function logIn()
{
    let userInfo = document.querySelector('#login_e-mail')
    let userEmail = userInfo.value;
    sessionStorage.setItem("userEmail", userEmail);
    console.log(sessionStorage.getItem("userEmail")); 
    
    load_if_Admin();
}

function load_if_Admin()
{
    let userEmail = sessionStorage.getItem("userEmail");

    if(userEmail == 'admin@gmail.com')
    {
        sessionStorage.setItem("token", true);
        
    }else{
        sessionStorage.setItem("token", false);
    }
    
    
    return;
}



