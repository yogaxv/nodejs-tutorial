// console.log(process.argv);
// console.log(process.argv[1]);

// const yargs = require('yargs');

require('yargs') // eslint-disable-line
    .command('contact add [nama] [email] [tel]', 'Menu kontak add', yargs => {
        yargs.positional('nama', {
            describe: 'Nama mahasiswa',
            type: 'string',
        })
        .positional('email', {
            describe: 'email mahasisa',
            type: 'string',
            // default: 8080
        })
        .positional('tel', {
            describe: 'telepon mahasisa',
            type: 'string',
        }).require('nama', 'Nama tidak boleh kosong')
    }, function (argv) {
        console.log('hello', argv.nama, 'welcome to yargs!')

    })
    // .command('get [port]', 'get some data', yargs => {
    //     yargs.positional('port', {
    //         require: false,
    //         describe: 'port to bind on',
    //         default: 8080
    //     })
    // })
    // .option('verbose', {
    //     alias: 'v',
    //     type: 'boolean',
    //     description: 'Run with verbose logging'
    // })
    .argv