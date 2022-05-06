const billamount=document.querySelector("#bill-amount")
const cashGiven=document.querySelector("#cash-given")
const checkButton=document.querySelector("#check-button")
const message=document.querySelector("#error-message")

checkButton.addEventListener("click",function validateBillAndCashAmount(){
    // to block the message we have to write the event
    message.style.display="none"
    if(billamount.value>0){
        if(cashGiven.value>=billamount){

        }
        else{

        }
    }
    else{
        showmessage("Invalid Cash-Amount");
        
        
    }
})

function showmessage(message){
    message.style.display="block"
    message.innerText="The bill Amount Should Be Greater Than 0"

}









// checkButton.addEventListener("click",function clickhandler(){
//     console.log("you have been clicked")

// })






// // console.log(checkbutton)
// console.log(cashGiven.value)


// console.log(billamount.value);
