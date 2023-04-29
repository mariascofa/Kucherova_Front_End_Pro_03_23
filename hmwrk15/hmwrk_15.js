class Student {
  constructor(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthdayYear = birthday;
    this._attendance = [];
    this._grades = [];
    this._lessonsNumb = 25;
  }

  set grades(grade) {
    this._grades.push(grade);
  }

  get grades() {
    return this._grades;
  }

  ageCheck() {
    const currentYear = new Date().getFullYear();
    const intYear = parseInt(this.birthdayYear);
    const age = currentYear - intYear

    return age;
  }

  present(grade) {
    if (this._attendance.length < this._lessonsNumb) {
      this._attendance.push(true);
    } else {
      throw new Error("Attendance has already been filled!");
    }
  }

  absent() {
    if (this._attendance.length < this._lessonsNumb) {
      this._attendance.push(false);
    } else {
      throw new Error("Attendance has already been filled!");
    }
  }

  summary() {
    const gradeSum = this._grades.reduce((a, b) => a + b, 0);
    const gradesAmount = this._grades.length;
    const averageGrade = gradeSum / gradesAmount;
    const attendandedNumb = this._attendance.filter(
      (res) => res === true
    ).length;
    const attendanceResult = attendandedNumb / this._lessonsNumb;
    if (attendanceResult > 0.9 && averageGrade > 90) {
      return "Молодець";
    } else if (attendanceResult > 0.9 || averageGrade > 90) {
      return "Добре";
    } else {
      return "Погано";
    }
  }
}

let newStudent = new Student("Mark", "Smith", "2008");

newStudent.present();
newStudent.present();
newStudent.present();

newStudent.grades = 1;
newStudent.grades = 1;
console.log(newStudent.grades);
console.log(newStudent.summary());
console.log(newStudent.ageCheck())
