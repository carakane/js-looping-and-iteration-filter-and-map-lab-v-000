// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}

function exactMatch(drivers, varObj) {
  console.log(Object.keys(varObj)[0])
  console.log(Object.values(varObj))
  console.log(drivers)

  return drivers.filter(driver => driver[Object.keys(varObj)] === Object.values(varObj))
}

function exactMatchToList() {

}
