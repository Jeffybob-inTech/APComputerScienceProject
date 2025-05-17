//game page elements
//user elements
const iconImage = document.getElementById("iconImage");
const userNameDisplay = document.getElementById("userNameDisplay");
const kornsHeadBtn = document.getElementById("kornsHead");
const personalContributionOfKernalsEl = document.getElementById("personalContributionOfKernalsEl");
const groupKernalsEl = document.getElementById("groupKernalsEl");
const marketOption = document.getElementById("marketOption");
const characterSelectionButton  = document.getElementById("Icon");
const marketOptionCostEl = document.getElementById("marketOptionCostEl")
//character selection ids
const characterSelectionCn = document.getElementById("characterSelectionCn");
const partickCharacterSelection = document.getElementById("partickCharacterSelection");
const dennisCharacterSelection = document.getElementById("dennisCharacterSelection");
const zackCharacterSelection = document.getElementById("zackCharacterSelection");
const quentinCharacterSelection = document.getElementById("quentinCharacterSelection");
const brianCharacterSelection = document.getElementById("brianCharacterSelection");
const loganCharacterSelection = document.getElementById("loganCharacterSelection");
const avaCharacterSelection = document.getElementById("avaCharacterSelection");
const davidCharacterSelection = document.getElementById("davidCharacterSelection");
const kellenCharacterSelection = document.getElementById("kellenCharacterSelection");
const benCharacterSelection = document.getElementById("benCharacterSelection");
const declanCharacterSelection = document.getElementById("declanCharacterSelection");
const kornCharacterSelection = document.getElementById("kornCharacterSelection");
const chandlerCharacterSelection = document.getElementById("chandlerCharacterSelection");
const adminSeletionPromptCn = document.getElementById("adminSeletionPromptCn");
const adminPasswordInput = document.getElementById("adminPasswordInput");
const adminPasswordSubmit = document.getElementById("adminPasswordSubmit");
//checking for clicks id
const checkingForClick = document.getElementById("checkingForClick");
//different game states
let passwordForAdminState = false;
let developerMode = true;
if(developerMode){
    characterSelectionCn.style.display = "none";
}
//checking for clicks event
checkingForClick.addEventListener("click", function(){
    if(passwordForAdminState){
        passwordForAdminState = false;
        checkingForClick.style.display = "none";
        adminSeletionPromptCn.style.display = "none";
    }
})

//character selection
let characterSelected;
let charactersTaken = [];
let charactersNotTaken = [
    "Patrick",
    "Dennis",
    "Zack",
    "Quentin",
    "Brian",
    "Logan",
    "Ava",
    "David",
    "Kellen",
    "Ben",
    "Declan",
    "Mr. Korn",
    "Chandler"
]
function characterSelectedFunction(name){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === name){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push(name);
    charactersNotTaken.splice(charactersNotTaken.indexOf(name), 1);
    characterSelected = name;
    userNameDisplay.textContent = name;
    iconImage.src = name + "Icon.png";
    characterSelectionCn.style.display = "none";
}
partickCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Patrick"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Patrick");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Patrick"), 1);
    characterSelected = "Patrick";
    userNameDisplay.textContent = "Patrick";
    iconImage.src = "patrickIcon.jpeg";
    characterSelectionCn.style.display = "none";
})

dennisCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Dennis"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Dennis");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Dennis"), 1);
    characterSelected = "Dennis";
    userNameDisplay.textContent = "Dennis";
    iconImage.src = "DennisIcon.jpeg";
    characterSelectionCn.style.display = "none";
})

zackCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Zack"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Zack");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Zack"), 1);
    characterSelected = "Zack";
    userNameDisplay.textContent = "Zack";
    iconImage.src = "ZackIcon.png";
    characterSelectionCn.style.display = "none";
})

quentinCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Quentin"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Quentin");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Quentin"), 1);
    characterSelected = "Quentin";
    userNameDisplay.textContent = "Quentin";
    iconImage.src = "QuentinIcon.jpg";
    characterSelectionCn.style.display = "none";
})

brianCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Brian"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Brian");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Brian"), 1);
    characterSelected = "Brian";
    userNameDisplay.textContent = "Brian";
    iconImage.src = "BrianIcon.png";
    characterSelectionCn.style.display = "none";
})

loganCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Logan"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Logan");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Logan"), 1);
    characterSelected = "Logan";
    userNameDisplay.textContent = "Logan";
    iconImage.src = "LoganIcon.jpeg";
    characterSelectionCn.style.display = "none";
})

avaCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Ava"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Ava");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Ava"), 1);
    characterSelected = "Ava";
    userNameDisplay.textContent = "Ava";
    iconImage.src = "AvaIcon.gif";
    characterSelectionCn.style.display = "none";
})

davidCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "David"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("David");
    charactersNotTaken.splice(charactersNotTaken.indexOf("David"), 1);
    characterSelected = "David";
    userNameDisplay.textContent = "David";
    iconImage.src = "DavidIcon.png";
    characterSelectionCn.style.display = "none";
})

kellenCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Kellen"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Kellen");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Kellen"), 1);
    characterSelected = "Kellen";
    userNameDisplay.textContent = "Kellen";
    iconImage.src = "KellenIcon.webp";
    characterSelectionCn.style.display = "none";
})

benCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Ben"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Ben");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Ben"), 1);
    characterSelected = "Ben";
    userNameDisplay.textContent = "Ben";
    iconImage.src = "BenIcon.jpeg";
    characterSelectionCn.style.display = "none";
})

declanCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Declan"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Declan");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Declan"), 1);
    characterSelected = "Declan";
    userNameDisplay.textContent = "Declan";
    iconImage.src = "DeclanIcon.png";
    characterSelectionCn.style.display = "none";
})

kornCharacterSelection.addEventListener("click", function(){
    for(let x = 0; x < charactersTaken.length; x++){
        if(charactersTaken[x] === "Korn"){
            alert("Character already taken");
            return;
        }
    }
    charactersTaken.push("Mr. Korn");
    charactersNotTaken.splice(charactersNotTaken.indexOf("Mr. Korn"), 1);
    characterSelected = "Mr. Korn";
    userNameDisplay.textContent = "Mr. Korn";
    iconImage.src = "KornsHead.jpg";
    characterSelectionCn.style.display = "none";
})
let passwordForAdmin;
chandlerCharacterSelection.addEventListener("click", function(){
    passwordForAdminState = true;
    passwordForAdmin =  Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10)+""+Math.floor(Math.random()*10);
    console.log("Congrats you found the password for admin: " + passwordForAdmin + " use your powers wisely");
    adminSeletionPromptCn.style.display = "flex";
    checkingForClick.style.display = "block";
})
adminPasswordSubmit.addEventListener("click", function(){
    if(adminPasswordInput.value === passwordForAdmin){
        charactersTaken.push("Chandler");
        charactersNotTaken.splice(charactersNotTaken.indexOf("Chandler"), 1);
        characterSelected = "Chandler";
        userNameDisplay.textContent = "Chandler";
        iconImage.src = "ChandlerIcon.png";
        characterSelectionCn.style.display = "none";
        passwordForAdminState = false;
        checkingForClick.style.display = "none";
        adminSeletionPromptCn.style.display = "none";

    }else{
        alert("Incorrect password");
    }
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
 popkorn stand
 popkorn truck
 movie theater
 golf course
 bear's stadium
 popkorn factory
 popkorn empire
 popkorn monopoly
 popkorn world
 popkorn galaxy
 popkorn simulation
 hacked popkorn
 */