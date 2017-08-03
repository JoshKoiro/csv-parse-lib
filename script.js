const csv = require('./lib.js')

let run = (db,data) => {
    let output = csv.addRecord(db,['test','this'])
    console.log(output)
}

csv.load('./test.csv',run)
