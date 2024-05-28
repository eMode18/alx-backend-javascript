export default function createIteratorObject(report) {
    const departments = Object.values(report.allEmployees);

    let deptIndex = 0;
    let empIndex = 0;

    return {
        [Symbol.iterator]: function() {
            return {
                next: function() {
                    if (deptIndex < departments.length) {
                        const department = departments[deptIndex];
                        if (empIndex < department.length) {
                            const employee = department[empIndex];
                            empIndex++;
                            return { value: employee, done: false };
                        } else {
                            deptIndex++;
                            empIndex = 0;
                            return this.next(); // Recursive call to move to the next department
                        }
                    } else {
                        return { done: true };
                    }
                }
            };
        }
    };
}

