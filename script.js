const csv = require('./lib.js')
const vorpal = require('vorpal')();

let log = (data) => vorpal.log('\r\n' + data)

//Test Function
vorpal
  .command('load [string]', 'loads file".')
  .action((args,callback) => {
    vorpal.localStorage.setItem('data',load(args.string))
    callback()
  })

//Generate Function
  vorpal
    .command('select [recordIndex]', 'Selects records of data')
    .action((args,callback) => {
      let file = global.getItem('data')
      if(args.recordIndex){
        log(csv.record(file,args.recordIndex))
        callback()
      } else {
        log(csv.records(file))
        callback()
      }
    })

    //Another Function
  vorpal
    .command('view [string]', 'view file data')
    .action((args,callback) => {
      vorpal.log(vorpal.localStorage.getItem('data'))
      callback()
    })

//Another Function
  vorpal
    .command('adder [numbers...]', 'Adds numbers together')
    .action((args,callback) => f.adder(args,callback))

    //Main Menu
  vorpal
  .delimiter('csv-editor >>')
  .show();

let load = (args) => {
   file = csv.load(args.string,(data) => data)
      return file
}


