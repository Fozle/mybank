document.getElementById('btn-sumbit').addEventListener('click',function(){
    const email=document.getElementById('user-email');
    const emailvalue= email.value;

    const password=document.getElementById('user-password');
    const passwordvalue=password.value;
    if(emailvalue==='fozle@gmail.com' && passwordvalue=='arafat'){
        window.location.href='bank.html'
    }
    else{
        console.log('unvalid')
    }

})