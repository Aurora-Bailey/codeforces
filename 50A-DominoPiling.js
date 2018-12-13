var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  console.log(Math.floor(input.split(' ').reduce((a, v) => a * v, 1) / 2))
})
