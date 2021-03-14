module.exports = function toReadable (number) {
    let numbers0to9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
     let numbers10to20 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
     let numbers20to100 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

     if (number >=0 && number < 10){
        return numbers0to9[number]
     } 

     if (number >= 10 && number < 20){    
        return numbers10to20[number%10]
     }

     if (number >= 20 && number < 100){
        let sign = numbers20to100[Math.floor(number/10)]
        let tenth = numbers0to9[number%10]
        if (tenth === "zero"){
          return sign
        } else {
          return sign + " " + tenth
        }
     }

     if (number >= 100 && number < 1000){
        let hundred = numbers0to9[Math.floor(number/100)] + " hundred"
        let sign = (Math.floor(number/10))%10;
        let tenth = " " + numbers0to9[number%10]
        if (sign === 0) {
          sign = ""
        } else if (sign < 2) {
          sign = " " + numbers10to20[number%10]
          tenth = " zero";
        } else {
          sign = " " +  numbers20to100[sign]
        }

        if (tenth === " zero") {
          return hundred + sign
        } else {
          return hundred + sign +  tenth
        }
     }
  }
