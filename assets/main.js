const cardNum = document.getElementById("cardNum");
const cardDate =document.getElementById("cardDate");
const cvv = document.getElementById("CVV");
Inputmask({mask:"9999 9999 9999 9999"}).mask(cardNum);
Inputmask({mask:"99/99"}).mask(cardDate);
Inputmask({mask:"999"}).mask(cvv);

// Card Number
cardNum.addEventListener("input",()=>{
    var cardInStr = (cardNum.value).replaceAll(" ","");
    var cardImg =document.querySelector(".type-card-img img");
    var cardNumber=parseInt(cardInStr);
    var cardInString=""+cardNumber;
    const firstNumOfCard = cardInString.substring(0,1);
    var cardImgArray = ["assets/icons/visa-min.png","assets/icons/mastercard-min.png"];

    if(cardInString.length==16){
        cardNum.style.color="#9e9e9e";
        cardNum.previousElementSibling.style.color="#9e9e9e";
        if(firstNumOfCard==4){

            cardImg.setAttribute("src",cardImgArray[0]);
        }
        else if(firstNumOfCard==5){
            cardImg.setAttribute("src",cardImgArray[1]);
            
        }
        else {cardNum.style.color="#ff0000";
        cardNum.previousElementSibling.style.color="#ff0000";}
    }
    else {
        cardNum.style.color="#ff0000";
        cardNum.previousElementSibling.style.color="#ff0000";
        cardImg.removeAttribute("src");
    }


});

//Card date

var year=((new Date()).getFullYear()).toString();
var monthNums=12;
// console.log((parseInt(year.substring(2,4)))-1);  // 21-1=20
cardDate.addEventListener("input",(e)=>{
    var cardDateInStr = (cardDate.value).replaceAll("/","");
    
    var cardYear=parseInt(cardDateInStr.substring(2,4));
    var cardMonth=parseInt(cardDateInStr.substring(0,2));

    if( cardMonth>0 && cardMonth<=monthNums && cardYear>(parseInt(year.substring(2,4)))-1 ){
       
        if(cardYear>year.substring(2,4)) {
            e.target.previousElementSibling.style.color="#9e9e9e";
            e.target.style.color="#9e9e9e";
        }

        if(cardMonth>=(new Date()).getMonth() && cardYear==year.substring(2,4)){
            e.target.previousElementSibling.style.color="#9e9e9e";
            e.target.style.color="#9e9e9e";
        }
        
         
    }   
    else {
        e.target.previousElementSibling.style.color="#ff0000";
        e.target.style.color="#ff0000";
    }
    
    
    
})