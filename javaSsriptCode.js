                 // javaSsriptCode Code SOJIB BANCK Lit.

<script>
    //login button hanldler
const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(){
const loingArea = document.getElementById("loing-area");
loingArea.style.display = "none";   
const TransactionArea = document.getElementById("transaction-area");
TransactionArea.style.display = "block";
})
//deposit button event handler
const SavingsButton = document.getElementById("SavingsButn");
SavingsButton.addEventListener("click", function(){
const savingsAccount = document.getElementById("savingsAccount").value;
const savingsNumber = parseFloat(savingsAccount);

const currentSavings = document.getElementById("currentSavings").innerText;
const currentsavingsNumber = parseFloat(currentSavings);
const totalSavings = savingsNumber + currentsavingsNumber;

document.getElementById("currentSavings").innerText = totalSavings;
})
</script>