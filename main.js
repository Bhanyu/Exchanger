const excfirst = document.querySelector(".first");
const excsec = document.querySelector(".second");
const excOptions = document.querySelector(".exchange-options");
const rub = document.querySelector(".rub");
const usd = document.querySelector(".usd");
const eur = document.querySelector(".eur");
const gbp = document.querySelector(".gbp");
const rubSec = document.querySelector(".rub2");
const usdSec = document.querySelector(".usd2");
const eurSec = document.querySelector(".eur2");
const gbpSec = document.querySelector(".gbp2");
const firstVal= document.querySelector(".value1");
const secondVal= document.querySelector(".value2");
const subFirstVal = document.querySelector(".eqt1");
const subSecVal = document.querySelector(".eqt2");
const firstHidden = document.querySelector(".hidden1")
const secondHidden = document.querySelector(".hidden2")
const err = document.querySelector(".internet-error")

const URL = 'https://v6.exchangerate-api.com/v6/4d49e6e33a9474b45953d037/latest/';

let currentLeftPrice = 0;
let price;
let lastType = null;

function getResult(leftValue,rightValue){
fetch(`${URL}${leftValue}`)
.then(res=>res.json())
.then(data=>
    {
currentLeftPrice = data.conversion_rates[rightValue];

price = 1 / currentLeftPrice;
subFirstVal.innerHTML = `1 ${leftValue} = ${currentLeftPrice.toFixed(4)} ${rightValue}`;
subSecVal.innerHTML = `1 ${rightValue} = ${price.toFixed(4)} ${leftValue}`;

if (lastType === "firstamount" || lastType === null) {
    getCalculationFirst()
}
else if(lastType === "secondamount" ){
    getCalculationSecond()
}
    })

    .catch(error => {
        err.textContent = "There is not Internet, please check the Internet connection"
        err.style.color = "red"
        // err.style.fontSize = "20px"
    });
}

function getCalculationFirst(){
    let integerValFirst = parseFloat(firstVal.value);
    if (!isNaN(integerValFirst) ) {
        let handlingVal = integerValFirst * currentLeftPrice;
        secondVal.value = handlingVal.toFixed(4);
    }

  
    else{
        secondVal.value = '';
    }
}


function getCalculationSecond(){
    let integerValSecond = parseFloat(secondVal.value );
    if (!isNaN(integerValSecond)) {
        let handlingValSec = integerValSecond / currentLeftPrice;
        firstVal.value = handlingValSec.toFixed(4);
    }

 
    else{
        firstVal.value = '';
    }
}

firstVal.addEventListener("keyup", ()=>{
    
    lastType = "firstamount";
    
    getCalculationFirst();
   
});
secondVal.addEventListener("keyup", ()=>{
   
 
    lastType = "secondamount";
  
    getCalculationSecond();
   
});

firstVal.value = 1200;
firstVal.addEventListener('input', () => {

    firstVal.value = firstVal.value.replace(/-/g, '');
});
secondVal.addEventListener('input', () => {

    secondVal.value = secondVal.value.replace(/-/g, '');
});

getResult("RUB","USD");

rub.addEventListener("click", ()=>{

    firstHidden.textContent = "RUB";
    rub.classList.add("active")
    usd.classList.remove("active");
    eur.classList.remove("active");
    gbp.classList.remove("active");

   
getResult(firstHidden.textContent, secondHidden.textContent)
   
})
usd.addEventListener("click", ()=>{

    firstHidden.textContent = "USD";
    rub.classList.remove("active");
eur.classList.remove("active");
    gbp.classList.remove("active");
    usd.classList.add("active")
   
getResult(firstHidden.textContent, secondHidden.textContent)
   
})
eur.addEventListener("click", ()=>{

    firstHidden.textContent = "EUR";
    usd.classList.remove("active");
    rub.classList.remove("active");
    gbp.classList.remove("active");
    eur.classList.add("active")
  
getResult(firstHidden.textContent, secondHidden.textContent)
   
})
gbp.addEventListener("click", ()=>{

    firstHidden.textContent = "GBP";
    eur.classList.remove("active");
    usd.classList.remove("active");
    rub.classList.remove("active");
  
    gbp.classList.add("active")
   
getResult(firstHidden.textContent, secondHidden.textContent)
   
})
gbpSec.addEventListener("click", ()=>{

    secondHidden.textContent = "GBP";
    gbpSec.classList.add("active");
    usdSec.classList.remove("active");
    rubSec.classList.remove("active");
    eurSec.classList.remove("active");
   
getResult(firstHidden.textContent,secondHidden.textContent)
   
})
eurSec.addEventListener("click", ()=>{

    secondHidden.textContent = "EUR";
    eurSec.classList.add("active");
    usdSec.classList.remove("active");
    rubSec.classList.remove("active");
    gbpSec.classList.remove("active");
 
    getResult(firstHidden.textContent,secondHidden.textContent)
   
})
rubSec.addEventListener("click", ()=>{

    secondHidden.textContent = "RUB";
    rubSec.classList.add("active");
    usdSec.classList.remove("active");
    eurSec.classList.remove("active");
    gbpSec.classList.remove("active");
 
    getResult(firstHidden.textContent,secondHidden.textContent)
   
})
usdSec.addEventListener("click", ()=>{

    secondHidden.textContent = "USD";
    usdSec.classList.add("active");
    eurSec.classList.remove("active");
    rubSec.classList.remove("active");
    gbpSec.classList.remove("active");
   
    getResult(firstHidden.textContent,secondHidden.textContent)
   
})













