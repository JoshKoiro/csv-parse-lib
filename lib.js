const fs = require('fs')

let Obj = {}

//Method to load file
Obj.load = (file,callback) => {
fs.readFile(file,'utf-8',(err,data) => {
    if(err){
        console.log(err)
    } else {
        callback(data)
    }
})
}

//Method to save file
Obj.save = (file,db) => {
    fs.writeFile(file,db,(err) => {
        if(err){
            console.log(err)
        } else {
            console.log('saved!')
        }
    }) 
}

//Get headers (columns)
Obj.headers = (table) => {
    return table.split('\r\n')[0].split(',')
}

//Get all records
Obj.records = (table) => {
    return table.trim().split('\r\n').slice(1).map((e,i) => e.split(','))
}

//Get particular record
Obj.record = (table,record) => {
    return table.trim().split('\r\n').slice(1).map((e,i) => e.split(','))[record]
}

Obj.addRecord = (db,inputArray) => {
    let output = inputArray.reduce((db,e,i) => {
        if(i === 0){
            return db = db + e
        } else {
            return db = db + ',' + e
        }
    },db)
    return output + '\r\n'
}

Obj.addRecords = (db,recordArray) => {
    let output = db + recordArray.reduce((sum,e,i) => {
        return Obj.addRecord(sum,e)
    },"")
    return output
}


let run = (data) => {
    let output = Obj.addRecords(data,[['this','is','another','test'],['this','is','so','cool']])
    console.log(output)
}

Obj.load('./test.csv',run)

module.exports = Obj