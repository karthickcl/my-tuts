const {readFile, writeFile, realpathSync} = require('fs');
const { resourceLimits } = require('worker_threads');

readFile('FIRST.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
    }
    const one = result;
    console.log(one);
readFile('SECOND.txt','utf8',(err,result)=>{
    if (err) {
        console.log(err);
        return;
        }
    const two = result;
    console.log(two);  
    writeFile('result-aync.txt',`here is the result: ${one}, ${two}`,(err,result)=>{
        if (err) {
            console.log(err);
            return;
    }
    const third = result;
    console.log(third);
    })              
    })
}) 