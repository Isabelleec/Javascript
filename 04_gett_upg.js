class Student {

    constructor(name = "", age = 0) {
        this.name = name;
        this.age = age;
        this.subjects = [];
    }



    greeting() {
        console.log("Hello " + this.name);
    }



    add_subject(title = "", points = 0) {
        this.subjects.push(new Subject(title, points));
    }



    get courses() {
        
       return this.subjects.map(current_subject => current.subjects.title)
        
    }

    }



    class Subject {
        constructor(title = "", points = 0) {

        this.title = title;

        this.points = points;

    }

    }



    let student1 = new Student("Micke", 44);

    student1.add_subject("JavaScript", 55);

    student1.add_subject("PHP", 40);



    console.log(student1.courses);

