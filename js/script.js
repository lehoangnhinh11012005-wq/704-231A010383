// Lấy danh sách công việc từ localStorage
function getTasks() {
    let tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
}

// Lưu danh sách công việc
function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Thêm công việc
function addTask() {
    let name = document.getElementById("taskName").value;
    let priority = document.getElementById("priority").value;

    let tasks = getTasks();
    tasks.push({
        name: name,
        priority: priority
    });

    saveTasks(tasks);

    alert("Đã thêm công việc!");
    window.location.href = "index.html"; // quay về trang chủ
    return false;
}

// Hiển thị công việc (chỉ chạy ở index.html)
function displayTasks() {
    let list = document.getElementById("taskList");
    if (!list) return;

    let tasks = getTasks();
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        let div = document.createElement("div");
        div.className = "task";
        div.innerHTML = `
            <b>${task.name}</b><br>
            <i>${task.priority}</i>
        `;
        list.appendChild(div);
    });
}

displayTasks();
