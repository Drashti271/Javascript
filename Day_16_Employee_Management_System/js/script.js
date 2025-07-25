let employees = [];
let editIndex = -1;

// Form submission handler
function handleSubmit(event) {
    event.preventDefault();

    let id = document.getElementById("empId").value.trim();
    let name = document.getElementById("empName").value.trim();
    let department = document.getElementById("empDept").value.trim();
    let salary = document.getElementById("empSalary").value.trim();

    if (!id || !name || !department || isNaN(salary)) {
        alert("Please fill all fields correctly. Salary must be a number.");
        return;
    }

    let employee = { id, name, department, salary };

    if (editIndex === -1) {
        employees.push(employee); 
    } else {
        employees[editIndex] = employee; 
        editIndex = -1;
    }

    renderTable();
    event.target.reset(); 
}

// Render table with optional filter
function renderTable() {
    let tableBody = document.getElementById("employeeTableBody");
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    tableBody.innerHTML = "";

    let filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(searchTerm) ||
        emp.department.toLowerCase().includes(searchTerm)
    );

    filtered.forEach((emp, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.department}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="btn btn-sm btn-warning" onclick="editEmployee(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

// Edit
function editEmployee(index) {
    let emp = employees[index];
    document.getElementById("empId").value = emp.id;
    document.getElementById("empName").value = emp.name;
    document.getElementById("empDept").value = emp.department;
    document.getElementById("empSalary").value = emp.salary;
    editIndex = index;
}

// Delete
function deleteEmployee(index) {
    if (confirm("Are you sure you want to delete this employee?")) {
        employees.splice(index, 1);
        renderTable();
    }
}

// Initial call
window.onload = () => {
    renderTable();
};
