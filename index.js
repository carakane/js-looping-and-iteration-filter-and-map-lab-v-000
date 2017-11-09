// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let x = drivers.filter(driver => driver.revenue > revenue)
  return x.filter(driver => driver.name)
}

function exactMatch() {

}

function exactMatchToList() {

}
