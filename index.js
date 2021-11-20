function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(
        `${this.title} has${this.complete ? " " : " not "}been completed`
      );
    },
    changeTitle: function (newTitle) {
      this.title = newTitle;
    },
    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask(
  "Clean Cat Litter",
  "Take all the 💩 out of the litter box"
);
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.logState(); // Do Laundry has not been completed
task1.markCompleted();
task1.logState(); // Clean Cat Litter has been completed
//changing the title of the task1
task1.changeTitle("Go shopping and then do cleaning");

task1.logState(); //Go shopping and then do cleaning has been completed

task2.logState(); // Clean Cat Litter has been completed
task2.markCompleted();
task2.logState(); //Do Laundry has been completed
