const Intern = require("../lib/Intern");

describe("Initialization", () => {
    it("Attributes should be present.", () => {
        const intern = new Intern("Jack", 1, "jack@email.com", "Auburn");

        expect(intern.name).toBe("Jack");
        expect(intern.id).toBe(1);
        expect(intern.email).toBe("jack@email.com");
        expect(intern.school).toBe("Auburn");
    });
    
    it("Instance methods return correct values.", () => {
        const intern = new Intern("Jill", 2, "jill@email.com", "Alabama");

        expect(intern.getName()).toBe("Jill");
        expect(intern.getId()).toBe(2);
        expect(intern.getEmail()).toBe("jill@email.com");
        expect(intern.getSchool()).toBe("Alabama");
        expect(intern.getRole()).toBe("Intern");
    });
});
