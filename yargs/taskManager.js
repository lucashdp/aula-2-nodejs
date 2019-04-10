const yargs = require('yargs');
const taskUtils = require('./utils/taskUtils');

yargs.command({
    command: 'add',
    describe: 'add new task',
    builder: {
        name: {
            describe: 'name',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'task',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        taskUtils.addTask(argv.name, argv.description);
        console.log(argv.name);
        console.log(argv.description);
    }
})
    .command({
        command: 'remove',
        describe: 'remove a task',
        builder: {
            name: {
                describe: 'name',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            taskUtils.removeTask(argv.name);
            console.log(argv.name);
        }
    })
    .command({
        command: 'find',
        describe: 'find a task',
        builder: {
            name: {
                describe: 'name',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            taskUtils.findTask(argv.name);
            console.log(argv.name);
        }
    })
    .command({
        command: 'list',
        describe: 'list tasks',
        handler: (argv) => {
            taskUtils.listTasks();
        }
    });

yargs.parse();