const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

function findDayOfWeek(k, s) {
    let newArray = [...weekdays];
    while (newArray.length < s + weekdays.indexOf(k) + 1) {
        newArray.push(...weekdays);
    }
    return newArray[weekdays.indexOf(k) + s];
}

console.log(findDayOfWeek('sat', 33));