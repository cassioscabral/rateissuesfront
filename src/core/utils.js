/*
  concatanate all the strings passed as parameters
  classes(a, b, c) -> 'classA classB classC'
*/
export const classes = (...classes) => {
  let className = ''
  classes.forEach(klass => className += `${klass} `)
  return className.trim()
}
