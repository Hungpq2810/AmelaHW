// bai 1: getCurrentDate with /

function getCurrentDate(separator: string): string {
    const today = new Date();
    return `${today.getDate() < 10 ? "0" + today.getDate() : today.getDate()}${separator}${today.getMonth() + 1 < 10 ? "0" + (today.getMonth() + 1) : today.getMonth() + 1}${separator}${today.getFullYear()}`;
  }

console.log(getCurrentDate("/"));

// bai 2: get number of days of current month 
function getDaysInMonth(month: number, year: number): number {
    return new Date(year, month, 0).getDate();
}

console.log(getDaysInMonth(11, 2021));

// bai 3: check weekend

function isWeekend(date: Date): boolean {
    const day = date.getDay();
    console.log(day);
    
    return day === 0 || day === 6;
}

const today = new Date();
console.log(isWeekend(today));
console.log(isWeekend(new Date("2024-04-13")));

// bai 4: return minute from hour and minute

function getMinuteFromHourAndMinute(hour: number, minute: number): number {
    return hour * 60 + minute;
}

console.log(getMinuteFromHourAndMinute(12, 30));

// bai 5: check number of days from start of the year

function getDaysSinceStartOfYear(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const diffInMs = date.getTime() - startOfYear.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  }
console.log(getDaysSinceStartOfYear(today));

// bai 6: calculate age

function calculateAge(birthday: Date): number {
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }
    return age;
}

console.log(calculateAge(new Date("2000-01-01")));

// utility: format date
function formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
    const day = String(date.getDate()).padStart(2, '0'); // Add leading zero for single-digit days

  return `${day}/${month}/${year}`;
}

// bai 7: get start date of week

function getStartDateOfWeek(date: Date): string {
    date.setDate(date.getDate() - date.getDay());
    return formatDate(date);
}

console.log(getStartDateOfWeek(today));

// bai 8: get end date of month

function getEndDateOfMonth(date: Date): string {    

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const lastDay = new Date(year, month, 0).getDate();
    return `${lastDay}/${month}/${year}`;

}

console.log(getEndDateOfMonth(today));

// bai 9: count to next new year
function countToNextYear(date: Date): number {
    const nextYear = new Date(date.getFullYear() + 1, 0, 1);
    const diffInMs = nextYear.getTime() - date.getTime();
    return Math.floor(diffInMs / (1000 * 60 * 60 * 24));
}

console.log(countToNextYear(today));

// bai 10: calculate a time + seconds

function calculateTime(str: String, x: number ): string {
    let time = str.split(":");
    let h = Number(time[0]);
    let m = Number(time[1]);
    let s = Number(time[2]);

    let secNow = h*3600 + m*60 + s;
    let secNext = secNow + x;

    let hNext = Math.floor(secNext/3600);
    let mNext = Math.floor((secNext - hNext*3600)/60);
    let sNext = secNext - hNext*3600 - mNext*60;

    return `${hNext%24}:${mNext}:${sNext}`;
}

console.log(calculateTime("21:45:58", 1999));

// bai 11: reset data by clear all values, but not child key in object

function resetData(obj: any) {
    for (let key in obj) {
        if (typeof obj[key] === "object") {
            resetData(obj[key]);
        } else {
           if (typeof obj[key] === "string") {
               obj[key] = "";
           }
           if (typeof obj[key] === "number") {
               obj[key] = 0;
           }
        }
    }

    return obj;
}

const obj = {
    name: {
        first: "John",
        last: "Doe"
    },
    a: {
        a: [1,2,3],
        b: {
            a: 2
        }
    },
    c: ['a','b']
}

console.log(resetData(obj));
