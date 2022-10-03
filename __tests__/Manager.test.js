const Manager = require("../lib/Manager");

describe("Initialization", () => {
    it("Attributes should be present.", () => {
        const manager = new Manager("Jack", 1, "jack@email.com", 1234);

        expect(manager.name).toBe("Jack");
        expect(manager.id).toBe(1);
        expect(manager.email).toBe("jack@email.com");
        expect(manager.officeNumber).toBe(1234);
    });
    
    it("Instance methods return correct values.", () => {
        const manager = new Manager("Jill", 2, "jill@email.com", );

        expect(manager.getName()).toBe("Jill");
        expect(manager.getId()).toBe(2);
        expect(manager.getEmail()).toBe("jill@email.com");
        expect(manager.getRole()).toBe("Manager");
    });
});
