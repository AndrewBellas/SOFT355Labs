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
        module.currentEnrol+= 1;
    }
}

class Lecturer{
    name = "no name";
    numberOfModules = 0;

    constructor(name){
        this.name = name;
    }

    assignToModule(module){
        module.lecturer = this.name;
    }

    changeModules(i){
        this.numberOfModules = i;
    }
}

class Module{
    name = "null";
    currentEnrol = 0;
    lecturer = "null";
    studentSet = new Set();

    constructor(name){
        this.name = name;
    }

    enroll(student){
        this.studentSet.add(student);
    }

}

suite("JavaScript tests", function() {
    test("Testing if the progress function works", function() {
        var studentOne = new Student("Andrew Bellas", 0);
        chai.assert.equal(studentOne.progress(), 1, "The student stage is 1.");
    })
    test("Testing whether lecturers are correctly assigned to the modules.", function(){
        var lecturerOne = new Lecturer("Mike Truk", 0);
        var moduleOne = new Module("SOFT355");
        lecturerOne.assignToModule(moduleOne);
        chai.assert.equal(moduleOne.lecturer, "Mike Truk", 'Lecturer is correctly assigned.');
    })
});