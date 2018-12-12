var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  console.log('.' + input.toLowerCase().replace(/[aeiouy]|\W/g, '').replace(/\B/g, '.'))
})
