// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue).map(driver => driver.name)
}
function driverNamesWithRevenueOver(drivers, revenue) {
  const x = drivers.filter(driver => driver.revenue > revenue)
  return x.map(driver => driver.name)
}


function exactMatch() {

}

function exactMatchToList() {

}
