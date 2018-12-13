var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  console.log(input.split('\r\n').slice(1,-1).reduce((a, v) => v.includes('+') ? a+1:a-1, 0))
})
