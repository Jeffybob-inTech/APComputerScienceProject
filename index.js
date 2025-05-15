const characterSelectionCn = document.getElementById("characterSelectionCn");
const kornsHeadBtn = document.getElementById("kornsHead");
const personalContributionOfKernalsEl = document.getElementById("personalContributionOfKernalsEl");
const groupKernalsEl = document.getElementById("groupKernalsEl");
const marketOption = document.getElementById("marketOption");
const characterSelectionButton  = document.getElementById("Icon");
const marketOptionCostEl = document.getElementById("marketOptionCostEl")
//character selection
characterSelectionButton.addEventListener("click", function(){
    characterSelectionCn.style.display = "none";
})
//playing the game
let thisRunsContribution = 0;
let multiplier = 1;
let price = 10;
let numberBought = 0;
kornsHeadBtn.addEventListener("click", function(){
    thisRunsContribution += multiplier;
    personalContributionOfKernalsEl.textContent = thisRunsContribution;
    groupKernalsEl.textContent = thisRunsContribution;
})

marketOption.addEventListener("click", function(){
    if(thisRunsContribution < price){
        return;
    }
    multiplier += 1;
    
    thisRunsContribution -= price;
    price *= 1.8 + numberBought;
    numberBought++;
    marketOptionCostEl.textContent = price;
    personalContributionOfKernalsEl.textContent = thisRunsContribution;
    groupKernalsEl.textContent = thisRunsContribution;
})
//market options
/*
 popkorn
 small fire
 popkorn popper
 movie theater
 popkorn factory
 popkorn empire
 */