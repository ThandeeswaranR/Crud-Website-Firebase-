let students = [];
    let editIndex = -1;

    const nameInput = document.getElementById('name');
    const batchInput = document.getElementById('BatchNo');
    const branchInput = document.getElementById('Place');
    const courseInput = document.getElementById('study');
    const pursuingInput = document.getElementById('Work');
    const Mobile = document.getElementById('Phone');
    const addButton = document.getElementById('add-btn');
    const studentList = document.getElementById('student-list');
    function renderTable() {
      studentList.innerHTML = '';
      students.forEach((student, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${student.name}</td>
          <td>${student.batch}</td>
          <td>${student.branch}</td>
          <td>${student.course}</td>
          <td>${student.pursuing}</td>
          <td>${student.Mob}</td>
          <td>
            <button class="btn btn-warning btn-sm me-1" onclick="editStudent(${index})">Edit</button>
            <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
          </td>
        `;
        studentList.appendChild(row);
      });
    }

    function addStudent() {
      const name = nameInput.value.trim();
      const batch = batchInput.value;
      const branch = branchInput.value;
      const course = courseInput.value;
      const pursuing = pursuingInput.value;
      const Mob = Mobile.value;

      if (!name || !batch || !branch || !course || !pursuing || !Mob) {
        alert('Please fill in all fields');
        return;
      }

      if (editIndex === -1) {
        students.push({ name, batch, branch, course, pursuing,Mob });
      } else {
        students[editIndex] = { name, batch, branch, course, pursuing ,Mob};
        editIndex = -1;
        addButton.textContent = 'Add Student';
      }

      nameInput.value = '';
      batchInput.value = '';
      branchInput.value = '';
      courseInput.value = '';
      pursuingInput.value = '';
      Mobile.value = '';
      renderTable();
    }

    function editStudent(index) {
      const student = students[index];
      nameInput.value = student.name;
      batchInput.value = student.batch;
      branchInput.value = student.branch;
      courseInput.value = student.course;
      pursuingInput.value = student.pursuing;
      Mobile.value = student.Mob;
      editIndex = index;
      addButton.textContent = 'Update Student';
    }

    function deleteStudent(index) {
      students.splice(index, 1);
      renderTable();
    }

    function myFunction() {
      alert('Currently displaying all student records below.');
    }

    addButton.addEventListener('click', addStudent);


    let onebtn =document.getElementById("one");
// let twobtn = document.getElementById("two");
// let threebtn = document.getElementById("three");

// let para1 =document.getElementById("p1");
// let para2 =document.getElementById("p2");

// let para3 =document.getElementById("p3");


// onebtn.addEventListener("click",()=>{
//     para1.style.display ='block';
//     para2.style.display ='none';

//     para3.style.display ='none';

// })
// twobtn.addEventListener("click",()=>{
//     para1.style.display ='none';
//     para2.style.display ='Block';

//     para3.style.display ='none';

// })
// threebtn.addEventListener("click",()=>{
//     para1.style.display ='none';
//     para2.style.display ='none';

//     para3.style.display ='block';

// })