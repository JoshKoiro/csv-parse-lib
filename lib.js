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
Obj.save = (filename,db) => {
    fs.writeFile(filename,db,(err) => {
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

//Make an array report numbered (For user selection later)
Obj.renderArray = (array) => {
    return array.reduce((sum,e,i) => {
        return sum + '\r\n' + i + " - " +'['+ e + ']'
    },"")
}

//Add a record (row)
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

//Add multiple records (rows)
Obj.addRecords = (db,recordArray) => {
    let output = db + recordArray.reduce((sum,e,i) => {
        return Obj.addRecord(sum,e)
    },"")
    return output
}

//remove a record (row)
Obj.removeRecord = (db,index) => {
    db = db.splice(index,1)
    return db
}

//Add a column (header)
Obj.addColumn = (db,columnName) => {
    let records = Obj.records(db).reduce((sum,e,i) => {
        return sum + '\r\n' + e
    },"")
    let headers = Obj.headers(db).reduce((sum,e,i) => {
        return sum + "," + e
    }) + "," + columnName
    return headers + records
}

//Search array
Obj.search = (data,searchTerm) => {
    return Obj.records(data).map((e,i) => e.toString()).filter((e) => e.toUpperCase().indexOf(searchTerm.toUpperCase()) > -1)
}

// //Search Specific Column
// Obj.searchCol = (db,column,searchTerm) => {
//     return Obj.search(Obj.column(dataObj,column),searchTerm)
// }

//------------------------------------------------------

//Test Functions
// let run = (data) => {
//     let output =data
//     console.log(output)
// }

// Obj.load('./test.csv',run)

//----------------------------------------------------

module.exports = Obj