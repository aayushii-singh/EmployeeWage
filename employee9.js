const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;

// Ensure empDailyHrsMap and empDailyWageArr are initialized
let empDailyHrsMap = new Map([
    [1, 8], [2, 8], [3, 4], [4, 8], [5, 4], [6, 0], [7, 8], [8, 8], [9, 4], [10, 0]
]);
let empDailyWageArr = Array.from(empDailyHrsMap.values()).map(hours => hours * 20); // Assuming WAGE_PER_HOUR = 20

let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);

console.log("UC9A Emp Wage with Arrow: " + 
    "Total Hours: " + totalHours + 
    " Total Wages: " + totalSalary
);

let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key); 
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);
