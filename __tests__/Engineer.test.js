const Engineer = require("../lib/Engineer");

describe("Initialization", () => {
    it("Attributes should be present.", () => {
        const engineer = new Engineer("Jack", 1, "jack@email.com", "github.com/jack");

        expect(engineer.name).toBe("Jack");
        expect(engineer.id).toBe(1);
        expect(engineer.email).toBe("jack@email.com");
        expect(engineer.github).toBe("github.com/jack");
    });
    
    it("Instance methods return correct values.", () => {
        const engineer = new Engineer("Jill", 2, "jill@email.com", "github.com/jill");

        expect(engineer.getName()).toBe("Jill");
        expect(engineer.getId()).toBe(2);
        expect(engineer.getEmail()).toBe("jill@email.com");
        expect(engineer.getGithub()).toBe("github.com/jill");
        expect(engineer.getRole()).toBe("Engineer");
    });
});
