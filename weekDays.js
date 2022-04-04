const weekdays = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

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

const numberS = 100000000
const weekDay = 'sat'
console.time('Geison')
console.log(findDayOfWeek(weekDay, numberS));
console.timeEnd('Geison')
console.time('Patrick')
console.log(findDayOfWeek2(weekDay, numberS));
console.timeEnd('Patrick')
