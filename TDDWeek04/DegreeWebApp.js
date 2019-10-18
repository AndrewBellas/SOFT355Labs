class Student{
    name = "no name";
    stage = 0;

    constructor(name, stage){
        this.name = name;
        this.stage = stage;
    }

    progress(){
        this.stage += 1;
        return this.stage;
    }

    setStage(i){
        if (i => 0 && i <= 3){
        this.stage = i;
    }
    else{
        console.log("ERROR: NO SUCH STAGE EXISTS.");
        }

    }  
    
    registerForModule(modName){
        var module = new Module(modName);
        
    }
}

class Lecturer{
    name = "no name";
    numberOfModules = 0;

    constructor(name, numberOfModules){
        this.name = name;
        this.numberOfModules = numberOfModules;
    }

    changeModules(i){
        this.numberOfModules = i;
    }
}

class Module{
    name = "null";
    currentEnrol = 0;
    lecturer = "null";

    constructor(name){
        this.name = name;
    }

}

suite("JavaScript tests", function() {
    test("Testing if the progress function works", function() {
        var studentOne = new Student("Andrew Bellas", 0);
        chai.assert.equal(studentOne.progress(), 1, "The student stage is 1.");
    })
});