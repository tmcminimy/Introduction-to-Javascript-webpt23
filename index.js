/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18
const age = 34
if (age > votingAge){
console.log(true);    
}
else {
    console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var bestFood = 'Tamale Pie'
var opinion = Math.round(Math.random())
if (opinion == 1){
    bestFood = 'Tamale Pie';
}
else if (opinion == 0) {
    bestFood = 'Sushi';
}
console.log(bestFood);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number('1999');



//Task d: Write a function to multiply a*b 

function multiply(a, b) {
    return a * b;
}
console.log(multiply(100, 100));



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a, b) {
    return a * b;
}
console.log(dogYears(34, 7));

/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFood(result){
    console.log("You should feed your dog ",result," lbs. of dog food!")
}

function adult(weight){
    if (weight <=5){
        dogFood(weight * 0.5);
    }
    else if (weight <= 10){
        dogFood(weight * .04);
    }
    else if (weight <= 15){
        dogFood(weight * .03);
    }
    else {
        dogFood(weight * .02);
    }
}

function puppy(age, weight){
    if (age >= .166666 && age <= .3333333){
        dogFood(weight * .1)
    }
    else if (age >= .3333333 && age <=.583333){
        dogFood(weight * .05);
    }
    else {
        dogFood(weight * .04);
    }
}

function howMuch(age, weight){
    if (age <= 1){
        puppy(age, weight);
    }
    else {
        adult(weight);
    }
}
howMuch(1,15);


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var computerChoice = Math.random();
    if (computerChoice <= .34){
        computerChoice = "Rock";
    }
    else if (computerChoice <= .67){
        computerChoice="Paper";
    }
    else {
        computerChoice = "Scissors";
    }
  console.log(computerChoice)

var guess = "Rock"
function Game(guess){
    var whole_num = Math.ceil(Math.random() * 3);
    var compGuess = " ";

    if (whole_num == 1){
        compGuess = "Rock!"
    } else if (whole_num == 2){
        compGuess = "Paper!"
    } else {
        compGuess = "Scissors!"
    }
    if (guess == "Rock" && compGuess == "Scissors!"){
        win = true;
    }else if (guess == "scissors" && compGuess == "Paper!"){
        win = true;
    }else if (guess == "paper" && compGuess == "Rock!"){
        win = true;
    }else {
        win = false;
    }
    if (win = true){
        return "You won!";
    }else {
        return "You lost!";
    }
}  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function km2mi(kms){
    return kms * 0.621371
}
console.log(km2mi(10));

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function ft2cm(feet){
    return feet * 30.48
}
console.log(ft2cm(10));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong() {  
    var bottles;
    var bottlesLeft;
    for (let i = 99; i >= 1; i--) {
      if (i == 1) {
        bottles = "bottle";
        bottlesLeft = "No bottles of soda on the wall!";
      }else {
        bottles = "bottles";
        bottlesLeft = i - 1 + " bottles of soda on the wall!";
      } console.log(i+ " " + bottles + " of soda on the wall,");
      console.log(i+ " " + bottles + " of soda,");
      console.log("Take one down, pass it around,");
      console.log(bottlesLeft);
      }      
  }
  console.log(annoyingSong());



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function letterGrade () {
    var grading = Math.round(Math.random() * 100) ;
    if (grading >= 90 && grading <=100){
        console.log("You got an A")
    }else if (grading >= 80 && grading <=89){
        console.log("You got a B")
    }else if (grading >= 70 && grading <=79){
        console.log("You got a C")
    }else if (grading >= 60 && grading <=69){
        console.log("You got a D")
    }else {
        console.log("You got an F. Your efforts are about equal to Travis attempting to do javascript")
    }
}
letterGrade();
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





