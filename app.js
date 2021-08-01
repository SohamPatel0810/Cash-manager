const billamount = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const checkbutton = document.querySelector("#check-btn");
const errormessage=document.querySelector("#error");
const noOfNotes = document.querySelectorAll(".returnnotes");

const availableNotes = [2000,500,200,100,50,20,10,5,2,1];

checkbutton.addEventListener("click",inputvalidation);

function inputvalidation(){
    errormessage.style.display = "none";
    if(billamount.value > 0)
    {
        if(Number(cashGiven.value) >= Number(billamount.value))
        {
            const refund = cashGiven.value - billamount.value;
            calculateNotes(refund);
        }
        else
        {
            errorhandler("Insufficient Cash ");
        }
    }
    else
    {
        errorhandler("Invalid Bill Amount!!");
    }
}

function errorhandler(text){
    errormessage.style.display ='block';
    errormessage.innerText = text;

}
function calculateNotes(refund){
    for (let i=0; i< availableNotes.length; i++){
        const notesreturned = Math.trunc(refund/availableNotes[i]);
        refund %= availableNotes[i]
        noOfNotes[i].innerText = notesreturned;

    }

}
