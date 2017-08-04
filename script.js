const csv = require('./lib.js')
const vorpal = require('vorpal')();

//Test Function
vorpal
  .command('load [string]', 'loads file".')
  .action((args,callback) => () => {
      csv.run(args.string,run)
      callback()
})

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

let run = (file,data) => {
   let output = csv.load(file)
    console.log(output)
}


