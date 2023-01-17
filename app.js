const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('first.txt','utf-8')
const second = readFileSync('second.txt','utf-8')

writeFileSync('result-sync.txt',`here is the result: ${first}, ${second}`,{flag:'a'})