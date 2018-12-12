var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  console.log(input.split('\r\n').slice(1,-1).map(l => l.split(' ').reduce((a, v) => a + parseInt(v), 0)).filter(l => l > 1).length)
})
