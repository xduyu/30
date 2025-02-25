const pupilName = document.getElementById('pupil-name');
const pupilSurName = document.getElementById('pupil-sur-name');
const pupilAbout = document.getElementById('pupil-about');
const pupilCourse = document.getElementById('pupil-course');
const pupilFaculty = document.getElementById('pupil-faculty');
const addNewStudent = document.getElementById('add-new-student');
const teacherName = document.getElementById('teacher-name');
const teacherSurName = document.getElementById('teacher-sur-name');
const teacherAbout = document.getElementById('teacher-about');
const teacherDirection = document.getElementById('teacher-direction');
const addNewTeacher = document.getElementById('add-new-teacher');
const userslist = document.getElementById('userslist');


class User {
    constructor(username, usersurname, userabout) {
        this.name = username;
        this.surname = usersurname;
        this.about = userabout;
    }
    getInfo() {
        return `Пользователь: ${this.surname}, ${this.name}`
    }
}

class Pupil extends User {
    constructor(username, usersurname, userabout, usercourse, userfaculty) {
        super(username, usersurname, userabout)
        this.role = 'student';
        this.course = usercourse;
        this.faculty = userfaculty;
    }
    getInfo() {

    }
}

class Teacher extends User {
    constructor(username, usersurname, userabout, userdirection) {
        super(username, usersurname, userabout)
        this.role = 'teacher';
        this.direction = userdirection;
    }
}

class Admin extends User {
    constructor(username, usersurname, userabout) {
        super(username, usersurname, userabout)
        this.role = 'admin';
    }
}

addNewStudent.addEventListener('click', () => {
    let name = pupilName.value;
    let surname = pupilSurName.value;
    let about = pupilAbout.value;
    let course = pupilCourse.value;
    let faculty = pupilFaculty.value;
    if (pupilName.value, pupilSurName.value, pupilCourse.value, pupilFaculty.value === "") {
        console.log('error u')
        return null
    } else {
        console.log("accepted")
    }
    if (about === '') {
        about = 'Не указано'
    }
    let newPupil = new Pupil(name, surname, about, course, faculty)
    console.log(newPupil)
    let usercard = document.createElement('div')
    let userCardp = document.createElement('p')
    userCardp.textContent = `STUDENT: name: ${name}, surname: ${surname} faculty: ${faculty}, about: ${about}`
    usercard.append(userCardp)
    userslist.append(usercard)
})

addNewTeacher.addEventListener('click', () => {
    let tName = teacherName.value
    let tSurName = teacherSurName.value
    let tAbout = teacherAbout.value
    let tDirection = teacherDirection.value
    if (teacherName.value, teacherSurName.value, teacherAbout.value, teacherDirection.value === "") {
        console.log('error t')
        return null
    } else {
        console.log("accepted")
    }
    if (tAbout === '') {
        tAbout = 'Не указано'
    }
    let newTeacher = new Teacher(tName, tSurName, tAbout, tDirection)
    console.log(newTeacher)
    let usercard = document.createElement('div')
    let userCardp = document.createElement('p')
    userCardp.textContent = `TEACHER: name: ${tName}, surname: ${tSurName} about: ${tAbout}, direction: ${tDirection}`
    usercard.append(userCardp)
    userslist.append(usercard)
})