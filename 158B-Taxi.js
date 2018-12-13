// Node.js
var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  let groups = input.split('\r\n')[1].replace(/\D/g, '')
  let g = {1: 0, 2: 0, 3: 0, 4: 0}
  for (var i = 0; i < groups.length; i++) { g[groups[i]]++ }
  g[1] -= g[2] * 2 % 4
  g[1] -= g[3]
  console.log(g[4] + g[3] + Math.ceil(g[2]/2) + (g[1] > 0 ? Math.ceil(g[1]/4):0))
})
// Javascript
readline()
var s = readline().replace(/\D/g, '')
var g = [0,0,0,0,0]
for (var i = 0; i < s.length; i++) { g[s[i]]++ }
g[1] -= g[3]
if (g[1] < 1) g[1] = 0
print(g[4] + g[3] + Math.ceil((g[2] * 2 + g[1]) / 4))

// uglify
readline();for(var s=readline().replace(/\D/g,""),g=[0,0,0,0,0],i=0;i<s.length;i++)g[s[i]]++;g[1]-=g[3],g[1]<1&&(g[1]=0),print(g[4]+g[3]+Math.ceil((2*g[2]+g[1])/4));
