
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

// const findMatching = (driver, string) => {
//  return driver.filter(name => name.includes(string))
// }

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(array, string) {
    return array.filter(function(el) {
        return el.toLowerCase().indexOf(string.toLowerCase())!== -1
    })
}

// function fuzzyMatch(array, string) {
//   return array.filter(name => name.includes(string));
// }

function fuzzyMatch(array, string){
  return array.filter(function(el) {
      return el.startsWith(string)
  })
}

function matchName(drivers, name){
  return drivers.filter(function(hometown){
    return hometown.name === name
  })
}