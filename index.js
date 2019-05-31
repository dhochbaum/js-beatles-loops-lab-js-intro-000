// add solution here
function theBeatlesPlay(musicians, instruments) {
  var a = []

  for (let i = 0; i < musicians.length; i++) {
    a[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return a
}
