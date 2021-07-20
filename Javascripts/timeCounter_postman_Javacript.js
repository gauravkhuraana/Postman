// This has code for how we can send a notification daily 
// using time related concepts in javascripts

let challenges = [
    ["Day 00: Pre-requisites", "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/documentation/1559645-07137a33-d3d9-4362-afef-16daca946e03"],
    ["Day 01: Fork a collection", "https://www.postman.com/postman/workspace/30-days-of-postman-for-developers/documentation/1559645-02f21db3-4424-4a4d-8bae-1b1fe1f75987"],
]

// calculate the days elapsed to determine which reminder to send and for how long
const moment = require('moment')
let startday = pm.response.json().args.set_start_day
let progression = moment().diff(moment(startday), 'days')
let totalChallengesIndex = 31

if (progression <= totalChallengesIndex) {
    pm.test("daily challenge reminder", function() {
        // write a failing test to trigger a monitor notification
        pm.expect(true).to.be.false
    })
    console.log(`It's time to do the challenge for ${challenges[progression][0]} - good luck! ${challenges[progression][1]}`)
} else {
    pm.test("30 days have elapsed", function() {
        // write a passing test so no notifications are triggered
        pm.expect(true).to.be.true
    })
    console.log("Remember to pause the monitor after 30 days")
}