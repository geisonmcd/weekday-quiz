Given an array of weekdays

const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

Implement the function findDayOfWeek that receives a day of the week (s) and a number (k).
Return the weekday that would fall on the number (k) after the weekday (s)
 
 
function findDayOfWeek(k, s) {
    let newArray = [...weekdays];
    while (newArray.length < s + weekdays.indexOf(k) + 1) {
        newArray.push(...weekdays);
    }
    return newArray[weekdays.indexOf(k) + s];
}

const findDayOfWeek2 = (k, s) => {
    const mod = s % 7
    const toAdd = (weekdays.indexOf(k) + 1 + mod) % 7
    return weekdays[toAdd-1]
}

Example:

findDayOfWeek('mon', 1) // returns 'tue'
findDayOfWeek('tue', 4) // returns 'sat'
findDayOfWeek('wed', 22) // returns 'thu'

//Comparison between both functions
const numberS = 1000000000000
const weekDay = 'sat'
console.time('Geison')
console.log(findDayOfWeek(weekDay, numberS));
console.timeEnd('Geison')
console.time('Patrick')
console.log(findDayOfWeek2(weekDay, numberS));
console.timeEnd('Patrick')
