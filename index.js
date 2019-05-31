// add solution here
function theBeatlesPlay(musicians, instruments) {
  var a = []

  for (let i = 0; i < musicians.length; i++) {
    a[i] = `I am ${musicians[i]} plays ${instruments[i]}.`
  }
  return a
}
