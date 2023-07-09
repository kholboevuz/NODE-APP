const os = require("os")
//platform
console.log(os.platform())
//Arch
console.log(os.arch());
//CPU
console.log(os.cpus());                         
//free memory of systeam
console.log(os.freemem());

//more memory

console.log(os.totalmem()/8);

//ishlash vaqti
console.log(os.uptime());