let thisRunsContribution = 0;
let multiplier = 1;
let price = 10
const kornsHeadBtn = document.getElementById("kornsHead");
const personalContributionOfKernalsEl = document.getElementById("personalContributionOfKernalsEl");
const groupKernalsEl = document.getElementById("groupKernalsEl");
const marketOption = document.getElementById("marketOption")
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
    personalContributionOfKernalsEl.textContent = thisRunsContribution;
    groupKernalsEl.textContent = thisRunsContribution;
})
