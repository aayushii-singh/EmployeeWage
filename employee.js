// Sample Data Initialization
let empDailyHrsAndWageArr = [
    { dayNum: 1, dailyHours: 8, dailyWage: 160 },
    { dayNum: 2, dailyHours: 8, dailyWage: 160 },
    { dayNum: 3, dailyHours: 4, dailyWage: 80 },
    { dayNum: 4, dailyHours: 8, dailyWage: 160 },
    { dayNum: 5, dailyHours: 4, dailyWage: 80 },
    { dayNum: 6, dailyHours: 0, dailyWage: 0 },
    { dayNum: 7, dailyHours: 8, dailyWage: 160 },
    { dayNum: 8, dailyHours: 8, dailyWage: 160 },
    { dayNum: 9, dailyHours: 4, dailyWage: 80 },
    { dayNum: 10, dailyHours: 0, dailyWage: 0 }
];

// UC 11A: Calculate Total Hours & Wages
let totalWages = empDailyHrsAndWageArr
    .filter(daily => daily.dailyWage > 0)
    .reduce((total, daily) => total + daily.dailyWage, 0);

let totalHours = empDailyHrsAndWageArr
    .filter(daily => daily.dailyHours > 0)
    .reduce((total, daily) => total + daily.dailyHours, 0);

console.log("UC 11A Total Hours: " + totalHours + " Total Wages: " + totalWages);

// UC 11B: Logging Full Work Days
process.stdout.write("UC 11B Logging Full Work Days: ");
empDailyHrsAndWageArr
    .filter(daily => daily.dailyHours === 8)
    .forEach(daily => process.stdout.write("Day " + daily.dayNum + " "));

// UC 11C: Part Working Day Strings
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(daily => daily.dailyHours === 4)
    .map(daily => "Day " + daily.dayNum);

console.log("\nUC 11C Part Working Day Strings: " + partWorkingDayStrArr.join(", "));

// UC 11D: Non-Working Day Numbers
let nonWorkingDayNums = empDailyHrsAndWageArr
    .filter(daily => daily.dailyHours === 0)
    .map(daily => daily.dayNum);

console.log("UC 11D Non Working Day Numbers: " + nonWorkingDayNums.join(", "));
