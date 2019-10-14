let day = "";


const dayOfBirth = (day, month, year) => {
    
    day = parseInt(day)
    month = parseInt(month)
    year = parseInt(year)

    
    if(month < 3){
        month = month + 12;
        year = year - 1;
    }

    let firstTwoDigitsOfYear = Math.floor(year / 100);
    let lastTwoDigitsOfYear = year - (100 * firstTwoDigitsOfYear);

    let mathsShit = Math.floor(2.6 * month - 5.39) + Math.floor(lastTwoDigitsOfYear / 4) + Math.floor(firstTwoDigitsOfYear / 4) + day + lastTwoDigitsOfYear - (2 * firstTwoDigitsOfYear);
    
    let ans = mathsShit - (7 * Math.floor(mathsShit / 7));
    
    switch(true){
        case(ans == 0):
        day = "Sunday";
        alert(`You were born on a sunday`)
        break;
        case(ans == 1):
        day = "Monday";
        alert(`You were born on a monday`)
        break;
        case(ans == 2):
        day = "Tuesday";
        alert(`You were born on a tuesday`)
        break;
        case(ans == 3):
        day = "Wednesday";
        alert(`You were born on a wednesday`)
        break;
        case(ans == 4):
        day = "Thursday";
        alert(`You were born on a thursday`)
        break;
        case(ans == 5):
        day = "Friday";
        alert(`You were born on a friday`)
        break;
        default:
        day = "saturday";
        alert(`You were born on a saturday`)
    }
    return day
    

}
let userInputDay = prompt("Enter the date of your birthday \"DD\"")
let userInputMonth = prompt("Enter the month of your birthday \"MM\"")
let userInputYear = prompt("Enter the year of your birthday \"YYYY\"") 
dayOfBirth(userInputDay, userInputMonth, userInputYear);

