function setValueInInputFiledById(fieldId, value){
    const inputField = document.getElementById(fieldId);
    inputField.value = value;
}

function getInputFiledValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

function pinGenerator(){
    let pin = Math.round((Math.random()*10000));
    if(pin<=999){
      return pinGenerator();
    }
    else{
        return pin;
    }
}

document.getElementById('btn-pin-generator').addEventListener('click', function(){
    const pin = pinGenerator();
    setValueInInputFiledById('pin-generator-filed', pin);
});

document.getElementById('calculator').addEventListener('click', function(event){
    const number = event.target.innerText;
    const inputField = document.getElementById('pin-typed');
    const previousTypedNumber = inputField.value;
    if(isNaN(number) == true){
        if(number == 'C'){
            const value = '';
            setValueInInputFiledById('pin-typed',value);
        }
        else if(number == '<'){ 
            const digits = previousTypedNumber.split('');
            digits.pop();
            const newDigits = digits.join('');
            inputField.value = newDigits;
        }
    }
    else{
       const newTypedNumber = previousTypedNumber + number;
       inputField.value = newTypedNumber;
    }
});

document.getElementById('verify-btn').addEventListener('click', function (){
    const typedPin = getInputFiledValueById('pin-typed');
    const generatedPin = getInputFiledValueById('pin-generator-filed');
    const messageSuccess = document.getElementById('success-message');
    const messageWrong = document.getElementById('wrong-message');
    const messageWrongFinal = document.getElementById('wrong-message-final');
    const tryTimeElement = document.getElementById('try-time');
    const tryTime = tryTimeElement.innerText;
    if(typedPin == generatedPin){
        messageSuccess.style.display = 'block';
        messageWrong.style.display = 'none';
        messageWrongFinal.style.display = 'none';
        const value = '';
        setValueInInputFiledById('pin-typed',value);
        setValueInInputFiledById('pin-generator-filed', value);
        tryTimeElement.innerText = 3;
    }else{
        messageWrong.style.display = 'block';
        messageSuccess.style.display = 'none';
        messageWrongFinal.style.display = 'none';
        const newTryTime = tryTime-1;
        tryTimeElement.innerText = newTryTime;
    
        if(newTryTime == 0){
            const verifyButton = document.getElementById('verify-btn');
            messageWrongFinal.style.display = 'block';
            messageSuccess.style.display = 'none';
            messageWrong.style.display = 'none';
            verifyButton.disabled = true;
            const value = '';
            setValueInInputFiledById('pin-typed',value);
            setValueInInputFiledById('pin-generator-filed', value);
            
        }
    }
});