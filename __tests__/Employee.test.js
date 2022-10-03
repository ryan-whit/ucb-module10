const Employee = require("../lib/Employee");

describe("Initialization", () => {
    it("Attributes should be present.", () => {
        const employee = new Employee("Jack", 1, "jack@email.com");

        expect(employee.name).toBe("Jack");
        expect(employee.id).toBe(1);
        expect(employee.email).toBe("jack@email.com");
    });
    
    it("Instance methods return correct values.", () => {
        const employee = new Employee("Jill", 2, "jill@email.com");

        expect(employee.getName()).toBe("Jill");
        expect(employee.getId()).toBe(2);
        expect(employee.getEmail()).toBe("jill@email.com");
        expect(employee.getRole()).toBe("Employee");
    });
});
