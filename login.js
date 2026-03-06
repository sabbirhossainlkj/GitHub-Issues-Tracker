document.getElementById('btn-login').addEventListener('click', function(){
    console.log('login button clicked')
    // 1-get the input name
    const inputNumber = document.getElementById('input-name');
    const contactNumber = inputNumber.value;
    console.log(contactNumber)
    //2-get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin)


    //3-match pin & name
    if(contactNumber == 'admin' && pin == 'admin123'){
        console.log("login success");
        alert('login success');
        window.location.assign('home.html')
    }
    else{
    alert('login failed')
    return;
    }
})