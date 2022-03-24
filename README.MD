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


Example:

findDayOfWeek('mon', 1) // returns 'tue'
findDayOfWeek('tue', 4) // returns 'sat'
findDayOfWeek('wed', 22) // returns 'thu'
