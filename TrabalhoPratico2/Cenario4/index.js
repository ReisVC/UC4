var Student = /** @class */ (function () {
    function Student() {
        this.name = '';
        this.course = null;
        this.cpf = '';
    }
    Student.prototype.getName = function () {
        return this.name;
    };
    Student.prototype.getCpf = function () {
        return this.cpf;
    };
    Student.prototype.setName = function (newName) {
        this.name = newName;
    };
    Student.prototype.setCpf = function (newCpf) {
        this.cpf = newCpf;
    };
    Student.prototype.setCourse = function (newCourse) {
        this.course = newCourse;
    };
    Student.prototype.getCourse = function () {
        return this.course;
    };
    return Student;
}());
function getDayWeek(dayNumber) {
    switch (dayNumber) {
        case -1:
            return 'Sunday';
            break;
        case 0:
            return 'Monday';
            break;
        case 1:
            return 'Tuesday';
            break;
        case 2:
            return 'Wednesday';
            break;
        case 3:
            return 'Thursday';
            break;
        case 4:
            return 'Friday';
            break;
        case 5:
            return 'Saturday';
            break;
        case 6:
            return 'Sunday';
            break;
        default: return '';
    }
}
var SchoolClass = /** @class */ (function () {
    function SchoolClass(name) {
        this.students = [];
        this.lessons = [];
        this.dateClass = new Date('2024-12-05');
        this.name = name;
    }
    SchoolClass.prototype.setStudent = function (student) {
        console.log("The ".concat(student.getName(), " was registred!"));
        this.students.push(student);
    };
    SchoolClass.prototype.getStudent = function () {
        this.students.forEach(function (element) {
            return console.log(element.getName());
        });
    };
    SchoolClass.prototype.setLessons = function (lesson) {
        this.lessons.push(lesson);
    };
    SchoolClass.prototype.getDay = function () {
        return getDayWeek(this.dateClass.getDay());
    };
    return SchoolClass;
}());
var Lesson = /** @class */ (function () {
    function Lesson(nameLesson, lessonDate) {
        this.nameLesson = '';
        this.lessonDate = new Date('2024-12-05');
        this.nameLesson = nameLesson;
        this.lessonDate = lessonDate;
    }
    Lesson.prototype.setNameLesson = function (newName) {
        this.nameLesson = newName;
    };
    Lesson.prototype.getNameLesson = function () {
        return this.nameLesson;
    };
    Lesson.prototype.getDay = function () {
        return getDayWeek(this.lessonDate.getDay());
    };
    return Lesson;
}());
var Teacher = /** @class */ (function () {
    function Teacher(name, cpf) {
        this.nameTeacher = name;
        this.cpf = cpf;
    }
    Teacher.prototype.setName = function (newName) {
        this.nameTeacher = newName;
    };
    Teacher.prototype.getName = function () {
        return this.nameTeacher;
    };
    Teacher.prototype.setCpf = function (newCpf) {
        this.cpf = newCpf;
    };
    Teacher.prototype.getCpf = function () {
        return this.cpf;
    };
    return Teacher;
}());
var Subject = /** @class */ (function () {
    function Subject(nameSubject, weekDays, professor) {
        this.nameSubject = nameSubject;
        this.weekDays = weekDays;
        this.professor = professor;
    }
    Subject.prototype.setNameSub = function (newSub) {
        this.nameSubject = newSub;
    };
    Subject.prototype.getNameSub = function () {
        return this.nameSubject;
    };
    Subject.prototype.getDays = function () {
        this.weekDays.forEach(function (element) {
            return console.log(getDayWeek(element.getDay()));
        });
    };
    return Subject;
}());
var professor1 = new Teacher('Gustavo Berned', '123.123.123-76');
var professor2 = new Teacher('Lucas Alves', '123.123.123-99');
var professor3 = new Teacher('Mária Cláudia', '123.123.123-82');
var date;
var english = new Subject('English', [new Date('2024-12-05'), new Date('2024-12-06')], professor3);
var student1 = new Student();
student1.setName('Vitor Reis');
student1.setCpf('123.123.123-12');
student1.setCourse(english);
var student2 = new Student();
student2.setName('Lucas Luut');
student2.setCpf('123.123.123-74');
student1.setCourse(english);
var pronoun = new Lesson('Pronouns', new Date('2024-12-04'));
var verbs = new Lesson('Verbs', new Date('2024-11-27'));
var schoolClass = new SchoolClass('English School');
schoolClass.setStudent(student1);
schoolClass.setStudent(student2);
schoolClass.setLessons(pronoun);
schoolClass.setLessons(verbs);
console.log(schoolClass.getDay());
schoolClass.getStudent();
english.getDays();
