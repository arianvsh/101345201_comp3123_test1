
  const folder = "./logs";
  const fs = require("fs");

const createLogs = () => {
    fs.mkdirSync(folder);
    process.chdir(folder);
    for (let i = 0; i < 10; i++) {
      fs.writeFile(`log${i}.txt`, `log.txt file number ${i}`, (error) =>
        error ? console.error(`There is an error creating file 'log${i}.txt'`) : console.log(` 'log${i}.txt'`)
      );
    }
  }      
    

    const removeLogs = () => {
        if(fs.existsSync(folder)){
            for(let i =0; i<10; i++){
                fs.unlink(`./logs/log${i}.txt`,(err) => {
                    if(err) throw err;
                    console.log(`delete files...log${i}.txt`)})
            }
        }
        
        if(fs.existsSync(folder)){
            fs.rmdirSync('logs')
        }
            }

               
    


  
  
if(!fs.existsSync(folder)){
    createLogs();
}
if(fs.existsSync(folder)){
    removeLogs();

}
