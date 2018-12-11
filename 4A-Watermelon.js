// process.stdin.on('data',c=>console.log(Math.pow(2,c.toString())%24>8?"YES":"NO"))
// process.stdin.on('data',c=>{a=c.toString();console.log(c>2&&c%2==0?"YES":"NO")})
process.stdin.on('data',c=>{a=Number(c);console.log(c>2&&c%2==0?"YES":"NO")})
