//1.Globals -No Window

//__dirname - path to curent directory
//__filename- file name
//require - function to use modules(CommonJS)
//module - info about current module (file)
// process- info about env where the program is being executed



//2.Modules
//CommonJS, every file is module(by default)
//Modules - Encapsulated Code(only share minimum)
// const names=require(`./names`);
// require(`./mind-grenade`)

// const sayHi=require(`./utils`);



// sayHi("Susan");
// sayHi(names["john"]);
// sayHi(names["peter"]);


//3.Built-in Modules

// const os=require(`os`);
//info about current user
// const user=os.userInfo();
// console.log(user);

//method returns the system uptime in seconds.
// console.log(`The System Uptime is ${os.uptime()}`);
// const currentOS={
//     name:os.type(),
//     release:os.release(),
//     totalMem:os.totalmem(),
//     freeMem:os.freemem(),
// }
// console.log(currentOS);
// const path=require('path');
// const filePath=path.join('./content/test.txt');
// console.log(filePath);
// console.log(path.basename(filePath));

// const absolute=path.resolve(__dirname,filePath);
// console.log(absolute);
// const fs=require('fs');
// const readFileSync=fs.readFileSync;
// const writeFileSync=fs.writeFileSync;
// const first=readFileSync('./content/first.txt','utf8');
// const second=readFileSync('./content/second.txt','utf8');
// console.log(first,second);
// writeFileSync('./content/result.txt',`Here is the result:${first},${second}`,{flag:'a'})

// const {readFile,writeFile} =require('fs');

// readFile('./content/first.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//    const first=result;
//    readFile('./content/second.txt','utf8',(err,result)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     const second=result;
//     writeFile('./content/result.txt',`Here is the result:${first},${second}`,(err,result)=>{
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log(result);
//     });
//    })
// })


// const http=require('http');
// const server=http.createServer((req,res)=>{
//     if(req.url==='/'){
//         res.end('Welcome to home page!');
//     }
//     if(req.url==='/about'){
//         res.end('about us');
//     }
//     res.end(`
//     <h1>Oops</h1>
//     <p>We cant seem to find the page!</p>
//     <a href='/'>Back</a>`)
// })

// server.listen(5000);

//4.NPM
//local dependency - use it only in this project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json - manifest file(stores important info about project/package)
//manual approach(create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//nmp init -y (everything default)
