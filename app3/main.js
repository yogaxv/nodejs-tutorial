const readline = require('readline')
const fs = require('fs');

const path = './data';
const filePath = path + '/contacts.json';

if(!fs.existsSync(path)) fs.mkdirSync(path);
if(!fs.existsSync(filePath)) fs.writeFileSync(filePath, JSON.stringify([]));

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// rl.question("masukan nama Anda: ", (name) => {
//     rl.question("massskan umur anda: ", (umur) =>{
//         // console.log(`nama ${name} umur ${umur}`);
//
//         const mhs = { name, umur };
//         const file = fs.readFileSync(filePath, 'utf-8');
//         const contacts = JSON.parse(file);
//
//         contacts.push(mhs);
//
//         fs.writeFileSync(filePath, JSON.stringify(contacts));
//
//         console.log('saving success');
//
//         rl.close();
//     });
// });

const question = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (param) => {
            resolve(param)
        })
    })
}

const main = async () => {
    const nama = await question("Masukan nama : ");
    const email = await question("Masukan email : ");
    const tel = await question("Masukan telepon : ");

    const mhs = { nama, email, tel };
    const file = fs.readFileSync(filePath, 'utf-8');
    const contacts = JSON.parse(file);

    contacts.push(mhs);

    fs.writeFileSync(filePath, JSON.stringify(contacts));

    console.log('saving success');

    rl.close();
}

main();