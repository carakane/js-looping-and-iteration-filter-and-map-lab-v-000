// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let x = drivers.filter(driver => driver.revenue > revenue)
  console.log(x)
  let y = x.filter(driver => driver.name)
  console.log(y)
}

function exactMatch() {

}

function exactMatchToList() {

}
