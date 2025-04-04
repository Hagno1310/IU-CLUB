let students = []

function getStudent() {
    const students = localStorage.getItem('students');
    return students ? JSON.parse(students) : [];
}

function addStudent() {
    const name = prompt('Nhập tên: ');
    const age = parseInt(prompt('Nhập tuổi: '));
    const score = parseFloat(prompt('Nhập điểm: '));

    if (score < 0 || score > 10) {
        alert('Điểm chỉ nằm trong khoảng 0 đến 10');
        return;
    }

    const students = getStudent();

    const student = {name, age, score};
    students.push(student);

    localStorage.setItem('students', JSON.stringify(students))
}

function showStudent() {
    const students = getStudent();

    if (students.length == 0) {
        alert('Danh sách sinh viên trống');
    }

    students.forEach(student => {
        console.log(`Tên: ${student.name} - Tuổi: ${student.age} - Điểm: ${student.score}`)
    });
}

function findStudent() {
    const students = getStudent();

    var name = prompt('Nhập tên tìm kiếm: ');
    var studentIndex = students.findIndex(student => student.name === name) 

    console.log(`Tên: ${students[studentIndex].name} - Tuổi: ${students[studentIndex].age} - Điểm: ${students[studentIndex].score}`)
}

function avgScore() {
    const students = getStudent();

    if (students.length == 0) {
        alert('Danh sách sinh viên trống')
    }

    var total = students.reduce((sum, student) => {
        return sum + student.score
    }, 0)

    console.log(`Điểm TB: ${total/(students.length)}`)
}

function runProgram() {
    do {
        var choice = (prompt(`
            Chọn chức năng: 
            1. Thêm sinh viên
            2. Hiển thị danh sách
            3. Tìm kiếm sinh viên
            4. Tính toán điểm trung bình
            5. Thoát
            `));

        switch (choice) {
            case '1':
                addStudent();
                break;
            case '2':
                showStudent();
                break;
            case '3':
                findStudent();
                break;
            case '4':
                avgScore();
                break;
            case '5':
                console.log('Đã thoát!')
                break;
        }
    } while (choice !== '5')
}