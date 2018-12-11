// process.stdin.on('data',c=>{a=c.toString().split(' ');console.log(Math.ceil(a[0]/a[2])*Math.ceil(a[1]/a[2]))})
// process.stdin.on('data',c=>{[n,m,a]=c.toString().split(' ');console.log(Math.ceil(n/a)*Math.ceil(m/a))})
process.stdin.on('data',c=>{[n,m,a]=c.toString().split(' ');x=Math.ceil;console.log(x(n/a)*x(m/a))})
// process.stdin.on('data',c=>{[a,b,c]=c.toString().split(' ');console.log((~~(a/c)+!!(a%c))*(~~(b/c)+!!(b%c)))})
// a=readline().split(' ');x=Math.ceil;print(x(a[0]/a[2])*x(a[1]/a[2])) JavaScript
