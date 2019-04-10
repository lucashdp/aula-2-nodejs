const fs = require('fs');
const chalk = require('chalk');
const file = "arquivo.txt";

const addTask = (name, description) => {
    const task = {
        name,
        description
    };

    let jsonFile = loadTasks(file);

    if (!jsonFile || !jsonFile.length)
        jsonFile = [];

    if (!hasTask(jsonFile, task))
        jsonFile.push(task);

    fs.writeFileSync(file, JSON.stringify(jsonFile))
}

const hasTask = (jsonFile, task) => {
    const taskReturned = jsonFile.find((t) => { return t.name === task.name });
    if (taskReturned) {
        chalk.red.bold.inverse('Task already exists');
        return true;
    }
    else
        return false;
}

const loadTasks = (file) => {
    try {
        const tasksJson = fs.readFileSync(file);
        return JSON.parse(tasksJson.toString());
    } catch (err) {
        return [];
    }
}

const removeTask = (name) => {
    let jsonFile = loadTasks(file);

    const taskToRemove = jsonFile.find((t) => { return t.name === name });

    if (taskToRemove)
        jsonFile = jsonFile.filter((t) => { return t.name !== name })

    fs.writeFileSync(file, JSON.stringify(jsonFile))
}

const findTask = (name) => {
    let jsonFile = loadTasks(file);

    const task = jsonFile.find((t) => { return t.name === name });

    console.log(task);
}

const listTasks = () => {
    let jsonFile = loadTasks(file);

    jsonFile.forEach((task) => { console.log(task) });
}

module.exports = {
    addTask,
    removeTask,
    findTask,
    listTasks
}