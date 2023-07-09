const fs = require("fs")
const path = require("path")

//create folder

// fs.mkdir(path.join(__dirname , 'folder') , {} , (err)=>{
// if(err) throw err
// console.log("Create new folder succesfly");
// })

//create new file

// fs.writeFile(path.join(__dirname, "/folder"  , "user.txt"), 'Node orqali yaratildi'  , (err) =>{
//     if(err) throw err
//     console.log("Create new file succesfly");
// })

// fs.appendFile(path.join(__dirname , "/folder" , "user.txt"), " Sevinchbek" , (err)=>{

//     if(err) throw err
//     console.log("File add succesfly");
// })

fs.readFile(path.join(__dirname, "/folder" , "user.txt") , "utf8", (err, data)=>{
if(err) throw err
console.log(data);
})

fs.rename(
path.join(__dirname, "/folder" , "user.txt"),
path.join(__dirname, "/folder" , "users.txt"), 
(err)=>{
if(err) throw err
console.log("File add name succesfly");
})






