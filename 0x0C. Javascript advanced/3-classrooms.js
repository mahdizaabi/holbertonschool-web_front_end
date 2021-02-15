function createClassRoom(numbersOfStudents ){
    function studentSeat(seat){
        return function(){
            return seat
        }
    }
    let students = [];
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1))
    }
    return students;
}
/* Closure calling createclassrom 10 times */
const classRoom = createClassRoom(10);

/* Test */
console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());