// process.stdin.on('data', c => {
//   c=''+c
//   s = c.split('\r\n').slice(1, -1)
//   console.log(s.map(w => {l = w.length; return l > 10 ? w[0] + (l - 2) + w[l - 1] : w}).join('\n'))
// })
// process.stdin.on("data",n=>{n=""+n,w=n.split("\r\n").slice(1,-1),console.log(w.map(n=>{o=n.length;return o>10?n[0]+(o-2)+n[o-1]:n}).join("\n"))})
process.stdin.on("data",n=>{n=""+n,s=n.split("\r\n").slice(1,-1),console.log(s.map(s=>(l=s.length,l>10?s[0]+(l-2)+s[l-1]:s)).join("\n"))})
