const billamount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button")
const message=document.querySelector("#error-message")

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    // to block the message we have to write the event
    hidemessage();
    if(billamount.value>0){
        if(cashGiven.value>=billamount.value){
            const amounttobereturned=cashgiven.value-billamount.value;
            calculatechange(amounttobereturned);

        }
        else{
            showmessage("The Cash provided should atleast be equal to the bill amount")

        }
    }
    else{
        showmessage("Invalid bill-Amount");
        
        
    }
});


// function calculatechange(){}

function hidemessage(){
    message.style.display="none";


}
function showmessage(msg){
    message.style.display="block";
    message.innerText=msg;



}









// checkButton.addEventListener("click",function clickhandler(){
//     console.log("you have been clicked")

// })






// // console.log(checkbutton)
// console.log(cashGiven.value)


// console.log(billamount.value);
