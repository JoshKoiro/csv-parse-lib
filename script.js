const csv = require('./lib.js')
const vorpal = require('vorpal')();

//Test Function
vorpal
  .command('load [string]', 'loads file".')
  .action((args,callback) => csv.load(args.string,run))

//Generate Function
  vorpal
    .command('generate [string]', 'Outputs "outputs argument".')
    .action((args,callback) => f.generate(args,callback))

//Another Function
  vorpal
    .command('adder [numbers...]', 'Adds numbers together')
    .action((args,callback) => f.adder(args,callback))

    //Main Menu
  vorpal
  .delimiter('csv-editor >>')
  .show();

let run = (db,data) => {
    let output = csv.renderArray(csv.records(csv.addRecord(db,['test','this'])))
    console.log(output)
}


