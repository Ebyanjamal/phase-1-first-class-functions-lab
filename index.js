const returnFirstTwoDrivers = function(){
 return ( ['Antonia', 'Nuru', 'Amari', 'Mo']).slice(0,2);
}

const returnLastTwoDrivers= function(){
 return (['Antonia', 'Nuru', 'Amari', 'Mo']).slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers , returnLastTwoDrivers]; 

let num1 = 5
let num2 = 25
const createFareMultiplier= function(num){
  return function(num2){ 
    return num1 * num2; 
  }
}; 
const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);
