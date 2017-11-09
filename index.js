// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

function exactMatch(drivers, varObj) {
  console.log(varObj)
  
  return drivers.filter(driver => driver[varObj[0]] === varObj[1])
}

function exactMatchToList() {

}
