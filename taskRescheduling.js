let tasks = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"];

for (let i = 0; i < tasks.length - 1; i++) {
    tasks[i] = tasks[i + 1];
}
tasks.length--; 

tasks.length += 2; 
for (let i = tasks.length - 1; i >= 2; i--) {
    tasks[i] = tasks[i - 2];
}
tasks[0] = "High-Priority Task 1";
tasks[1] = "High-Priority Task 2";

tasks[tasks.length - 1] = "New Task";

console.log("Updated Task List:", tasks);
