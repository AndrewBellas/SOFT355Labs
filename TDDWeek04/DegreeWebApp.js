class Student{
    name = "no name";
    stage = 0;
    module = "null";

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

    enrollOnModule(module){
        module.studentSet.add(this.name);
        this.module = module.name;
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

    test("Testing whether a student has been enrolled to a module.", function(){
        var studentTwo = new Student("Evan Edwards", 0);
        var moduleTwo = new Module("ISAD155");
        studentTwo.enrollOnModule(moduleTwo);
        //chai.assert.equal(studentTwo.module, "ISAD155", 'Student is enrolled on module ISAD155.');
        chai.assert.equal(moduleTwo.studentSet.has(studentTwo.name), true, "studentTwo is enrolled on moduleTwo.");
    })
});