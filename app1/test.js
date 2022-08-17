const hello = (name) => name;

const sayName = (name) => `my name is ${name}`;

// const defaultFunc = (name) => `ini adalah ${name}`;

const mahasiswa = {
    nama: "Yoga Prasetiyo",
    semester: 3,
    cetakMahasiswa() {
        return `Halo, nama saya ${this.nama} saya semester ${this.semester}`
    }
}

class Orang {
    constructor() {
        console.log("Object orang telah dibuat");
    }

    // constructor(props) {
    //     console.log("Object orang telah dibuat");
    // }
}


// module.exports.sayName = sayName;
// module.exports.hello = hello;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     sayName: sayName,
//     hello: hello,
//     mahasiswa: mahasiswa,
//     Orang: Orang,
// }

module.exports = { sayName, hello, mahasiswa, Orang}