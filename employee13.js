class EmployeePayrollData {
    // Constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }

    // Getter and Setter for name with validation
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = new RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw 'Name is Incorrect!';
        }
    }

    // Method to return employee details as a string
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";

        return `id=${this.id}, name=${this.name}, salary=${this.salary}, gender=${this.gender}, startDate=${empDate}`;
    }
}

// Creating Employee Objects
let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

try {
    employeePayrollData.name = "john"; // This should throw an error due to validation
    console.log(employeePayrollData.toString());
} catch (e) {
    console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());