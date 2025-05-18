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
//market option ids
const marketOptionCostHolderElPopkorn = document.getElementById("marketOptionCostHolderElPopkorn");
const marketOptionCostHolderElSmallFire = document.getElementById("marketOptionCostHolderElSmallFire");
const marketOptionCostHolderElPopkornPopper = document.getElementById("marketOptionCostHolderElPopkornPopper");
const marketOptionCostHolderElPopkornStand = document.getElementById("marketOptionCostHolderElPopkornStand");
const marketOptionCostHolderElPopkornTruck = document.getElementById("marketOptionCostHolderElPopkornTruck");
const marketOptionCostHolderElMovieTheater = document.getElementById("marketOptionCostHolderElMovieTheater");
const marketOptionCostHolderElGolfCourse = document.getElementById("marketOptionCostHolderElGolfCourse");
const marketOptionCostHolderElBearsStadium = document.getElementById("marketOptionCostHolderElBearsStadium");
const marketOptionCostHolderElPopkornFactory = document.getElementById("marketOptionCostHolderElPopkornFactory");
const marketOptionCostHolderElPopkornEmpire = document.getElementById("marketOptionCostHolderElPopkornEmpire");
const marketOptionCostHolderElPopkornMonopoly = document.getElementById("marketOptionCostHolderElPopkornMonopoly");
const marketOptionCostHolderElPopkornWorld = document.getElementById("marketOptionCostHolderElPopkornWorld");
const marketOptionCostHolderElPopkornGalaxy = document.getElementById("marketOptionCostHolderElPopkornGalaxy");
const marketOptionCostHolderElPopkornSimulation = document.getElementById("marketOptionCostHolderElPopkornSimulation");
const marketOptionCostHolderElHackedPopkorn = document.getElementById("marketOptionCostHolderElHackedPopkorn");
const marketOptionCostHolderElNoLifePopkorn = document.getElementById("marketOptionCostHolderElNoLifePopkorn");

const popcornMarketOption = document.getElementById("popcornMarketOption");
const smallFireMarketOption = document.getElementById("smallFireMarketOption");
const popcornPopperMarketOption = document.getElementById("popcornPopperMarketOption");
const popcornStandMarketOption = document.getElementById("popcornStandMarketOption");
const popcornTruckMarketOption = document.getElementById("popcornTruckMarketOption");
const movieTheaterMarketOption = document.getElementById("movieTheaterMarketOption");
const golfCourseMarketOption = document.getElementById("golfCourseMarketOption");
const bearsStadiumMarketOption = document.getElementById("bearsStadiumMarketOption");
const popcornFactoryMarketOption = document.getElementById("popcornFactoryMarketOption");
const popcornEmpireMarketOption = document.getElementById("popcornEmpireMarketOption");
const popcornMonopolyMarketOption = document.getElementById("popcornMonopolyMarketOption");
const popcornWorldMarketOption = document.getElementById("popcornWorldMarketOption");
const popcornGalaxyMarketOption = document.getElementById("popcornGalaxyMarketOption");
const popcornSimulationMarketOption = document.getElementById("popcornSimulationMarketOption");
const hackedPopcornMarketOption = document.getElementById("hackedPopcornMarketOption");
const noLifePopcornMarketOption = document.getElementById("noLifePopcornMarketOption");

const kernalsPerClickEL = document.getElementById("kernalsPerClickEL");
const kernalsPerSecondEl = document.getElementById("kernalsPerSecondEl");

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
let kernalsPerSecond = 0;
let kernalsPerClick = 1;
kornsHeadBtn.addEventListener("click", function(){
    thisRunsContribution += 1*multiplier;
    personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
    groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
})
//market option
let numberOfPopkornBought = 0;
let numberOfSmallFireBought = 0;
let numberOfPopkornPopperBought = 0;
let numberOfPopkornStandBought = 0;
let numberOfPopkornTruckBought = 0;
let numberOfMovieTheaterBought = 0;
let numberOfGolfCourseBought = 0;
let numberOfBearsStadiumBought = 0;
let numberOfPopkornFactoryBought = 0;
let numberOfPopkornEmpireBought = 0;
let numberOfPopkornMonopolyBought = 0;
let numberOfPopkornWorldBought = 0;
let numberOfPopkornGalaxyBought = 0;
let numberOfPopkornSimulationBought = 0;
let numberOfHackedPopkornBought = 0;
let numberOfNoLifePopkornBought = 0;

let priceOfPopkorn = 100;
let priceOfSmallFire = 100;
let priceOfPopkornPopper = 10000;
let priceOfPopkornStand = 100000;
let priceOfPopkornTruck = 1000000;
let priceOfMovieTheater = 10000000;
let priceOfGolfCourse = 100000000;
let priceOfBearsStadium = 1000000000;
let priceOfPopkornFactory = 10000000000;
let priceOfPopkornEmpire = 100000000000;
let priceOfPopkornMonopoly = 1000000000000;
let priceOfPopkornWorld = 10000000000000;
let priceOfPopkornGalaxy = 100000000000000;
let priceOfPopkornSimulation = 1000000000000000;
let priceOfHackedPopkorn = 10000000000000000;
let priceOfNoLifePopkorn = "Infinit";



function updatePricesDisplayForMarketOptions(){
    marketOptionCostHolderElPopkorn.textContent = numberWithCommas(priceOfPopkorn);
    marketOptionCostHolderElSmallFire.textContent = numberWithCommas(priceOfSmallFire);
    marketOptionCostHolderElPopkornPopper.textContent = numberWithCommas(priceOfPopkornPopper);
    marketOptionCostHolderElPopkornStand.textContent = numberWithCommas(priceOfPopkornStand);
    marketOptionCostHolderElPopkornTruck.textContent = numberWithCommas(priceOfPopkornTruck);
    marketOptionCostHolderElMovieTheater.textContent = numberWithCommas(priceOfMovieTheater);
    marketOptionCostHolderElGolfCourse.textContent = numberWithCommas(priceOfGolfCourse);
    marketOptionCostHolderElBearsStadium.textContent = numberWithCommas(priceOfBearsStadium);
    marketOptionCostHolderElPopkornFactory.textContent = numberWithCommas(priceOfPopkornFactory);
    marketOptionCostHolderElPopkornEmpire.textContent = numberWithCommas(priceOfPopkornEmpire);
    marketOptionCostHolderElPopkornMonopoly.textContent = numberWithCommas(priceOfPopkornMonopoly);
    marketOptionCostHolderElPopkornWorld.textContent = numberWithCommas(priceOfPopkornWorld);
    marketOptionCostHolderElPopkornGalaxy.textContent = numberWithCommas(priceOfPopkornGalaxy);
    marketOptionCostHolderElPopkornSimulation.textContent = numberWithCommas(priceOfPopkornSimulation);
    marketOptionCostHolderElHackedPopkorn.textContent = numberWithCommas(priceOfHackedPopkorn);
    marketOptionCostHolderElNoLifePopkorn.textContent = priceOfNoLifePopkorn;
    kernalsPerClickEL.textContent = numberWithCommas(multiplier);
}
updatePricesDisplayForMarketOptions();


popcornMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkorn){
        thisRunsContribution -= priceOfPopkorn;
        numberOfPopkornBought += 1;
        multiplier += 1;
        kernalsPerClick += 1;
        priceOfPopkorn *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(kernalsPerClick);
        priceOfPopkorn = Math.floor(priceOfPopkorn);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkorn.textContent = numberWithCommas(priceOfPopkorn);
    }
})
smallFireMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfSmallFire){
        thisRunsContribution -= priceOfSmallFire;
        kernalsPerSecond++;
        numberOfSmallFireBought += 1;
        priceOfSmallFire *= 1.2;
        kernalsPerSecondEl.textContent = numberWithCommas(kernalsPerSecond);
        priceOfSmallFire = Math.floor(priceOfSmallFire);
        personalContributionOfKernalsEl.textContent = numberWithCommas(Math.floor(thisRunsContribution));
        groupKernalsEl.textContent = numberWithCommas(Math.floor(thisRunsContribution));
        marketOptionCostHolderElSmallFire.textContent = numberWithCommas(priceOfSmallFire);
    }
})
popcornPopperMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornPopper){
        thisRunsContribution -= priceOfPopkornPopper;
        numberOfPopkornPopperBought += 1;
        multiplier += 10;
        priceOfPopkornPopper *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornPopper = Math.floor(priceOfPopkornPopper);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornPopper.textContent = numberWithCommas(priceOfPopkornPopper);
    }
})
popcornStandMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornStand){
        thisRunsContribution -= priceOfPopkornStand;
        numberOfPopkornStandBought += 1;
        multiplier += 25;
        priceOfPopkornStand *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornStand = Math.floor(priceOfPopkornStand);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornStand.textContent = numberWithCommas(priceOfPopkornStand);
    }
})
popcornTruckMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornTruck){
        thisRunsContribution -= priceOfPopkornTruck;
        numberOfPopkornTruckBought += 1;
        multiplier += 50;
        priceOfPopkornTruck *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornTruck = Math.floor(priceOfPopkornTruck);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornTruck.textContent = numberWithCommas(priceOfPopkornTruck);
    }
})
movieTheaterMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfMovieTheater){
        thisRunsContribution -= priceOfMovieTheater;
        numberOfMovieTheaterBought += 1;
        multiplier += 100;
        priceOfMovieTheater *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfMovieTheater = Math.floor(priceOfMovieTheater);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElMovieTheater.textContent = numberWithCommas(priceOfMovieTheater);
    }
})
golfCourseMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfGolfCourse){
        thisRunsContribution -= priceOfGolfCourse;
        numberOfGolfCourseBought += 1;
        multiplier += 200;
        priceOfGolfCourse *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfGolfCourse = Math.floor(priceOfGolfCourse);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElGolfCourse.textContent = numberWithCommas(priceOfGolfCourse);
    }
})
bearsStadiumMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfBearsStadium){
        thisRunsContribution -= priceOfBearsStadium;
        numberOfBearsStadiumBought += 1;
        multiplier += 500;
        priceOfBearsStadium *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfBearsStadium = Math.floor(priceOfBearsStadium);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElBearsStadium.textContent = numberWithCommas(priceOfBearsStadium);
    }
})
popcornFactoryMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornFactory){
        thisRunsContribution -= priceOfPopkornFactory;
        numberOfPopkornFactoryBought += 1;
        multiplier += 1000;
        priceOfPopkornFactory *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornFactory = Math.floor(priceOfPopkornFactory);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornFactory.textContent = numberWithCommas(priceOfPopkornFactory);
    }
})
popcornEmpireMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornEmpire){
        thisRunsContribution -= priceOfPopkornEmpire;
        numberOfPopkornEmpireBought += 1;
        multiplier += 5000;
        priceOfPopkornEmpire *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornEmpire = Math.floor(priceOfPopkornEmpire);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornEmpire.textContent = numberWithCommas(priceOfPopkornEmpire);
    }
})
popcornMonopolyMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornMonopoly){
        thisRunsContribution -= priceOfPopkornMonopoly;
        numberOfPopkornMonopolyBought += 1;
        multiplier += 10000;
        priceOfPopkornMonopoly *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornMonopoly = Math.floor(priceOfPopkornMonopoly);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornMonopoly.textContent = numberWithCommas(priceOfPopkornMonopoly);
    }
})
popcornWorldMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornWorld){
        thisRunsContribution -= priceOfPopkornWorld;
        numberOfPopkornWorldBought += 1;
        multiplier += 50000;
        priceOfPopkornWorld *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornWorld = Math.floor(priceOfPopkornWorld);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornWorld.textContent = numberWithCommas(priceOfPopkornWorld);
    }
})
popcornGalaxyMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornGalaxy){
        thisRunsContribution -= priceOfPopkornGalaxy;
        numberOfPopkornGalaxyBought += 1;
        multiplier += 100000;
        priceOfPopkornGalaxy *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornGalaxy = Math.floor(priceOfPopkornGalaxy);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornGalaxy.textContent = numberWithCommas(priceOfPopkornGalaxy);
    }
})
popcornSimulationMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfPopkornSimulation){
        thisRunsContribution -= priceOfPopkornSimulation;
        numberOfPopkornSimulationBought += 1;
        multiplier += 1000000;
        priceOfPopkornSimulation *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfPopkornSimulation = Math.floor(priceOfPopkornSimulation);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElPopkornSimulation.textContent = numberWithCommas(priceOfPopkornSimulation);
    }
})
hackedPopcornMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfHackedPopkorn){
        thisRunsContribution -= priceOfHackedPopkorn;
        numberOfHackedPopkornBought += 1;
        multiplier += 10000000;
        priceOfHackedPopkorn *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfHackedPopkorn = Math.floor(priceOfHackedPopkorn);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElHackedPopkorn.textContent = numberWithCommas(priceOfHackedPopkorn);
    }
})
noLifePopcornMarketOption.addEventListener("click", function(){
    if(thisRunsContribution >= priceOfNoLifePopkorn){
        thisRunsContribution -= priceOfNoLifePopkorn;
        numberOfNoLifePopkornBought += 1;
        multiplier += 100000000;
        priceOfNoLifePopkorn *= 1.2;
        kernalsPerClickEL.textContent = numberWithCommas(multiplier);
        priceOfNoLifePopkorn = Math.floor(priceOfNoLifePopkorn);
        personalContributionOfKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        groupKernalsEl.textContent = numberWithCommas(thisRunsContribution);
        marketOptionCostHolderElNoLifePopkorn.textContent = numberWithCommas(priceOfNoLifePopkorn);
    }
})

//create a function that changes numbers to strings with words ie: 1,000,000 = 1 million
function numberWithCommas(x) {
    if(x === "Infinit"){
        return x;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
setTimeout(function(){
    setInterval(function(){
        thisRunsContribution += numberOfSmallFireBought*.2;
        personalContributionOfKernalsEl.textContent = numberWithCommas(Math.floor(thisRunsContribution));
        groupKernalsEl.textContent = numberWithCommas(Math.floor(thisRunsContribution));
    }, 200)
}
)


