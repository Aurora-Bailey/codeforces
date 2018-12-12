var input = ''
process.stdin.on('data', c => input += c)
process.stdin.on('end', () => {
  let [lineOne, lineTwo] = input.split('\r\n')
  let [n, k] = lineOne.split(' ').map(i => parseInt(i))
  let participants = lineTwo.split(' ').map(i => parseInt(i))
  console.log(participants.filter(p => p >= participants[k-1] && p > 0).length)
})
